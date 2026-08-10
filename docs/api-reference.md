# Referensi API

Lentera sengaja dibuat kecil — cuma tiga method publik.

## `Lentera.init()`

Menyalakan Lentera di halaman. Dipanggil sekali setelah script dimuat. Otomatis memasang:
- Tombol trigger mengambang
- Panel (tersembunyi sampai dibuka)
- Intercept `console.log/warn/error`
- Listener `window.error` dan `unhandledrejection`
- Intercept `window.fetch` untuk tab Network

## `Lentera.toggle(force?)`

Membuka atau menutup panel.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `force` | `boolean` (opsional) | `true` paksa buka, `false` paksa tutup, kosongkan untuk toggle |

```js
Lentera.toggle()      // toggle
Lentera.toggle(true)  // paksa buka
Lentera.toggle(false) // paksa tutup
```

## `Lentera.switchTab(tab)`

Pindah tab pada panel yang sedang terbuka.

| Parameter | Tipe | Nilai valid |
|---|---|---|
| `tab` | `string` | `'all'`, `'error'`, `'network'` |

```js
Lentera.switchTab('error')
```
