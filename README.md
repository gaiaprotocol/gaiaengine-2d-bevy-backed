# gaiaengine-2d-bevy-backed

## Build
```
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen --out-dir ./out --target web ./target/wasm32-unknown-unknown/release/bevy_wasm_backend.wasm
```