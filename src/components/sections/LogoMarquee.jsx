import { logoData } from '../../data/logoData'

export default function LogoMarquee() {
  const { title, row1, row2 } = logoData

  return (
    <div className="logos" style={{ padding: '60px 0', background: '#f7faf9' }}>
      <div className="container">
        <div
          className="logos-title"
          style={{
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 700,
            color: '#72828d',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '30px',
          }}
        >
          {title}
        </div>

        <div className="logo-marquee">
          {/* Row 1 */}
          <div className="logo-track-wrap">
            <div className="logo-track">
              {/* Duplicate for infinite scroll effect */}
              {[...row1, ...row1].map((src, i) => (
                <div className="logo-card" key={`r1-${i}`}>
                  <img src={src} alt="Brand" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Reverse) */}
          <div className="logo-track-wrap">
            <div className="logo-track reverse">
              {[...row2, ...row2].map((src, i) => (
                <div className="logo-card" key={`r2-${i}`}>
                  <img src={src} alt="Brand" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
