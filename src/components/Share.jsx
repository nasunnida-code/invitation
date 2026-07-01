import { useState } from 'react'
import weddingData from '../data/weddingData'
import './Share.css'

export default function Share() {
  const { groom, bride, wedding } = weddingData
  const [copied, setCopied] = useState(false)

  const shareKakao = () => {
    // TODO: 카카오 JavaScript SDK 초기화 후 Kakao.Share.sendDefault(...) 호출
    // https://developers.kakao.com/docs/latest/ko/message/js-link 참고
    if (window.Kakao?.Share) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `${groom.name} ♥ ${bride.name} 결혼합니다`,
          description: wedding.dateLabel,
          imageUrl: `${window.location.origin}${weddingData.heroImage}`,
          link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
        },
      })
    } else {
      alert('카카오 SDK 연동 후 사용 가능합니다.')
    }
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      alert(window.location.href)
    }
  }

  return (
    <section className="section share">
      <span className="eyebrow">Share</span>
      <h2 className="section-title">소식 전하기</h2>

      <div className="share__buttons">
        <button className="share__btn share__btn--kakao" onClick={shareKakao}>
          카카오톡 공유하기
        </button>
        <button className="share__btn" onClick={copyLink}>
          {copied ? '링크가 복사되었습니다' : 'URL 복사하기'}
        </button>
      </div>
    </section>
  )
}
