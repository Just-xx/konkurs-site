import { createStore, set } from "idb-keyval";
import { useEffect, useState } from "react";
import { getRandomId } from "../utils/getRandomId";
import { SETTINGS } from "../constants/SETTINGS";

interface TableStoreObject {
  fields: TableField[];
  options: Option[];
  tableName: string;
  body: object[];
}

interface TableField {
  id: string;
  name: string;
  type: FieldType;
}

interface FieldType {
  text: string;
  name: "number" | "string" | "formula";
  color: string;
  backgroundColor: string;
}


interface Option {
  id: string;
  label: string;
  value: string | number | object | boolean;
  type: string;
  selectOptions?: { label: string; value: string | number }[];
  flags?: string[];
}

type OptionsGroup = Option[];

export function useTableCreator() {

  const [fields, setFields] = useState<TableField[]>([]);
  const [tableName, setTableName] = useState<string>("Tabela");
  const [settings, setSettings] = useState<OptionsGroup[]>(SETTINGS);

  function appendFieldSelectsToSettings() {

    const fieldSelects = fields.filter(field => field.type.name === "number").map(field => ({
      value: field.id,
      label: field.name,
    }));

    if (fieldSelects.length === 0) return;

    const newSettings = Array.from(settings);


    for (let groupI in newSettings) {
      for (let optI in newSettings[groupI]) {
        if (newSettings[groupI][optI].type === "select" && newSettings[groupI][optI].flags?.indexOf("FILL_FIELDS") !== -1) {
          newSettings[groupI][optI].selectOptions = fieldSelects;
          if (Object.entries(Object(newSettings[groupI][optI].value)).length === 0) {
            newSettings[groupI][optI].value = fieldSelects[0];
          }
        }
      }
    }

    setSettings(newSettings);
  }

  useEffect(appendFieldSelectsToSettings, [fields]);

  function updateOption(optionId: string, newVal: string | number | object) {
    let optIndex = -1;
    const optGroupIndex = settings.findIndex(group => {
      optIndex = group.findIndex(opt => opt.id === optionId);
      return optIndex !== -1;
    });

    if (optIndex === -1 || optGroupIndex === -1) return;

    const newSettings = Array.from(settings);
    newSettings[optGroupIndex][optIndex].value = newVal;

    setSettings(newSettings);
  }

  function getOption(optionId: string) {
    const opt = settings.flat().find(opt => opt.id === optionId);
    return opt;
  }

  function addField(fieldType: FieldType, name) {
    const newFieldsState: TableField[] = Array.from(fields);

    newFieldsState.push({
      type: fieldType,
      name,
      id: getRandomId(name),
    });

    setFields(newFieldsState);
  }

  function removeField(fieldId) {
    setFields(fields.filter(field => field.id !== fieldId));
  }

  function saveToIDB() {
    const tableStoreObject: TableStoreObject = {
      fields,
      options: settings.flat(),
      tableName,
      body: [],
    };

    const tableId = getRandomId(tableName);

    const tablesStore = createStore("tables-db", "tables");
    set(tableId, tableStoreObject, tablesStore).then(() => {});
  }

  return {
    fields,
    setFields,
    addField,
    removeField,
    settings,
    updateOption,
    getOption,
    saveToIDB,
  };
}
