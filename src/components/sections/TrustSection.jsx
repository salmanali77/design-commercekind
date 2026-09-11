export default function TrustSection() {
  return (
    <section>
      <div className="container trust-wrap">
        <div>
          <div className="eyebrow">What clients say</div>
          <h2>Don't Take Our Word For It.</h2>
        </div>
        <div className="trust-card">
          <div className="stars">★★★★★</div>
          <p className="quote">"They don't just run ads. They think like owners. That's the difference."</p>
          <div className="reviewer">
            <div><b>Verified Client</b><br /><span style={{ fontSize: '12px', color: 'var(--muted)' }}>Trustpilot review</span></div>
            <span className="tp">Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  )
}
