import { Check, Minus } from 'lucide-react'
import './Compare.css'

const ROWS = [
  { label: 'Bisa lihat log & error di HP', lentera: true, eruda: true, native: false },
  { label: 'Jelasin kemungkinan penyebab error', lentera: true, eruda: false, native: false },
  { label: 'Saran perbaikan Bahasa Indonesia', lentera: true, eruda: false, native: false },
  { label: 'Nyala otomatis saat error muncul', lentera: true, eruda: false, native: false },
  { label: 'Tanpa dependency tambahan', lentera: true, eruda: true, native: true },
  { label: 'Tersedia sebagai plugin editor', lentera: true, eruda: false, native: false },
]

function Cell({ value }) {
  return value
    ? <Check size={16} className="yes" />
    : <Minus size={16} className="no" />
}

export default function Compare() {
  return (
    <section id="perbandingan">
      <div className="section-head">
        <span className="eyebrow">Perbandingan</span>
        <h2>Kenapa bukan cuma console bawaan</h2>
        <p>Bukan soal siapa lebih canggih — tapi soal apa yang benar-benar membantu waktu kamu lagi debugging.</p>
      </div>

      <div className="compare-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th></th>
              <th className="highlight">Lentera</th>
              <th>Eruda</th>
              <th>Console Bawaan</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.label}>
                <td>{r.label}</td>
                <td className="highlight"><Cell value={r.lentera} /></td>
                <td><Cell value={r.eruda} /></td>
                <td><Cell value={r.native} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
