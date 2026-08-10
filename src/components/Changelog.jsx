import './Changelog.css'

const ENTRIES = [
  {
    version: 'v0.1.0',
    date: 'Rilis awal',
    changes: [
      'Console Lentera dasar: tangkap log, error, dan network',
      'Kamus penyebab error Bahasa Indonesia',
      'Plugin VS Code dan Acode pertama',
    ],
  },
]

export default function Changelog() {
  return (
    <section id="changelog">
      <div className="section-head">
        <span className="eyebrow">Riwayat Rilis</span>
        <h2>Changelog</h2>
      </div>

      <div className="changelog-list">
        {ENTRIES.map((e) => (
          <div key={e.version} className="changelog-item">
            <div className="changelog-meta">
              <span className="version">{e.version}</span>
              <span className="date">{e.date}</span>
            </div>
            <ul>
              {e.changes.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
