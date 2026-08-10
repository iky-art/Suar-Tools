import { motion } from 'framer-motion'
import { FlameKindling, PackageX, Languages, ShieldCheck } from 'lucide-react'
import './WhySuar.css'

const REASONS = [
  {
    icon: FlameKindling,
    title: 'Dibangun dari nol',
    desc: 'Bukan fork atau tempelan dari tools lain. Setiap plugin di Suar punya pendekatan sendiri, disesuaikan cara kerja developer Indonesia.',
  },
  {
    icon: Languages,
    title: 'Bahasa Indonesia dulu',
    desc: 'Penjelasan error, dokumentasi, dan pesan di dalam tools ditulis dalam Bahasa Indonesia — bukan terjemahan asal dari Bahasa Inggris.',
  },
  {
    icon: PackageX,
    title: 'Minim ketergantungan',
    desc: 'Sebisa mungkin tanpa dependency berat. Tinggal tempel, langsung jalan — tanpa setup panjang atau akun berbayar.',
  },
  {
    icon: ShieldCheck,
    title: 'Dipakai sendiri dulu',
    desc: 'Setiap tools di sini kami pakai lebih dulu di proyek kami sendiri, baru dirapikan dan dibagikan lewat Suar.',
  },
]

export default function WhySuar() {
  return (
    <section id="kenapa">
      <div className="section-head">
        <span className="eyebrow">Kenapa Suar</span>
        <h2>Alat yang dibuat dari kebutuhan sendiri</h2>
        <p>Setiap tools di Suar lahir dari masalah yang kami temui sendiri saat ngoding — bukan sekadar ikut tren.</p>
      </div>

      <div className="why-grid">
        {REASONS.map((r, i) => (
          <motion.div
            key={r.title}
            className="why-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <r.icon size={20} strokeWidth={1.6} />
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
