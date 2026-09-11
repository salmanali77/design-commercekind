export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow-purple"></div>
      <div className="floating-dots">
        <div className="dot purple" style={{ top: '15%', left: '10%', animationDelay: '0s' }}></div>
        <div className="dot green" style={{ top: '75%', left: '15%', animationDelay: '1.5s' }}></div>
        <div className="dot purple" style={{ top: '45%', left: '85%', animationDelay: '3s' }}></div>
        <div className="dot green" style={{ top: '85%', left: '75%', animationDelay: '0.8s' }}></div>
        <div className="dot purple" style={{ top: '10%', left: '60%', animationDelay: '2.2s' }}></div>
        <div className="dot green" style={{ top: '50%', left: '35%', animationDelay: '4.1s' }}></div>
        <div className="dot purple" style={{ top: '90%', left: '45%', animationDelay: '1.2s' }}></div>
        <div className="dot green" style={{ top: '30%', left: '80%', animationDelay: '2.5s' }}></div>
        <div className="dot purple" style={{ top: '65%', left: '5%', animationDelay: '3.8s' }}></div>
        <div className="dot green" style={{ top: '25%', left: '90%', animationDelay: '0.4s' }}></div>
        <div className="dot purple" style={{ top: '55%', left: '55%', animationDelay: '1.9s' }}></div>
        <div className="dot green" style={{ top: '80%', left: '25%', animationDelay: '4.5s' }}></div>
      </div>
      <div className="mark-bg">
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth=".55">
          <rect x="160" y="160" width="80" height="80" transform="rotate(45 200 200)"></rect>
          <rect x="120" y="120" width="160" height="160" transform="rotate(45 200 200)"></rect>
          <rect x="80" y="80" width="240" height="240" transform="rotate(45 200 200)"></rect>
          <rect x="40" y="40" width="320" height="320" transform="rotate(45 200 200)"></rect>
          <rect x="4" y="4" width="392" height="392" transform="rotate(45 200 200)"></rect>
        </svg>
      </div>
      <div className="veil"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="eyebrow">Ecommerce growth, with ownership</div>
          <h1>We Don't Just Manage.<br /><span>We Take Ownership.</span></h1>
          <p className="hero-sub">No chasing. No handoffs. Just a team that owns the work — from Amazon to Walmart to TikTok Shop.</p>
          <div className="hero-btns">
            <a className="btn primary" href="#contact">Get a Growth Audit</a>
            <a className="btn secondary" href="#agencies">For Agency Partners</a>
          </div>

          {/* Credibility Badges */}
          <div className="cred-badges-row">
            <div className="cred-card">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <div className="badge-title">Trustpilot 5/5</div>
              <div className="badge-subtitle">CUSTOMER RATED</div>
            </div>
            <div className="cred-card">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <div className="badge-title">Top Rated Agency</div>
              <div className="badge-subtitle">FLORIDA 2024</div>
            </div>
            <div className="cred-card">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <div className="badge-title">Ads Partner</div>
              <div className="badge-subtitle">AMAZON VERIFIED</div>
            </div>
            <div className="cred-card">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <div className="badge-title">Featured Company</div>
              <div className="badge-subtitle">AMAZON NETWORK</div>
            </div>
          </div>

          {/* Authority Bar - Additional Hero Content */}
          <div className="authority-bar">
            <div className="authority-item">
              <span className="authority-label">Trusted by</span>
              <span className="authority-value">50+</span>
              <span className="authority-desc">Brands Worldwide</span>
            </div>
            <div className="authority-divider"></div>
            <div className="authority-item">
              <span className="authority-label">Managed</span>
              <span className="authority-value">$12M+</span>
              <span className="authority-desc">Ad Spend Annually</span>
            </div>
            <div className="authority-divider"></div>
            <div className="authority-item">
              <span className="authority-label">Average</span>
              <span className="authority-value">3.2x</span>
              <span className="authority-desc">ROAS Improvement</span>
            </div>
            <div className="authority-divider"></div>
            <div className="authority-item">
              <span className="authority-label">Based in</span>
              <span className="authority-value">Florida</span>
              <span className="authority-desc">US-Based Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
