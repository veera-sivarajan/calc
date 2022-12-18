mod lex;
use lex::{lex, Token, Op};
use std::collections::VecDeque;

use std::{
    io::{stdout, Write},
};

fn postfix(tokens: &[Token]) -> VecDeque<Token> {
    let mut queue = VecDeque::new();
    let mut stack = vec![];

    for token in tokens {
        match token {
            Token::Number(n) => queue.push_back(Token::Number(*n)),
            Token::OpenParen => stack.push(Token::OpenParen),
            Token::CloseParen => {
                while let Some(token) = stack.last() {
                    if let Token::OpenParen = token {
                        let _ = stack.pop();
                        break;
                    } else {
                        queue.push_back(stack.pop().unwrap());
                    }
                }
            }
            Token::Operation(op) => {
                if let Some(Token::Operation(last_op)) = stack.last() {
                    if op > last_op {
                        stack.push(Token::Operation(*op));
                    } else {
                        let tail_op = stack.pop().unwrap();
                        queue.push_back(tail_op);
                        stack.push(Token::Operation(*op));
                    }
                } else {
                    stack.push(Token::Operation(*op));
                }
            }
        }
    }

    while let Some(token) = stack.pop() {
        queue.push_back(token);
    }
    queue
}

fn evaluate(expr: &mut VecDeque<Token>) -> Result<Token, String> {
    let mut stack: Vec<Token> = vec![];
    while let Some(token) = expr.pop_front() {
        match token {
            Token::Number(_) => stack.push(token),
            Token::Operation(op) => {
                let Some(Token::Number(rhs)) = stack.pop() else {
                    return Err(String::from("Expected Number."));
                };
                let Some(Token::Number(lhs)) = stack.pop() else {
                    return Err(String::from("Expected Number."));
                };
                let output = match op {
                    Op::Add => Token::Number(rhs + lhs),
                    Op::Subtract => Token::Number(lhs - rhs),
                    Op::Multiply => Token::Number(lhs * rhs),
                    Op::Divide => Token::Number(lhs / rhs),
                };
                stack.push(output);
            }
            _ => return Err(String::from("Unexpected token.")),
        }
    }
    if stack.len() == 1 {
        Ok(stack.first().unwrap().clone())
    } else {
        Err(String::from("Unable to evaluate infix expression."))
    }
}

fn calculate(input: &str) -> Result<Token, String> {
    // let input = "3 + 4 * 2 / ( 1 - 5 )";
    let tokens = lex(input)?;
    let mut postfix = postfix(&tokens);
    evaluate(&mut postfix)
}
