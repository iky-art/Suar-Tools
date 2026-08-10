import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const ANCHOR_LINKS = [
  { href: '#produk', label: 'Produk' },
  { href: '#demo', label: 'Demo' },
  { href: '#mulai', label: 'Mulai Pakai' },
  { href: '#roadmap', label: 'Unduh' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#top" className="brand">
          <span className="brand-dot" />
          Suar
        </a>

        <nav className="nav-links">
          {ANCHOR_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <Link to="/dokumentasi">Dokumentasi</Link>
        </nav>

        <a href="#mulai" className="btn btn-primary nav-cta">Coba Lentera</a>

        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Buka menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          {ANCHOR_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <Link to="/dokumentasi" onClick={() => setOpen(false)}>Dokumentasi</Link>
          <a href="#mulai" className="btn btn-primary" onClick={() => setOpen(false)}>Coba Lentera</a>
        </nav>
      )}
    </header>
  )
}
