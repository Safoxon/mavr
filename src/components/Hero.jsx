import './Hero.css'

const WORD_CARDS = [
  { id: 'w1', script: 'Hello', meaning: 'ingliz tili', className: 'w1' },
  { id: 'w2', script: 'こんにちは', meaning: 'yapon tili', className: 'w2', fontFamily: "'Noto Sans JP', sans-serif" },
  { id: 'w3', script: '안녕하세요', meaning: 'koreys tili', className: 'w3', fontFamily: "'Noto Sans KR', sans-serif" },
  { id: 'w4', script: 'مرحبا', meaning: 'arab tili', className: 'w4', fontFamily: "'Noto Sans Arabic', sans-serif" },
]

const STATS = [
  { value: '4', label: 'til yo\'nalishi' },
  { value: '1,500+', label: 'bitiruvchi' },
  { value: '97%', label: 'darajani oshiradi' },
  { value: '4.9', label: 'o\'rtacha baho' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Toshkent &middot; 2014 yildan beri</div>
          <h1>Til o'rganish — <em>yopiq eshik</em> emas, ochiq yo'l.</h1>
          <p className="lead">
            Ingliz, koreys, yapon va arab tillarini boshlang'ich darajadan erkin
            gaplashishgacha. Har bir guruh — 8 kishigacha, har bir o'qituvchi —
            ona tili darajasida.
          </p>
          <div className="hero-actions">
            <a href="#ariza" className="btn-primary">Bepul sinov darsi</a>
            <a href="#kurslar" className="btn-ghost">Kurslarni ko'rish</a>
          </div>
          <div className="stat-row">
            {STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="word-stack">
          {WORD_CARDS.map((card) => (
            <div className={`word-card ${card.className}`} key={card.id}>
              <span className="script" style={card.fontFamily ? { fontFamily: card.fontFamily } : undefined}>
                {card.script}
              </span>
              <span className="meaning">{card.meaning}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
