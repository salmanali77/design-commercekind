import { trustData } from '../../data/trustData'

export default function TrustSection() {
  const { eyebrow, headline, headlineLine2, lead, review } = trustData

  return (
    <section>
      <div className="container">
        <div className="trust-wrap">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2>{headline}<br />{headlineLine2}</h2>
            <p className="lead" style={{ marginTop: '18px' }}>{lead}</p>
          </div>

          <div className="trust-card">
            <div className="stars">
              {'★'.repeat(review.stars)}
            </div>
            <div className="quote">{review.quote}</div>
            <div className="reviewer">
              <div>
                <b>{review.name}</b><br />
                <small style={{ color: 'var(--muted)' }}>{review.role}</small>
              </div>
              <span className="tp">{review.trustpilot}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
