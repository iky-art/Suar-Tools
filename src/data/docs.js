export const DOC_CATEGORIES = [
  {
    category: 'Memulai',
    docs: [
      {
        slug: 'pengenalan',
        title: 'Pengenalan Lentera',
        body: [
          'Lentera adalah console debug yang dibangun dari nol. Bedanya dengan console biasa: Lentera mencoba menjelaskan kemungkinan penyebab error, bukan cuma menampilkan pesannya mentah-mentah.',
          'Lentera bisa dipakai dengan tiga cara: ditempel langsung di halaman web lewat script tag, dipasang lewat npm, atau lewat plugin editor (VS Code / Acode).',
        ],
      },
      {
        slug: 'instalasi-script-tag',
        title: 'Instalasi via Script Tag',
        body: [
          'Cara paling cepat untuk mencoba Lentera di halaman apa pun:',
          '<script src="https://suar.vercel.app/lentera.js"></script>\n<script>Lentera.init()</script>',
          'Taruh sebelum tag </body> ditutup.',
        ],
      },
      {
        slug: 'instalasi-npm',
        title: 'Instalasi via NPM',
        body: [
          'npm install lentera-console',
          "import { Lentera } from 'lentera-console'\nLentera.init()",
        ],
      },
      {
        slug: 'struktur-proyek-website',
        title: 'Struktur Proyek Website Suar',
        body: [
          'Website Suar dibangun dengan React + Vite. Setiap section punya komponen sendiri di src/components/. Halaman dokumentasi ini sendiri ada di src/pages/DocsPage.jsx.',
        ],
      },
    ],
  },
  {
    category: 'Lentera Console',
    docs: [
      {
        slug: 'cara-kerja',
        title: 'Cara Kerja Lentera',
        body: [
          'Lentera menangkap tiga sumber informasi: console.log/warn/error, error runtime (window.onerror), unhandled promise rejection, dan permintaan fetch.',
          'Tiap kali error tertangkap, pesannya dicocokkan ke kamus pola error. Kalau cocok, Lentera menampilkan kemungkinan penyebab dan saran perbaikan di bawah pesan aslinya.',
        ],
      },
      {
        slug: 'api-reference',
        title: 'Referensi API',
        body: [
          'Lentera.init() — menyalakan Lentera di halaman.',
          'Lentera.toggle(force?) — buka/tutup panel. true untuk paksa buka, false untuk paksa tutup.',
          "Lentera.switchTab(tab) — pindah tab: 'all', 'error', atau 'network'.",
        ],
      },
      {
        slug: 'kamus-penyebab-error',
        title: 'Kamus Penyebab Error',
        body: [
          'Beberapa pola yang dikenali: "is not a function", "Cannot read property of null/undefined", "Unexpected token", "Failed to fetch", "Unhandled promise rejection", "Maximum call stack", "Module not found", "is not defined".',
          'Daftar ini bisa terus bertambah — lihat halaman "Kamus Error Komunitas" di roadmap.',
        ],
      },
      {
        slug: 'kustomisasi-tema',
        title: 'Kustomisasi Tampilan',
        body: [
          'Warna Lentera memakai custom property CSS (--flame, --flame-hot, --signal, dll) di bagian atas file. Ubah nilainya untuk menyesuaikan dengan warna brand kamu sendiri.',
        ],
      },
      {
        slug: 'batasan',
        title: 'Batasan Lentera',
        body: [
          'Lentera adalah tools debug sisi klien — dia tidak menggantikan error tracking production seperti Sentry. Cocok dipakai saat development, atau sebagai bantuan cepat sebelum menyalakan tools yang lebih lengkap.',
        ],
      },
    ],
  },
  {
    category: 'Plugin VS Code',
    docs: [
      {
        slug: 'vscode-plugin',
        title: 'Instalasi Plugin VS Code',
        body: [
          'Extract lentera-vscode.zip, lalu jalankan:',
          'npm install -g @vscode/vsce\ncd lentera-vscode\nvsce package',
          'Di VS Code: Extensions → menu ... → Install from VSIX... → pilih file .vsix hasilnya.',
        ],
      },
      {
        slug: 'vscode-pakai',
        title: 'Cara Pakai di VS Code',
        body: [
          'Command Palette → "Lentera: Buka Panel". Panel akan tampil di sisi editor, berisi semua error yang terdeteksi VS Code di workspace kamu.',
          'Jalankan "Lentera: Scan File Aktif Sekarang" untuk memindai ulang secara manual.',
        ],
      },
      {
        slug: 'vscode-troubleshoot',
        title: 'Troubleshooting Plugin VS Code',
        body: [
          'Kalau panel tidak muncul: pastikan extension sudah aktif (cek di tab Extensions, statusnya "Enabled").',
          'Kalau tidak ada error yang muncul padahal ada error di kode: Lentera membaca diagnostics dari linter/compiler kamu (ESLint, TypeScript) — pastikan linter tersebut aktif di workspace kamu.',
        ],
      },
    ],
  },
  {
    category: 'Plugin Acode',
    docs: [
      {
        slug: 'acode-plugin',
        title: 'Instalasi Plugin Acode',
        body: [
          'Buka Acode → Settings → Plugins → Install from .zip → pilih lentera-acode.zip. Restart Acode kalau plugin belum langsung aktif.',
        ],
      },
      {
        slug: 'acode-pakai',
        title: 'Cara Pakai di Acode',
        body: [
          'Buka file kode apa saja. Kalau ada error, tombol lentera oranye di pojok kanan bawah akan berkedip. Ketuk untuk membuka panel penjelasan penyebabnya.',
        ],
      },
      {
        slug: 'acode-troubleshoot',
        title: 'Troubleshooting Plugin Acode',
        body: [
          'Acode Plugin API bisa berbeda antar versi. Kalau plugin gagal dimuat, cek dokumentasi resmi Acode Plugin Development untuk menyesuaikan nama API di www/main.js.',
        ],
      },
    ],
  },
  {
    category: 'Website Suar',
    docs: [
      {
        slug: 'deploy-vercel',
        title: 'Deploy ke Vercel',
        body: [
          'Proyek ini sudah punya vercel.json di root dengan buildCommand npm run build dan outputDirectory dist. Tinggal hubungkan repo ke Vercel, tidak perlu ubah konfigurasi tambahan.',
        ],
      },
      {
        slug: 'menambah-file-unduhan',
        title: 'Menambah File yang Bisa Diunduh',
        body: [
          'Taruh file baru di public/downloads/, lalu tambahkan entri baru di array ITEMS pada src/components/Roadmap.jsx dengan path filenya.',
        ],
      },
      {
        slug: 'aksesibilitas-fokus',
        title: 'Aksesibilitas: Fokus & Highlight',
        body: [
          'Highlight biru default browser (tap-highlight dan outline) sudah dimatikan secara global di src/index.css, digantikan :focus-visible custom supaya pengguna keyboard tetap bisa melihat elemen yang sedang fokus.',
        ],
      },
    ],
  },
  {
    category: 'Lainnya',
    docs: [
      {
        slug: 'perbandingan',
        title: 'Perbandingan dengan Alternatif',
        body: [
          'Lentera dibangun dari nol, bukan fork dari Eruda. Fokus utamanya adalah menjelaskan kemungkinan penyebab error dalam Bahasa Indonesia, sesuatu yang tidak dilakukan Eruda maupun console bawaan browser.',
        ],
      },
      {
        slug: 'faq',
        title: 'Pertanyaan Umum',
        body: [
          'Apakah Lentera gratis? Ya, tanpa biaya dan tanpa akun.',
          'Bisa dipakai tanpa React? Bisa — hanya butuh satu script tag, cocok untuk framework apa pun.',
        ],
      },
      {
        slug: 'changelog',
        title: 'Changelog',
        body: [
          'v0.1.0 — Rilis awal: console dasar, kamus penyebab error, plugin VS Code & Acode pertama, website Suar.',
        ],
      },
      {
        slug: 'kontribusi',
        title: 'Kontribusi',
        body: [
          'Pola error baru untuk kamus Lentera bisa diusulkan lewat komunitas. Detail cara kontribusi akan diumumkan setelah fitur "Kamus Error Komunitas" aktif.',
        ],
      },
      {
        slug: 'dukungan',
        title: 'Dukungan',
        body: [
          'Kalau menemukan bug atau ada pertanyaan, sampaikan lewat komunitas Discord yang tautannya ada di footer website.',
        ],
      },
    ],
  },
]
