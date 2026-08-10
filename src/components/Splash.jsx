import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LanternIcon from './LanternIcon.jsx'
import './LanternIcon.css'
import './Splash.css'

export default function Splash() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LanternIcon size={56} swinging />
          </motion.div>
          <motion.span
            className="splash-word"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Suar
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
