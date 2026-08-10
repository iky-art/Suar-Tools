import './Footer.css'

export default function Footer() {
  return (
    <>
      <section className="cta-band">
        <h2>Ikuti perkembangan Lentera</h2>
        <p>Update plugin VS Code, Acode, dan tools baru diumumkan lebih dulu di komunitas kami.</p>
        <a className="btn btn-primary" href="#" target="_blank" rel="noreferrer">Gabung Discord</a>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-dot" />
            <span>Suar</span>
            <span className="footer-version">v1.1.0</span>
          </div>
          <nav className="footer-links">
            <a href="#produk">Produk</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#faq">FAQ</a>
          </nav>
          <p className="footer-copy">Dijaga nyalanya oleh Iky</p>
        </div>
      </footer>
    </>
  )
}
