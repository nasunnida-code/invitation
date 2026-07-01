import { useState } from 'react'
import weddingData from '../data/weddingData'
import useReveal from '../hooks/useReveal'
import './Location.css'

export default function Location() {
  const { wedding, location } = weddingData
  const [ref, visible] = useReveal()
  const [copied, setCopied] = useState(false)

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(wedding.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // 클립보드 권한이 없는 브라우저 대응
      alert(wedding.address)
    }
  }

  return (
    <section ref={ref} className={`section location reveal ${visible ? 'is-visible' : ''}`}>
      <span className="eyebrow">Location</span>
      <h2 className="section-title">오시는 길</h2>

      <div className="location__map">
        {location.mapEmbedUrl ? (
          <iframe
            title="예식장 위치 지도"
            src={location.mapEmbedUrl}
            loading="lazy"
            allowFullScreen
          />
        ) : (
          <div className="location__map-placeholder">지도 API 키 입력 후 표시됩니다</div>
        )}
      </div>

      <p className="location__venue">
        {wedding.venueName} {wedding.venueHall}
      </p>
      <p className="location__address">{wedding.address}</p>

      <button className="location__copy-btn" onClick={copyAddress}>
        {copied ? '주소가 복사되었습니다' : '주소 복사하기'}
      </button>

      <div className="location__transit">
        {location.transit.map((item) => (
          <div key={item.type} className="location__transit-row">
            <span className="location__transit-type">{item.type}</span>
            <span className="location__transit-desc">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
