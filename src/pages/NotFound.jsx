import { Link } from 'react-router-dom'
import LanternIcon from '../components/LanternIcon.jsx'
import '../components/LanternIcon.css'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound">
      <LanternIcon size={64} swinging lit={false} />
      <span className="notfound-code">404</span>
      <h1>Lenteranya belum nyampe sini</h1>
      <p>Halaman yang kamu cari nggak ketemu. Mungkin salah alamat, atau memang belum dibuat.</p>
      <Link to="/" className="btn btn-primary">Kembali ke Beranda</Link>
    </div>
  )
}
