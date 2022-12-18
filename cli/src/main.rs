use std::{
    io::{stdout, Write},
};

use core;

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
    loop {
        let input = get_input();
        match core::calculate(&input) {
            Err(msg) => eprintln!("Error: {msg}"),
            Ok(token) => println!("{}", token),
        }
    }
    // println!("Hello, world!");
}
