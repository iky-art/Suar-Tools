# Memulai

Cara resmi memasang Lentera di halaman kamu, untuk sekarang, cuma satu.

## Lewat Script Tag

```html
<script src="https://suar-tools.vercel.app/lentera.js"></script>
<script>Lentera.init()</script>
```

Taruh sebelum tag `</body>` ditutup. Lentera akan langsung menyalakan tombol lentera di pojok kanan bawah halaman.

## Lewat Package Manager (Segera)

Package `lentera-console` di npm belum dipublish. Begitu tersedia, halaman ini akan diupdate.

## Setelah Terpasang

- Tombol lentera oranye muncul mengambang di pojok kanan bawah
- Klik untuk membuka panel
- Panel otomatis terbuka dan tombol berkedip merah begitu ada error
- Console log, error runtime, unhandled promise rejection, dan fetch/network otomatis tertangkap — tidak perlu setup tambahan
