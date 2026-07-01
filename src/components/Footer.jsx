import weddingData from '../data/weddingData'
import './Footer.css'

export default function Footer() {
  const { groom, bride } = weddingData

  return (
    <footer className="footer">
      <p className="footer__message">
        저희 두 사람의 새로운 시작을
        <br />
        함께해 주셔서 감사합니다.
      </p>
      <p className="footer__names">
        {groom.name} & {bride.name}
      </p>
    </footer>
  )
}
