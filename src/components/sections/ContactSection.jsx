import { useState } from 'react'
import './contact.css'

const STEP_TITLES = ['Who are you?', 'Your business', 'What you need']

const REVENUE_OPTIONS = [
  { value: 'under5k', label: 'Under $5K/mo' },
  { value: '5k-25k', label: '$5K to $25K/mo' },
  { value: '25k-100k', label: '$25K to $100K/mo' },
  { value: '100k-500k', label: '$100K to $500K/mo' },
  { value: '500k+', label: '$500K+/mo' },
]

const ADSPEND_OPTIONS = [
  { value: 'under1k', label: 'Under $1K/mo' },
  { value: '1k-5k', label: '$1K to $5K/mo' },
  { value: '5k-15k', label: '$5K to $15K/mo' },
  { value: '15k-50k', label: '$15K to $50K/mo' },
  { value: '50k+', label: '$50K+/mo' },
]

const TIME_OPTIONS = [
  { value: 'under1y', label: 'Less than 1 year' },
  { value: '1-3y', label: '1 to 3 years' },
  { value: '3-5y', label: '3 to 5 years' },
  { value: '5y+', label: '5+ years' },
]

const CHALLENGE_OPTIONS = [
  { value: 'listings', label: 'Listing quality and copy' },
  { value: 'ppc', label: 'PPC performance and ACOS' },
  { value: 'sales', label: 'Stagnant or declining sales' },
  { value: 'catalog', label: 'Catalog issues and compliance' },
  { value: 'strategy', label: 'No clear growth strategy' },
  { value: 'all', label: 'All of the above' },
]

const AGENCY_SIZE_OPTIONS = [
  { value: '1-5', label: '1 to 5 accounts' },
  { value: '5-15', label: '5 to 15 accounts' },
  { value: '15-50', label: '15 to 50 accounts' },
  { value: '50+', label: '50+ accounts' },
]

const AGENCY_NEED_OPTIONS = [
  { value: 'whitelabel', label: 'White-label management' },
  { value: 'augment', label: 'Team augmentation' },
  { value: 'overflow', label: 'Overflow capacity' },
  { value: 'full', label: 'Full account management' },
]

const SERVICE_OPTIONS = [
  { value: 'catalog', label: 'Catalog Management' },
  { value: 'ppc', label: 'PPC Management' },
  { value: 'fullservice', label: 'Full Service Brand Management' },
  { value: 'unsure', label: 'Not sure yet' },
]

const TIER_OPTIONS = [
  { value: 'starter', label: 'Starter (20 hrs/wk)' },
  { value: 'advanced', label: 'Advanced (40+ hrs/wk)' },
  { value: 'b2b', label: 'B2B Contract' },
  { value: 'discuss', label: "Let's discuss" },
]

const HEARD_OPTIONS = [
  { value: 'google', label: 'Google search' },
  { value: 'referral', label: 'Referral' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'social', label: 'Social media' },
  { value: 'other', label: 'Other' },
]

