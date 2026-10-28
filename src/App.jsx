import './App.css'

const hobbies = [
  { icon: '🎮', title: '게임', text: '어디서든 빠르게 몰입해요.' },
  { icon: '🎧', title: '음악 감상', text: '그날의 기분에 맞는 음악을 들어요.' },
  { icon: '🧳', title: '여행', text: '새로운 곳으로 떠나는 걸 좋아해요.' },
]

function App() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="플래시 소개 페이지 맨 위로">
            <span aria-hidden="true">●</span> 플래시
          </a>
          <nav aria-label="주요 메뉴">
            <a href="#interests">관심사</a>
            <a href="#skills">잘하는 것</a>
            <a href="#activities">활동</a>
            <a href="#goal">목표</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section" id="home" aria-labelledby="hero-title">
          <p className="eyebrow">HELLO, I'M FLASH</p>
          <h1 id="hero-title">
            어디로 튈지 모를
            <br />
            <span className="underlined">공 같은 사람</span>
          </h1>
          <p className="hero-sub">안녕하세요, 저는 <strong>플래시</strong>예요.</p>
          <div className="ball" aria-hidden="true" />
        </section>

        <section className="section" id="interests" aria-labelledby="interests-title">
          <p className="eyebrow">01 / INTERESTS</p>
          <h2 id="interests-title">관심사와 취미</h2>
          <ul className="card-grid">
            {hobbies.map((hobby) => (
              <li className="card" key={hobby.title}>
                <span className="card-icon" aria-hidden="true">{hobby.icon}</span>
                <h3>{hobby.title}</h3>
                <p>{hobby.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <p className="eyebrow">02 / SKILLS</p>
          <h2 id="skills-title">잘하는 것, 배우고 싶은 것</h2>
          <div className="two-col">
            <div className="card">
              <span className="tag">잘하는 것</span>
              <h3>논리적 추론</h3>
            </div>
            <div className="card card-soil">
              <span className="tag">배우고 싶은 것</span>
              <h3>농업</h3>
            </div>
          </div>
        </section>

        <section className="section" id="activities" aria-labelledby="activities-title">
          <p className="eyebrow">03 / ACTIVITIES</p>
          <h2 id="activities-title">해본 활동</h2>
          <article className="card activity">
            <div className="photo-slot" aria-hidden="true">사진을 추가할 자리</div>
            <div>
              <span className="tag">대회</span>
              <h3>FFK 참가</h3>
              <p>농업계열 고등학교 대회에 참가했어요.</p>
              <p className="muted">자세한 이야기는 곧 추가할게요.</p>
            </div>
          </article>
        </section>

        <section className="section goal" id="goal" aria-labelledby="goal-title">
          <p className="eyebrow">04 / GOAL</p>
          <h2 id="goal-title">앞으로의 목표</h2>
          <p className="goal-text">나만의 농장을 만드는 것.</p>
        </section>
      </main>

      <footer className="site-footer">
        <p>플래시의 소개 페이지</p>
        <a href="#home">맨 위로 ↑</a>
      </footer>
    </>
  )
}

export default App
