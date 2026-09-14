import { processData } from '../../data/processData'

export default function ProcessSection() {
  const { eyebrow, headline, steps } = processData

  return (
    <section className="dark gridbg">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{headline}</h2>

        <div className="process">
          {steps.map((step, i) => (
            <div className="step" key={i}>
              <strong>{step.num}</strong>
              <b>{step.title}</b>
              <span>{step.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
