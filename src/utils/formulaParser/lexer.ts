export enum TokenType {
  Number,
  Identifier,
  OpenParen,
  CloseParen,
  BinaryOperator,
  EOF,
}

export interface Token {
  value: string;
  type: TokenType;
}

function token(value: string = "", type: TokenType): Token {
  return { value, type };
}

function isNumber(char: string): boolean {
  return !isNaN(parseInt(char));
}

function isAlpha(char: string): boolean {
  return String(char).toLowerCase() !== String(char).toUpperCase();
}

function isSkipable(char: string): boolean {
  return char === " " || char === "\n" || char === "\t";
}

export function tokenize(sourceCode: string): Token[] {
  
  let tokens: Token[] = new Array();
  const src = sourceCode.split("");
  

  while (src.length > 0) {
    const char = src.shift();
    if (char === undefined) break;

    if (char === "(") {
      tokens.push(token(char, TokenType.OpenParen));
    } else if (char === ")") {
      tokens.push(token(char, TokenType.CloseParen));
    } else if (char === "+" || char === "-" || char === "*" || char === "/") {
      tokens.push(token(char, TokenType.BinaryOperator));
    } else {
      if (isAlpha(char)) {
        let identifier = char;
        while (src.length > 0 && isAlpha(src[0])) {
          identifier += src.shift();
        }
        tokens.push(token(identifier, TokenType.Identifier));
      } else if (isNumber(char)) {
        let number = char;
        while (src.length > 0 && isNumber(src[0])) {
          number += src.shift();
        }
        tokens.push(token(number, TokenType.Number));
      } else if (isSkipable(char)) {
        continue;
      }
      else {
        throw new Error("Error: Unexpected token " + char);
      }
    }
  }

  tokens.push(token("EOF", TokenType.EOF));
  return tokens;
}
