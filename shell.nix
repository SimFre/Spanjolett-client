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
    vscodium.fhs
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
    #libsoup_2_4 
    webkitgtk_4_0
  (vscode-with-extensions.override {
    vscode = vscodium;
    vscodeExtensions = with vscode-extensions; [
      bbenoist.nix
      ms-python.python
      ms-azuretools.vscode-docker
      ms-vscode-remote.remote-ssh
    ] ++ pkgs.vscode-utils.extensionsFromVscodeMarketplace [
      {
        name = "remote-ssh-edit";
        publisher = "ms-vscode-remote";
        version = "0.47.2";
        sha256 = "1hp6gjh4xp2m1xlm1jsdzxw9d8frkiidhph6nvl24d0h8z34w49g";
      }
    ];
  })
    ];
   # programs.vscode.package = pkgs.vscodium.fhsWithPackages (ps: with ps; [ rustup zlib ]);
  # shellHook = "";
}

