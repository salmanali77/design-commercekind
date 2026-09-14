import { audiencesData } from '../../data/audiencesData'

export default function AudiencesSection() {
  const { eyebrow, headline, headlineLine2, cards } = audiencesData

  return (
    <section id="agencies">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{headline}<br />{headlineLine2}</h2>

        <div className="audiences">
          {cards.map((card, i) => (
            <div className={`aud${card.isDark ? ' darkaud' : ''}`} key={i}>
              <div className="n">{card.number}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.linkHref}>{card.linkText}</a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .aud {
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s;
        }
        .aud:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(8, 26, 39, 0.1);
        }
        .aud.darkaud:hover {
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.35);
        }

        @media (max-width: 900px) {
          #agencies {
            padding: 55px 0 40px !important;
          }
          .audiences {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            margin-top: 24px !important;
          }
          .aud {
            padding: 28px 24px !important;
            min-height: auto !important;
            border-radius: 20px !important;
          }
          .aud .n {
            font-size: 60px !important;
            right: 20px !important;
            top: 14px !important;
          }
          .aud h3 {
            font-size: 22px !important;
          }
          .aud p {
            font-size: 15px !important;
            max-width: 90% !important;
            line-height: 1.5 !important;
          }
        }

        @media (max-width: 600px) {
          #agencies {
            padding: 45px 0 35px !important;
          }
          #agencies .container {
            width: calc(100% - 32px) !important;
            padding: 0 !important;
          }
          #agencies .eyebrow {
            font-size: 11.5px !important;
            margin-bottom: 8px !important;
            letter-spacing: 0.12em !important;
          }
          #agencies h2 {
            font-size: clamp(24px, 7vw, 32px) !important;
            line-height: 1.15 !important;
            letter-spacing: -0.035em !important;
            margin-bottom: 18px !important;
          }
          .audiences {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
            margin-top: 18px !important;
          }
          .aud {
            padding: 24px 20px !important;
            border-radius: 18px !important;
          }
          .aud .n {
            font-size: 52px !important;
            right: 16px !important;
            top: 12px !important;
          }
          .aud h3 {
            font-size: 20px !important;
            margin-bottom: 6px !important;
          }
          .aud p {
            font-size: 14px !important;
            line-height: 1.5 !important;
            max-width: 92% !important;
            margin-top: 6px !important;
          }
          .aud a {
            margin-top: 20px !important;
            font-size: 13.5px !important;
          }
        }
      `}</style>
    </section>
  )
}
