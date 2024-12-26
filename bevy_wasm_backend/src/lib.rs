use bevy::prelude::*;
use wasm_bindgen::prelude::*;
use web_sys::console;

macro_rules! console_log {
    ($($t:tt)*) => {
        console::log_1(&format!($($t)*).into());
    };
}

#[wasm_bindgen]
pub fn start() {
    App::new().add_systems(Update, hello_world).run();
}

fn hello_world() {
    console_log!("hello world!");
}
