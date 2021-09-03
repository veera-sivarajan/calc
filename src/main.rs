fn precedence(operator: &char) -> u32 {
    if *operator == '^' {
        3
    } else if *operator == '/' || *operator == '*' {
        2
    } else {
        1
    }
}

fn main() {
    let ch: char = 'c';
    println!{"Precedence: {}", precedence(&ch)};
}
