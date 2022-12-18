mod utils;

use wasm_bindgen::prelude::*;
use core;
use std::str;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm!");
}

#[wasm_bindgen]
pub fn calculate(input: &str) -> String {
    match core::calculate(input) {
        Ok(token) => token.to_string(),
        Err(msg) => format!("Error: {msg}"),
    }
}
