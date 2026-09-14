import { closingData } from '../../data/closingData'

export default function ClosingSection() {
  const { headline, description, primaryBtn, secondaryBtn } = closingData

  return (
    <section className="closing">
      <div className="container">
        <div className="closing-box">
          <h2>{headline}</h2>
          <p>{description}</p>
          <div className="btns">
            <a className="btn primary" href={primaryBtn.href}>{primaryBtn.label}</a>
            <a className="btn secondary" href={secondaryBtn.href}>{secondaryBtn.label}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
