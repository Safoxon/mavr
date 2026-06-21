import { useState } from 'react'
import './Courses.css'

const COURSES = [
  { id: 1, lang: 'Ingliz tili', script: 'Aa', level: 'A1–A2', title: "Ingliz tili: Boshlang'ich",
    desc: "Nol bazadan kundalik muloqotgacha. Talaffuz va asosiy grammatikaga urg'u.",
    duration: "16 hafta · 3x/hafta", price: "650,000 so'm/oy" },
  { id: 2, lang: 'Ingliz tili', script: 'Ag', level: 'B1–B2', title: "IELTS Intensiv",
    desc: "4 ko'nikma bo'yicha maqsadli tayyorgarlik. Haftalik mock-testlar bilan.",
    duration: "12 hafta · 4x/hafta", price: "890,000 so'm/oy" },
  { id: 3, lang: 'Yapon tili', script: 'あ', level: 'N5–N4', title: "Yapon tili: Boshlang'ich",
    desc: "Hiragana, katakana va kundalik iboralar. Anime ixlosmandlari uchun ham mos.",
    duration: "20 hafta · 2x/hafta", price: "720,000 so'm/oy", fontFamily: "'Noto Sans JP', sans-serif" },
  { id: 4, lang: 'Koreys tili', script: '가', level: 'TOPIK I', title: "Koreys tili: Asoslar",
    desc: "Hangul yozuvidan boshlab TOPIK I imtihoniga tayyorgarlikgacha.",
    duration: "18 hafta · 3x/hafta", price: "700,000 so'm/oy" },
  { id: 5, lang: 'Arab tili', script: 'ا', level: 'A1–A2', title: "Arab tili: Boshlang'ich",
    desc: "Klassik va zamonaviy arab tili asoslari, o'qish-yozishdan boshlab.",
    duration: "16 hafta · 3x/hafta", price: "680,000 so'm/oy", fontFamily: "'Noto Sans Arabic', sans-serif" },
  { id: 6, lang: 'Ingliz tili', script: 'Bz', level: 'B2–C1', title: "Business English",
    desc: "Ish muhitidagi muzokaralar, prezentatsiya va yozishmalar uchun til.",
    duration: "10 hafta · 2x/hafta", price: "950,000 so'm/oy" },
]

const FILTERS = ['Barchasi', 'Ingliz tili', 'Koreys tili', 'Yapon tili', 'Arab tili']

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('Barchasi')

  const visibleCourses = activeFilter === 'Barchasi'
    ? COURSES
    : COURSES.filter((course) => course.lang === activeFilter)

  return (
    <section className="section courses" id="kurslar">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Kurslar katalogi</div>
            <h2 className="reveal">Darajangizdan qat'iy nazar, sizga mos guruh bor</h2>
          </div>
          <p className="reveal">
            Har bir kurs uchun bepul kirish testi orqali to'g'ri darajani aniqlab
            beramiz — vaqtingizni behuda sarflamaysiz.
          </p>
        </div>

        <div className="filter-row">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="course-grid">
          {visibleCourses.map((course) => (
            <div className="course-card reveal" key={course.id}>
              <div className="course-top">
                <span
                  className="course-script"
                  style={course.fontFamily ? { fontFamily: course.fontFamily } : undefined}
                >
                  {course.script}
                </span>
                <span className="level-tag">{course.level}</span>
              </div>
              <h3>{course.title}</h3>
              <p className="desc">{course.desc}</p>
              <div className="course-meta">
                <span>{course.duration}</span>
                <span className="price">{course.price}</span>
              </div>
            </div>
          ))}

          {visibleCourses.length === 0 && (
            <p className="empty-state">Bu yo'nalishda hozircha kurs yo'q.</p>
          )}
        </div>
      </div>
    </section>
  )
}
