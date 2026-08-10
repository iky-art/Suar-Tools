import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import LanternIcon from './LanternIcon.jsx'
import './LanternIcon.css'
import './LenteraShowcase.css'

const FEATURES = [
  'Deteksi pola error umum + saran perbaikan Bahasa Indonesia',
  'Tangkap console log, error runtime, dan network fetch',
  'Nyala merah otomatis begitu error terjadi',
  'Satu file, tanpa dependency, tinggal tempel',
]

export default function LenteraShowcase() {
  return (
    <section id="produk">
      <div className="section-head">
        <span className="eyebrow">Produk Andalan</span>
        <h2>Lentera</h2>
        <p>Console debug bikinan sendiri. Saat kode kamu error, Lentera nggak cuma nunjukin stack trace — dia nyorot kemungkinan penyebabnya.</p>
      </div>

      <motion.div
        className="product-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="product-visual">
          <LanternIcon size={80} swinging />
        </div>
        <div>
          <span className="product-tag">Tersedia</span>
          <h3>Lentera Console</h3>
          <p>Panel debug ringan yang bisa ditempel ke halaman apa pun. Bukan turunan Eruda — dibangun dari nol dengan pendekatan berbeda: menjelaskan, bukan cuma menampilkan.</p>
          <ul className="product-features">
            {FEATURES.map((f) => (
              <li key={f}><Check size={14} /> {f}</li>
            ))}
          </ul>
          <a className="btn btn-primary" href="#mulai">Coba Sekarang</a>
        </div>
      </motion.div>
    </section>
  )
}
