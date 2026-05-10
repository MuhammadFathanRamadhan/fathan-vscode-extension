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

---

# Cara Install

## Opsi A — `.vsix` ada langsung di repo

1. Buka repo ini di GitHub.
2. Klik tombol hijau **Code** → **Download ZIP** (atau `git clone <url>`).
3. Extract ZIP.
4. Buka terminal di folder hasil extract, jalankan:
   ```bash
   code --install-extension my-vscode-extension-pack-0.0.1.vsix
   ```
5. Restart VS Code. Semua extension dalam pack akan auto-download dari Marketplace.

## Opsi B — `.vsix` dari GitHub Releases

1. Buka repo ini di GitHub.
2. Klik tab **Releases** (sidebar kanan, atau URL `/releases`).
3. Pilih release terbaru, klik file `.vsix` di section **Assets** untuk download.
4. Buka terminal di folder hasil download, jalankan:
   ```bash
   code --install-extension my-vscode-extension-pack-0.0.1.vsix
   ```
5. Restart VS Code. Extension auto-install.

## Alternatif: Install via UI VS Code (berlaku untuk A & B)

1. Buka VS Code.
2. Tab Extensions (`Ctrl+Shift+X`).
3. Klik ikon `...` pojok kanan atas panel Extensions.
4. Pilih **Install from VSIX...**.
5. Browse ke file `.vsix` yang sudah didownload.
6. Tunggu sampai semua extension dalam pack ter-install.

## Syarat

- VS Code terinstall, plus `code` CLI aktif (untuk install via terminal).
- Internet aktif (extension didownload dari Marketplace).

