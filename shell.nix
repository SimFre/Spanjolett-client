# Run with `nix-shell shell.nix`

# { config, lib, pkgs ? import <nixpkgs-unstable> {}, ... }:

let
  pkgs = import <nixpkgs> { };
in
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    pkg-config
    gobject-introspection
    cargo 
    cargo-tauri # Optional, Only needed if Tauri doesn't work through the traditional way.
    nodejs # Optional, this is for if you have a js frontend
    vscode.fhs
  ];

  buildInputs = with pkgs;[
    git
    at-spi2-atk
    atkmm
    cairo
    gdk-pixbuf
    glib
    gtk3
    harfbuzz
    librsvg
    libsoup_3
    pango
    webkitgtk_4_1
    openssl
    rustc
    libsoup_2_4 # for tauri v1
    webkitgtk_4_0 # for tauri v1
    ];
  # shellHook = "";
}

