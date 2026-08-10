# Plugin VS Code

Download: tombol **Install** di section "Unduh Plugin" pada website → `lentera-vscode.zip`.

## Install

1. Extract ZIP-nya, isinya folder `lentera-vscode/`
2. Jalankan:
   ```bash
   npm install -g @vscode/vsce
   cd lentera-vscode
   vsce package
   ```
3. Di VS Code: Extensions → menu **...** → **Install from VSIX...** → pilih file `.vsix` yang dihasilkan

## Pakai

1. Command Palette (Ctrl/Cmd+Shift+P) → **Lentera: Buka Panel**
2. Panel muncul di sisi editor, isinya semua error yang terdeteksi VS Code di workspace kamu + kemungkinan penyebabnya
3. Update otomatis tiap kali error berubah
4. **Lentera: Scan File Aktif Sekarang** untuk memindai ulang manual

## Cara Kerja

Extension membaca `vscode.languages.getDiagnostics()` — jadi Lentera menumpang di atas linter/compiler yang sudah kamu pakai (ESLint, TypeScript, dll), lalu menambahkan penjelasan penyebab di atas pesan errornya.
