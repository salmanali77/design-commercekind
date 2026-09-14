import { useState, useEffect, useRef } from 'react'
import { trustData } from '../../data/trustData'

const TrustpilotStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ display: 'inline-block' }}>
    <path d="M12 2l2.64 7.63h8.04l-6.5 4.72 2.48 7.63L12 17.46l-6.66 4.72 2.48-7.63-6.5-4.72h8.04L12 2z" fill="#00b67a" />
    <path d="M14.64 9.63l3.98 12.35-6.62-4.72L14.64 9.63z" fill="#005128" />
  </svg>
)

export default function TrustSection() {
  const { eyebrow, headline, headlineLine2, lead, reviews } = trustData
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const isHoveredRef = useRef(false)

  // Auto-cycle reviews every 5 seconds
  useEffect(() => {
    if (!reviews || reviews.length <= 1) return

    const interval = setInterval(() => {
      if (!isHoveredRef.current) {
        setIsFading(true)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % reviews.length)
          setIsFading(false)
        }, 220)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [reviews])

  const goToReview = (idx) => {
    if (idx === currentIndex) return
    setIsFading(true)
    setTimeout(() => {
      setCurrentIndex(idx)
      setIsFading(false)
    }, 200)
  }

  const currentReview = reviews?.[currentIndex] || {}

  return (
    <section className="trust-section" id="trust">
      <div className="container">
        <div className="trust-wrap">
          <div className="trust-text-col">
            <div className="eyebrow">{eyebrow}</div>
            <h2>
              {headline}<br />
              {headlineLine2}
            </h2>
            <p className="lead">{lead}</p>
          </div>

          <div
            className="trust-card"
            onMouseEnter={() => { isHoveredRef.current = true }}
            onMouseLeave={() => { isHoveredRef.current = false }}
          >
            <div className="trust-card-header">
              <div className="stars-row">
                {[...Array(currentReview.stars || 5)].map((_, i) => (
                  <TrustpilotStar key={i} />
                ))}
              </div>
              <div className="review-counter">
                {currentIndex + 1} / {reviews.length}
              </div>
            </div>

            <div className={`quote-container${isFading ? ' is-fading' : ''}`}>
              <div className="quote-mark">“</div>
              <p className="quote">{currentReview.quote}</p>
            </div>

            <div className={`reviewer${isFading ? ' is-fading' : ''}`}>
              <div className="reviewer-info">
                <b>{currentReview.name}</b>
                <small>{currentReview.role}</small>
              </div>
              <div className="tp-badge">
                <TrustpilotStar />
                <span className="tp-text">Trustpilot</span>
              </div>
            </div>

            {/* Auto-Slide Indicator Dots */}
            <div className="review-dots">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-btn${idx === currentIndex ? ' active' : ''}`}
                  onClick={() => goToReview(idx)}
                  aria-label={`View review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .trust-section {
          padding: 85px 0 80px;
          background: #ffffff;
        }

        .trust-wrap {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 60px;
          align-items: center;
        }

        .trust-text-col h2 {
          font-family: var(--display), sans-serif;
          font-size: clamp(32px, 3.8vw, 48px);
          font-weight: 850;
          line-height: 1.08;
          color: #0b1722;
          letter-spacing: -0.035em;
          margin-top: 8px;
        }

        .trust-text-col .lead {
          margin-top: 18px;
          font-size: 17px;
          line-height: 1.55;
          color: #52636c;
          max-width: 460px;
        }

        .trust-card {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 28px;
          padding: 38px 36px 30px;
          box-shadow: 0 16px 45px -10px rgba(8, 26, 39, 0.08);
          position: relative;
          min-height: 290px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.25s, box-shadow 0.25s;
        }

        .trust-card:hover {
          border-color: #c0d5d1;
          box-shadow: 0 20px 50px -10px rgba(8, 26, 39, 0.12);
        }

        .trust-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .review-counter {
          font-size: 11.5px;
          font-weight: 750;
          color: #8b99a2;
          font-family: var(--mono), monospace;
          background: #f1f5f4;
          padding: 3px 9px;
          border-radius: 999px;
        }

        .quote-container {
          position: relative;
          transition: opacity 0.22s ease, transform 0.22s ease;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .quote-container.is-fading,
        .reviewer.is-fading {
          opacity: 0;
          transform: translateY(4px);
        }

        .quote-mark {
          font-family: Georgia, serif;
          font-size: 42px;
          line-height: 1;
          color: var(--teal);
          opacity: 0.45;
          margin-bottom: -10px;
        }

        .trust-card .quote {
          font-family: var(--display), sans-serif;
          font-size: 21px;
          line-height: 1.4;
          font-weight: 750;
          color: #0b1722;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .trust-card .reviewer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid #edf2f1;
          transition: opacity 0.22s ease;
        }

        .reviewer-info b {
          display: block;
          font-size: 15px;
          font-weight: 800;
          color: #0b1722;
        }

        .reviewer-info small {
          display: block;
          font-size: 12.5px;
          color: #6a7c85;
          margin-top: 2px;
        }

        .tp-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f4faf8;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid #e1f2ee;
        }

        .tp-text {
          font-weight: 850;
          font-size: 12.5px;
          color: #00875a;
        }

        .review-dots {
          display: flex;
          justify-content: center;
          gap: 7px;
          margin-top: 20px;
        }

        .dot-btn {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: none;
          background: #d4e0dd;
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
        }

        .dot-btn.active {
          width: 24px;
          background: var(--teal);
        }

        /* Mobile View Optimization */
        @media (max-width: 900px) {
          .trust-section {
            padding: 55px 0 45px !important;
          }

          .trust-wrap {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }

          .trust-text-col {
            text-align: left;
          }

          .trust-text-col h2 {
            font-size: clamp(25px, 6.8vw, 34px) !important;
          }

          .trust-text-col .lead {
            font-size: 15px !important;
            margin-top: 12px !important;
          }
        }

        @media (max-width: 600px) {
          .trust-section {
            padding: 45px 0 35px !important;
          }

          .trust-section .container {
            width: calc(100% - 32px) !important;
            padding: 0 !important;
          }

          .trust-card {
            padding: 22px 18px 18px !important;
            border-radius: 20px !important;
            min-height: auto !important;
          }

          .quote-mark {
            font-size: 32px !important;
            margin-bottom: -6px !important;
          }

          .trust-card .quote {
            font-size: 16px !important;
            line-height: 1.45 !important;
            font-weight: 700 !important;
          }

          .trust-card .reviewer {
            margin-top: 16px !important;
            padding-top: 14px !important;
          }

          .reviewer-info b {
            font-size: 14px !important;
          }

          .reviewer-info small {
            font-size: 11.5px !important;
          }

          .tp-badge {
            padding: 4px 9px !important;
          }

          .tp-text {
            font-size: 11.5px !important;
          }

          .review-dots {
            margin-top: 14px !important;
          }
        }
      `}</style>
    </section>
  )
}
