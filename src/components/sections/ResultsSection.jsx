import { useState } from 'react'
import casesData from '../../casesData'

const cases = [
  { metric: '+20%', copy: 'Sales growth', bold: 'Profit +36%', label: '01 Growth' },
  { metric: '-41%', copy: 'Lower ACoS', bold: 'ROAS +58%', label: '02 Efficiency' },
  { metric: '+114%', copy: 'Organic rank uplift', bold: 'Revenue 2.1×', label: '03 Momentum' },
]

export default function ResultsSection() {
  const [activeCase, setActiveCase] = useState(0)
  const current = cases[activeCase]

  // Try to get case image from casesData, fallback to placeholder
  const caseImage = casesData?.[activeCase]?.img || null

  return (
    <section className="dark gridbg" id="results">
      <div className="container">
        <div className="results-head">
          <div>
            <div className="eyebrow">Proof, not promises</div>
            <h2>Real Accounts.<br />Real Growth.</h2>
          </div>
          <p className="lead">No vanity metrics. See what actually changed.</p>
        </div>
        <div className="result-box">
          <div className="result-info">
            <div className="metric-badge">
              LIVE RESULTS
            </div>
            <div className="metric">{current.metric}</div>
            <div className="metric-copy">{current.copy}<br /><b>{current.bold}</b></div>
            <div className="case-tabs">
              {cases.map((c, i) => (
                <button
                  key={i}
                  className={`case-tab${i === activeCase ? ' active' : ''}`}
                  onClick={() => setActiveCase(i)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
          <div className="seller">
            {caseImage ? (
              <img src={caseImage} alt="Case study screenshot" />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: '#65d6c9', fontSize: '14px', fontWeight: 700 }}>
                Amazon Seller Central Dashboard
              </div>
            )}
            <span className="source">Source: Amazon Seller Central</span>
          </div>
        </div>
      </div>
    </section>
  )
}
