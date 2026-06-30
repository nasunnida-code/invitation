export default function Account() {
  return (
    <section>
      <h2 className="title">마음 전하실 곳</h2>

      <div className="account">
        <h4>신랑측</h4>

        <p>국민 123-456-789012</p>

        <button>복사하기</button>
      </div>

      <div className="account">
        <h4>신부측</h4>

        <p>신한 123-456-789012</p>

        <button>복사하기</button>
      </div>
    </section>
  );
}
