import { SETTINGS } from "../../constants/SETTINGS";
import { useState, useEffect } from "react";
import { OptionsGroup, OptionVal, Option, Flags, SelectVal } from "../../types/Settings";
import { validateSettings } from "../../utils/validateSettings";
import { OptionHandler } from "./OptionHandler";

export function useSettingsCreator(tableCreator) {

  const [settings, setSettings] = useState<OptionsGroup[]>(SETTINGS as OptionsGroup[]);

  function appendFieldSelectsToSettings() {
    let fieldSelects = tableCreator.fields
      .filter(field => field.type.name === "number")
      .map(field => ({
        value: field.id,
        label: field.name,
      }));

    const newSettings = Array.from(settings);

    for (let groupI in newSettings) {
      for (let optI in newSettings[groupI]) {
        if (
          newSettings[groupI][optI].type === "select" &&
          newSettings[groupI][optI].flags &&
          newSettings[groupI][optI].flags?.indexOf("FILL_FIELDS") !== -1
        ) {
          newSettings[groupI][optI].selectOptions = fieldSelects;

          if (
            Object.entries(newSettings[groupI][optI].value).length === 0 ||
            fieldSelects.indexOf(newSettings[groupI][optI].value) === -1
          )
            newSettings[groupI][optI].value = fieldSelects[0];

          if (fieldSelects.length === 0) {
            newSettings[groupI][optI].value = {};
          }
        }
      }
    }

    setSettings(validateSettings(newSettings));
  }

  useEffect(appendFieldSelectsToSettings, [tableCreator.fields]);

  const updateOption = (optionId: string, newVal: OptionVal) => OptionHandler.update(optionId, newVal, settings, setSettings);
  const getOption = (optionId: string) => OptionHandler.getOption(optionId, settings);

  return {
    settings,
    updateOption,
    getOption,
  };
}
