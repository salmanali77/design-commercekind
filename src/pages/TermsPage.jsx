import { useEffect } from 'react'

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms of Service | CommerceKind'
  }, [])

  return (
    <div className="legal-page-wrapper">
      {/* Dark Legal Hero */}
      <section className="legal-hero">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="eyebrow" style={{ color: 'var(--teal)' }}>
            Legal
          </div>
          <h1>Terms of Service</h1>
          <p className="legal-date">Last updated: March 2026</p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="legal-content-section">
        <div className="container legal-body">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing our website at commercekind.com or engaging CommerceKind for services, you agree to be bound by
            these Terms of Service. If you do not agree with any part of these terms, please do not use our website or
            services.
          </p>
          <p>
            CommerceKind LLC is a company registered in the State of Florida, USA. References to "we", "us", or
            "CommerceKind" throughout this document refer to CommerceKind LLC.
          </p>

          <h2>Services</h2>
          <p>
            CommerceKind provides Amazon account management services including but not limited to: PPC advertising
            management, listing optimization, A+ content creation, catalog management, account health monitoring, and
            full account management. The specific services provided are outlined in individual service agreements or
            statements of work.
          </p>
          <p>
            Free audits and strategy calls provided through this website are complimentary consultations and do not
            create any obligation on either party to enter into a paid service agreement.
          </p>

          <h2>Client Responsibilities</h2>
          <p>As a client or prospective client, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information when submitting forms or communicating with us</li>
            <li>Maintain compliance with Amazon's policies and terms of service for your seller account</li>
            <li>Provide necessary account access as required for service delivery</li>
            <li>Respond to reasonable requests for information in a timely manner</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, and software — is the property of
            CommerceKind and is protected by applicable intellectual property laws. You may not reproduce, distribute,
            or create derivative works from our content without explicit written permission.
          </p>
          <p>
            Our proprietary tools and AI systems remain the exclusive intellectual property of CommerceKind and are not
            licensed or transferred to clients as part of service agreements.
          </p>

          <h2>Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any proprietary, business, or technical information shared in the
            course of engagement. CommerceKind will not disclose client account performance data, strategies, or
            business information to third parties without consent.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            While we are committed to delivering exceptional results, Amazon account performance is subject to
            marketplace conditions, algorithm changes, competitor activity, and factors outside our direct control.
            CommerceKind does not guarantee specific revenue outcomes or ranking positions.
          </p>
          <p>
            To the maximum extent permitted by law, CommerceKind's total liability arising from or related to these
            terms or our services shall not exceed the total fees paid by you in the three months preceding the event
            giving rise to the claim.
          </p>

          <h2>Service Agreement Terms</h2>
          <p>
            Specific terms for paid service engagements — including payment schedules, scope of work, deliverable
            timelines, and termination procedures — are governed by individual service agreements provided at the start
            of each engagement.
          </p>
          <p>
            Our standard service model operates on a month-to-month basis with no long-term lock-in, unless otherwise
            specified in a written agreement.
          </p>

          <h2>Termination</h2>
          <p>
            Either party may terminate a service engagement in accordance with the terms specified in the applicable
            service agreement. CommerceKind reserves the right to decline or terminate services for any client found to
            be in violation of Amazon's policies or engaged in prohibited activities.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the State of
            Florida, USA, without regard to its conflict of law provisions. Any disputes arising under these terms
            shall be subject to the exclusive jurisdiction of the courts located in Duval County, Florida.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on this page
            with a revised "Last updated" date. Continued use of our website or services after any changes constitutes
            acceptance of the updated terms.
          </p>

          <h2>Contact</h2>
          <p>For questions about these Terms of Service, please contact us:</p>
          <ul>
            <li>
              Email: <a href="mailto:hello@commercekind.com">hello@commercekind.com</a>
            </li>
            <li>Headquarters: Jacksonville, Florida, USA</li>
            <li>Operations: Lahore, Pakistan</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
