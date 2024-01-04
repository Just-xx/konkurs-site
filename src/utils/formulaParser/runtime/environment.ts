import { FunctionValue, RuntimeValue } from "./values";

export default class Environment {
  private parent?: Environment;

  private variables: Map<string, RuntimeValue>;
  private functions: Map<string, FunctionValue>;

  

  constructor(parentEnv?: Environment) {
    this.parent = parentEnv;
    this.variables = new Map();
    this.functions = new Map();
  }

  public declareVariable(name: string, value: RuntimeValue): RuntimeValue {
    if (this.variables.has(name)) {
      throw new Error(`Variable ${name} already declared`);
    }

    this.variables.set(name, value);
    return value;
  }

  public hasVariable(name: string): boolean {
    if (this.variables.has(name)) {
      return true;
    }

    if (this.parent) {
      return this.parent.hasVariable(name);
    }

    return false;
  }

  public getVariable(name: string): RuntimeValue {
    if (this.variables.has(name)) {
      return this.variables.get(name) as RuntimeValue;
    }

    if (this.parent) {
      return this.parent.getVariable(name);
    }

    throw new Error(`Variable ${name} not declared`);
  }

  public declareFunction(name: string, value: FunctionValue): RuntimeValue {
    if (this.functions.has(name)) {
      throw new Error(`Function ${name} already declared`);
    }

    this.functions.set(name, value);
    return value;
  }

  public hasFunction(name: string): boolean {
    if (this.functions.has(name)) {
      return true;
    }

    if (this.parent) {
      return this.parent.hasFunction(name);
    }

    return false;
  }

  public getFunction(name: string): FunctionValue {
    if (this.functions.has(name)) {
      return this.functions.get(name) as FunctionValue;
    }

    if (this.parent) {
      return this.parent.getFunction(name);
    }

    throw new Error(`Function ${name} not declared`);
  }

}
