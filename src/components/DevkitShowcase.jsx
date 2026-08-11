import { useState } from 'react'
import { motion } from 'framer-motion'
import { ListChecks } from 'lucide-react'
import DevkitModal from './DevkitModal.jsx'
import './LenteraShowcase.css'
import './DevkitShowcase.css'

const PREVIEW = ['JSON Formatter', 'Regex Tester', 'CSS Playground', 'JWT Decoder', 'Security Checklist']

export default function DevkitShowcase() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        className="product-card devkit-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="product-visual devkit-visual">
          <span className="devkit-soon-badge">Coming Soon</span>
        </div>
        <div>
          <span className="product-tag devkit-tag">Direncanakan</span>
          <h3>DevKit</h3>
          <p>Kumpulan tools coding, web, dan security dalam satu tempat — dari JSON formatter sampai security analyzer. Masih tahap perencanaan.</p>
          <ul className="product-features">
            {PREVIEW.map((f) => (
              <li key={f}>· {f}</li>
            ))}
            <li className="devkit-more">...dan puluhan tools lainnya</li>
          </ul>
          <button className="btn btn-ghost" onClick={() => setOpen(true)}>
            <ListChecks size={15} style={{ marginRight: 6, verticalAlign: '-2px' }} />
            Lihat Rencana Fitur
          </button>
        </div>
      </motion.div>

      <DevkitModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
