import { useState } from 'react'
import { faqData } from '../../data/faqData'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1)
  const { eyebrow, headline, lead, items } = faqData

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <section>
      <div className="container">
        <div className="faq-grid">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2>{headline}</h2>
            <p className="lead" style={{ marginTop: '18px' }}>{lead}</p>
          </div>

          <div className="faq-list">
            {items.map((item, i) => (
              <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => toggle(i)}>
                  {item.q}
                  <i>+</i>
                </button>
                <div className="faq-a">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
