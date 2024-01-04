export type ValueType = 'number' | 'function';

export interface RuntimeValue {
  type: ValueType;
}

export interface NumberValue extends RuntimeValue {
  type: 'number';
  value: number;
}

export interface FunctionValue extends RuntimeValue {
  type: 'function';
  value: Function;
}