import Navbar from '../components/Navbar.jsx'
import Splash from '../components/Splash.jsx'
import Hero from '../components/Hero.jsx'
import WhySuar from '../components/WhySuar.jsx'
import LenteraShowcase from '../components/LenteraShowcase.jsx'
import LiveDemo from '../components/LiveDemo.jsx'
import Compare from '../components/Compare.jsx'
import ApiReference from '../components/ApiReference.jsx'
import QuickStart from '../components/QuickStart.jsx'
import Roadmap from '../components/Roadmap.jsx'
import Changelog from '../components/Changelog.jsx'
import FAQ from '../components/FAQ.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Splash />
      <Navbar />
      <Hero />
      <WhySuar />
      <LenteraShowcase />
      <LiveDemo />
      <Compare />
      <ApiReference />
      <QuickStart />
      <Roadmap />
      <Changelog />
      <FAQ />
      <Footer />
    </>
  )
}
