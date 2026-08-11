import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import InstallModal from './InstallModal.jsx'
import VscodeApologyModal from './VscodeApologyModal.jsx'
import DevkitModal from './DevkitModal.jsx'
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
    installs: null,
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
    installs: null,
  },
  {
    status: 'Direncanakan',
    tone: 'plan',
    title: 'DevKit',
    desc: 'Kumpulan tools coding, web, dan security dalam satu tempat — JSON formatter, playground, generator, sampai analyzer keamanan.',
    file: null,
    docSlug: null,
    kind: 'devkit',
    installs: [
      { label: 'Install untuk VS Code' },
      { label: 'Install untuk Acode' },
    ],
  },
]

export default function Roadmap() {
  const [activeItem, setActiveItem] = useState(null)
  const [showApology, setShowApology] = useState(false)
  const [showDevkit, setShowDevkit] = useState(false)

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

            {item.file && !item.installs && (
              <button className="install-btn" onClick={() => setActiveItem(item)}>
                <Download size={14} /> Install
              </button>
            )}

            {item.installs && (
              <div className="install-btn-group">
                {item.installs.map((opt) => (
                  <button
                    key={opt.label}
                    className="install-btn install-btn-secondary"
                    onClick={() => setShowDevkit(true)}
                  >
                    <Download size={14} /> {opt.label}
                  </button>
                ))}
              </div>
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

      <DevkitModal
        open={showDevkit}
        onClose={() => setShowDevkit(false)}
      />
    </section>
  )
}
