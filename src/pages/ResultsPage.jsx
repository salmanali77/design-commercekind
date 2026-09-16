import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ResultsPage() {
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Case Studies & Real Results | CommerceKind Amazon Agency'
  }, [])

  const caseStudies = [
    {
      id: 'cs1',
      category: 'full-account',
      badge: 'Private Label Brand · Full Account Transformation',
      title: 'The Ads Were Fine. The Listing Was the Problem.',
      context: 'The brand was pouring ad spend into a listing with poor main image CTR, weak copy, and no A+ Content. Once we fixed the listing foundation and restructured campaigns, performance doubled.',
      metrics: [
        { label: 'Ad Sales', before: '$14,304', after: '$28,911', change: '+102%', isPositive: true },
        { label: 'Orders', before: '798', after: '1,646', change: '+106%', isPositive: true },
        { label: 'ROAS', before: '3.99', after: '8.48', change: '+112%', isPositive: true },
        { label: 'ACOS', before: '25.08%', after: '11.79%', change: '−53%', isPositive: true },
        { label: 'CPC', before: '$1.08', after: '$0.57', change: '−47%', isPositive: true }
      ],
      approach: 'Paused wasteful spend, redesigned main image for CTR, rewrote listing copy with AI optimization to match buyer intent, built high-converting A+ Content, then restructured PPC campaigns with daily bid optimization.',
      services: ['Main Image CTR', 'AI Copy Rewrite', 'A+ Content', 'PPC Restructure', 'Daily Bidding']
    },
    {
      id: 'cs2',
      category: 'ppc',
      badge: 'Private Label Brand · PPC Scale & Efficiency',
      title: 'They Wanted to Scale. Every Time They Did, ACOS Spiked.',
      context: 'Volatile swings and chaotic campaign hierarchies were capping growth. Every time the brand increased budgets, ACOS skyrocketed. We rebuilt their campaign architecture from scratch.',
      metrics: [
        { label: 'Ad Sales', before: '$19,680', after: '$42,712', change: '+117%', isPositive: true },
        { label: 'ACOS', before: '34.03%', after: '24.10%', change: '−29%', isPositive: true },
        { label: 'ROAS', before: '2.94', after: '4.15', change: '+41%', isPositive: true },
        { label: 'Ad Spend', before: '$6,697', after: '$10,294', change: '+54%', isPositive: true }
      ],
      approach: 'Proper campaign segmentation funneled spend strictly to converting targets. Systematized bid logic so scaling budget produced 117% more sales while reducing ACOS by 29%.',
      services: ['Campaign Architecture', 'Scaling Logic', 'Listing Polish', 'A+ Content', 'Bid Systematization']
    },
    {
      id: 'cs3',
      category: 'ppc',
      badge: 'Private Label Brand · 30-Day Turnaround',
      title: 'One Month In. Sales Up 126%. ACOS Nearly Halved.',
      context: 'An account running on autopilot with chaotic spend spikes. When we took over, we moved immediately to optimize listing copy and rebuild advertising targeting within the first week.',
      metrics: [
        { label: 'Ad Sales', before: '$15,170', after: '$34,257', change: '+126%', isPositive: true },
        { label: 'Orders', before: '553', after: '1,233', change: '+123%', isPositive: true },
        { label: 'ROAS', before: '3.62', after: '6.01', change: '+66%', isPositive: true },
        { label: 'ACOS', before: '27.64%', after: '16.65%', change: '−40%', isPositive: true }
      ],
      approach: 'Rewrote listing copy to align with buyer search queries, eliminated unprofitable broad targeting, set SKU-level target ACOS, and instituted active weekly bid cycles.',
      services: ['Listing Copy Rewrite', 'Campaign Restructure', 'ACOS Targeting', 'Weekly Optimization']
    },
    {
      id: 'cs4',
      category: 'ppc',
      badge: 'Health & Wellness Brand · Rapid Volume Scale',
      title: 'Bigger Revenue at the Exact Same Healthy ROAS.',
      context: 'This brand had solid unit economics and wanted aggressive volume growth without sacrificing profit margins. Most agencies ruin ACOS during expansion; we held it flat while doubling volume.',
      metrics: [
        { label: 'Ad Sales', before: '$38,207', after: '$93,266', change: '+144%', isPositive: true },
        { label: 'Orders', before: '1,545', after: '3,719', change: '+141%', isPositive: true },
        { label: 'Ad Spend', before: '$14,975', after: '$35,885', change: '+140%', isPositive: true },
        { label: 'ROAS', before: '2.55', after: '2.60', change: 'Held Steady', isPositive: true }
      ],
      approach: 'Systematic expansion into untapped search pockets, broader placement coverage, and tightened conversion creatives. Sales volume more than doubled while efficiency stayed protected.',
      services: ['Volume Scaling', 'Targeting Expansion', 'Creative Refresh', 'Budget Architecture']
    },
    {
      id: 'cs5',
      category: 'listing',
      badge: 'Supplements Brand · SQP Keyword Dominance',
      title: 'The Market Was Shrinking. Their Click Share Doubled Anyway.',
      context: 'Search volume for their primary keyword was declining category-wide. Yet by diagnosing buyer pain points and testing a compliant, high-CTR main image, click share doubled.',
      metrics: [
        { label: 'Keyword Clicks', before: '34', after: '70', change: '+106%', isPositive: true },
        { label: 'Click Share', before: '0.85%', after: '1.85%', change: '+118%', isPositive: true },
        { label: 'ASIN Impressions', before: '4,353', after: '6,635', change: '+52%', isPositive: true },
        { label: 'Total Category Clicks', before: '4,018', after: '3,786', change: '−5.8% (Market Down)', isPositive: false }
      ],
      approach: 'Deep SQP analysis showed competing main images were generic. We designed a clear visual highlighting key benefits that won the click, verified through weekly Search Query Performance metrics.',
      services: ['SQP Analysis', 'Main Image Redesign', 'CTR Optimization', 'Amazon Compliance']
    },
    {
      id: 'cs6',
      category: 'full-account',
      badge: 'Multi-Product Catalog · Long-Term Compounding',
      title: 'Onboarded in June. Hit Their Biggest Month Ever in January.',
      context: 'A store plateaued around $97K/mo with no clear direction. Seven months of systematic listing optimizations, PPC restructures, and weekly management produced a record high.',
      metrics: [
        { label: 'Revenue at Onboarding', before: '~$97K/mo', after: '~$160K/mo', change: '+65%', isPositive: true },
        { label: 'Performance Index', before: '~$128K', after: '~$190K', change: '+49%', isPositive: true },
        { label: 'Monthly Growth', before: 'Flat / Erratic', after: 'Compounding', change: 'Record High', isPositive: true }
      ],
      approach: 'Built a 90-day roadmap from day one. Audited and optimized top SKUs for conversion, stabilized advertising for consistent returns, and ran monthly strategy reviews.',
      services: ['90-Day Roadmap', 'Full Catalog Audit', 'PPC Restructure', 'A+ Content', 'Monthly Strategy']
    },
    {
      id: 'cs7',
      category: 'listing',
      badge: 'Baby Supplement Brand · 10X Purchase Dominance',
      title: '16 Purchases a Week. Then 161. From One Keyword Alone.',
      context: 'Amazon Search Query Performance report proved category dominance on their primary keyword, jumping from 16 weekly purchases to 161 in 5 months.',
      metrics: [
        { label: 'Weekly Purchases', before: '16/wk', after: '161/wk', change: '+906%', isPositive: true },
        { label: 'Purchase Share', before: '1.17%', after: '9.62%', change: '+723%', isPositive: true },
        { label: 'Keyword Clicks', before: '95', after: '516', change: '+443%', isPositive: true }
      ],
      approach: 'Reverse-engineered competitor search term share using SQP. Rewrote listings to mirror buyer queries, updated main image for search CTR, and pushed rank-building exact match PPC.',
      services: ['SQP Strategy', 'SEO Rewrite', 'Main Image CTR', 'Rank-Building PPC']
    },
    {
      id: 'cs8',
      category: 'full-account',
      badge: 'Enterprise Seller · Profitability Turnaround',
      title: 'Client Asked for Profitability. We Delivered $87K More.',
      context: 'Over $1.8M in quarterly sales, but net profit was declining 31% YoY due to ad waste. We reversed the trend, increasing net profit while reducing ad costs by $34,000.',
      metrics: [
        { label: 'Net Profit', before: '$697,575', after: '$784,952', change: '+$87K', isPositive: true },
        { label: 'Profit Trend YoY', before: '−31.4%', after: '+12.5%', change: '+43.9pp', isPositive: true },
        { label: 'Ad Cost Saved', before: '$111,241', after: '$77,217', change: '−$34K waste', isPositive: true }
      ],
      approach: 'Conducted SKU-level profitability audit. Reallocated budget away from low-margin items, focused ad spend on top contribution margin SKUs, and eliminated non-converting search terms.',
      services: ['Profitability Audit', 'Margin Allocation', 'SKU-Level ACOS', 'Waste Elimination']
    }
  ]

  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === filter)

  return (
    <div className="results-page">
      {/* Hero Section */}
      <section className="results-hero">
        <div className="results-hero-glow"></div>
        <div className="container relative z-10 text-center">
          <div className="results-kicker">Proven Results</div>
          <h1>
            Numbers That Move<br />
            <span className="accent-teal">Decisions.</span>
          </h1>
          <p className="results-hero-sub">
            Real results from real Amazon accounts. Every case study below is backed by authentic Seller Central data, transparent before-and-after metrics, and verified outcomes.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-solid btn-large">
              Get Your Free Account Audit →
            </Link>
          </div>

          {/* Aggregate Stats */}
          <div className="results-stats-row">
            <div className="res-stat-card">
              <div className="num">$28M+</div>
              <div className="lbl">Client Revenue Generated</div>
            </div>
            <div className="res-stat-card">
              <div className="num">2,000+</div>
              <div className="lbl">Products Optimized</div>
            </div>
            <div className="res-stat-card">
              <div className="num">$1M+</div>
              <div className="lbl">Monthly Ad Spend Managed</div>
            </div>
            <div className="res-stat-card">
              <div className="num">5+ Yrs</div>
              <div className="lbl">Amazon Specialization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">Case Studies</div>
            <h2>Real Accounts. Real Proof. Real Numbers.</h2>
            <p className="section-sub-text">
              Filter case studies by focus area to see how we tackle growth, efficiency, and full-catalog scaling.
            </p>

            {/* Filter Tabs */}
            <div className="filter-pills">
              <button 
                className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Case Studies ({caseStudies.length})
              </button>
              <button 
                className={`filter-pill ${filter === 'ppc' ? 'active' : ''}`}
                onClick={() => setFilter('ppc')}
              >
                PPC & Advertising
              </button>
              <button 
                className={`filter-pill ${filter === 'listing' ? 'active' : ''}`}
                onClick={() => setFilter('listing')}
              >
                Listing & CTR Optimization
              </button>
              <button 
                className={`filter-pill ${filter === 'full-account' ? 'active' : ''}`}
                onClick={() => setFilter('full-account')}
              >
                Full Account Scaling
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="case-studies-grid">
            {filteredStudies.map((cs) => (
              <article className="cs-card" key={cs.id}>
                <div className="cs-top-bar">
                  <span className="cs-badge">{cs.badge}</span>
                </div>
                <h3 className="cs-title">{cs.title}</h3>
                <p className="cs-context">{cs.context}</p>

                {/* Metrics Table / Grid */}
                <div className="cs-metrics-grid">
                  {cs.metrics.map((m, idx) => (
                    <div className="metric-box" key={idx}>
                      <div className="metric-label">{m.label}</div>
                      <div className="metric-row">
                        <span className="metric-before">{m.before}</span>
                        <span className="metric-arrow">→</span>
                        <span className="metric-after">{m.after}</span>
                      </div>
                      <div className={`metric-delta ${m.isPositive ? 'positive' : 'negative'}`}>
                        {m.change}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cs-footer">
                  <div className="cs-approach">
                    <strong>What We Did:</strong> {cs.approach}
                  </div>
                  <div className="cs-tags">
                    {cs.services.map((s, idx) => (
                      <span className="cs-tag" key={idx}>{s}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trustpilot Reviews */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">Client Feedback</div>
            <h2>What Brand Owners Say About CommerceKind</h2>
            <div className="tp-verified-badge">
              <span className="tp-stars">★★★★★</span>
              <span>Rated Excellent on Trustpilot</span>
            </div>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p>
                "We've worked with several Amazon agencies before, but CommerceKind stands out. They share a clear monthly plan of action in advance, which keeps everything aligned and accountable. Practical and data-driven."
              </p>
              <div className="review-author">
                <strong>Nancy Dunbar</strong>
                <span>Private Label Brand · United States</span>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p>
                "The experience with CommerceKind and Hamza has been absolutely incredible. Hamza is the first agency who actually delivered what they promised. Every decision is calculated and well executed."
              </p>
              <div className="review-author">
                <strong>Gregory Brauser</strong>
                <span>Brand Owner · United States</span>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p>
                "Hamza and his team are extremely knowledgeable, responsive and have helped us across so many areas of our Amazon business. We saw incredible results in only a few weeks. A true extension of our team!"
              </p>
              <div className="review-author">
                <strong>Tricia</strong>
                <span>Brand Partner · United States</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Banner */}
      <section className="results-cta-banner">
        <div className="container text-center">
          <h2>Want Results Like These for Your Brand?</h2>
          <p>
            Start with a free Amazon account audit. We'll show you exactly where your budget is leaking and what a proper strategy looks like.
          </p>
          <div className="cta-btn-wrap">
            <Link to="/contact" className="btn btn-solid btn-large">
              Get Your Free Account Audit →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .results-page {
          background: #f7faf9;
          color: #0b1722;
        }

        .results-hero {
          position: relative;
          background: #071723;
          color: #ffffff;
          padding: 120px 24px 80px;
          overflow: hidden;
        }

        .results-hero-glow {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 500px;
          background: radial-gradient(circle, rgba(19, 185, 168, 0.22) 0%, transparent 70%);
          pointer-events: none;
        }

        .results-kicker {
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

        .results-hero h1 {
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

        .results-hero-sub {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.78);
          max-width: 720px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        .results-stats-row {
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

        .res-stat-card .num {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 850;
          color: var(--teal);
        }

        .res-stat-card .lbl {
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 4px;
        }

        .case-studies-section {
          padding: 80px 24px;
        }

        .filter-pills {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .filter-pill {
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 700;
          background: #ffffff;
          border: 1px solid var(--line);
          color: #52606d;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-pill:hover {
          border-color: var(--teal);
          color: #071723;
        }

        .filter-pill.active {
          background: #071723;
          color: #ffffff;
          border-color: #071723;
        }

        .case-studies-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
          max-width: 1080px;
          margin: 40px auto 0;
        }

        .cs-card {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 36px 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.03);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .cs-card:hover {
          border-color: rgba(19, 185, 168, 0.5);
        }

        .cs-top-bar {
          margin-bottom: 12px;
        }

        .cs-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #0c8b7e;
          background: rgba(19, 185, 168, 0.12);
          padding: 4px 12px;
          border-radius: 6px;
        }

        .cs-title {
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          font-weight: 850;
          color: #071723;
          margin: 0 0 10px;
          line-height: 1.3;
        }

        .cs-context {
          font-size: 15px;
          color: #52606d;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .cs-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 12px;
          background: #f7faf9;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 24px;
          border: 1px solid var(--line);
        }

        .metric-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .metric-label {
          font-size: 12px;
          font-weight: 700;
          color: #62727d;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .metric-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .metric-before {
          color: #8c9ba5;
          text-decoration: line-through;
        }

        .metric-arrow {
          color: #62727d;
          font-size: 12px;
        }

        .metric-after {
          font-weight: 800;
          color: #071723;
        }

        .metric-delta {
          font-size: 13px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .metric-delta.positive {
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
        }

        .metric-delta.negative {
          background: rgba(239, 68, 68, 0.12);
          color: #dc2626;
        }

        .cs-footer {
          border-top: 1px solid var(--line);
          padding-top: 20px;
        }

        .cs-approach {
          font-size: 14px;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .cs-tag {
          font-size: 12px;
          font-weight: 650;
          color: #071723;
          background: #edf2f0;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .reviews-section {
          padding: 80px 24px;
          background: #ffffff;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .tp-verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #071723;
          margin-top: 8px;
        }

        .tp-stars {
          color: #00b67a;
          letter-spacing: 2px;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          max-width: 1080px;
          margin: 40px auto 0;
        }

        .review-card {
          background: #f7faf9;
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 28px;
        }

        .review-stars {
          color: #00b67a;
          font-size: 18px;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }

        .review-card p {
          font-size: 14.5px;
          color: #48575f;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .review-author strong {
          display: block;
          font-size: 14.5px;
          color: #071723;
        }

        .review-author span {
          font-size: 12.5px;
          color: #62727d;
        }

        .results-cta-banner {
          background: #071723;
          color: #ffffff;
          padding: 70px 24px;
        }

        .results-cta-banner h2 {
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 850;
          margin-bottom: 12px;
        }

        .results-cta-banner p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.75);
          max-width: 600px;
          margin: 0 auto 28px;
        }

        @media (max-width: 900px) {
          .results-stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .cs-card {
            padding: 24px 20px;
          }
        }

        @media (max-width: 600px) {
          .results-stats-row {
            grid-template-columns: 1fr;
          }
          .cs-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}
