import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About CommerceKind | Full-Service Amazon Growth Partner'
  }, [])

  const problems = [
    {
      icon: "💸",
      title: '"Just Run More Ads"',
      desc: "Most agencies default to PPC as the only solution. Nobody fixes the listing first. So ad spend burns on listings that can't convert, and clients blame themselves."
    },
    {
      icon: "📋",
      title: "One Manager, Twenty Accounts",
      desc: "A single generalist stretched across dozens of stores. No depth, no specialization, and zero true accountability. You become a line item instead of a priority."
    },
    {
      icon: "👻",
      title: "Agencies, Not Partners",
      desc: "Late reports after the fact, no advance planning, and excuses when targets are missed. We built CommerceKind to operate as your authentic in-house partner."
    }
  ]

  const methodSteps = [
    {
      num: "01",
      title: "Main Image & CTR",
      desc: "Before a single dollar of ad spend, we optimize the first thing shoppers see. A weak main image kills conversion before the click even happens."
    },
    {
      num: "02",
      title: "Copy & AI Optimization",
      desc: "Keyword-rich, benefit-driven listing copy built with our proprietary AI tools and human specialists. Your listing works 24/7 before ads enter."
    },
    {
      num: "03",
      title: "A+ Brand Content",
      desc: "Brand story, feature breakdowns, and comparison charts that handle buyer objections and close the sale at significantly higher conversion rates."
    },
    {
      num: "04",
      title: "PPC & Scale",
      desc: "Now we push. With a listing that converts, ad spend compounds instead of drains. This is how you grow ROAS and sales volume at the same time."
    }
  ]

  const teamRoles = [
    { icon: "🎯", title: "Brand Manager", desc: "Dedicated single point of contact focused exclusively on your brand's growth." },
    { icon: "📊", title: "PPC Specialist", desc: "Full-time Amazon advertising expert actively managing your campaigns weekly." },
    { icon: "🎨", title: "Graphic Designer", desc: "In-house creative for A+ Content, main image CTR testing, and infographics." },
    { icon: "📁", title: "Portfolio Manager", desc: "Catalog health, listing quality, inventory monitoring, and keyword architecture." },
    { icon: "🏆", title: "Director Oversight", desc: "Senior leadership review on quarterly milestones, roadmaps, and escalations." },
    { icon: "🤖", title: "Proprietary AI Systems", desc: "In-house algorithms tracking SQP query data, copy variations, and bid waste." }
  ]

  const comparison = [
    { feature: "In-house AI growth tools built by our team", ck: true, other: false },
    { feature: "Dedicated 6-person specialist team per account", ck: true, other: false },
    { feature: "Transparent weekly performance data & updates", ck: true, other: false },
    { feature: "Monthly 90-day roadmaps shared before execution", ck: true, other: false },
    { feature: "US-based leadership in Florida with direct access", ck: true, other: false },
    { feature: "Full operational accountability for revenue outcomes", ck: true, other: false }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-glow"></div>
        <div className="container relative z-10 text-center">
          <div className="about-kicker">About CommerceKind</div>
          <h1>
            Some agencies manage your account.<br />
            <span className="accent-teal">We build your business.</span>
          </h1>
          <p className="about-hero-sub">
            There is a fundamental difference between an agency that checks boxes and a partner that owns the outcome. We built CommerceKind to be the second one—combining US leadership with 40+ specialized operators.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-solid btn-large">
              Work With Us →
            </Link>
            <Link to="/results" className="btn btn-ghost btn-large">
              See Our Results
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="about-stats-bar">
            <div className="stat-card">
              <div className="num">99%</div>
              <div className="lbl">Client Retention</div>
            </div>
            <div className="stat-card">
              <div className="num">$28M+</div>
              <div className="lbl">Revenue Generated</div>
            </div>
            <div className="stat-card">
              <div className="num">$1M+</div>
              <div className="lbl">Monthly Ad Spend</div>
            </div>
            <div className="stat-card">
              <div className="num">40+</div>
              <div className="lbl">In-House Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="about-why-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">Why We Exist</div>
            <h2>We Saw What Most Amazon Agencies Were Getting Wrong</h2>
            <p className="section-sub-text">
              Before we could build the right company, we understood the exact flaws of typical agencies.
            </p>
          </div>

          <div className="problems-grid">
            {problems.map((p, i) => (
              <div className="problem-box" key={i}>
                <div className="p-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sequence of Execution */}
      <section className="about-method-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">Our Methodology</div>
            <h2>The Order Matters.</h2>
            <p className="section-sub-text">
              Most agencies jump straight to ads. We execute in the right sequence because sequence determines the return.
            </p>
          </div>

          <div className="method-grid">
            {methodSteps.map((m, i) => (
              <div className="method-card" key={i}>
                <div className="method-num">{m.num}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="method-note text-center">
            <span>The result: Ad spend lands on listings that convert. ROAS climbs and volume compounds together.</span>
          </div>
        </div>
      </section>

      {/* 6-Person Dedicated Team Structure */}
      <section className="about-team-structure-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">Team Structure</div>
            <h2>A Full Dedicated Team on Every Account</h2>
            <p className="section-sub-text">
              Instead of one generalist juggling 20 accounts, every CommerceKind client gets a dedicated 6-specialist squad.
            </p>
          </div>

          <div className="roles-grid">
            {teamRoles.map((r, i) => (
              <div className="role-card" key={i}>
                <div className="role-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Hubs Model */}
      <section className="about-hubs-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">Global Footprint</div>
            <h2>Two Hubs. One Standard.</h2>
            <p className="section-sub-text">
              Strategy and executive leadership in the US. Execution depth and specialist power in our Pakistan headquarters.
            </p>
          </div>

          <div className="hubs-grid">
            <div className="hub-card">
              <div className="hub-flag">🇺🇸</div>
              <h3>United States Hub</h3>
              <div className="hub-loc">Jacksonville, Florida</div>
              <p>
                Client strategy, account leadership, executive operations, and business growth direction. Our Florida team owns the client relationship.
              </p>
              <ul>
                <li>Executive Client Leadership</li>
                <li>Growth Strategy & Direction</li>
                <li>Account Reviews & Scaled Roadmaps</li>
              </ul>
            </div>

            <div className="hub-card">
              <div className="hub-flag">🇵🇰</div>
              <h3>Pakistan Headquarters</h3>
              <div className="hub-loc">Lahore, Pakistan</div>
              <p>
                40+ in-house technical specialists powering daily PPC adjustments, visual creative production, listing SEO, and proprietary AI tools.
              </p>
              <ul>
                <li>PPC Campaign Optimization</li>
                <li>Listing & A+ Content Creative</li>
                <li>AI Tools & Catalog Operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="about-compare-section">
        <div className="container max-w-4xl">
          <div className="section-head text-center">
            <div className="section-eyebrow">The Honest Comparison</div>
            <h2>What Actually Sets Us Apart</h2>
          </div>

          <div className="compare-card">
            <div className="compare-header">
              <div className="col-feature">Capability</div>
              <div className="col-ck">CommerceKind</div>
              <div className="col-other">Typical Agency</div>
            </div>

            {comparison.map((row, i) => (
              <div className="compare-row" key={i}>
                <div className="col-feature">{row.feature}</div>
                <div className="col-ck">
                  <span className="check">✓</span>
                </div>
                <div className="col-other">
                  <span className="cross">✕</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-cta-banner">
        <div className="container text-center">
          <h2>A Team That Owns the Outcome.</h2>
          <p>
            If you're tired of agencies that deliver slide decks but not results, let's have a different conversation. Book a free strategy call today.
          </p>
          <div className="cta-btn-wrap">
            <Link to="/contact" className="btn btn-solid btn-large">
              Book a Free Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          background: #f7faf9;
          color: #0b1722;
        }

        .about-hero {
          position: relative;
          background: #071723;
          color: #ffffff;
          padding: 120px 24px 80px;
          overflow: hidden;
        }

        .about-hero-glow {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 500px;
          background: radial-gradient(circle, rgba(108, 48, 237, 0.22) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-kicker {
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

        .about-hero h1 {
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

        .about-hero-sub {
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

        .about-stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 960px;
          margin: 40px auto 0;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px 20px;
          backdrop-filter: blur(10px);
        }

        .stat-card .num {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 850;
          color: var(--teal);
        }

        .stat-card .lbl {
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 4px;
        }

        .about-why-section {
          padding: 80px 24px;
        }

        .problems-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .problem-box {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 32px 26px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .p-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .problem-box h3 {
          font-size: 18px;
          font-weight: 800;
          color: #071723;
          margin-bottom: 10px;
        }

        .problem-box p {
          font-size: 14px;
          color: #52606d;
          line-height: 1.6;
          margin: 0;
        }

        .about-method-section {
          padding: 80px 24px;
          background: #ffffff;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .method-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto 36px;
        }

        .method-card {
          background: #f7faf9;
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 28px 22px;
        }

        .method-num {
          font-size: 26px;
          font-weight: 900;
          color: var(--teal);
          margin-bottom: 12px;
        }

        .method-card h3 {
          font-size: 17px;
          font-weight: 800;
          color: #071723;
          margin-bottom: 8px;
        }

        .method-card p {
          font-size: 13.5px;
          color: #62727d;
          line-height: 1.55;
          margin: 0;
        }

        .method-note span {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          color: #071723;
          background: rgba(19, 185, 168, 0.1);
          padding: 10px 24px;
          border-radius: 999px;
          border: 1px solid rgba(19, 185, 168, 0.2);
        }

        .about-team-structure-section {
          padding: 80px 24px;
        }

        .roles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .role-card {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 24px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .role-card:hover {
          transform: translateY(-2px);
          border-color: var(--teal);
        }

        .role-icon {
          font-size: 26px;
          margin-bottom: 10px;
        }

        .role-card h3 {
          font-size: 16px;
          font-weight: 800;
          color: #071723;
          margin-bottom: 6px;
        }

        .role-card p {
          font-size: 13.5px;
          color: #62727d;
          line-height: 1.55;
          margin: 0;
        }

        .about-hubs-section {
          padding: 80px 24px;
          background: #071723;
          color: #ffffff;
        }

        .about-hubs-section .section-head h2 {
          color: #ffffff;
        }

        .hubs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .hub-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 36px 30px;
        }

        .hub-flag {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .hub-card h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 0 4px;
        }

        .hub-loc {
          font-size: 13px;
          color: var(--teal);
          font-weight: 750;
          margin-bottom: 16px;
        }

        .hub-card p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .hub-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .hub-card li {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          padding-left: 18px;
        }

        .hub-card li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--teal);
          font-weight: bold;
        }

        .about-compare-section {
          padding: 80px 24px;
        }

        .compare-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid var(--line);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .compare-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          padding: 18px 24px;
          background: #071723;
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
        }

        .col-ck {
          text-align: center;
          color: var(--teal);
        }

        .col-other {
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
        }

        .compare-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          padding: 16px 24px;
          border-bottom: 1px solid var(--line);
          font-size: 14px;
          align-items: center;
        }

        .compare-row:last-child {
          border-bottom: none;
        }

        .check {
          display: inline-block;
          color: #059669;
          font-weight: 900;
          font-size: 16px;
          background: rgba(16, 185, 129, 0.12);
          width: 24px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-radius: 50%;
        }

        .cross {
          display: inline-block;
          color: #dc2626;
          font-weight: 900;
          font-size: 14px;
          background: rgba(239, 68, 68, 0.1);
          width: 24px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-radius: 50%;
        }

        .about-cta-banner {
          background: #071723;
          color: #ffffff;
          padding: 70px 24px;
        }

        .about-cta-banner h2 {
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 850;
          margin-bottom: 12px;
        }

        .about-cta-banner p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.75);
          max-width: 600px;
          margin: 0 auto 28px;
        }

        @media (max-width: 900px) {
          .about-stats-bar {
            grid-template-columns: repeat(2, 1fr);
          }
          .method-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hubs-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .about-stats-bar {
            grid-template-columns: 1fr;
          }
          .method-grid {
            grid-template-columns: 1fr;
          }
          .compare-header, .compare-row {
            padding: 12px 14px;
            font-size: 12.5px;
          }
        }
      `}</style>
    </div>
  )
}
