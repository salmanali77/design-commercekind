import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:serviceId" element={<ServicePage />} />
    </Routes>
  )
}
