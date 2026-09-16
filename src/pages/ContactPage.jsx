import { useEffect } from 'react'
import ContactSection from '../components/sections/ContactSection'
import '../components/sections/contact.css'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact CommerceKind | Book a Free Amazon Strategy Call'
  }, [])

  return (
    <div className="contact-page-wrapper">
      {/* Dark Page Hero */}
      <section className="contact-page-hero">
        <div className="container">
          {/* <div className="eyebrow" style={{ color: 'var(--teal)' }}>
            Let's Talk
          </div> */}
          <h1>Book a Free Strategy Call.</h1>
          <p className="contact-hero-sub">
            Tell us about your Amazon business and what you're looking for. We'll review your account before the call
            and come prepared with real recommendations.
          </p>
          <div className="contact-hero-actions">
            <a className="btn btn-solid" href="mailto:hello@commercekind.com">
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form & Side Cards */}
      <ContactSection />
    </div>
  )
}
