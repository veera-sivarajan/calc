pub struct Stack {
    stack: Vec<char>,
}

impl Stack {
    pub fn new() -> Self {
        Stack { stack: Vec::new() }
    }

    pub fn length(&self) -> usize {
        self.stack.len()
    }

    pub fn pop(&mut self) -> Option<char> {
        self.stack.pop()
    }

    pub fn push(&mut self, value: char) {
        self.stack.push(value);
    }

    pub fn is_empty(&self) -> bool {
        self.stack.is_empty()
    }

    pub fn peek(&self) -> Option<&char> {
        self.stack.last()
    }
}
            
