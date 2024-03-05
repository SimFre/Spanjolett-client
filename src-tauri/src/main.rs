// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu};

fn main() {
    // let tray_menu = SystemTrayMenu::new(); // insert the menu items here
    // let system_tray = SystemTray::new().with_menu(tray_menu);
    tauri::Builder::default()
        // .system_tray(system_tray)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
