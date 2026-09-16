import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { servicesList } from '../data/servicesData'

export default function ServicePage({ forcedServiceId }) {
  const params = useParams()
  const serviceId = forcedServiceId || params.serviceId
  const service = servicesList.find(s => s.id === serviceId)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (service) {
      document.title = `${service.title} | CommerceKind Amazon Agency`
    }
  }, [serviceId, service])

  if (!service) {
    return <Navigate to="/" replace />
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="service-page-wrapper">
      {/* Dark Service Hero */}
      <section className="service-hero-section">
        <div className="service-hero-glow"></div>
        <div className="service-hero-glow-teal"></div>
        <div className="container relative z-10 text-center">
          <div className="service-eyebrow">
            CommerceKind Dedicated Service
          </div>
          <h1 className="service-hero-title">
            {service.heroHeadline || service.title}{' '}
            {service.headlineHighlight && <span className="service-accent">{service.headlineHighlight}</span>}
          </h1>
          <p className="service-hero-sub">
            {service.shortDesc}
          </p>
          <div className="service-hero-actions">
            <Link to="/contact" className="btn btn-solid btn-large">
              Book a Strategy Call →
            </Link>
            <a href="#details" className="btn btn-ghost btn-large">
              Explore What We Deliver
            </a>
          </div>

          {/* Stats Bar */}
          {service.stats && (
            <div className="service-stats-grid">
              {service.stats.map((stat, i) => (
                <div className="service-stat-card" key={i}>
                  <div className="stat-val">{stat.value}</div>
                  <div className="stat-lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Challenge vs Solution */}
      <section className="service-body-section" id="details">
        <div className="container">
          <div className="service-split-grid">
            <div className="service-problem-card">
              <div className="card-badge card-badge-red">The Core Challenge</div>
              <h2>{service.challenge ? service.challenge.title : "Why Most Sellers Struggle"}</h2>
              <p>
                {service.challenge ? service.challenge.desc : service.shortDesc}
              </p>
            </div>

            <div className="service-solution-card">
              <div className="card-badge card-badge-teal">Our Strategic Approach</div>
              <h2>{service.approach ? service.approach.title : "Strategic Ownership"}</h2>
              <p>
                {service.approach ? service.approach.desc : "We take complete ownership of your channel's success with data-backed execution and transparent reporting."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables / Features Grid */}
      <section className="service-features-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">What's Included</div>
            <h2>What We Deliver Every Single Month</h2>
            <p className="section-sub-text">
              Direct execution from experienced in-house specialists. No fluff, no busywork—just the actions that drive real revenue.
            </p>
          </div>

          <div className="service-features-grid">
            {service.features.map((feat, idx) => (
              <div className="feature-item-card" key={idx}>
                <div className="feature-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>{feat}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      {service.process && (
        <section className="service-process-section">
          <div className="container">
            <div className="section-head text-center">
              <div className="section-eyebrow">Execution Cadence</div>
              <h2>How We Execute, Step by Step</h2>
              <p className="section-sub-text">
                A proven, disciplined operating rhythm refined over 5+ years of scaling Amazon brands.
              </p>
            </div>

            <div className="process-step-grid">
              {service.process.map((p, i) => (
                <div className="process-card" key={i}>
                  <div className="step-number">{p.step}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="service-faq-section">
          <div className="container max-w-3xl">
            <div className="section-head text-center">
              <div className="section-eyebrow">Common Questions</div>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq-accordion-list">
              {service.faqs.map((faq, idx) => (
                <div className={`faq-accordion-item ${openFaq === idx ? 'active' : ''}`} key={idx}>
                  <button className="faq-toggle-btn" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    <span className="faq-arrow">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Conversion Banner */}
      <section className="service-cta-banner">
        <div className="container text-center">
          <h2>Ready to Scale Your Amazon Performance?</h2>
          <p>
            Book a strategy call with our leadership. We'll analyze your account before the call and share actionable opportunities.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-solid btn-large">
              Book a Free Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .service-page-wrapper {
          background: #f7faf9;
          color: #0b1722;
        }

        .service-hero-section {
          position: relative;
          background: #071723;
          color: #fff;
          padding: 120px 24px 80px;
          overflow: hidden;
        }

        .service-hero-glow {
          position: absolute;
          top: -30%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(108, 48, 237, 0.22) 0%, transparent 70%);
          pointer-events: none;
        }

        .service-hero-glow-teal {
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(19, 185, 168, 0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .service-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--teal);
          background: rgba(19, 185, 168, 0.12);
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 20px;
          border: 1px solid rgba(19, 185, 168, 0.25);
        }

        .service-hero-title {
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 850;
          line-height: 1.12;
          letter-spacing: -0.03em;
          max-width: 900px;
          margin: 0 auto 20px;
        }

        .service-accent {
          color: var(--teal);
        }

        .service-hero-sub {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.78);
          max-width: 720px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        .service-hero-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .service-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 960px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px 20px;
          backdrop-filter: blur(10px);
        }

        .service-stat-card .stat-val {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 850;
          color: var(--teal);
          font-family: inherit;
        }

        .service-stat-card .stat-lbl {
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 4px;
        }

        .service-body-section {
          padding: 80px 24px;
        }

        .service-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .service-problem-card,
        .service-solution-card {
          padding: 36px 32px;
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.03);
        }

        .service-problem-card {
          background: #ffffff;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .service-solution-card {
          background: #ffffff;
          border: 1.5px solid var(--teal);
          box-shadow: 0 10px 30px rgba(19, 185, 168, 0.08);
        }

        .card-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 14px;
        }

        .card-badge-red {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }

        .card-badge-teal {
          background: rgba(19, 185, 168, 0.12);
          color: #0c8b7e;
        }

        .service-problem-card h2,
        .service-solution-card h2 {
          font-size: 1.45rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: #071723;
        }

        .service-problem-card p,
        .service-solution-card p {
          font-size: 15px;
          color: #52606d;
          line-height: 1.65;
          margin: 0;
        }

        .service-features-section {
          padding: 60px 24px 80px;
          background: #ffffff;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .section-head {
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .section-eyebrow {
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 8px;
        }

        .section-head h2 {
          font-size: clamp(2rem, 3.5vw, 2.7rem);
          font-weight: 850;
          color: #071723;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .section-sub-text {
          font-size: 16px;
          color: #62727d;
          line-height: 1.6;
        }

        .service-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .feature-item-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 22px;
          border-radius: 16px;
          background: #f7faf9;
          border: 1px solid var(--line);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .feature-item-card:hover {
          transform: translateY(-2px);
          border-color: var(--teal);
        }

        .feature-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(19, 185, 168, 0.15);
          color: #0c8b7e;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-content h3 {
          font-size: 15px;
          font-weight: 700;
          color: #071723;
          line-height: 1.45;
          margin: 0;
        }

        .service-process-section {
          padding: 80px 24px;
        }

        .process-step-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .process-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 28px 24px;
          border: 1px solid var(--line);
          position: relative;
        }

        .step-number {
          font-size: 26px;
          font-weight: 900;
          color: var(--teal);
          margin-bottom: 12px;
          font-family: inherit;
        }

        .process-card h3 {
          font-size: 17px;
          font-weight: 800;
          margin-bottom: 8px;
          color: #071723;
        }

        .process-card p {
          font-size: 13.5px;
          color: #62727d;
          line-height: 1.6;
          margin: 0;
        }

        .service-faq-section {
          padding: 80px 24px;
          background: #ffffff;
          border-top: 1px solid var(--line);
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 780px;
          margin: 0 auto;
        }

        .faq-accordion-item {
          border: 1px solid var(--line);
          border-radius: 12px;
          background: #f7faf9;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .faq-accordion-item.active {
          border-color: var(--teal);
          background: #ffffff;
        }

        .faq-toggle-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          background: none;
          border: none;
          text-align: left;
          font-size: 16px;
          font-weight: 700;
          color: #071723;
          cursor: pointer;
        }

        .faq-arrow {
          font-size: 20px;
          color: var(--teal);
          font-weight: 700;
        }

        .faq-answer-body {
          padding: 0 20px 20px;
          font-size: 14.5px;
          color: #52606d;
          line-height: 1.65;
        }

        .service-cta-banner {
          background: #071723;
          color: #fff;
          padding: 70px 24px;
          position: relative;
        }

        .service-cta-banner h2 {
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 850;
          margin-bottom: 12px;
        }

        .service-cta-banner p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.75);
          max-width: 600px;
          margin: 0 auto 28px;
        }

        @media (max-width: 900px) {
          .service-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .service-split-grid {
            grid-template-columns: 1fr;
          }
          .process-step-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .process-step-grid {
            grid-template-columns: 1fr;
          }
          .service-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
