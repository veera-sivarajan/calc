#[derive(Debug)]
pub enum Op {
    Divide,
    Multiply,
    Add,
    Subtract,
}

#[derive(Debug)]
pub enum Token {
    Number(f64),
    Operation(Op),
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
            _ => return Err(format!("Unexpected input: {c}")),
        };
        tokens.push(token);
    }
    Ok(tokens)
}
