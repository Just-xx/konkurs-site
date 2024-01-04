
const TOKEN_TYPES = {
    NUMBER: 'NUMBER',
    OPERATOR: 'OPERATOR',
    PARENTHESIS: 'PARENTHESIS',
    COMMA: 'COMMA',
    WHITESPACE: 'WHITESPACE',
    IDENTIFIER: 'IDENTIFIER',
}


class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

function isAlpha(str) {
    return str.toUpperCase() !== str.toLowerCase();
}

function isNumeric(str) {
    return !isNaN(str);
}

export function tokenize(sourceCode) {

  const tokens = new Array();
  const src = sourceCode.split('');

  while (src.length > 0) {
    const char = src.shift();
    if (char === '(' || char === ')') {
      tokens.push(new Token(TOKEN_TYPES.PARENTHESIS, char));
    } else if (char === ',') {
      tokens.push(new Token(TOKEN_TYPES.COMMA, char));
    } else if (char === ' ' || char === '\t' || char === '\n') {
      tokens.push(new Token(TOKEN_TYPES.WHITESPACE, char));
    } else if (char === '+' || char === '-' || char === '*' || char === '/') {
      tokens.push(new Token(TOKEN_TYPES.OPERATOR, char));
    } else {
      if (isNumeric(char)) {
        let number = char;
        while (src.length > 0 && isNumeric(src[0])) {
          number += src.shift();
        }
        tokens.push(new Token(TOKEN_TYPES.NUMBER, number));
      } else if (isAlpha(char)) {
        let name = char;
        while (src.length > 0 && isAlpha(src[0])) {
          name += src.shift();
        }
        tokens.push(new Token(TOKEN_TYPES.IDENTIFIER, name));
      } else {
        console.log('Unexpected character: ' + char);
        break;
      }
    }
  }

  return tokens;
}


// AST - Abstract Syntax Tree
const NODE_TYPES = {
  BINARY_EXPR: 'BINARY_EXPR',
  UNARY_EXPR: 'UNARY_EXPR',
  CALL_EXPR: 'CALL_EXPR',
  IDENTIFIER: 'IDENTIFIER',
  NUMERIC_LITERAL: 'NUMERIC_LITERAL',
  PROGRAM: 'PROGRAM',
}

class Program {
  constructor(body) {
    this.kind = NODE_TYPES.PROGRAM;
    this.body = body;
  }
}

class BinaryExpr {
  constructor(left, operator, right) {
    this.kind = NODE_TYPES.BINARY_EXPR;
    this.left = left;
    this.right = right;
    this.operator = operator;
  }
}

class Identifier {
  constructor(name) {
    this.kind = NODE_TYPES.IDENTIFIER;
    this.name = name;
  }
}

class NumericLiteral {
  constructor(value) {
    this.kind = NODE_TYPES.NUMERIC_LITERAL;
    this.number = number;
  }
}

class CallExpr {
  constructor(call, args) {
    this.kind = NODE_TYPES.CALL_EXPR;
    this.call = call;
    this.args = args;
  }
}

// Parser
class Parser {
  constructor() {
    this.tokens = [];
  }

  produceAST(sourceCode) {
    this.tokens = tokenize(sourceCode);
    const ast = new Program([]);
    
    while (this.tokens.length > 0) {
      ast.body.push(this.parseExpression());
    }

    return ast;
  }
}

export function verifyFormula(formula) {

  const tokenizedFormula = tokenize(formula);
  console.log(tokenizedFormula);

}