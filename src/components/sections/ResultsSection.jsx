import { useState } from 'react'
import cases from '../../casesData'
import { resultsData } from '../../data/resultsData'

export default function ResultsSection() {
  const [activeCase, setActiveCase] = useState(0)
  const { eyebrow, headline, headlineLine2, lead } = resultsData
  const current = cases[activeCase] || cases[0]

  const tabs = [
    { label: '01 Growth', i: 0 },
    { label: '02 Efficiency', i: 1 },
    { label: '03 Momentum', i: 2 },
  ]

  return (
    <section className="dark gridbg" id="results">
      <div className="container">
        <div className="results-head">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2>{headline}<br />{headlineLine2}</h2>
          </div>
          <p className="lead">{lead}</p>
        </div>
        <div className="result-box">
          <div>
            <div className="metric" id="metric">{current.metric}</div>
            <div
              className="metric-copy"
              id="metricCopy"
              dangerouslySetInnerHTML={{ __html: current.copy }}
            />
            <div className="case-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.i}
                  className={`case-tab${activeCase === tab.i ? ' active' : ''}`}
                  data-i={tab.i}
                  onClick={() => setActiveCase(tab.i)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="seller">
            <img id="sellerImg" src={current.img} alt="Seller Central" />
            <span className="source">Amazon Seller Central</span>
          </div>
        </div>
      </div>
    </section>
  )
}