function PillGroup({ options, value, onChange, multi = false }) {
  const current = multi ? value || [] : value

  const handleClick = (val) => {
    if (multi) {
      if (current.includes(val)) {
        onChange(current.filter((item) => item !== val))
      } else {
        onChange([...current, val])
      }
    } else {
      onChange(val)
    }
  }

  const isSelected = (val) => (multi ? current.includes(val) : current === val)

  return (
    <div className="cf-pill-group">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`cf-pill${isSelected(opt.value) ? ' cf-pill-active' : ''}`}
          onClick={() => handleClick(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  type: '',
  revenue: '',
  adspend: '',
  time_on_amazon: '',
  challenge: '',
  agency_size: '',
  agency_need: [],
  service: '',
  tier: '',
  heard: '',
  message: '',
  website: '', // honeypot
}

export default function ContactSection({ isEmbedded = false }) {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const updateField = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }))
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev }
        delete copy[field]
        return copy
      })
    }
  }

  const handleChange = (e) => {
    updateField(e.target.name, e.target.value)
  }

  const validateCurrentStep = () => {
    const errs = {}

    if (step === 0) {
      if (!formData.name.trim()) errs.name = 'Full name is required'
      if (!formData.email.trim()) {
        errs.email = 'Email address is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address'
      }
      if (!formData.type) errs.type = 'Please select your role'
    }

    if (step === 1) {
      if (formData.type === 'brand') {
        if (!formData.revenue) errs.revenue = 'Please select monthly revenue'
        if (!formData.challenge) errs.challenge = 'Please select your biggest challenge'
      } else if (formData.type === 'agency') {
        if (!formData.agency_size) errs.agency_size = 'Please select how many accounts you manage'
      }
    }

    if (step === 2) {
      if (!formData.service) errs.service = 'Please select a service'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleNext = () => {
    if (validateCurrentStep()) {
      setStep((s) => s + 1)
      window.scrollTo({ top: document.getElementById('contact-form-anchor')?.offsetTop || 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    setErrors({})
    setStep((s) => s - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.website) return // honeypot triggered

    if (!validateCurrentStep()) return

    setSubmitting(true)

    try {
      await fetch('https://formsubmit.co/ajax/hello@commercekind.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Strategy Call Request - ${formData.name} (${formData.type || 'CommerceKind'})`,
        }),
      })
    } catch (err) {
      console.warn('Form submission network response:', err)
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  const resetForm = () => {
    setFormData(INITIAL_FORM)
    setErrors({})
    setStep(0)
    setSubmitted(false)
  }

  const progressPercent = (step / (STEP_TITLES.length - 1)) * 100

  return (
    <section className={`contact-section ${isEmbedded ? 'section-embedded' : ''}`} id="contact-form-anchor">
      <div className="container contact-layout">
        {/* Left Column: Form Flow */}
        <div className="contact-form-col">
          {submitted ? (
            <div className="contact-success">
              <div className="cs-icon">✓</div>
              <h3>We've Got Your Info!</h3>
              <p>
                Thanks for taking the time to fill this out. Our team will review your answers and reach out within 24
                hours to schedule your strategy call.
              </p>
              <p className="cs-subtext">
                If you don't hear from us, check your spam folder or email us directly at{' '}
                <a href="mailto:hello@commercekind.com">hello@commercekind.com</a>.
              </p>
              <button type="button" className="btn btn-outline" onClick={resetForm} style={{ marginTop: '20px' }}>
                Submit Another Response
              </button>
            </div>
          ) : (
            <>
              {/* Steps Navigation Bar */}
              <div className="cf-steps">
                {STEP_TITLES.map((title, idx) => (
                  <div
                    key={title}
                    className={`cf-step-item${idx === step ? ' cf-step-active' : ''}${idx < step ? ' cf-step-done' : ''}`}
                  >
                    <div className="cf-step-dot">{idx < step ? '✓' : idx + 1}</div>
                    <span className="cf-step-label">{title}</span>
                  </div>
                ))}
              </div>

              <div className="cf-progress-bar">
                <div className="cf-progress-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {/* Honeypot field for bot protection */}
                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* STEP 1: Who are you? */}
                {step === 0 && (
                  <div className="cf-step-panel">
                    <div>
                      <h2 className="cf-step-title">Who are you?</h2>
                      <p className="contact-sub">Just the basics to get started.</p>
                    </div>

                    <div className="cf-row">
                      <div className="cf-field">
                        <label>
                          Full Name <span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={errors.name ? 'input-error' : ''}
                        />
                        {errors.name && <span className="cf-error">{errors.name}</span>}
                      </div>

                      <div className="cf-field">
                        <label>
                          Email Address <span className="req">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@yourbrand.com"
                          className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <span className="cf-error">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="cf-field">
                      <label>
                        Company / Brand Name <span className="cf-optional">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your brand or agency name"
                      />
                    </div>

                    <div className="cf-field">
                      <label>
                        I am a... <span className="req">*</span>
                      </label>
                      <div className="cf-type-cards">
                        <button
                          type="button"
                          className={`cf-type-card${formData.type === 'brand' ? ' cf-type-active' : ''}`}
                          onClick={() => updateField('type', 'brand')}
                        >
                          <span className="cf-type-icon">🛍️</span>
                          <span className="cf-type-name">Brand Owner</span>
                          <span className="cf-type-sub">I sell products on Amazon</span>
                        </button>

                        <button
                          type="button"
                          className={`cf-type-card${formData.type === 'agency' ? ' cf-type-active' : ''}`}
                          onClick={() => updateField('type', 'agency')}
                        >
                          <span className="cf-type-icon">🏢</span>
                          <span className="cf-type-name">Agency Owner</span>
                          <span className="cf-type-sub">I manage Amazon accounts for clients</span>
                        </button>

                        <button
                          type="button"
                          className={`cf-type-card${formData.type === 'other' ? ' cf-type-active' : ''}`}
                          onClick={() => updateField('type', 'other')}
                        >
                          <span className="cf-type-icon">💬</span>
                          <span className="cf-type-name">Other</span>
                          <span className="cf-type-sub">Something else entirely</span>
                        </button>
                      </div>
                      {errors.type && <span className="cf-error">{errors.type}</span>}
                    </div>

                    <div className="cf-nav cf-nav-right">
                      <button type="button" className="btn btn-solid" onClick={handleNext}>
                        Continue &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Your business (Branching based on persona) */}
                {step === 1 && (
                  <div className="cf-step-panel">
                    {/* Brand Owner Persona */}
                    {formData.type === 'brand' && (
                      <>
                        <div>
                          <h2 className="cf-step-title">About your Amazon business</h2>
                          <p className="contact-sub">This helps us prepare for your call. Be as honest as possible.</p>
                        </div>

                        <div className="cf-field">
                          <label>
                            Monthly Amazon Revenue <span className="req">*</span>
                          </label>
                          <PillGroup
                            options={REVENUE_OPTIONS}
                            value={formData.revenue}
                            onChange={(v) => updateField('revenue', v)}
                          />
                          {errors.revenue && <span className="cf-error">{errors.revenue}</span>}
                        </div>

                        <div className="cf-field">
                          <label>
                            Monthly Ad Spend <span className="cf-optional">(Optional)</span>
                          </label>
                          <PillGroup
                            options={ADSPEND_OPTIONS}
                            value={formData.adspend}
                            onChange={(v) => updateField('adspend', v)}
                          />
                        </div>

                        <div className="cf-field">
                          <label>
                            How long have you been selling on Amazon? <span className="cf-optional">(Optional)</span>
                          </label>
                          <PillGroup
                            options={TIME_OPTIONS}
                            value={formData.time_on_amazon}
                            onChange={(v) => updateField('time_on_amazon', v)}
                          />
                        </div>

                        <div className="cf-field">
                          <label>
                            What is your biggest challenge right now? <span className="req">*</span>
                          </label>
                          <PillGroup
                            options={CHALLENGE_OPTIONS}
                            value={formData.challenge}
                            onChange={(v) => updateField('challenge', v)}
                          />
                          {errors.challenge && <span className="cf-error">{errors.challenge}</span>}
                        </div>
                      </>
                    )}

                    {/* Agency Owner Persona */}
                    {formData.type === 'agency' && (
                      <>
                        <div>
                          <h2 className="cf-step-title">About your agency</h2>
                          <p className="contact-sub">Tell us about your current scale and what you need from us.</p>
                        </div>

                        <div className="cf-field">
                          <label>
                            How many Amazon accounts do you manage? <span className="req">*</span>
                          </label>
                          <PillGroup
                            options={AGENCY_SIZE_OPTIONS}
                            value={formData.agency_size}
                            onChange={(v) => updateField('agency_size', v)}
                          />
                          {errors.agency_size && <span className="cf-error">{errors.agency_size}</span>}
                        </div>

                        <div className="cf-field">
                          <label>
                            What are you looking for? <span className="cf-optional">(Select all that apply)</span>
                          </label>
                          <PillGroup
                            options={AGENCY_NEED_OPTIONS}
                            value={formData.agency_need}
                            onChange={(v) => updateField('agency_need', v)}
                            multi={true}
                          />
                        </div>
                      </>
                    )}

                    {/* Other Persona */}
                    {formData.type === 'other' && (
                      <>
                        <div>
                          <h2 className="cf-step-title">Tell us a bit more</h2>
                          <p className="contact-sub">What brings you here today?</p>
                        </div>

                        <div className="cf-field">
                          <label>What are you looking for?</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Tell us what you're hoping to achieve or what brought you to our site..."
                          />
                        </div>
                      </>
                    )}

                    <div className="cf-nav">
                      <button type="button" className="btn btn-ghost" onClick={handleBack}>
                        &larr; Back
                      </button>
                      <button type="button" className="btn btn-solid" onClick={handleNext}>
                        Continue &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: What you need */}
                {step === 2 && (
                  <div className="cf-step-panel">
                    <div>
                      <h2 className="cf-step-title">What are you looking for?</h2>
                      <p className="contact-sub">Help us match you with the right plan and person.</p>
                    </div>

                    <div className="cf-field">
                      <label>
                        Which service interests you most? <span className="req">*</span>
                      </label>
                      <PillGroup
                        options={SERVICE_OPTIONS}
                        value={formData.service}
                        onChange={(v) => updateField('service', v)}
                      />
                      {errors.service && <span className="cf-error">{errors.service}</span>}
                    </div>

                    {formData.type !== 'agency' && (
                      <div className="cf-field">
                        <label>
                          Which package tier are you considering? <span className="cf-optional">(Optional)</span>
                        </label>
                        <PillGroup
                          options={TIER_OPTIONS}
                          value={formData.tier}
                          onChange={(v) => updateField('tier', v)}
                        />
                      </div>
                    )}

                    <div className="cf-field">
                      <label>
                        How did you hear about CommerceKind? <span className="cf-optional">(Optional)</span>
                      </label>
                      <PillGroup
                        options={HEARD_OPTIONS}
                        value={formData.heard}
                        onChange={(v) => updateField('heard', v)}
                      />
                    </div>

                    <div className="cf-field">
                      <label>
                        Anything else you want us to know? <span className="cf-optional">(Optional)</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Goals, current pain points, timeline, questions for us..."
                      />
                    </div>

                    <div className="cf-nav">
                      <button type="button" className="btn btn-ghost" onClick={handleBack} disabled={submitting}>
                        &larr; Back
                      </button>
                      <button type="submit" className="btn btn-solid" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit Request \u2192'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </>
          )}
        </div>

        {/* Right Column: Information Cards */}
        <div className="contact-info-col">
          {/* Card 1: What Happens Next */}
          <div className="ci-card ci-card-dark">
            <h3>What Happens Next</h3>
            <p>Once you submit, our team reviews your answers before reaching out. You'll hear from us within 24 hours.</p>
            <ul className="ci-expect-list">
              <li>
                <span>01</span>
                <div>We review your answers and account</div>
              </li>
              <li>
                <span>02</span>
                <div>We schedule a free 30-min strategy call</div>
              </li>
              <li>
                <span>03</span>
                <div>Honest audit, real recommendations</div>
              </li>
              <li>
                <span>04</span>
                <div>No pressure, no sales tactics</div>
              </li>
            </ul>
          </div>

          {/* Card 2: Direct Contact */}
          <div className="ci-card ci-card-light">
            <h3>Direct Contact</h3>
            <div className="ci-contact-item">
              <span className="ci-label">Email</span>
              <a href="mailto:hello@commercekind.com">hello@commercekind.com</a>
            </div>
            <div className="ci-contact-item">
              <span className="ci-label">Headquarters</span>
              <span>Jacksonville, Florida, USA</span>
            </div>
            <div className="ci-contact-item">
              <span className="ci-label">Operations</span>
              <span>Lahore, Pakistan</span>
            </div>
            <div className="ci-contact-item">
              <span className="ci-label">Response Time</span>
              <span>Within 24 hours</span>
            </div>
          </div>

          {/* Card 3: Why We Ask These Questions */}
          <div className="ci-card ci-card-light">
            <h3>Why We Ask These Questions</h3>
            <p className="ci-reason-text">
              We review every submission before reaching out. Knowing your revenue stage, ad spend, and biggest challenge
              means we come to your call prepared, not asking you to repeat yourself. It also means we only reach out when
              we can genuinely help.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
