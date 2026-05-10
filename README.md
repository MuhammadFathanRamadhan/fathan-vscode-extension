# My VS Code Extension Pack

Extension pack pribadi berisi semua extension VS Code favorit. Sekali install, semua extension dalam daftar `extensionPack` (di `package.json`) akan ikut terpasang.

## Install dari file `.vsix`

```bash
code --install-extension my-vscode-extension-pack-0.0.1.vsix
```

Atau via UI: VS Code → Extensions → `...` (top right) → **Install from VSIX...** → pilih file `.vsix`.

## Update daftar extension (regenerate)

Saat menambah/menghapus extension di mesin ini lalu ingin pack ikut diupdate:

```bash
# 1. Generate ulang daftar extensionPack dari extension yang sedang terinstall
node scripts/regen-pack.js

# 2. Naikkan version di package.json (mis. 0.0.1 -> 0.0.2)

# 3. Repack
npx @vscode/vsce package
```

Script `scripts/regen-pack.js` menjalankan `code --list-extensions` lalu menulis ulang field `extensionPack` di `package.json`.

## Build `.vsix`

```bash
npx @vscode/vsce package
```

Output: `my-vscode-extension-pack-<version>.vsix`.

## Publish ke Marketplace (opsional)

1. Buat publisher di https://marketplace.visualstudio.com/manage
2. Generate Personal Access Token (Azure DevOps, scope: Marketplace → Manage)
3. Login + publish:

```bash
npx @vscode/vsce login <publisher-name>
npx @vscode/vsce publish
```

Catatan: ganti field `publisher` di `package.json` dengan nama publisher resmi sebelum publish (saat ini `my-personal-pack` hanya untuk local install).
"# fathan-vscode-extension" 
