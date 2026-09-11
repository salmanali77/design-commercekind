import { useState } from 'react'

const faqs = [
  {
    q: 'Who actually works on my account?',
    a: 'A dedicated CommerceKind team. Strategy and execution stay with the specialists responsible for the work, not a mystery handoff after onboarding.',
  },
  {
    q: 'How do I know what your team is doing?',
    a: 'You get clear ownership, visible execution, and regular communication so you are not chasing for updates or wondering what changed.',
  },
  {
    q: 'Do you use the same playbook for every brand?',
    a: 'No. The strategy is built around your category, stage, economics, goals, and current account data.',
  },
  {
    q: 'Do you only manage advertising?',
    a: 'No. CommerceKind works across marketplace strategy, advertising, content, conversion, catalog, and ongoing execution.',
  },
  {
    q: 'Do you work with agencies too?',
    a: 'Yes. We support brands and agency partners, including white-label and client-facing delivery models.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState(-1)

  return (
    <section id="faq">
      <div className="container faq-grid">
        <div>
          <div className="eyebrow">Questions, answered</div>
          <h2>What Brands Usually Ask Us.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{faq.q}</span>
                <i>+</i>
              </button>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
