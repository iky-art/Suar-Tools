import { motion, AnimatePresence } from 'framer-motion'
import { Download, X } from 'lucide-react'
import LanternIcon from './LanternIcon.jsx'
import './LanternIcon.css'
import './InstallModal.css'

export default function VscodeApologyModal({ open, onClose, file }) {
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
              <LanternIcon size={48} lit={false} />
            </div>

            <h3>Mohon maaf sebesar-besarnya</h3>
            <p>Untuk VS Code, plugin ini belum bisa dipublish ke Marketplace karena kesalahan saat pembuatan akun publisher. Tapi kamu tetap bisa pakai — download ZIP-nya dan install manual lewat "Install from VSIX".</p>

            <div className="modal-actions">
              <a
                href={file}
                download
                className="btn btn-primary modal-btn"
                onClick={onClose}
              >
                <Download size={15} /> Download ZIP
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
