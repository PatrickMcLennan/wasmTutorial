const rust = import("./wasm_library");

rust
  .then((wasm) => {
    wasm.create_stuff();
    wasm.run_alert("This is cool");
  })
  .catch((error) => console.error(error));
