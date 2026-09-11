const steps = [
  { num: '01', title: 'Discover', desc: 'Find the real opportunities.' },
  { num: '02', title: 'Build', desc: 'Assign the right team.' },
  { num: '03', title: 'Execute', desc: 'Own the weekly work.' },
  { num: '04', title: 'Scale', desc: 'Compound what works.' },
]

export default function ProcessSection() {
  return (
    <section className="dark">
      <div className="container">
        <div className="eyebrow">How we work</div>
        <h2>Simple Process.<br />Clear Ownership.</h2>
        <div className="process">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <strong>{s.num}</strong>
              <b>{s.title}</b>
              <span>{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
