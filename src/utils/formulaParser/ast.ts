export type NodeType =
  | "Program"
  | "Identifier"
  | "BinaryExpression"
  | "NumberLiteral"
  | "FunctionCall";

export interface Statment {
  kind: NodeType;
}

export interface Expression extends Statment {}

export interface Program extends Statment {
  kind: "Program";
  body: Statment[];
}


export interface BinaryExpression extends Expression {
  kind: "BinaryExpression";
  operator: string;
  left: Expression;
  right: Expression;
}

export interface Identifier extends Expression {
  kind: "Identifier";
  symbol: string;
}

export interface NumberLiteral extends Expression {
  kind: "NumberLiteral";
  value: number;
}

export interface FunctionCall extends Expression {
  kind: "FunctionCall";
  name: string;
  arg: Expression;
}