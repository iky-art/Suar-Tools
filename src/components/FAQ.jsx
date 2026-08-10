import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const QA = [
  {
    q: 'Apa bedanya Lentera dengan Eruda?',
    a: 'Eruda menampilkan console mobile secara umum. Lentera fokus menjelaskan kemungkinan penyebab error dalam Bahasa Indonesia, bukan cuma menampilkan log mentah — dan dibangun dari nol tanpa memakai kode Eruda.',
  },
  {
    q: 'Apakah Lentera gratis dipakai?',
    a: 'Ya. Lentera bisa ditempel langsung ke halaman apa pun tanpa biaya, tanpa akun.',
  },
  {
    q: 'Apakah plugin VS Code dan Acode sudah bisa dipakai?',
    a: 'Belum — keduanya masih dalam tahap pengembangan dan akan diumumkan di halaman ini begitu siap.',
  },
  {
    q: 'Bisa dipakai di proyek yang tidak pakai React?',
    a: 'Bisa. Lentera hanya butuh satu tag script, jadi bisa dipakai di HTML biasa, Vue, Svelte, atau framework apa pun.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq">
      <div className="section-head">
        <span className="eyebrow">Pertanyaan Umum</span>
        <h2>Yang sering ditanyakan</h2>
      </div>

      <div className="faq-list">
        {QA.map((item, i) => (
          <div key={item.q} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              {item.q}
              <ChevronDown
                size={18}
                style={{
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform .2s ease',
                }}
              />
            </button>
            {openIndex === i && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
