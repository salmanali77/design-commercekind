import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForAgenciesPage() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'White-Label Amazon Management for Agencies | CommerceKind'
  }, [])

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  const features = [
    {
      icon: "🏷️",
      title: "100% White-Label",
      desc: "Every report, dashboard, and slide deck carries your agency's logo and brand. Your clients never see CommerceKind."
    },
    {
      icon: "📊",
      title: "Customized Reporting",
      desc: "Bespoke weekly and monthly reports tailored to your client's KPIs, automatically scheduled and beautifully formatted."
    },
    {
      icon: "👥",
      title: "40+ Specialists Ready",
      desc: "Scale from 1 brand to 50 without hiring bottlenecks. Our dedicated in-house team absorbs the volume immediately."
    },
    {
      icon: "💰",
      title: "$1M+ Already Managed",
      desc: "Managing over $1M/mo in partner ad spend across high-competition categories. Proven systems, not experiments."
    },
    {
      icon: "🛠️",
      title: "Full Tool Stack Shared",
      desc: "Helium 10, Data Dive, Sellerboard, Perpetua, and our proprietary AI suites. You get full access to what we use."
    },
    {
      icon: "🚀",
      title: "Fast Client Onboarding",
      desc: "Structured intake SOPs ensure new client accounts go live in days with zero operational friction on your end."
    },
    {
      icon: "💬",
      title: "Direct Slack Access",
      desc: "Your team gets direct Slack access to your account managers and specialists for instant day-to-day coordination."
    },
    {
      icon: "⚡",
      title: "Zero Long-Term Lock-In",
      desc: "Flexible, performance-first agreements. Start with one client trial and expand as your agency grows."
    }
  ]

  const pains = [
    {
      title: "Unreliable Partners Who Overpromise & Disappear",
      desc: "You outsourced before. Started strong, then came missed deadlines, silent channels, and you were left making excuses to clients."
    },
    {
      title: "Constantly Chasing Just to Get Basic Deliverables",
      desc: "Following up on reports, repeating instructions twice. Managing the outsourced team ended up costing more time than doing it yourself."
    },
    {
      title: "Zero Visibility Into What's Actually Happening",
      desc: "You are accountable to the client but blind to what the provider is doing. No live dashboards or clear audit trails."
    },
    {
      title: "Shrinking Margins as Overhead Clutters Your Time",
      desc: "Reviewing messy work and firefighting gaps erodes your agency's profits and distracts you from closing new clients."
    }
  ]

  const faqs = [
    {
      q: "How does the white-label setup actually work?",
      a: "We set up reporting templates, presentation decks, and dashboards with your logo, brand colors, and domain. Your clients communicate with you, and we operate as your invisible in-house Amazon execution department."
    },
    {
      q: "How quickly can we get our first client live?",
      a: "Once onboarding materials are received, we complete the initial account audit and launch the 90-day action plan within 3 to 5 business days."
    },
    {
      q: "Do we need Amazon specialists on our team to partner with you?",
      a: "No. You bring the client relationship and high-level account oversight; we provide the entire specialist team—Brand Managers, PPC experts, designers, and catalog operators."
    },
    {
      q: "Can we start with just one brand as a trial?",
      a: "Yes. Most of our 27+ agency partners started with a single brand trial before transitioning their entire Amazon client roster to us."
    }
  ]

  return (
    <div className="for-agencies-page">
      {/* Hero Section */}
      <section className="agency-hero">
        <div className="agency-hero-glow"></div>
        <div className="container relative z-10 text-center">
          <div className="agency-kicker">For Agency Partners</div>
          <h1>
            Your Plug & Play<br />
            <span className="accent-teal">Amazon Back-Office.</span>
          </h1>
          <p className="agency-hero-sub">
            White-label Amazon management built for digital agencies. Our 40+ person specialist team plugs into your agency invisibly, delivers under your brand, and scales as fast as you grow.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-solid btn-large">
              Start a Partnership Conversation →
            </Link>
            <a href="#difference" className="btn btn-ghost btn-large">
              See How It Works
            </a>
          </div>

          {/* Trust Stats Bar */}
          <div className="agency-stats-bar">
            <div className="stat-box">
              <div className="stat-val">40+</div>
              <div className="stat-label">In-House Specialists</div>
            </div>
            <div className="stat-box">
              <div className="stat-val">$1M+</div>
              <div className="stat-label">Ad Spend Managed</div>
            </div>
            <div className="stat-box">
              <div className="stat-val">5+ Yrs</div>
              <div className="stat-label">Refined Operating SOPs</div>
            </div>
            <div className="stat-box">
              <div className="stat-val">27+</div>
              <div className="stat-label">Active Agency Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Difference / Plug & Play Comparison */}
      <section className="agency-diff-section" id="difference">
        <div className="container">
          <div className="agency-diff-box">
            <div className="diff-left">
              <div className="kicker-tag">The Difference</div>
              <h2>A System Built Over 5+ Years. Ready to Plug In.</h2>
              <p>
                Most white-label providers give you raw deliverables. We provide an entire, turnkey department: refined processes, templates, reporting pipelines, and team structures.
              </p>
              <p>
                Other agencies spend years and hundreds of thousands building this infrastructure. You get it on day one.
              </p>
              <Link to="/contact" className="btn btn-solid">
                Partner With Us Today →
              </Link>
            </div>

            <div className="diff-right">
              <div className="diff-row">
                <span className="row-lbl">Processes & SOPs</span>
                <span className="row-val">5+ Years Refined</span>
              </div>
              <div className="diff-row">
                <span className="row-lbl">Reporting Templates</span>
                <span className="row-val">100% White-Label</span>
              </div>
              <div className="diff-row">
                <span className="row-lbl">Specialist Team Size</span>
                <span className="row-val">40+ Specialists</span>
              </div>
              <div className="diff-row">
                <span className="row-lbl">Onboarding Speed</span>
                <span className="row-val">Days, Not Months</span>
              </div>
              <div className="diff-row">
                <span className="row-lbl">Contract Lock-in</span>
                <span className="row-val">Zero / Flexible</span>
              </div>
              <div className="diff-row">
                <span className="row-lbl">Client Visibility</span>
                <span className="row-val">100% Your Brand</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="agency-features-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">What You Get</div>
            <h2>Everything Included in Your Partnership</h2>
            <p className="section-sub-text">
              Not just Amazon execution—a complete, transparent back-office operation shared seamlessly with your agency.
            </p>
          </div>

          <div className="features-grid">
            {features.map((item, i) => (
              <div className="feature-box" key={i}>
                <div className="feat-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Solved */}
      <section className="agency-pains-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">Why Agencies Switch</div>
            <h2>The Walls Agencies Hit Trying to Scale Amazon Alone</h2>
            <p className="section-sub-text">
              We built our partnership model specifically to eliminate these exact headaches.
            </p>
          </div>

          <div className="pains-grid">
            {pains.map((p, i) => (
              <div className="pain-card" key={i}>
                <div className="pain-badge">Solved by CommerceKind</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Deliverables */}
      <section className="agency-tools-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">Tools & Reporting</div>
            <h2>Enterprise Infrastructure, Branded for You</h2>
          </div>

          <div className="tools-split">
            <div className="tools-card">
              <div className="card-top-tag">In-House Proprietary AI</div>
              <h3>CommerceKind AI Engine</h3>
              <ul>
                <li><strong>AI Growth Engine:</strong> Automated listing gap and CTR optimization</li>
                <li><strong>Advanced PPC Monitor:</strong> AI-backed bid adjustments & waste identification</li>
                <li><strong>SQP Market Reporter:</strong> Deep query purchase share tracking</li>
                <li><strong>A/B Testing Suite:</strong> Main image and copy conversion split-testing</li>
              </ul>
            </div>

            <div className="tools-card">
              <div className="card-top-tag">Branded Client Deliverables</div>
              <h3>Client-Ready Outputs</h3>
              <ul>
                <li><strong>Initial Audit Report:</strong> Complete baseline review with your agency logo</li>
                <li><strong>90-Day Action Roadmap:</strong> Structured milestones shared before execution</li>
                <li><strong>Weekly Slack Digest:</strong> Plain-language progress summaries ready to forward</li>
                <li><strong>Monthly P&L Decks:</strong> Executive summaries covering TACoS, ACoS, and net profit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Onboarding */}
      <section className="agency-steps-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">Simple Onboarding</div>
            <h2>From First Call to First Client in 4 Steps</h2>
          </div>

          <div className="steps-row">
            <div className="step-item">
              <div className="step-num">01</div>
              <h3>Intro Call</h3>
              <p>Discuss your agency model, clients, and specific growth goals.</p>
            </div>
            <div className="step-item">
              <div className="step-num">02</div>
              <h3>Custom Setup</h3>
              <p>We brand your reporting templates and establish Slack channels.</p>
            </div>
            <div className="step-item">
              <div className="step-num">03</div>
              <h3>First Client Live</h3>
              <p>Onboard your initial brand with complete strategic execution.</p>
            </div>
            <div className="step-item">
              <div className="step-num">04</div>
              <h3>Scale Without Limits</h3>
              <p>Add new brands seamlessly with zero extra hiring overhead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="agency-quote-section">
        <div className="container max-w-4xl text-center">
          <div className="quote-mark">“</div>
          <blockquote>
            We had an in-house Amazon team, but as a single owner the hiring, training, and day-to-day management became unsustainable. We partnered with CommerceKind starting with just one brand. That was the best decision I made. They now manage 10 of our agency clients. The overhead is gone, results are better, and our margins are protected.
          </blockquote>
          <div className="quote-author">
            <strong>Agency Owner</strong>
            <span>E-commerce Agency Partner · United States · 12 brands managed</span>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="agency-faqs-section">
        <div className="container max-w-3xl">
          <div className="section-head text-center">
            <div className="section-eyebrow">FAQ</div>
            <h2>Questions Agency Owners Ask Before Partnering</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-card ${openFaq === i ? 'open' : ''}`} key={i}>
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="agency-cta-banner">
        <div className="container text-center">
          <h2>Ready to Scale Your Agency's Amazon Revenue?</h2>
          <p>
            No long-term commitments. Start with one client trial and experience what an authentic 40+ person specialist partner delivers.
          </p>
          <div className="cta-btn-wrap">
            <Link to="/contact" className="btn btn-solid btn-large">
              Start a Partnership Conversation →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .for-agencies-page {
          background: #f7faf9;
          color: #0b1722;
        }

        .agency-hero {
          position: relative;
          background: #071723;
          color: #ffffff;
          padding: 120px 24px 80px;
          overflow: hidden;
        }

        .agency-hero-glow {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(19, 185, 168, 0.22) 0%, transparent 70%);
          pointer-events: none;
        }

        .agency-kicker {
          display: inline-block;
          font-size: 11.5px;
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

        .agency-hero h1 {
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          font-weight: 850;
          line-height: 1.1;
          letter-spacing: -0.03em;
          max-width: 900px;
          margin: 0 auto 20px;
        }

        .accent-teal {
          color: var(--teal);
        }

        .agency-hero-sub {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.78);
          max-width: 720px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        .hero-cta-group {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .agency-stats-bar {
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

        .stat-box .stat-val {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 850;
          color: var(--teal);
        }

        .stat-box .stat-label {
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 4px;
        }

        .agency-diff-section {
          padding: 80px 24px;
        }

        .agency-diff-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          background: #ffffff;
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          border: 1px solid var(--line);
          align-items: center;
          max-width: 1080px;
          margin: 0 auto;
        }

        .diff-left h2 {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 850;
          color: #071723;
          margin: 12px 0 16px;
          line-height: 1.2;
        }

        .diff-left p {
          font-size: 15px;
          color: #52606d;
          line-height: 1.65;
          margin-bottom: 16px;
        }

        .diff-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .diff-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          background: #f7faf9;
          border-radius: 12px;
          border: 1px solid var(--line);
        }

        .row-lbl {
          font-weight: 650;
          color: #071723;
          font-size: 14px;
        }

        .row-val {
          font-weight: 750;
          color: var(--teal);
          font-size: 14px;
        }

        .agency-features-section {
          padding: 80px 24px;
          background: #ffffff;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .feature-box {
          background: #f7faf9;
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 24px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .feature-box:hover {
          transform: translateY(-3px);
          border-color: var(--teal);
        }

        .feat-icon {
          font-size: 28px;
          margin-bottom: 12px;
        }

        .feature-box h3 {
          font-size: 16px;
          font-weight: 800;
          color: #071723;
          margin-bottom: 8px;
        }

        .feature-box p {
          font-size: 13.5px;
          color: #62727d;
          line-height: 1.55;
          margin: 0;
        }

        .agency-pains-section {
          padding: 80px 24px;
        }

        .pains-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .pain-card {
          background: #ffffff;
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 16px;
          padding: 28px 22px;
        }

        .pain-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 750;
          color: #0c8b7e;
          background: rgba(19, 185, 168, 0.12);
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 14px;
        }

        .pain-card h3 {
          font-size: 16px;
          font-weight: 800;
          color: #071723;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .pain-card p {
          font-size: 13.5px;
          color: #52606d;
          line-height: 1.6;
          margin: 0;
        }

        .agency-tools-section {
          padding: 80px 24px;
          background: #071723;
          color: #ffffff;
        }

        .agency-tools-section .section-head h2 {
          color: #ffffff;
        }

        .tools-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .tools-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 32px;
        }

        .card-top-tag {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 10px;
        }

        .tools-card h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .tools-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .tools-card li {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.55;
        }

        .tools-card li strong {
          color: #ffffff;
        }

        .agency-steps-section {
          padding: 80px 24px;
        }

        .steps-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .step-item {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 24px;
        }

        .step-num {
          font-size: 24px;
          font-weight: 900;
          color: var(--teal);
          margin-bottom: 10px;
        }

        .step-item h3 {
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 6px;
          color: #071723;
        }

        .step-item p {
          font-size: 13px;
          color: #62727d;
          line-height: 1.55;
          margin: 0;
        }

        .agency-quote-section {
          padding: 80px 24px;
          background: #f0f7f5;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .quote-mark {
          font-size: 60px;
          line-height: 1;
          color: var(--teal);
          font-family: Georgia, serif;
          margin-bottom: -10px;
        }

        blockquote {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 600;
          color: #071723;
          line-height: 1.6;
          margin: 0 auto 24px;
          max-width: 800px;
        }

        .quote-author strong {
          display: block;
          font-size: 15px;
          color: #071723;
        }

        .quote-author span {
          font-size: 13px;
          color: #62727d;
        }

        .agency-faqs-section {
          padding: 80px 24px;
          background: #ffffff;
        }

        .faq-card {
          border: 1px solid var(--line);
          border-radius: 12px;
          background: #f7faf9;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .faq-card.open {
          border-color: var(--teal);
          background: #ffffff;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          background: none;
          border: none;
          text-align: left;
          font-size: 15.5px;
          font-weight: 750;
          color: #071723;
          cursor: pointer;
        }

        .faq-icon {
          font-size: 20px;
          color: var(--teal);
          font-weight: 800;
        }

        .faq-answer {
          padding: 0 20px 18px;
          font-size: 14.5px;
          color: #52606d;
          line-height: 1.65;
        }

        .agency-cta-banner {
          background: #071723;
          color: #ffffff;
          padding: 70px 24px;
        }

        .agency-cta-banner h2 {
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 850;
          margin-bottom: 12px;
        }

        .agency-cta-banner p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.75);
          max-width: 600px;
          margin: 0 auto 28px;
        }

        @media (max-width: 900px) {
          .agency-stats-bar {
            grid-template-columns: repeat(2, 1fr);
          }
          .agency-diff-box {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .tools-split {
            grid-template-columns: 1fr;
          }
          .steps-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .steps-row {
            grid-template-columns: 1fr;
          }
          .agency-stats-bar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
