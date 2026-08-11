import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ListChecks, ArrowLeft } from 'lucide-react'
import LanternIcon from './LanternIcon.jsx'
import './LanternIcon.css'
import './InstallModal.css'
import './DevkitModal.css'

const FEATURES = [
  {
    icon: '🧩',
    title: 'Code Tools',
    items: [
      'JSON Formatter', 'JSON Validator', 'JSON Minifier', 'JSON → TypeScript', 'JSON → JavaScript',
      'HTML Formatter', 'CSS Formatter', 'JavaScript Formatter', 'SQL Formatter', 'Markdown Previewer',
      'Regex Tester', 'Text Diff Checker', 'Base64 Encoder / Decoder', 'URL Encoder / Decoder',
      'UUID Generator', 'Hash Generator', 'Timestamp Converter', 'Color Converter', 'Text Case Converter',
    ],
  },
  {
    icon: '🌐',
    title: 'Web Tools',
    items: [
      'HTML Playground', 'CSS Playground', 'JavaScript Playground', 'Live Web Preview',
      'Meta Tag Generator', 'Open Graph Generator', 'Favicon Generator', 'Sitemap Generator',
      'robots.txt Generator', 'QR Code Generator', 'URL Parser', 'MIME Type Lookup',
      'HTTP Status Code Reference', 'User-Agent Parser', 'Responsive Preview',
      'CSS Gradient Generator', 'CSS Box Shadow Generator', 'cURL Generator',
    ],
  },
  {
    icon: '🔐',
    title: 'Security Tools',
    subtitle: 'Fokus pada defensive security dan developer security.',
    items: [
      'Password Strength Checker', 'Secure Password Generator', 'SHA-256 Generator',
      'SHA-384 Generator', 'SHA-512 Generator', 'HMAC Generator', 'JWT Decoder / Inspector',
      'Security Headers Analyzer', 'CSP Builder', 'CORS Analyzer', 'URL Security Analyzer',
      'File Hash Checker', 'Encoding Inspector', 'Input Sanitization Playground', 'Security Checklist',
    ],
  },
]

export default function DevkitModal({ open, onClose }) {
  const [showFeatures, setShowFeatures] = useState(false)

  const handleClose = () => {
    onClose()
    setTimeout(() => setShowFeatures(false), 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className={`modal-card ${showFeatures ? 'devkit-wide' : ''}`}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleClose}><X size={18} /></button>

            {!showFeatures ? (
              <>
                <div className="modal-lantern">
                  <LanternIcon size={48} lit={false} />
                </div>
                <h3>DevKit belum tersedia</h3>
                <p>Masih dalam tahap perencanaan — belum ada yang bisa diinstal sekarang. Tapi daftar fiturnya udah dirancang, boleh diintip dulu.</p>
                <div className="modal-actions">
                  <button className="btn btn-primary modal-btn" onClick={() => setShowFeatures(true)}>
                    <ListChecks size={15} /> Lihat Rencana Fitur
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="devkit-back" onClick={() => setShowFeatures(false)}>
                  <ArrowLeft size={14} /> Kembali
                </button>
                <h3 className="devkit-features-title">Rencana Fitur DevKit</h3>
                <div className="devkit-features-list">
                  {FEATURES.map((cat) => (
                    <div key={cat.title} className="devkit-category">
                      <div className="devkit-category-head">
                        <span>{cat.icon}</span>
                        <h4>{cat.title}</h4>
                      </div>
                      {cat.subtitle && <p className="devkit-subtitle">{cat.subtitle}</p>}
                      <ul>
                        {cat.items.map((it) => <li key={it}>{it}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
