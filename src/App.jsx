import Header from './components/layout/Header'
import Footer from './components/layout/footer'
import HeroSection from './components/sections/HeroSection'
import LogoMarquee from './components/sections/LogoMarquee'
import ResultsSection from './components/sections/ResultsSection'
import OfficeSection from './components/sections/OfficeSection'
import AudiencesSection from './components/sections/AudiencesSection'
import CapabilitiesSection from './components/sections/CapabilitiesSection'
import TrustSection from './components/sections/TrustSection'
import ProcessSection from './components/sections/ProcessSection'
import FaqSection from './components/sections/FaqSection'
import ClosingSection from './components/sections/ClosingSection'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <LogoMarquee />
      <ResultsSection />
      <OfficeSection />
      <CapabilitiesSection />
      <AudiencesSection />
      <TrustSection />
      <ProcessSection />
      <FaqSection />
      <ClosingSection />
      <Footer />
    </>
  )
}

export default App
