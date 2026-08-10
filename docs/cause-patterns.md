# Kamus Penyebab Error

Lentera mencocokkan pesan error terhadap daftar pola berikut. Kalau cocok, Lentera menampilkan kemungkinan penyebab dan saran perbaikan dalam Bahasa Indonesia.

| Pola Pesan Error | Kemungkinan Penyebab |
|---|---|
| `is not a function` | Memanggil sesuatu yang bukan fungsi — salah ketik, belum diimport, atau ke-overwrite |
| `Cannot read property/properties of null/undefined` | Mengakses properti dari nilai yang belum ada |
| `Unexpected token` | Karakter salah tempat, sering di JSON tidak valid |
| `Failed to fetch` / `NetworkError` | Request network gagal — domain salah, tidak ada koneksi, atau CORS |
| `Unhandled promise rejection` | Promise gagal tanpa ditangani `.catch()` |
| `Maximum call stack` | Kemungkinan infinite recursion |
| `Module not found` / `Cannot find module` | Import mengarah ke file/package yang tidak ada |
| `is not defined` | Variabel/fungsi dipakai sebelum dideklarasikan, atau typo |
| `Expected semicolon` / `Declaration or statement expected` | Sintaks belum lengkap |

Daftar ini didefinisikan di `src/causes.js` (plugin VS Code & Acode) dan langsung di dalam script Lentera untuk versi web. Kontribusi pola baru bisa diajukan lewat komunitas (lihat roadmap "Kamus Error Komunitas" di website).
