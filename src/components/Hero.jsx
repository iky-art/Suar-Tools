import { motion } from 'framer-motion'
import LanternIcon from './LanternIcon.jsx'
import './LanternIcon.css'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="beacon-sweep" />
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-lantern"
        >
          <LanternIcon size={72} swinging />
        </motion.div>

        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Suar · Rumah Plugin
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tempat berlabuh semua<br />alat bantu coding kami.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Suar adalah rumah untuk plugin dan tools yang kami bangun sendiri dari nol —
          dari console debug, sampai extension editor. Satu sinyal, banyak alat.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a className="btn btn-primary" href="#mulai">Mulai Pakai Lentera</a>
          <a className="btn btn-ghost" href="#roadmap">Lihat Roadmap</a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div><strong>0</strong><span>dependency di Lentera</span></div>
          <div className="divider" />
          <div><strong>1</strong><span>file, tempel &amp; jalan</span></div>
          <div className="divider" />
          <div><strong>ID</strong><span>penjelasan error Bahasa Indonesia</span></div>
        </motion.div>
      </div>
    </section>
  )
}
