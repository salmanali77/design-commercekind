import { capabilitiesData } from '../../data/capabilitiesData'

export default function CapabilitiesSection() {
  const { eyebrow, headline, items } = capabilitiesData

  return (
    <section id="services" style={{ paddingTop: '30px' }}>
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{headline}</h2>

        <div className="cap-grid">
          {items.map((item, i) => (
            <div className="cap" key={i}>
              <div className="ico">{item.icon}</div>
              <h3>{item.title}</h3>
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cap {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s, border-color 0.25s;
          box-sizing: border-box;
        }
        .cap:hover {
          transform: translateY(-4px);
          border-color: #c9dbd7;
          box-shadow: 0 16px 36px -8px rgba(8, 26, 39, 0.08);
        }
        .cap .ico {
          color: #0b1722;
          font-family: var(--display), sans-serif;
          font-weight: 850;
          font-size: 20px;
          line-height: 1;
          display: grid;
          place-items: center;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cap:hover .ico {
          transform: scale(1.08);
        }

        @media (max-width: 900px) {
          #services {
            padding: 50px 0 40px !important;
          }
          .cap-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }

        @media (max-width: 768px) {
          #services {
            padding: 45px 0 35px !important;
          }
          #services .container {
            width: calc(100% - 32px) !important;
            padding: 0 !important;
          }
          #services .eyebrow {
            font-size: 11.5px !important;
            margin-bottom: 8px !important;
            letter-spacing: 0.12em !important;
          }
          #services h2 {
            font-size: clamp(23px, 6.6vw, 30px) !important;
            line-height: 1.15 !important;
            letter-spacing: -0.035em !important;
            margin-bottom: 20px !important;
          }
          .cap-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
            margin-top: 18px !important;
          }
          .cap {
            padding: 14px 12px !important;
            min-height: 118px !important;
            border-radius: 16px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
          }
          .cap .ico {
            width: 36px !important;
            height: 36px !important;
            border-radius: 10px !important;
            margin-bottom: 12px !important;
            font-size: 17px !important;
          }
          .cap h3 {
            font-size: 15.5px !important;
            line-height: 1.2 !important;
            margin: 0 0 3px 0 !important;
            font-weight: 850 !important;
            color: #0b1722 !important;
          }
          .cap span {
            font-size: 11px !important;
            line-height: 1.35 !important;
            color: #64748b !important;
            margin-top: 0 !important;
          }
        }

        @media (max-width: 360px) {
          .cap-grid {
            grid-template-columns: 1fr !important;
          }
          .cap {
            padding: 16px 14px !important;
          }
        }
      `}</style>
    </section>
  )
}
