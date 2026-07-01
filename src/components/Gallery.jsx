import { useState } from 'react'
import weddingData from '../data/weddingData'
import useReveal from '../hooks/useReveal'
import './Gallery.css'

export default function Gallery() {
  const { gallery } = weddingData
  const [ref, visible] = useReveal()
  const [activeIndex, setActiveIndex] = useState(null)

  const close = () => setActiveIndex(null)
  const showPrev = (e) => {
    e.stopPropagation()
    setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length)
  }
  const showNext = (e) => {
    e.stopPropagation()
    setActiveIndex((i) => (i + 1) % gallery.length)
  }

  return (
    <section ref={ref} className={`section gallery reveal ${visible ? 'is-visible' : ''}`}>
      <span className="eyebrow">Gallery</span>
      <h2 className="section-title">우리의 순간들</h2>

      <div className="gallery__grid">
        {gallery.map((src, idx) => (
          <button
            key={src}
            className="gallery__item"
            onClick={() => setActiveIndex(idx)}
            aria-label={`사진 ${idx + 1} 크게 보기`}
          >
            <img src={src} alt={`웨딩 갤러리 ${idx + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="gallery__lightbox" onClick={close}>
          <button className="gallery__nav gallery__nav--prev" onClick={showPrev} aria-label="이전 사진">
            ‹
          </button>
          <img src={gallery[activeIndex]} alt={`웨딩 갤러리 확대 ${activeIndex + 1}`} />
          <button className="gallery__nav gallery__nav--next" onClick={showNext} aria-label="다음 사진">
            ›
          </button>
        </div>
      )}
    </section>
  )
}
