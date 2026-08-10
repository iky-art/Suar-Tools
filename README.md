<p align="center">
  <img src="assets/logo.svg" alt="Suar" width="280">
</p>

<p align="center">
  Rumah untuk plugin dan tools coding buatan sendiri — mulai dari <b>Lentera</b>, console debug yang menjelaskan kemungkinan penyebab error, bukan cuma menampilkannya.
</p>

---

## Menjalankan di Termux / lokal

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

## Build untuk production

```bash
npm run build
```

Hasil build ada di folder `dist/`. Konfigurasi deploy ke Vercel sudah tersedia di `vercel.json`.

## Struktur Proyek

```
suar/
  assets/
    logo.svg            <- logo wordmark (dipakai di README ini)
  docs/                 <- semua dokumen dalam bentuk Markdown (mirror isi website)
  public/
    demo.html            <- demo interaktif Lentera (di-iframe di section Demo)
    downloads/
      lentera-vscode.zip  <- plugin VS Code siap install
      lentera-acode.zip   <- plugin Acode siap install
    favicon.svg
  src/
    components/          <- satu section = satu komponen (Navbar, Hero, WhySuar, dst.)
    pages/
      Home.jsx            <- halaman utama (satu halaman, semua section)
      DocsPage.jsx          <- halaman /dokumentasi, daftar dokumen lengkap
    data/
      docs.js               <- isi semua dokumen di DocsPage
    App.jsx                  <- routing (react-router-dom)
    main.jsx
    index.css                 <- termasuk fix tap-highlight & outline default browser
  index.html
  package.json
  vercel.json
```

## Bagian Website

| Section | Isi |
|---|---|
| Hero | Pengantar + animasi beacon |
| Kenapa Suar | Value proposition |
| Produk (Lentera) | Showcase fitur utama |
| Demo | Lentera asli, bisa dicoba langsung di halaman |
| Perbandingan | Lentera vs Eruda vs console bawaan |
| Dokumentasi | Referensi API singkat |
| Mulai Pakai | Snippet instalasi (script tag / npm) |
| Unduh Plugin | Tombol Install → download ZIP plugin VS Code & Acode |
| Changelog | Riwayat rilis |
| FAQ | Pertanyaan umum |

Dokumen lebih lengkap ada di folder [`docs/`](./docs/README.md) dan juga tampil sebagai halaman website di `/dokumentasi` (isinya dikelola di `src/data/docs.js`).

Tombol **Install** di section "Unduh Plugin" tidak langsung mendownload — muncul modal konfirmasi dulu yang mengarahkan ke `/dokumentasi`, dengan opsi "Tetap Unduh" kalau mau lanjut download tanpa baca dokumentasi dulu.

## Riwayat Versi Website

- **v1.1.0** — splash screen, ikon Lentera realistis, modal konfirmasi Install (beda alur VS Code & Acode), halaman Dokumentasi terpisah, halaman 404, LICENSE, meta Open Graph, `lentera.js` standalone
- **v1.0.0** — rilis awal (Hero, produk, demo, roadmap, dasar-dasar)

## Catatan

- Belum sempat `npm install` / build di sisi pembuat kode ini (sandbox tanpa akses internet) — jalankan `npm install` dulu sebelum `npm run dev`.
- Link Discord di CTA masih placeholder — ganti `href="#"` di `src/components/Footer.jsx` dengan link server Discord asli.
