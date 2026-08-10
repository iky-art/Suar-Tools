# Memulai

Ada dua cara memasang Lentera di halaman kamu.

## Lewat Script Tag

```html
<script src="https://suar.vercel.app/lentera.js"></script>
<script>Lentera.init()</script>
```

Taruh sebelum tag `</body>` ditutup. Lentera akan langsung menyalakan tombol lentera di pojok kanan bawah halaman.

## Lewat Package Manager

```bash
npm install lentera-console
```

```js
import { Lentera } from 'lentera-console'
Lentera.init()
```

## Setelah Terpasang

- Tombol lentera oranye muncul mengambang di pojok kanan bawah
- Klik untuk membuka panel
- Panel otomatis terbuka dan tombol berkedip merah begitu ada error
- Console log, error runtime, unhandled promise rejection, dan fetch/network otomatis tertangkap — tidak perlu setup tambahan
