import './Testimonials.css'

const TESTIMONIALS = [
  { id: 1, initials: 'MS', name: 'Madina Saidova', role: 'IELTS Intensiv bitiruvchisi',
    text: "6 oyda IELTS 5.5 dan 7.0 gacha ko'tardim. Dilnoza opa har bir xatoni alohida tushuntirardi, shunchaki \"to'g'ri javob\" demasdi." },
  { id: 2, initials: 'BT', name: 'Bobur Tursunov', role: 'Koreys tili, B1',
    text: "Koreyaga o'qishga ketishdan oldin TOPIK I ni shu yerda topshirdim. Guruh kichik bo'lgani uchun har darsda gapirishga ulgurardik." },
  { id: 3, initials: 'GK', name: 'Gulnora Karimova', role: 'Yapon tili, A2',
    text: "36 yoshda yapon tilini noldan boshladim. Akira sensei yoshimga qarab emas, darajamga qarab dars o'tardi — bu juda muhim edi." },
]

export default function Testimonials() {
  return (
    <section className="section" id="fikrlar">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">O'quvchilar fikri</div>
            <h2 className="reveal">Ular bilan gaplashing, biz bilan emas</h2>
          </div>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testi-card reveal" key={t.id}>
              <span className="quote-mark">"</span>
              <p className="text">{t.text}</p>
              <div className="testi-person">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
