mod lex;
use lex::lex;

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

fn main() {
    let input = get_input();
    let tokens = lex(&input);
    println!("Tokens: {:?}", tokens);
}
