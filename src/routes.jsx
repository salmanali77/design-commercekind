import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services/:serviceId" element={<ServicePage />} />
    </Routes>
  )
}

