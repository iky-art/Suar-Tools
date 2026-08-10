import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import InstallModal from './InstallModal.jsx'
import './Roadmap.css'

const ITEMS = [
  {
    status: 'Tersedia',
    tone: 'available',
    title: 'Lentera untuk VS Code',
    desc: 'Scan error otomatis di seluruh workspace, tampil sebagai panel penjelasan penyebab di samping editor.',
    file: '/downloads/lentera-vscode.zip',
    docSlug: 'vscode-plugin',
  },
  {
    status: 'Tersedia',
    tone: 'available',
    title: 'Lentera untuk Acode',
    desc: 'Versi ringan untuk ngoding dari HP — penjelasan error langsung di layar sentuh, tanpa perlu scroll panjang.',
    file: '/downloads/lentera-acode.zip',
    docSlug: 'acode-plugin',
  },
  {
    status: 'Direncanakan',
    tone: 'plan',
    title: 'Kamus Error Komunitas',
    desc: 'Pola error baru bisa disumbang komunitas supaya Lentera makin pintar mengenali penyebabnya.',
    file: null,
    docSlug: null,
  },
]

export default function Roadmap() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <section id="roadmap">
      <div className="section-head">
        <span className="eyebrow">Unduh Plugin</span>
        <h2>Lentera, langsung di editor kamu</h2>
        <p>Setiap ZIP berisi kode plugin siap pakai dan dokumen cara install/cara pakainya.</p>
      </div>

      <div className="roadmap-grid">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            className="roadmap-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className={`status ${item.tone}`}>{item.status}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            {item.file && (
              <button className="install-btn" onClick={() => setActiveItem(item)}>
                <Download size={14} /> Install
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <InstallModal
        open={!!activeItem}
        onClose={() => setActiveItem(null)}
        pluginName={activeItem?.title || ''}
        file={activeItem?.file}
        docSlug={activeItem?.docSlug}
      />
    </section>
  )
}
