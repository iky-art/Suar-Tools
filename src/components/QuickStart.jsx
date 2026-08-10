import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import './QuickStart.css'

const SNIPPETS = {
  Script: `<script src="https://suar.vercel.app/lentera.js"></script>
<script>Lentera.init()</script>`,
  NPM: `npm install lentera-console

import { Lentera } from 'lentera-console'
Lentera.init()`,
}

export default function QuickStart() {
  const [tab, setTab] = useState('Script')
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(SNIPPETS[tab])
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section id="mulai">
      <div className="section-head">
        <span className="eyebrow">Mulai Pakai</span>
        <h2>Nyalain Lentera di halaman kamu</h2>
        <p>Dua cara pasang: langsung lewat script tag, atau lewat package manager kalau proyek kamu pakai bundler.</p>
      </div>

      <div className="code-card">
        <div className="code-tabs">
          {Object.keys(SNIPPETS).map((t) => (
            <button
              key={t}
              className={tab === t ? 'active' : ''}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
          <button className="copy-btn" onClick={copy}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Tersalin' : 'Salin'}
          </button>
        </div>
        <pre><code>{SNIPPETS[tab]}</code></pre>
      </div>
    </section>
  )
}
