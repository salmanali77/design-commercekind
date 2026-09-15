import { useState, useEffect } from 'react'
import { resultsData } from '../../data/resultsData'

const SLIDE_DURATION = 4500 // 4.5 seconds per auto slide

export default function ResultsSection() {
  const [activeCase, setActiveCase] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const { eyebrow, lead, cases } = resultsData
  const current = cases[activeCase] || cases[0]

  // Auto-slide effect with progress tracking
  useEffect(() => {
    if (isPaused) return

    const intervalTime = 50
    const step = (intervalTime / SLIDE_DURATION) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveCase((curr) => (curr + 1) % cases.length)
          return 0
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isPaused, cases.length])

  const selectCase = (index) => {
    setActiveCase(index)
    setProgress(0)
  }

  const nextCase = () => {
    setActiveCase((curr) => (curr + 1) % cases.length)
    setProgress(0)
  }

  const prevCase = () => {
    setActiveCase((curr) => (curr - 1 + cases.length) % cases.length)
    setProgress(0)
  }

  return (
    <section className="dark gridbg" id="results">
      <div className="container">
        {/* Section Heading */}
        <div className="results-head">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="before-after-heading">
              BEFORE &amp; AFTER:{' '}
              <span className="orange-stroke-wrapper">
                REAL CREATIVE
                <svg
                  className="orange-curved-underline"
                  viewBox="0 0 240 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 14C60 25 180 25 236 10"
                    stroke="#FF6B00"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              AND PPC RESULTS
            </h2>
          </div>
          <p className="lead">{lead}</p>
        </div>

        {/* Interactive Result Box with Auto-Slide */}
        <div
          className="result-box"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Metrics & Navigation Tabs */}
          <div className="result-metrics-col">
            <div className="result-tag-pill">{current.tag}</div>

            <div className="metric animated-metric" key={`m-${activeCase}`}>
              {current.metric}
            </div>

            <div
              className="metric-copy animated-copy"
              key={`c-${activeCase}`}
              dangerouslySetInnerHTML={{ __html: current.copy }}
            />

            <div className="case-tabs">
              {cases.map((tab, i) => {
                const isActive = activeCase === i
                return (
                  <button
                    key={i}
                    className={`case-tab${isActive ? ' active' : ''}`}
                    onClick={() => selectCase(i)}
                    aria-label={`View ${tab.label}`}
                  >
                    <span className="tab-label-text">{tab.label}</span>
                    {isActive && (
                      <div className="tab-progress-track">
                        <div
                          className="tab-progress-bar"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Quick slide navigation controls */}
            <div className="slider-controls-row">
              <button
                type="button"
                className="slide-arrow-btn"
                onClick={prevCase}
                aria-label="Previous result"
                title="Previous result"
              >
                &larr;
              </button>
              <div className="slide-dots">
                {cases.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    className={`slide-dot${activeCase === dotIdx ? ' active' : ''}`}
                    onClick={() => selectCase(dotIdx)}
                    aria-label={`Jump to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                className="slide-arrow-btn"
                onClick={nextCase}
                aria-label="Next result"
                title="Next result"
              >
                &rarr;
              </button>
              <span className="slide-counter-badge">
                0{activeCase + 1} / 0{cases.length}
              </span>
            </div>
          </div>

          {/* Right Showcase Image Card */}
          <div className="seller">
            <div className="seller-header-bar">
              <div className="seller-live-indicator">
                <span className="pulse-dot" />
                <span className="seller-source-text">{current.source}</span>
              </div>
              <span className="seller-verified-badge">&#10003; Verified Performance</span>
            </div>

            <div className="seller-img-container" key={`img-${activeCase}`}>
              <img
                id="sellerImg"
                src={current.img}
                alt={current.title || 'Amazon Performance Result'}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .before-after-heading {
          font-size: clamp(28px, 4.5vw, 48px);
          font-weight: 900;
          letter-spacing: -0.035em;
          line-height: 1.15;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }

        .orange-stroke-wrapper {
          position: relative;
          display: inline-block;
          white-space: nowrap;
          color: #ffffff;
        }

        .orange-curved-underline {
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 100%;
          height: 14px;
          pointer-events: none;
          filter: drop-shadow(0 2px 6px rgba(255, 107, 0, 0.4));
        }

        .result-tag-pill {
          display: inline-flex;
          align-items: center;
          background: rgba(19, 185, 168, 0.15);
          color: var(--teal);
          border: 1px solid rgba(19, 185, 168, 0.3);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 12px;
          margin-bottom: 12px;
        }

        .animated-metric {
          animation: resultSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animated-copy {
          animation: resultSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .seller-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 10px;
          margin-bottom: 8px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .seller-live-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 rgba(16, 185, 129, 0.5);
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .seller-source-text {
          font-size: 12px;
          font-weight: 750;
          color: #334155;
          letter-spacing: 0.02em;
        }

        .seller-verified-badge {
          font-size: 11px;
          font-weight: 700;
          color: #0d9488;
          background: rgba(13, 148, 136, 0.1);
          padding: 3px 8px;
          border-radius: 6px;
        }

        .seller-img-container {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          animation: resultImageFade 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes resultImageFade {
          from {
            opacity: 0.3;
            transform: scale(0.985);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes resultSlideIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .case-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 26px;
        }

        .case-tab {
          position: relative;
          border: 1.5px solid #284452;
          background: #0e2b39;
          color: #a8bac1;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
          overflow: hidden;
          text-align: left;
        }

        .case-tab:hover {
          border-color: var(--teal);
          color: #fff;
        }

        .case-tab.active {
          background: #123b4e;
          border-color: var(--teal);
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(19, 185, 168, 0.25);
        }

        .tab-progress-track {
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
        }

        .tab-progress-bar {
          height: 100%;
          background: var(--teal);
          transition: width 0.05s linear;
        }

        .slider-controls-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 22px;
        }

        .slide-arrow-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #0e2b39;
          border: 1px solid #284452;
          color: #a8bac1;
          display: grid;
          place-items: center;
          cursor: pointer;
          font-size: 14px;
          font-weight: 800;
          transition: all 0.2s ease;
        }

        .slide-arrow-btn:hover {
          background: var(--teal);
          border-color: var(--teal);
          color: #071723;
        }

        .slide-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .slide-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #284452;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
        }

        .slide-dot.active {
          width: 22px;
          border-radius: 999px;
          background: var(--teal);
        }

        .slide-counter-badge {
          font-size: 11.5px;
          font-weight: 750;
          color: #718996;
          letter-spacing: 0.05em;
          margin-left: auto;
        }

        @media (max-width: 960px) {
          .result-box {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .case-tabs {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .before-after-heading {
            font-size: 24px !important;
            line-height: 1.25 !important;
          }
          .orange-curved-underline {
            bottom: -6px;
            height: 10px;
          }
          .case-tabs {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .seller {
            padding: 8px !important;
          }
          .seller-header-bar {
            padding-bottom: 6px;
            margin-bottom: 6px;
          }
        }
      `}</style>
    </section>
  )
}
