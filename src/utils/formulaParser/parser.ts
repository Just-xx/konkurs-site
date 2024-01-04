import { Expression, Program, Statment, Identifier, NumberLiteral, BinaryExpression, FunctionCall } from "./ast";
import { Token, TokenType, tokenize } from "./lexer";

export class Parser {
  private tokens: Token[];

  private notEOF(): boolean {
    return this.at().type !== TokenType.EOF;
  }

  private at(): Token {
    return this.tokens[0];
  }

  private consume(): Token {
    return this.tokens.shift() as Token;
  }

  private expect(type: TokenType, message: string): Token {
    const prev = this.tokens.shift() as Token;
    if (!prev || prev.type !== type) {
      throw new Error(message);
    }
    return prev;
  }

  private parseStatment(): Statment {
    return this.parseExpression();
  }

  private parseExpression(): Expression {
    return this.parseAdditiveExpression();
  }

  // 10 + 20 - 10
  private parseAdditiveExpression(): Expression {

    let left = this.parseMultiplicative();

    while ((this.at().value === "+" || this.at().value === "-")) {
      const operator = this.consume().value;
      const right = this.parseMultiplicative();
      
      left  = {
        kind: "BinaryExpression",
        operator,
        left,
        right,
      } as BinaryExpression;
    }

    return left;
  }

  private parseMultiplicative(): Expression {

    let left = this.parseFunctionCall();

    while ((this.at().value === "/" || this.at().value === "*")) {
      const operator = this.consume().value;
      const right = this.parsePrimaryExpression();
      
      left  = {
        kind: "BinaryExpression",
        operator,
        left,
        right,
      } as BinaryExpression;
    }

    return left;
  }

  private parseFunctionCall(): Expression {
    const fnIdentifier = this.parsePrimaryExpression();

    if (this.at().type === TokenType.OpenParen) {
      this.consume(); // consume open paren
      const arg = this.parseExpression();
      this.expect(TokenType.CloseParen, "Expected close parenthesis"); // consume close paren
      return {
        kind: "FunctionCall",
        name: (fnIdentifier as Identifier).symbol,
        arg,
      } as FunctionCall;
    }

    return fnIdentifier;
  }

  private parsePrimaryExpression(): Expression {

    const tk = this.at().type;

    switch (tk) {
      case TokenType.Identifier:
        return { kind: "Identifier", symbol: this.consume().value } as Identifier;
      case TokenType.Number:
        return { kind: "NumberLiteral", value: parseFloat(this.consume().value) } as NumberLiteral;
      case TokenType.OpenParen:
        this.consume(); // consume open paren
        const expr = this.parseExpression();
        this.expect(TokenType.CloseParen, "Expected close parenthesis"); // consume close paren
        return expr;
      default:
        throw new Error("Error: Unexpected token " + this.at());
    }
  }

  

  public produceAST(sourceCode: string): Program {
    
    this.tokens = tokenize(sourceCode);

    const program: Program = {
      kind: "Program",
      body: [],
    }

    while (this.notEOF()) {
      program.body.push(this.parseStatment());
    }

    return program;
  } 
}