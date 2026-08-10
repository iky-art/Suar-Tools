import { motion } from 'framer-motion'
import './LiveDemo.css'

export default function LiveDemo() {
  return (
    <section id="demo">
      <div className="section-head">
        <span className="eyebrow">Coba Langsung</span>
        <h2>Bukan cuma gambar, ini beneran jalan</h2>
        <p>Ini Lentera asli, ditempel di halaman ini lewat satu baris script. Klik salah satu tombol di dalam, lalu perhatikan lenteranya menyala.</p>
      </div>

      <motion.div
        className="device-frame"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="device-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="device-url">suar.vercel.app/demo</span>
        </div>
        <iframe
          src="/demo.html"
          title="Demo interaktif Lentera"
          loading="lazy"
        />
      </motion.div>
    </section>
  )
}
