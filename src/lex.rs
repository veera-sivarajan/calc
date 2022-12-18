use std::cmp::Ordering;

#[derive(Debug, PartialEq, Eq, Copy, Clone)]
pub enum Op {
    Add,
    Subtract,
    Divide,
    Multiply,
}

impl PartialOrd for Op {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
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
    let mut chars = input.chars().peekable();
    while let Some(c) = chars.next() {
        let token = match c {
            ' ' => continue,
            '0'..='9' => {
                let mut number_str = String::new();
                number_str.push(c);
                while let Some(ch) = chars.peek() {
                    if ch.is_numeric() {
                        number_str.push(chars.next().unwrap());
                    } else {
                        break;
                    }
                };
                Token::Number(number_str.parse::<f64>().unwrap())
            }
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
