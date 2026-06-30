import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: 14 }}>
              <img src="/logo.png" alt="MAVR" />
            </div>
            <p className="footer-about">
              Toshkent shahridagi til o'rganish markazi. Ingliz, koreys, yapon va
              arab tillari bo'yicha sifatli ta'lim.
            </p>
          </div>
          <div>
            <h4>Kurslar</h4>
            <ul>
              <li><a href="#kurslar">Ingliz tili</a></li>
              <li><a href="#kurslar">Koreys tili</a></li>
              <li><a href="#kurslar">Yapon tili</a></li>
              <li><a href="#kurslar">Arab tili</a></li>
            </ul>
          </div>
          <div>
            <h4>Markaz</h4>
            <ul>
              <li><a href="#oqituvchilar">O'qituvchilar</a></li>
              <li><a href="#yol">Qanday boshlash</a></li>
              <li><a href="#fikrlar">Fikrlar</a></li>
            </ul>
          </div>
          <div>
            <h4>Aloqa</h4>
            <ul>
              <li><a href="tel:+998907733232">+998 90 773 32 32</a></li>
              <li><a href="mailto:info@mavr.uz">info@mavr.uz</a></li>
              <li><a href="#">Eski shahar, Andijon</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 MAVR. Barcha huquqlar himoyalangan.</span>
        </div>
      </div>
    </footer>
  )
}
