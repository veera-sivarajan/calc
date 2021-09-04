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

fn infix_to_postfix(infix: &String) -> String {
    let mut stack = Vec::new();
    let mut result = String::from("");
    for letter in infix.chars() {
        if letter.is_digit(10) {
            result.push(letter);
        } else if letter == '(' {
            stack.push(letter);
        } else if letter == ')' {
            while *stack.last().unwrap() != '(' {
                result.push(stack.pop().unwrap());
            }
            stack.pop();
        } else if letter.is_whitespace() {
            continue;
        } else {
            while !stack.is_empty() &&
                precedence(&letter) <= precedence(stack.last().unwrap()) {
                result.push(stack.pop().unwrap());
            }
            stack.push(letter);
        }
    }
    while !stack.is_empty() {
        result.push(stack.pop().unwrap());
    }
    result
}
    

fn main() {
    let input = String::from("1 + 2");
    let postfix = infix_to_postfix(&input);
    println!{"Postfix: {}", postfix};
}
