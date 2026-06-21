import './Teachers.css'

const TEACHERS = [
  { id: 1, initials: 'DN', name: 'Dilnoza Nazarova', role: 'Ingliz tili, CELTA',
    bio: "7 yillik tajriba, IELTS bo'yicha 200+ talabani 7.0+ ballga olib chiqqan.",
    tags: ['IELTS', 'Business'], flag: '🇬🇧', bg: 'var(--ink)' },
  { id: 2, initials: 'JH', name: 'Jin-ho Park', role: 'Koreys tili, ona tili darajasida',
    bio: "Seuldan, 5 yil O'zbekistonda dars beradi. TOPIK imtihonlariga mutaxassis.",
    tags: ['TOPIK', 'Suhbat'], flag: '🇰🇷', bg: 'var(--terracotta)' },
  { id: 3, initials: 'AY', name: 'Akira Yamamoto', role: 'Yapon tili, JLPT N1',
    bio: "Tokio universiteti bitiruvchisi, 6 yil pedagogik tajriba.",
    tags: ['JLPT', 'Madaniyat'], flag: '🇯🇵', bg: 'var(--gold)', dark: true },
  { id: 4, initials: 'FR', name: 'Faridun Rashidov', role: 'Arab tili, Al-Azhar bitiruvchisi',
    bio: "Klassik va zamonaviy arab tilini o'qitishda 9 yillik tajriba.",
    tags: ['Klassik', 'Zamonaviy'], flag: '🇸🇦', bg: 'var(--ink-soft)' },
]

export default function Teachers() {
  return (
    <section className="section" id="oqituvchilar">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Jamoa</div>
            <h2 className="reveal">O'qituvchilar bilan tanishing</h2>
          </div>
          <p className="reveal">Har biri xalqaro sertifikat va kamida 4 yillik tajribaga ega.</p>
        </div>

        <div className="teacher-grid">
          {TEACHERS.map((teacher) => (
            <div className="teacher-card reveal" key={teacher.id}>
              <div
                className="teacher-photo"
                style={{ background: teacher.bg, color: teacher.dark ? 'var(--ink)' : 'var(--paper)' }}
                data-flag={teacher.flag}
              >
                {teacher.initials}
              </div>
              <div className="teacher-info">
                <h3>{teacher.name}</h3>
                <div className="role">{teacher.role}</div>
                <p className="bio">{teacher.bio}</p>
                <div className="teacher-langs">
                  {teacher.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
