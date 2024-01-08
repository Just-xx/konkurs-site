import { OptionsGroup, Option, Flags, SelectVal } from "../types/Settings";

export function hasFlag(option: Option, flag: Flags): boolean {
  if (option.flags && option.flags?.indexOf(flag) !== -1) return true;
  else return false;
}

export function validateSettings(settings: OptionsGroup[]): OptionsGroup[] {
  return validateMultipleGroupCondition(settings);
}

function validateMultipleGroupCondition(settings: OptionsGroup[]): OptionsGroup[] {

  const newSettings = settings;
  let multipleGroupCondition: boolean | Option = false;

  for (let group of newSettings) {

    for (let opt of group) {

      if (!multipleGroupCondition && hasFlag(opt, "MULTIPLE_GROUP_MAIN_CONDITION")) {
        multipleGroupCondition = opt;
        continue;
      }

      if (multipleGroupCondition && multipleGroupCondition.value) {
        opt.active = true;
      } else if (multipleGroupCondition && !multipleGroupCondition.value) {
        opt.active = false;
        if (opt.type === "toggle") opt.value = false;
      }
    }
  }

  return validateMainCondition(newSettings);
}

function validateMainCondition(settings: OptionsGroup[]): OptionsGroup[] {
  const newSettings = settings;

  for (let group of newSettings) {
    let mainConditionOpt: boolean | Option = false;

    for (let opt of group) {
      if (hasFlag(opt, "MAIN_CONDITION")) {
        mainConditionOpt = opt;
        continue;
      }

      if (mainConditionOpt && mainConditionOpt.value) {
        opt.active = true;
      } else if (mainConditionOpt && !mainConditionOpt.value) {
        opt.active = false;
        if (opt.type === "toggle") opt.value = false;
      }
    }
  }

  return validateEmptyness(newSettings);
}

function validateEmptyness(settings: OptionsGroup[]): OptionsGroup[] {
  const newSettings = Array.from(settings);

  for (let group of newSettings) {
    for (let opt of group) {
      if (hasFlag(opt, "NOT_EMPTY")) {
        if (
          opt.type === "select" &&
          Object.entries((opt.value as SelectVal | undefined)?.value || {}).length === 0
        ) {
          group.forEach((o, i) => {
            if (o.type === "toggle" && hasFlag(o, "MAIN_CONDITION")) o.value = false;
            group[i].active = false;
          });
          break;
        } else {
          const mainCoditionI = group.findIndex(o => hasFlag(o, "MAIN_CONDITION"));
          group[mainCoditionI].active = true;
          break;
        }
      }
    }
  }

  return newSettings;
}
