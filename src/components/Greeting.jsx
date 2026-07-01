import weddingData from '../data/weddingData'
import useReveal from '../hooks/useReveal'
import './Greeting.css'

export default function Greeting() {
  const { groom, bride, greeting } = weddingData
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className={`section greeting reveal ${visible ? 'is-visible' : ''}`}>
      <span className="eyebrow">Invitation</span>
      <h2 className="section-title">{greeting.title}</h2>

      <p className="greeting__message">
        {greeting.message.split('\n').map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <div className="divider" />

      <div className="greeting__parents">
        <p>
          {groom.fatherName} · {groom.motherName}의 아들 <strong>{groom.name}</strong>
        </p>
        <p>
          {bride.fatherName} · {bride.motherName}의 딸 <strong>{bride.name}</strong>
        </p>
      </div>

      <div className="greeting__contacts">
        <a className="greeting__contact-btn" href={`tel:${groom.phone}`}>
          신랑에게 연락
        </a>
        <a className="greeting__contact-btn" href={`tel:${bride.phone}`}>
          신부에게 연락
        </a>
      </div>
    </section>
  )
}
