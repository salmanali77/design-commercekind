import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy | CommerceKind'
  }, [])

  return (
    <div className="legal-page-wrapper">
      {/* Dark Legal Hero */}
      <section className="legal-hero">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="eyebrow" style={{ color: 'var(--teal)' }}>
            Legal
          </div>
          <h1>Privacy Policy</h1>
          <p className="legal-date">Last updated: March 2026</p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="legal-content-section">
        <div className="container legal-body">
          <h2>Who We Are</h2>
          <p>
            CommerceKind is a full-service Amazon growth agency headquartered in Jacksonville, Florida, USA, with
            operations in Lahore, Pakistan. We provide Amazon account management, PPC advertising, listing
            optimization, and related services to brands and agencies.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and protect information when you visit commercekind.com or
            contact us through any of our forms.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li>Name and email address (from contact and audit request forms)</li>
            <li>Company or brand name</li>
            <li>Amazon store URL or ASIN (for audit requests)</li>
            <li>Business information you choose to share (revenue range, ad spend, challenges)</li>
            <li>Messages and notes submitted through our forms</li>
          </ul>
          <p>
            We may also collect standard website usage data (browser type, pages visited, time on site) through
            analytics tools. We do not use cookies for advertising or tracking purposes.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your inquiry or audit request</li>
            <li>Schedule and prepare for strategy calls</li>
            <li>Deliver the Amazon audit report you requested</li>
            <li>Communicate about our services</li>
            <li>Improve our website and service quality</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>

          <h2>Data Storage and Security</h2>
          <p>
            Information submitted through our forms is stored securely and accessed only by authorized CommerceKind
            team members who need it to respond to your request. We take reasonable technical and organizational
            measures to protect your data from unauthorized access.
          </p>

          <h2>Third-Party Services</h2>
          <p>Our website may use the following third-party services:</p>
          <ul>
            <li>
              <strong>Analytics:</strong> To understand how visitors use our site. This data is aggregated and
              anonymized.
            </li>
            <li>
              <strong>Email delivery:</strong> To send you responses and requested reports.
            </li>
            <li>
              <strong>Scheduling tools:</strong> If you book a call through a scheduling link, that service has its own
              privacy policy.
            </li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of any marketing communications at any time</li>
          </ul>
          <p>
            To exercise any of these rights, email us directly at{' '}
            <a href="mailto:hello@commercekind.com">hello@commercekind.com</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website uses only essential cookies required for the site to function. We do not use cookies for
            advertising, retargeting, or cross-site tracking.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are intended for business owners and professionals. We do not knowingly collect personal
            information from anyone under the age of 18.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at
            the top of this page. Continued use of our website after changes are posted constitutes acceptance of the
            updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
          <ul>
            <li>
              Email: <a href="mailto:hello@commercekind.com">hello@commercekind.com</a>
            </li>
            <li>Headquarters: Jacksonville, Florida, USA</li>
            <li>Operations: Lahore, Pakistan</li>
          </ul>

          <div className="legal-bottom-actions">
            <Link to="/" className="btn btn-ghost" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              &larr; Back to Home
            </Link>
            <Link
              to="/terms"
              className="btn btn-ghost"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Terms of Service &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
