import { OptionVal, OptionsGroup } from "../../types/Settings";
import { validateSettings } from "../../utils/validateSettings";

export class OptionHandler {
  static update(optionId: string, newVal: OptionVal, settings: OptionsGroup[], setter: Function) {
    let optIndex = -1;

    const optGroupIndex = settings.findIndex(group => {
      optIndex = group.findIndex(opt => opt.id === optionId);
      return optIndex !== -1;
    });

    if (optIndex === -1 || optGroupIndex === -1) return;

    const newSettings = Array.from(settings);
    newSettings[optGroupIndex][optIndex].value = newVal;

    setter(validateSettings(newSettings));
  }

  static getOption(optionId: string, settings: OptionsGroup[]) {
    let optIndex = -1;

    const optGroupIndex = settings.findIndex(group => {
      optIndex = group.findIndex(opt => opt.id === optionId);
      return optIndex !== -1;
    });

    if (optIndex === -1 || optGroupIndex === -1) return;

    return settings[optGroupIndex][optIndex];
  }
}
