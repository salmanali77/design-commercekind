import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { servicesList } from '../../data/servicesData'
import logo from '../../assets/website-logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const timeoutRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 200)
  }

  const half = Math.ceil(servicesList.length / 2)
  const leftCol = servicesList.slice(0, half)
  const rightCol = servicesList.slice(half)

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav-brand">
          <Link
            to="/"
            onClick={() => {
              close()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <img src={logo} alt="CommerceKind" />
            <span>Commerce<b>Kind</b></span>
          </Link>
        </div>

        <nav className="nav-center">
          {/* Services with hover mega menu */}
          <div
            className={`services-nav-wrapper${servicesOpen ? ' is-open' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/services/amazon-ppc-management"
              className={`services-nav-link ${location.pathname.startsWith('/services') || servicesList.some(s => location.pathname === '/' + s.id) ? 'active-link' : ''}`}
              onClick={() => setServicesOpen(v => !v)}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '4px', display: 'inline-block' }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>

            <div
              className="services-mega-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="services-mega-card">
                <div className="services-mega-grid">
                  <div className="services-col">
                    {leftCol.map(s => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className={`services-mega-item ${location.pathname === `/services/${s.id}` || location.pathname === `/${s.id}` ? 'active' : ''}`}
                        onClick={close}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                  <div className="services-col">
                    {rightCol.map(s => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className={`services-mega-item ${location.pathname === `/services/${s.id}` || location.pathname === `/${s.id}` ? 'active' : ''}`}
                        onClick={close}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link 
            to="/for-agencies" 
            className={location.pathname === '/for-agencies' ? 'active-link' : ''}
            onClick={close}
          >
            For Agencies
          </Link>
          <Link 
            to="/results" 
            className={location.pathname === '/results' ? 'active-link' : ''}
            onClick={close}
          >
            Results
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active-link' : ''}
            onClick={close}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active-link' : ''}
            onClick={close}
          >
            Contact
          </Link>
        </nav>

        <div className="nav-right">
          <Link className="btn-outline" to="/contact">Book a Call</Link>
          <Link className="btn-solid" to="/contact">Free Audit &rarr;</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-hamburger"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: '#fff',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          padding: '16px 24px 120px',
          zIndex: 50,
          maxHeight: '100vh',
          overflowY: 'auto',
        }}>
          <button
            onClick={() => setMobileServicesOpen(v => !v)}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', fontSize: '17px', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', color: '#0b1722', textAlign: 'left' }}
          >
            Services
          </button>
          {mobileServicesOpen && (
            <div style={{ paddingLeft: '14px', borderLeft: '2px solid var(--teal)', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px', marginBottom: '10px' }}>
              {servicesList.map(s => (
                <Link key={s.id} to={`/services/${s.id}`} onClick={close} style={{ fontSize: '14px', fontWeight: 650, color: '#48575f', padding: '6px 0', textDecoration: 'none' }}>
                  {s.title}
                </Link>
              ))}
            </div>
          )}
          <Link to="/for-agencies" onClick={close} style={{ display: 'block', padding: '12px 0', fontSize: '17px', fontWeight: 650, color: location.pathname === '/for-agencies' ? 'var(--teal)' : '#0b1722', borderBottom: '1px solid #f3f4f6', textDecoration: 'none' }}>For Agencies</Link>
          <Link to="/results" onClick={close} style={{ display: 'block', padding: '12px 0', fontSize: '17px', fontWeight: 650, color: location.pathname === '/results' ? 'var(--teal)' : '#0b1722', borderBottom: '1px solid #f3f4f6', textDecoration: 'none' }}>Results</Link>
          <Link to="/about" onClick={close} style={{ display: 'block', padding: '12px 0', fontSize: '17px', fontWeight: 650, color: location.pathname === '/about' ? 'var(--teal)' : '#0b1722', borderBottom: '1px solid #f3f4f6', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" onClick={close} style={{ display: 'block', padding: '12px 0', fontSize: '17px', fontWeight: 650, color: location.pathname === '/contact' ? 'var(--teal)' : '#0b1722', borderBottom: '1px solid #f3f4f6', textDecoration: 'none' }}>Contact</Link>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '28px' }}>
            <Link className="btn-outline" to="/contact" onClick={close} style={{ textAlign: 'center', padding: '12px' }}>Book a Call</Link>
            <Link className="btn-solid" to="/contact" onClick={close} style={{ textAlign: 'center', padding: '12px' }}>Free Audit &rarr;</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-center, .nav-right { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  )
}