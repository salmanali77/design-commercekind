import { useParams, Navigate } from 'react-router-dom'
import { servicesList } from '../data/servicesData'
import TrustSection from '../components/sections/TrustSection'
import FaqSection from '../components/sections/FaqSection'
import ClosingSection from '../components/sections/ClosingSection'

export default function ServicePage() {
  const { serviceId } = useParams()
  const service = servicesList.find(s => s.id === serviceId)

  if (!service) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="pt-20">
      {/* Service Hero */}
      <section className="relative w-full py-32 overflow-hidden bg-[#0A1622] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px]"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-widest uppercase mb-8">
            Our Services
          </div> */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-12">
            {service.shortDesc}
          </p>
          <a href="#contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full text-base font-bold text-gray-900 bg-teal-400 hover:bg-teal-300 shadow-[0_0_30px_rgba(45,212,191,0.3)] transition-all duration-300">
            Book a Strategy Call
          </a>
        </div>
      </section>

      {/* Service Details & Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                What we do
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium mb-10">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center mt-0.5 mr-4 text-teal-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-900 font-bold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-bl-full -z-10"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why choose CommerceKind?</h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-8">
                We don't just execute tasks; we take ownership of your channel's growth. Our strategies are built on data, transparency, and a relentless focus on profitability.
              </p>
              <div className="flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold text-xl">1</div>
                  <div className="font-bold text-gray-900">Direct Slack Access</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold text-xl">2</div>
                  <div className="font-bold text-gray-900">Custom Reporting</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold text-xl">3</div>
                  <div className="font-bold text-gray-900">Proactive Strategy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse standard global sections */}
      <TrustSection />
      <FaqSection />
      <ClosingSection />
    </div>
  )
}
