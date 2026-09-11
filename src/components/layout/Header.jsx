import { useEffect, useState } from 'react'
import logo from '../assets/website-logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'} ${open ? 'bg-white shadow-md py-3' : ''}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 flex justify-between items-center">
        <div className="flex-shrink-0 flex items-center ml-[30px]">
          <a href="/" onClick={close} className="flex items-center gap-2">
            <img src={logo} alt="CommerceKind logo" className="h-8 w-auto" />
            <span className={`font-bold text-xl tracking-tight ${scrolled || open ? 'text-gray-900' : 'text-white'}`}>CommerceKind</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8" aria-label="Primary">
          <a href="#services" onClick={close} className={`text-sm font-medium hover:text-teal-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Services</a>
          <a href="#agencies" onClick={close} className={`text-sm font-medium hover:text-teal-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>For Agencies</a>
          <a href="#results" onClick={close} className={`text-sm font-medium hover:text-teal-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Results</a>
          <a href="#about" onClick={close} className={`text-sm font-medium hover:text-teal-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>About</a>
          <a href="#contact" onClick={close} className={`text-sm font-medium hover:text-teal-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4 mr-[50px]">
          <a className={`text-sm font-medium border rounded-full px-5 py-2.5 transition-colors ${scrolled ? 'border-gray-300 text-gray-700 hover:bg-gray-50' : 'border-gray-400 text-white hover:bg-white hover:text-gray-900'}`} href="#contact" onClick={close}>Book a Call</a>
          <a className="text-sm font-medium bg-teal-500 text-white rounded-full px-6 py-2.5 hover:bg-teal-600 transition-colors flex items-center gap-1" href="#free-audit" onClick={close}>
            Free Audit <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            className={`p-2 rounded-md ${scrolled || open ? 'text-gray-800' : 'text-white'}`}
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-6 flex flex-col gap-4 border-t border-gray-100 h-screen">
          <a href="#services" onClick={close} className="text-gray-800 font-medium text-lg block py-3 border-b border-gray-100">Services</a>
          <a href="#agencies" onClick={close} className="text-gray-800 font-medium text-lg block py-3 border-b border-gray-100">For Agencies</a>
          <a href="#results" onClick={close} className="text-gray-800 font-medium text-lg block py-3 border-b border-gray-100">Results</a>
          <a href="#about" onClick={close} className="text-gray-800 font-medium text-lg block py-3 border-b border-gray-100">About</a>
          <a href="#contact" onClick={close} className="text-gray-800 font-medium text-lg block py-3 border-b border-gray-100">Contact</a>
          <div className="flex flex-col gap-3 mt-4">
            <a className="text-center font-medium border border-gray-300 text-gray-800 rounded-full px-4 py-3" href="#contact" onClick={close}>Book a Call</a>
            <a className="text-center font-medium bg-teal-500 text-white rounded-full px-4 py-3" href="#free-audit" onClick={close}>
              Free Audit &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  )
}