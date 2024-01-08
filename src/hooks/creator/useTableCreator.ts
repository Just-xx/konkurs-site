import { createStore, set } from "idb-keyval";
import { useState } from "react";
import { getRandomId } from "../../utils/getRandomId";
import { Option } from "../../types/Settings";
import { TableField, FieldType, TableStoreObject } from "../../types/Table";
import { TablesStore } from "../../utils/idbs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export function useTableCreator() {

  const [fields, setFields] = useState<TableField[]>([]);
  const [tableName, setTableName] = useState<string>("Tabela");
  const tableId = getRandomId('t');
  const naviagte = useNavigate();

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

  function saveToIDB(settings) {
    
    const tableStoreObject: TableStoreObject = {
      fields,
      options: settings.flat(),
      name: tableName,
      body: [],
      state: "creating",
    };

    if (tableStoreObject.fields.length === 0) return toast.error("Tabela musi mieć przynajmniej jedno pole");

    set(tableId, tableStoreObject, TablesStore).then(() => naviagte(`/create/theme/${tableId}`));  
  }

  return {
    fields,
    setFields,
    addField,
    removeField,
    saveToIDB,
    tableId
  };
}
