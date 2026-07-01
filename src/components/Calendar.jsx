import { useMemo } from 'react'
import weddingData from '../data/weddingData'
import useReveal from '../hooks/useReveal'
import './Calendar.css'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

function buildCalendarGrid(year, month) {
  const firstDay = new Date(year, month - 1, 1)
  const startWeekday = firstDay.getDay()
  const daysInMonth = new Date(year, month, 0).getDate()

  const cells = []
  for (let i = 0; i < startWeekday; i += 1) cells.push(null)
  for (let d = 1; d <= daysInMonth; d += 1) cells.push(d)
  return cells
}

function getDDay(dateISO) {
  const today = new Date()
  const target = new Date(dateISO)
  today.setHours(0, 0, 0, 0)
  target.setHours(0, 0, 0, 0)
  const diff = Math.round((target - today) / (1000 * 60 * 60 * 24))
  return diff
}

export default function Calendar() {
  const { wedding } = weddingData
  const { year, month, day } = wedding.dateDisplay
  const [ref, visible] = useReveal()

  const cells = useMemo(() => buildCalendarGrid(year, month), [year, month])
  const dDay = useMemo(() => getDDay(wedding.dateISO), [wedding.dateISO])

  const dDayLabel =
    dDay > 0 ? `D-${dDay}` : dDay === 0 ? 'D-DAY' : `D+${Math.abs(dDay)}`

  return (
    <section ref={ref} className={`section calendar reveal ${visible ? 'is-visible' : ''}`}>
      <span className="eyebrow">Wedding Day</span>
      <h2 className="section-title">
        {year}년 {month}월 {day}일
      </h2>

      <div className="calendar__grid">
        {WEEKDAYS.map((w) => (
          <span key={w} className="calendar__weekday">
            {w}
          </span>
        ))}
        {cells.map((d, idx) => (
          <span
            key={idx}
            className={`calendar__cell ${d === day ? 'calendar__cell--active' : ''}`}
          >
            {d ?? ''}
          </span>
        ))}
      </div>

      <div className="divider" />
      <p className="calendar__dday">
        신랑 신부의 결혼식이 <strong>{dDayLabel}</strong> 남았습니다
      </p>
    </section>
  )
}
