import weddingData from '../data/weddingData'
import './InfoBlock.css'

export default function InfoBlock() {
  const { groom, bride, wedding } = weddingData
  const { month, day } = wedding.dateDisplay

  return (
    <section className="infoblock">
      <div className="infoblock__row">
        <span className="infoblock__name">{groom.name}</span>

        <span className="infoblock__date">
          <span className="infoblock__month">{String(month).padStart(2, '0')}</span>
          <span className="infoblock__date-line" aria-hidden="true" />
          <span className="infoblock__day">{String(day).padStart(2, '0')}</span>
        </span>

        <span className="infoblock__name">{bride.name}</span>
      </div>

      <p className="infoblock__meta">{wedding.dateLabel}</p>
      <p className="infoblock__meta infoblock__venue">
        {wedding.venueName} {wedding.venueHall}
      </p>
    </section>
  )
}
