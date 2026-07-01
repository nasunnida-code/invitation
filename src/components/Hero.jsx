import weddingData from '../data/weddingData'
import './Hero.css'

export default function Hero() {
  const { groom, bride, wedding, heroImage } = weddingData

  return (
    <section className="hero">
      <div className="hero__frame">
        <img className="hero__photo" src={heroImage} alt={`${groom.name} ${bride.name} 웨딩 사진`} />
        <div className="hero__inner-border" aria-hidden="true" />
      </div>
      <div className="hero__caption">
        <p className="hero__names">
          {groom.name} <span className="hero__amp">&</span> {bride.name}
        </p>
        <p className="hero__date">{wedding.dateLabel}</p>
      </div>
    </section>
  )
}
