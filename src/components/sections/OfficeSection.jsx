import { useEffect, useRef } from 'react'
import { officeData } from '../../data/officeData'

export default function OfficeSection() {
  const { eyebrow, headline, description, videoSrc } = officeData
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5
    }
  }, [])

  return (
    <section id="team">
      <div className="container office-grid">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2>{headline}</h2>
          <p className="lead" style={{ marginTop: '18px', maxWidth: '480px' }}>
            {description}
          </p>
        </div>
        <div className="office-video">
          <video
            ref={videoRef}
            id="office-vid"
            src={videoSrc || '/assets/office.mp4'}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>
      </div>
    </section>
  )
}
