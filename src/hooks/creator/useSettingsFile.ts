import { OptionsGroup, OptionVal } from "../../types/Settings";
import { useEffect, useState } from "react";
import { validateSettings } from "../../utils/validateSettings";
import { set } from "idb-keyval";

let lastChange = '';

export function useSettingsFile(settingsFile: OptionsGroup[]) {

  const [settings, setSettings] = useState<OptionsGroup[]>(settingsFile);
  
  useEffect(() => setSettings(validateSettings(settings)), []);

  function updateOption(optionId: string, newVal: OptionVal) {
    let optIndex = -1;

    const optGroupIndex = settings.findIndex(group => {
      optIndex = group.findIndex(opt => opt.id === optionId);
      return optIndex !== -1;
    });

    if (optIndex === -1 || optGroupIndex === -1) return;

    const newSettings = Array.from(settings);
    newSettings[optGroupIndex][optIndex].value = newVal;

    
    lastChange = optionId;
    setSettings(validateSettings(newSettings));
  }

  function getOption(optionId: string) {
    let optIndex = -1;

    const optGroupIndex = settings.findIndex(group => {
      optIndex = group.findIndex(opt => opt.id === optionId);
      return optIndex !== -1;
    });

    if (optIndex === -1 || optGroupIndex === -1) return;

    return settings[optGroupIndex][optIndex];
  }

  return {
    settings,
    setSettings,
    updateOption,
    getOption,
    lastChange
  };
}
