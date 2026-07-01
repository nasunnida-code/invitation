// 이 파일의 값만 수정하면 청첩장 전체 내용이 바뀝니다.

const weddingData = {
  groom: {
    name: "최도령",
    fatherName: "최○○",
    motherName: "박○○",
    phone: "010-0000-0000",
    bankName: "국민은행",
    accountNumber: "000-00-0000-000",
    accountHolder: "최도령",
  },
  bride: {
    name: "이소저",
    fatherName: "이○○",
    motherName: "김○○",
    phone: "010-0000-0000",
    bankName: "신한은행",
    accountNumber: "000-00-0000-000",
    accountHolder: "이소저",
  },
  wedding: {
    dateISO: "2027-05-22T13:30:00+09:00",
    dateDisplay: { year: 2027, month: 5, day: 22 },
    dateLabel: "2027. 5. 22 SAT. 1:30 PM",
    venueName: "아펠가로 광화문",
    venueHall: "B2 로스타홀",
    address: "서울특별시 종로구 새문안로 92 광화문 오피시아빌딩",
    tel: "02-000-0000",
  },
  greeting: {
    title: "모시는 글",
    message:
      "두 사람이 함께 걸어갈 새로운 시작에\n소중한 분들을 모시고 싶습니다.\n바쁘시더라도 오셔서\n따뜻한 마음으로 축복해 주시면\n큰 힘이 되겠습니다.",
  },
  gallery: [
    "../public/images/gallery-1.png",
    "../public/images/gallery-2.png",
    "../public/images/gallery-3.png",
    "../public/images/gallery-4.png",
    "../public/images/gallery-5.png",
    "../public/images/gallery-6.png",
  ],
  heroImage: "../public/images/main.png",
  location: {
    mapEmbedUrl: "", // TODO: 카카오/네이버 지도 iframe URL 입력
    transit: [
      { type: "지하철", desc: "5호선 광화문역 7번 출구 도보 3분" },
      { type: "버스", desc: "간선 172, 601 광화문역 정류장 하차" },
      { type: "주차", desc: "건물 지하 주차장 2시간 무료" },
    ],
  },
};

export default weddingData;
