import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Download, ExternalLink, X } from 'lucide-react'
import LanternIcon from './LanternIcon.jsx'
import './LanternIcon.css'
import './InstallModal.css'

export default function InstallModal({ open, onClose, pluginName, file, docSlug, kind, acodeUrl, onProceed }) {
  const isAcode = kind === 'acode'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}><X size={18} /></button>

            <div className="modal-lantern">
              <LanternIcon size={48} />
            </div>

            <h3>Ingin instal {pluginName}?</h3>
            <p>Baca dokumentasi dulu ya — biar tahu cara pasang dan cara pakainya sebelum instal.</p>

            <div className="modal-actions">
              <Link
                to={`/dokumentasi${docSlug ? `#${docSlug}` : ''}`}
                className="btn btn-primary modal-btn"
                onClick={onClose}
              >
                <BookOpen size={15} /> Baca Dokumentasi
              </Link>

              {isAcode ? (
                <a
                  href={acodeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost modal-btn"
                  onClick={onClose}
                >
                  <ExternalLink size={15} /> Buka di Acode
                </a>
              ) : (
                <button
                  className="btn btn-ghost modal-btn"
                  onClick={() => {
                    onClose()
                    onProceed?.()
                  }}
                >
                  <Download size={15} /> Tetap Unduh
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
