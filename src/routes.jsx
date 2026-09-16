import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import ForAgenciesPage from './pages/ForAgenciesPage'
import ResultsPage from './pages/ResultsPage'
import AboutPage from './pages/AboutPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import { servicesList } from './data/servicesData'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/for-agencies" element={<ForAgenciesPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/about" element={<AboutPage />} />
      
      {/* Services routes */}
      <Route path="/services" element={<Navigate to="/services/amazon-ppc-management" replace />} />
      <Route path="/services/:serviceId" element={<ServicePage />} />

      {/* Direct service aliases (e.g. /amazon-ppc-management) */}
      {servicesList.map(s => (
        <Route 
          key={s.id} 
          path={`/${s.id}`} 
          element={<ServicePage forcedServiceId={s.id} />} 
        />
      ))}

      {/* Legal routes */}
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/terms-and-conditions" element={<TermsPage />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
