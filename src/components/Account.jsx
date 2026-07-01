import { useState } from 'react'
import weddingData from '../data/weddingData'
import useReveal from '../hooks/useReveal'
import './Account.css'

function AccountRow({ person, label }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.accountNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      alert(person.accountNumber)
    }
  }

  return (
    <div className="account__person">
      <p className="account__role">{label}</p>
      <p className="account__holder">{person.accountHolder}</p>
      <p className="account__bank">
        {person.bankName} {person.accountNumber}
      </p>
      <button className="account__copy-btn" onClick={copy}>
        {copied ? '복사 완료' : '계좌번호 복사'}
      </button>
    </div>
  )
}

export default function Account() {
  const { groom, bride } = weddingData
  const [ref, visible] = useReveal()
  const [openSide, setOpenSide] = useState(null) // 'groom' | 'bride' | null

  return (
    <section ref={ref} className={`section account reveal ${visible ? 'is-visible' : ''}`}>
      <span className="eyebrow">Gift</span>
      <h2 className="section-title">마음 전하실 곳</h2>
      <p className="account__desc">
        참석이 어려우신 분들을 위해 계좌번호를 안내드립니다.
        <br />
        전해주시는 마음, 감사히 간직하겠습니다.
      </p>

      <div className="account__accordion">
        <button
          className="account__toggle"
          onClick={() => setOpenSide(openSide === 'groom' ? null : 'groom')}
        >
          신랑측 <span>{openSide === 'groom' ? '−' : '+'}</span>
        </button>
        {openSide === 'groom' && <AccountRow person={groom} label="신랑" />}

        <button
          className="account__toggle"
          onClick={() => setOpenSide(openSide === 'bride' ? null : 'bride')}
        >
          신부측 <span>{openSide === 'bride' ? '−' : '+'}</span>
        </button>
        {openSide === 'bride' && <AccountRow person={bride} label="신부" />}
      </div>
    </section>
  )
}
