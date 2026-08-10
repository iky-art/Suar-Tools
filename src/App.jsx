import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DocsPage from './pages/DocsPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dokumentasi" element={<DocsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
