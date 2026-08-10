import './ApiReference.css'

const METHODS = [
  {
    sig: 'Lentera.init()',
    desc: 'Menyalakan Lentera di halaman. Dipanggil sekali setelah script dimuat.',
  },
  {
    sig: 'Lentera.toggle(force?)',
    desc: 'Membuka atau menutup panel. Kirim true untuk paksa buka, false untuk paksa tutup, kosongkan untuk toggle.',
  },
  {
    sig: 'Lentera.switchTab(tab)',
    desc: "Pindah tab panel. Nilai tab: 'all', 'error', atau 'network'.",
  },
]

export default function ApiReference() {
  return (
    <section id="dokumentasi">
      <div className="section-head">
        <span className="eyebrow">Dokumentasi</span>
        <h2>Referensi API</h2>
        <p>Lentera sengaja dibuat kecil — cuma tiga method yang perlu kamu tahu.</p>
      </div>

      <div className="api-list">
        {METHODS.map((m) => (
          <div key={m.sig} className="api-item">
            <code>{m.sig}</code>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
