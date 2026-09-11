export default function OfficeSection() {
  return (
    <section id="about">
      <div className="container office-grid">
        <div>
          <div className="eyebrow">Who we are</div>
          <h2>Built for Brands That Want More.</h2>
          <p className="lead" style={{ marginTop: '16px' }}>
            CommerceKind is a full-service marketplace growth agency.
            We combine advertising, content, catalog optimization, and strategic execution
            into a single team that takes real ownership of your business.
          </p>
        </div>
        <div className="office-video">
          <video autoPlay muted loop playsInline>
            <source src="/assets/office.mp4" type="video/mp4" />
          </video>
          <div className="office-inner">
            <div className="play">▶</div>
          </div>
          <div className="office-tags">
            <span>US-Based</span>
            <span>Florida</span>
            <span>Full-Service</span>
          </div>
        </div>
      </div>
    </section>
  )
}
