use std::cmp::Ordering;

#[derive(Debug, PartialEq, Eq, PartialOrd, Copy, Clone)]
pub enum Op {
    Add,
    Subtract,
    Divide,
    Multiply,
}

impl Ord for Op {
    fn cmp(&self, other: &Self) -> Ordering {
        match (self, other) {
            (Op::Add, Op::Add) => Ordering::Equal,
            (Op::Subtract, Op::Subtract) => Ordering::Equal,
            (Op::Divide, Op::Divide) => Ordering::Equal,
            (Op::Multiply, Op::Multiply) => Ordering::Equal,
            (Op::Add, Op::Subtract) => Ordering::Equal,
            (Op::Subtract, Op::Add) => Ordering::Equal,
            (Op::Divide, Op::Multiply) => Ordering::Equal,
            (Op::Multiply, Op::Divide) => Ordering::Equal,
            (Op::Add, Op::Divide) => Ordering::Less,
            (Op::Divide, Op::Add) => Ordering::Greater,
            (Op::Add, Op::Multiply) => Ordering::Less,
            (Op::Multiply, Op::Add) => Ordering::Greater,
            (Op::Subtract, Op::Divide) => Ordering::Less,
            (Op::Divide, Op::Subtract) => Ordering::Greater,
            (Op::Subtract, Op::Multiply) => Ordering::Less,
            (Op::Multiply, Op::Subtract) => Ordering::Greater,
        }
    }
}

#[derive(Debug)]
pub enum Token {
    Number(f64),
    Operation(Op),
    OpenParen,
    CloseParen,
}

pub fn lex(input: &str) -> Result<Vec<Token>, String> {
    let mut tokens = vec![];
    for c in input.chars() {
        let token = match c {
            ' ' => continue,
            '0'..='9' => Token::Number(c.to_digit(10).unwrap().into()),
            '+' => Token::Operation(Op::Add),
            '-' => Token::Operation(Op::Subtract),
            '*' => Token::Operation(Op::Multiply),
            '/' => Token::Operation(Op::Divide),
            '(' => Token::OpenParen,
            ')' => Token::CloseParen,
            _ => return Err(format!("Unexpected input: {c}")),
        };
        tokens.push(token);
    }
    Ok(tokens)
}
