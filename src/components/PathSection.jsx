import './PathSection.css'

const STEPS = [
  { num: '01', title: "Bepul daraja aniqlash testi",
    desc: "15 daqiqalik online test orqali aniq darajangizni bilib olasiz — hech qanday majburiyatsiz." },
  { num: '02', title: "Sinov darsiga taklif",
    desc: "Sizga mos guruh va o'qituvchi bilan bitta bepul darsda qatnashasiz." },
  { num: '03', title: "Guruhga yoziling",
    desc: "Jadval va narxni tanlab, o'qishni istalgan haftadan boshlaysiz." },
]

export default function PathSection() {
  return (
    <section className="section path-section" id="yol">
      <div className="wrap path-grid">
        <div>
          <div className="eyebrow">Yangilar uchun</div>
          <h2 className="reveal" style={{ marginBottom: 34 }}>Birinchi qadam — 3 bosqichda</h2>
          <div className="path-steps">
            {STEPS.map((step) => (
              <div className="path-step reveal" key={step.num}>
                <span className="path-num">{step.num}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="placement-card reveal" id="ariza">
          <h3>Darajangizni biling</h3>
          <p>Hozir boshlang — qaysi darajadan boshlash kerakligini 15 daqiqada bilib olasiz.</p>
          <a href="#" className="btn-primary">Testni boshlash</a>
          <div className="placement-mini-stat">
            <div><b>15 daq</b><span>test davomiyligi</span></div>
            <div><b>4 til</b><span>tanlov uchun</span></div>
            <div><b>0 so'm</b><span>test narxi</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
