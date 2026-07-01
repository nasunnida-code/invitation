import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import './RSVP.css'

const initialForm = {
  name: '',
  side: 'groom', // 'groom' | 'bride'
  attend: 'yes', // 'yes' | 'no'
  headcount: '1',
  meal: 'yes',
}

export default function RSVP() {
  const [ref, visible] = useReveal()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: 여기서 실제 백엔드(Google Sheets, Firebase 등)로 전송
    console.log('RSVP submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section ref={ref} className={`section rsvp reveal ${visible ? 'is-visible' : ''}`}>
        <span className="eyebrow">RSVP</span>
        <h2 className="section-title">참석 의사 전달</h2>
        <p className="rsvp__done">
          소중한 답변 감사합니다.
          <br />
          {form.name}님의 마음 잘 전달받았습니다.
        </p>
      </section>
    )
  }

  return (
    <section ref={ref} className={`section rsvp reveal ${visible ? 'is-visible' : ''}`}>
      <span className="eyebrow">RSVP</span>
      <h2 className="section-title">참석 의사 전달</h2>

      <form className="rsvp__form" onSubmit={handleSubmit}>
        <label className="rsvp__field">
          <span>성함</span>
          <input type="text" required value={form.name} onChange={update('name')} placeholder="이름을 입력해주세요" />
        </label>

        <label className="rsvp__field">
          <span>구분</span>
          <select value={form.side} onChange={update('side')}>
            <option value="groom">신랑측 하객</option>
            <option value="bride">신부측 하객</option>
          </select>
        </label>

        <label className="rsvp__field">
          <span>참석 여부</span>
          <select value={form.attend} onChange={update('attend')}>
            <option value="yes">참석합니다</option>
            <option value="no">참석이 어렵습니다</option>
          </select>
        </label>

        {form.attend === 'yes' && (
          <>
            <label className="rsvp__field">
              <span>참석 인원</span>
              <select value={form.headcount} onChange={update('headcount')}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}명
                  </option>
                ))}
              </select>
            </label>

            <label className="rsvp__field">
              <span>식사 여부</span>
              <select value={form.meal} onChange={update('meal')}>
                <option value="yes">식사합니다</option>
                <option value="no">식사하지 않습니다</option>
              </select>
            </label>
          </>
        )}

        <button type="submit" className="rsvp__submit">
          답변 보내기
        </button>
      </form>
    </section>
  )
}
