import { Option } from "./Settings";

export interface TableStoreObject {
  fields: TableField[];
  options: Option[];
  name: string;
  body: object[];
  state: "creating" | "editing " | "approved";
  theme?: Option[];
  uploadedImg?: string;
}

export interface TableField {
  id: string;
  name: string;
  type: FieldType;
}

export interface FieldType {
  text: string;
  name: "number" | "string" | "formula";
  color: string;
  backgroundColor: string;
}