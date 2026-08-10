# Deploy

## Menjalankan Lokal / Termux

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Hasil ada di folder `dist/`.

## Deploy ke Vercel

Proyek ini sudah punya `vercel.json` di root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Tinggal hubungkan repo ke Vercel (atau `vercel deploy` lewat CLI), tidak perlu ubah konfigurasi tambahan. `rewrites` memastikan navigasi SPA (klik link, refresh halaman) tetap mengarah ke `index.html`, sementara file statis di `public/` (termasuk `demo.html` dan `downloads/*.zip`) tetap disajikan langsung.

## Menambah File yang Bisa Diunduh

Taruh file baru di `public/downloads/`, lalu tambahkan link `<a href="/downloads/nama-file.zip" download>` di komponen terkait (lihat `src/components/Roadmap.jsx` sebagai contoh).
