const brandImages = [
  '/assets/image.png', '/assets/image-2.png', '/assets/image-3.png',
  '/assets/image-4.png', '/assets/image-5.png',
]
const brandImages2 = [
  '/assets/image-6.png', '/assets/image-7.png', '/assets/image-8.png',
  '/assets/image-9.png', '/assets/image.png',
]

export default function LogoMarquee() {
  return (
    <div className="logos" style={{ padding: '60px 0', background: '#f7faf9' }}>
      <div className="container">
        <div className="logos-title" style={{ textAlign: 'center', fontSize: '14px', fontWeight: 700, color: '#72828d', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '30px' }}>
          Trusted by brands we help grow
        </div>
        <div className="logo-marquee">
          <div className="logo-track-wrap">
            <div className="logo-track">
              {[...brandImages, ...brandImages].map((src, i) => (
                <div className="logo-card" key={`r1-${i}`}><img src={src} alt="Brand" /></div>
              ))}
            </div>
          </div>
          <div className="logo-track-wrap">
            <div className="logo-track reverse">
              {[...brandImages2, ...brandImages2].map((src, i) => (
                <div className="logo-card" key={`r2-${i}`}><img src={src} alt="Brand" /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
