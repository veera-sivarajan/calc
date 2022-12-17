mod lex;
use lex::{lex, Token, Op};
use std::collections::VecDeque;

use std::{
    io::{stdout, Write},
};

fn get_input() -> String {
    let mut input = String::new();
    input.clear();
    print!("calc$ ");
    let _ = stdout().flush();
    let _ = std::io::stdin().read_line(&mut input).unwrap();
    let _ = input.pop();

    input
}

fn evaluate(tokens: &[Token]) -> VecDeque<Token> {
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

fn main() {
    let input = get_input();
    let tokens = lex(&input);
    let output = evaluate(&tokens.unwrap());
    println!("Ouput: {:?}", output);
}
