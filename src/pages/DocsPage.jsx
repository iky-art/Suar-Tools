import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Menu, X } from 'lucide-react'
import LanternIcon from '../components/LanternIcon.jsx'
import '../components/LanternIcon.css'
import { DOC_CATEGORIES } from '../data/docs.js'
import './DocsPage.css'

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [])

  const totalDocs = DOC_CATEGORIES.reduce((sum, c) => sum + c.docs.length, 0)

  return (
    <div className="docs-page">
      <header className="docs-topbar">
        <Link to="/" className="docs-brand">
          <LanternIcon size={26} />
          <span>Suar</span>
        </Link>
        <span className="docs-count">{totalDocs} dokumen</span>
        <Link to="/" className="docs-back">
          <ArrowLeft size={15} /> Kembali ke Beranda
        </Link>
        <button className="docs-menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <div className="docs-layout">
        <aside className={`docs-sidebar ${sidebarOpen ? 'open' : ''}`}>
          {DOC_CATEGORIES.map((cat) => (
            <div key={cat.category} className="docs-nav-group">
              <span className="docs-nav-label">{cat.category}</span>
              {cat.docs.map((d) => (
                <a
                  key={d.slug}
                  href={`#${d.slug}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  {d.title}
                </a>
              ))}
            </div>
          ))}
        </aside>

        <main className="docs-content">
          <div className="docs-intro">
            <span className="eyebrow">Dokumentasi</span>
            <h1>Semua yang perlu kamu tahu</h1>
            <p>Kumpulan dokumen tentang Lentera dan Suar — dari instalasi sampai troubleshooting.</p>
          </div>

          {DOC_CATEGORIES.map((cat) => (
            <div key={cat.category} className="docs-category">
              <h2 className="docs-category-title">{cat.category}</h2>
              {cat.docs.map((d) => (
                <article key={d.slug} id={d.slug} className="docs-article">
                  <h3>{d.title}</h3>
                  {d.body.map((p, i) =>
                    p.includes('\n') || p.startsWith('npm') || p.startsWith('<script') ? (
                      <pre key={i}><code>{p}</code></pre>
                    ) : (
                      <p key={i}>{p}</p>
                    )
                  )}
                </article>
              ))}
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}
