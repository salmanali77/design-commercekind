const capabilities = [
  { icon: '📊', title: 'PPC & Advertising', desc: 'Full-funnel ad management' },
  { icon: '📝', title: 'Listing Optimization', desc: 'Content that converts' },
  { icon: '📦', title: 'Catalog Strategy', desc: 'Product architecture' },
  { icon: '📈', title: 'Growth Strategy', desc: 'Data-driven roadmaps' },
  { icon: '🔍', title: 'SEO & Ranking', desc: 'Organic visibility' },
  { icon: '🎯', title: 'Launch Execution', desc: 'New product launches' },
]

export default function CapabilitiesSection() {
  return (
    <section id="services">
      <div className="container">
        <div className="eyebrow">What we do</div>
        <h2>Full-Stack Marketplace Execution.</h2>
        <div className="cap-grid">
          {capabilities.map((cap, i) => (
            <div className="cap" key={i}>
              <div className="ico">{cap.icon}</div>
              <h3>{cap.title}</h3>
              <span>{cap.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
