import './PathSection.css'

import ApplicationForm from './ApplicationForm'

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

        <div id="ariza" className="reveal" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <ApplicationForm />
        </div>
      </div>
    </section>
  )
}
