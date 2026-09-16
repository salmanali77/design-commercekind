import { useState, useCallback } from 'react'
import { heroData } from '../../data/heroData'

const BadgeIcon = ({ type }) => {
  if (type === 'trustpilot') {
    return (
      <svg className="badge-icon" viewBox="0 0 24 24" fill="none" style={{ width: '34px', height: '34px' }}>
        {/* Authentic Trustpilot 5-point Star with Signature Cut */}
        <path d="M12 2l2.64 7.63h8.04l-6.5 4.72 2.48 7.63L12 17.46l-6.66 4.72 2.48-7.63-6.5-4.72h8.04L12 2z" fill="var(--teal)" />
        <path d="M14.64 9.63l3.98 12.35-6.62-4.72L14.64 9.63z" fill="#0c8b7e" />
      </svg>
    )
  }

  if (type === 'clutch') {
    return (
      <svg className="badge-icon" viewBox="0 0 24 24" fill="none" style={{ width: '34px', height: '34px' }}>
        {/* Authentic Clutch 'C •' Logo Mark */}
        <path d="M11.5 3.5C6.8 3.5 3 7.3 3 12s3.8 8.5 8.5 8.5c3.2 0 6-1.8 7.4-4.4l-2.7-1.4c-.9 1.7-2.7 2.8-4.7 2.8-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5c2 0 3.8 1.1 4.7 2.8l2.7-1.4C17.5 5.3 14.7 3.5 11.5 3.5z" fill="var(--teal)" />
        <circle cx="19.2" cy="12" r="2.6" fill="var(--teal)" />
      </svg>
    )
  }

  if (type === 'amazon-ads') {
    return (
      <svg className="badge-icon" viewBox="0 0 24 24" fill="none" style={{ width: '34px', height: '34px' }}>
        {/* Authentic Amazon lowercase 'a' */}
        <path
          d="M13.8 7.5c-.2-1.5-1.1-2.2-2.6-2.2-1.6 0-2.6.9-2.7 2.3h1.6c.1-.6.4-.9 1.1-.9.7 0 1 .4 1 1v.5l-1.6.2C8.6 8.5 7.5 9.2 7.5 10.6c0 1.2.9 2 2.1 2 1.1 0 1.9-.5 2.3-1.2v1.1h2v-5zm-1.7 3.3c-.3.5-.8.8-1.4.8-.7 0-1.1-.4-1.1-1 0-.8.6-1.2 1.5-1.3l1 .1v1.4z"
          fill="var(--ink)"
        />
        {/* Authentic Amazon Smile Curved Arc */}
        <path
          d="M4 15.2c4.2 3.4 10.8 3.4 15-1.1"
          stroke="var(--teal)"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        {/* Amazon Smile Pointed Arrowhead */}
        <polygon
          points="17.4,12.4 21.2,13.8 19.2,17"
          fill="var(--teal)"
        />
      </svg>
    )
  }

  if (type === 'amazon-network') {
    return (
      <svg className="badge-icon" viewBox="0 0 24 24" fill="none" style={{ width: '34px', height: '34px' }}>
        {/* Amazon Partner Network (APN) Verified Shield with Checkmark */}
        <path d="M12 2l8 3.5v6.5c0 5.2-3.4 9.8-8 11.2C7.4 21.8 4 17.2 4 12V5.5L12 2z" fill="rgba(19, 185, 168, 0.08)" stroke="var(--teal)" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8.5 11.8l2.5 2.5 4.8-4.8" stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return null
}

export default function HeroSection() {
  const { eyebrow, headline, headlineHighlight, subtext, primaryBtn, secondaryBtn, badges, dots } = heroData
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY, currentTarget } = e
    const rect = currentTarget.getBoundingClientRect()
    // Subtle relative movement from center (-0.5 to 0.5)
    const relX = (clientX - rect.left) / rect.width - 0.5
    const relY = (clientY - rect.top) / rect.height - 0.5
    // Bilkul minor parallax movement (~18px max)
    setMousePos({
      x: +(relX * 22).toFixed(1),
      y: +(relY * 22).toFixed(1),
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 })
  }, [])

  return (
    <section 
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-glow"></div>
      <div className="hero-glow-purple"></div>

      {/* Floating Dots */}
      <div className="floating-dots">
        {dots.map((dot, i) => (
          <div
            key={i}
            className={`dot ${dot.color}`}
            style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
          />
        ))}
      </div>

      {/* Rotating SVG Background Bars with subtle mouse parallax */}
      <div 
        className="mark-bg"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth=".55">
          <rect x="160" y="160" width="80" height="80" transform="rotate(45 200 200)" />
          <rect x="120" y="120" width="160" height="160" transform="rotate(45 200 200)" />
          <rect x="80" y="80" width="240" height="240" transform="rotate(45 200 200)" />
          <rect x="40" y="40" width="320" height="320" transform="rotate(45 200 200)" />
          <rect x="4" y="4" width="392" height="392" transform="rotate(45 200 200)" />
        </svg>
      </div>

      <div className="veil"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="eyebrow">{eyebrow}</div>
          <h1>
            {headline}<br />
            <span>{headlineHighlight}</span>
          </h1>
          <p className="hero-sub">{subtext}</p>

          <div className="hero-btns">
            <a className="btn primary" href={primaryBtn.href}>{primaryBtn.label}</a>
            <a className="btn secondary" href={secondaryBtn.href}>{secondaryBtn.label}</a>
          </div>

          {/* Credibility Badges with Authentic Logos */}
          <div className="cred-badges-row">
            {badges.map((badge, i) => (
              <div className="cred-card" key={i}>
                <BadgeIcon type={badge.icon} />
                <div className="badge-title">{badge.title}</div>
                <div className="badge-subtitle">{badge.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop: Featured Company must stay on one line */
        .cred-card .badge-title {
          white-space: nowrap !important;
        }

        /* Mobile Background Animation & Centering */
        @media (max-width: 768px) {
          .hero {
            min-height: 100vh !important;
            min-height: 100dvh !important;
            min-height: 100svh !important;
            padding: 82px 16px 36px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
            overflow: hidden !important;
            position: relative !important;
            box-sizing: border-box !important;
          }

          /* Centered and clearly visible rotating background on mobile */
          .mark-bg {
            position: absolute !important;
            inset: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            pointer-events: none !important;
            overflow: hidden !important;
            z-index: 1 !important;
          }

          .mark-bg svg {
            width: min(370px, 94vw) !important;
            height: min(370px, 94vw) !important;
            max-width: 94vw !important;
            max-height: 94vw !important;
            color: var(--teal) !important;
            stroke-width: 0.95px !important;
            stroke-opacity: 0.28 !important;
            transform-origin: 50% 50% !important;
            transform-box: fill-box !important;
            animation: spin 90s linear infinite !important;
            margin: auto !important;
          }

          .veil {
            opacity: 0.55 !important;
          }

          .floating-dots {
            overflow: hidden !important;
          }

          .hero-container {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
          }

          .hero-content {
            width: 100% !important;
            max-width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            margin: 0 auto !important;
          }

          .hero .eyebrow {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 12px !important;
            font-size: 11.5px !important;
          }

          .hero h1 {
            text-align: center !important;
            margin: 0 auto !important;
            font-size: clamp(2.1rem, 7.8vw, 2.9rem) !important;
            line-height: 1.08 !important;
            letter-spacing: -0.04em !important;
            max-width: 95% !important;
          }

          .hero-sub {
            text-align: center !important;
            margin: 14px auto 0 !important;
            font-size: 15px !important;
            line-height: 1.45 !important;
            max-width: 90% !important;
          }

          .hero-btns {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            flex-wrap: wrap !important;
            gap: 10px !important;
            margin-top: 22px !important;
            width: 100% !important;
          }

          .hero .btn {
            height: 46px !important;
            padding: 0 20px !important;
            font-size: 13.5px !important;
            width: auto !important;
            flex: 0 0 auto !important;
          }

          .cred-badges-row {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
            width: 100% !important;
            max-width: 360px !important;
            margin: 28px auto 0 !important;
            justify-content: center !important;
          }

          .cred-card {
            max-width: none !important;
            min-height: 110px !important;
            padding: 12px 8px !important;
            border-radius: 16px !important;
            background: #ffffff !important;
            border: 1px solid var(--line) !important;
            box-shadow: 0 4px 14px rgba(8, 26, 39, 0.04) !important;
          }

          .cred-card .badge-icon {
            width: 30px !important;
            height: 30px !important;
            margin-bottom: 6px !important;
          }

          .cred-card .badge-title {
            font-size: 12.5px !important;
            margin-bottom: 2px !important;
            white-space: nowrap !important;
          }

          .cred-card .badge-subtitle {
            font-size: 9.5px !important;
          }
        }
      `}</style>
    </section>
  )
}
