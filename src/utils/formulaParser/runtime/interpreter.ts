import { NumberValue, RuntimeValue, ValueType } from './values'
import { BinaryExpression, Program, NodeType, NumberLiteral, Statment, Identifier, FunctionCall } from '../ast'
import Environment from './environment';

function evaluateProgram(program: Program, env: Environment): RuntimeValue {
  let lastEvaluated: RuntimeValue = { type: "number", value: 0 } as NumberValue;
  for (const statment of program.body) {
    lastEvaluated = evaluate(statment, env);
  }
  return lastEvaluated;
}

function evalNumericBinaryExpression(operator: string, left: NumberValue, right: NumberValue): RuntimeValue {
 
  let result = { type: "number", value: 0 } as NumberValue;
 
  switch (operator) {
    case "+":
      result = { type: "number", value: left.value + right.value } as NumberValue;
      break;
    case "-":
      result = { type: "number", value: left.value - right.value } as NumberValue;
      break;
    case "*":
      result = { type: "number", value: left.value * right.value } as NumberValue;
      break;
    case "/":
      // TOOD: Handle division by zero
      result = { type: "number", value: left.value / right.value } as NumberValue;
      break;
    default:
      throw new Error("Unknown operator");
  }

  return result;
}

function evaluateBinaryExpression(binop: BinaryExpression, env: Environment): RuntimeValue {

  const left = evaluate(binop.left, env);
  const right = evaluate(binop.right, env);

  if (left.type === "number" && right.type === "number") {
    return evalNumericBinaryExpression(binop.operator, left as NumberValue, right as NumberValue);
  } 

  return { type: "number", value: 0 } as NumberValue;
}

function evaluateIdentifier(identifier: Identifier, env: Environment): RuntimeValue {
  if (env.hasVariable(identifier.symbol)) {
    return env.getVariable(identifier.symbol);
  } else {
    throw new Error(`Variable ${identifier.symbol} not declared`);
  }
}

function evaluateFunctionCall(funcCall: FunctionCall, env: Environment): RuntimeValue {
  if (env.hasFunction(funcCall.name)) {

    const func: Function = env.getFunction(funcCall.name).value;
    const arg = evaluate(funcCall.arg, env) as NumberValue;

    return { type: "number", value: func(arg.value) } as NumberValue;
  }
  else {
    throw new Error(`Function ${funcCall.name} not declared`);
  }
}

export function evaluate(astNode: Statment, env: Environment): RuntimeValue {
  switch (astNode.kind) {
    case "NumberLiteral":
      return { value: (astNode as NumberLiteral).value, type: "number" } as NumberValue
    case "BinaryExpression":
      return evaluateBinaryExpression(astNode as BinaryExpression, env)
    case "Program":
      return evaluateProgram(astNode as Program, env)
    case "Identifier":
      return evaluateIdentifier(astNode as Identifier, env)
    case "FunctionCall":
      return evaluateFunctionCall(astNode as FunctionCall, env)
    default:
      return { type: "number", value: 0 } as NumberValue
  }
}