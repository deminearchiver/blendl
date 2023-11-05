use tauri::{Builder, generate_context, Manager, Runtime, Window, command, generate_handler};

mod bl;

fn main() {
  let app = Builder::default()
    .plugin(tauri_plugin_shell::init())
    .build(generate_context!())
    .expect("Failed to build app");

  app.run(|app_handle, event| {

  });
}
