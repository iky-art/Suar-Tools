import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import InstallModal from './InstallModal.jsx'
import VscodeApologyModal from './VscodeApologyModal.jsx'
import './Roadmap.css'

const ITEMS = [
  {
    status: 'Tersedia',
    tone: 'available',
    title: 'Lentera untuk VS Code',
    desc: 'Belum ada di Marketplace — bisa langsung dipakai lewat file ZIP (install manual via VSIX).',
    file: '/downloads/lentera-vscode.zip',
    docSlug: 'vscode-plugin',
    kind: 'vscode',
  },
  {
    status: 'Pending Review',
    tone: 'available',
    title: 'Lentera untuk Acode',
    desc: 'Sudah dipublish resmi ke Acode Plugin Store, masih menunggu proses review.',
    file: '/downloads/lentera-acode.zip',
    docSlug: 'acode-plugin',
    kind: 'acode',
    acodeUrl: 'https://acode.app/plugin/com.suartools.lentera',
  },
  {
    status: 'Direncanakan',
    tone: 'plan',
    title: 'Kamus Error Komunitas',
    desc: 'Pola error baru bisa disumbang komunitas supaya Lentera makin pintar mengenali penyebabnya.',
    file: null,
    docSlug: null,
    kind: null,
  },
]

export default function Roadmap() {
  const [activeItem, setActiveItem] = useState(null)
  const [showApology, setShowApology] = useState(false)

  return (
    <section id="roadmap">
      <div className="section-head">
        <span className="eyebrow">Unduh Plugin</span>
        <h2>Lentera, langsung di editor kamu</h2>
        <p>VS Code: install manual dari ZIP. Acode: sudah resmi, tinggal cari di dalam app begitu review selesai.</p>
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
        kind={activeItem?.kind}
        acodeUrl={activeItem?.acodeUrl}
        onProceed={() => {
          if (activeItem?.kind === 'vscode') setShowApology(true)
        }}
      />

      <VscodeApologyModal
        open={showApology}
        onClose={() => setShowApology(false)}
        file="/downloads/lentera-vscode.zip"
      />
    </section>
  )
}
