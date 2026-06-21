import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: 14 }}>MA<span>VR</span></div>
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
              <li><a href="tel:+998901234567">+998 90 123 45 67</a></li>
              <li><a href="mailto:info@mavr.uz">info@mavr.uz</a></li>
              <li><a href="#">Chilonzor, Toshkent</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 MAVR. Barcha huquqlar himoyalangan.</span>
          <span>Demo sayt &middot; portfolio loyihasi</span>
        </div>
      </div>
    </footer>
  )
}
