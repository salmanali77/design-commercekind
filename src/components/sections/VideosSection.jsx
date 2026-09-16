import { useState, useRef, useEffect } from 'react'
import { videosData } from '../../data/videosData'

function VideoCard({ video, isActive, onMouseEnter, onMouseLeave, onClick }) {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  // Play ONLY when mouse is on this video (isActive === true), otherwise pause immediately
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    if (isActive) {
      vid.muted = isMuted
      const playPromise = vid.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser blocks unmuted play, fallback to muted
          if (!vid.muted) {
            vid.muted = true
            setIsMuted(true)
            vid.play().catch(() => {})
          }
        })
      }
    } else {
      vid.pause()
    }
  }, [isActive, isMuted])

  const toggleMute = (e) => {
    e.stopPropagation()
    const vid = videoRef.current
    if (!vid) return
    const nextMuted = !isMuted
    vid.muted = nextMuted
    setIsMuted(nextMuted)
  }

  // Face alignment
  const objectPosition = video.isBig ? 'center 12%' : 'center 18%'

  return (
    <div
      className={`vcard${video.isBig ? ' big' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        background: '#071723',
        minHeight: video.isBig ? '490px' : '280px',
        border: '1px solid #d7e4e1',
        borderRadius: '24px',
      }}
    >
      {/* Video element - Plays purely when hovered, no visual hover jumps */}
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: objectPosition,
          display: 'block',
          borderRadius: '24px',
        }}
      />

      {/* Subtle bottom gradient to ensure text readability */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: video.isBig ? '110px' : '70px',
          background: 'linear-gradient(to top, rgba(7, 23, 35, 0.7) 0%, transparent 100%)',
          pointerEvents: 'none',
          borderRadius: '0 0 24px 24px',
          zIndex: 1,
        }}
      />

      {/* Bottom Meta Bar */}
      <div
        className={`vmeta ${video.isBig ? 'vmeta-big' : 'vmeta-small'}`}
        style={{ zIndex: 3 }}
      >
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <b>{video.title}</b>
          <small>{video.role}</small>
        </div>

        {/* Sound toggle button */}
        <button
          type="button"
          onClick={toggleMute}
          title={isMuted ? 'Click to Unmute' : 'Click to Mute'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: isMuted ? '#68747c' : 'var(--teal)',
            display: 'grid',
            placeItems: 'center',
            borderRadius: '50%',
            flexShrink: 0,
            transition: 'color 0.2s ease',
          }}
        >
          {isMuted ? (
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default function VideosSection() {
  const { eyebrow, headline, videos } = videosData
  // Only ONE video active at any time: hovered by mouse, or tapped
  const [activeVideoId, setActiveVideoId] = useState(null)

  return (
    <section className="videos" id="testimonials">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{headline}</h2>
        <div className="video-grid">
          {videos.map((v) => (
            <VideoCard
              key={v.id}
              video={v}
              isActive={activeVideoId === v.id}
              onMouseEnter={() => setActiveVideoId(v.id)}
              onMouseLeave={() => setActiveVideoId(null)}
              onClick={() => setActiveVideoId(activeVideoId === v.id ? null : v.id)}
            />
          ))}
        </div>
      </div>

      <style>{`
        /* Desktop & Tablet Sleek Meta Tags */
        .vmeta-small {
          left: 10px !important;
          right: 10px !important;
          bottom: 10px !important;
          padding: 8px 12px !important;
          border-radius: 12px !important;
        }

        .vmeta-small b {
          font-size: 12px !important;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        .vmeta-small small {
          font-size: 10.5px !important;
          margin-top: 1px !important;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        /* Mobile View: Compact & Proportional Tags */
        @media (max-width: 768px) {
          .video-grid {
            gap: 12px !important;
          }

          .vmeta-small {
            left: 8px !important;
            right: 8px !important;
            bottom: 8px !important;
            padding: 6px 9px !important;
            border-radius: 10px !important;
            background: rgba(255, 255, 255, 0.94) !important;
            backdrop-filter: blur(8px) !important;
          }

          .vmeta-small b {
            font-size: 11px !important;
            line-height: 1.2 !important;
          }

          .vmeta-small small {
            font-size: 9.5px !important;
            line-height: 1.1 !important;
          }

          .vmeta-big {
            left: 10px !important;
            right: 10px !important;
            bottom: 10px !important;
            padding: 10px 14px !important;
            border-radius: 12px !important;
          }

          .vmeta-big b {
            font-size: 13px !important;
          }

          .vmeta-big small {
            font-size: 11px !important;
          }
        }

        @media (max-width: 480px) {
          .vmeta-small {
            padding: 5px 8px !important;
            left: 6px !important;
            right: 6px !important;
            bottom: 6px !important;
            border-radius: 8px !important;
          }

          .vmeta-small b {
            font-size: 10.5px !important;
          }

          .vmeta-small small {
            font-size: 9px !important;
          }

          .vmeta-small button svg {
            width: 14px !important;
            height: 14px !important;
          }
        }
      `}</style>
    </section>
  )
}
