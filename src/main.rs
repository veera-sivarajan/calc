mod stack;

pub use crate::stack::Stack;

fn precedence(operator: &char) -> i32 {
    if *operator == '^' {
        3
    } else if *operator == '/' || *operator == '*' {
        2
    } else if *operator == '+' || *operator == '-' {
        1
    } else {
        -1
    }
}

fn infix_to_postfix(infix: &String) {
    let mut stack: Stack = Stack::new();
}
    

fn main() {
    let input = String::from("1 + 2");
    infix_to_postfix(&input);
}
