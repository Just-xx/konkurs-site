export type Flags = "FILL_FIELDS" | "NOT_EMPTY" | "MAIN_CONDITION" | "MULTIPLE_GROUP_MAIN_CONDITION";

export type SelectVal = { label?: string; value?: string | number };
export type OptionVal = SelectVal | string | boolean;

export interface Option {
  active: boolean;
  id: string;
  label: string;
  value: OptionVal;
  type: string;
  selectOptions?: SelectVal[];
  flags?: Flags[];
  choice: string;
}

export type OptionsGroup = Option[];