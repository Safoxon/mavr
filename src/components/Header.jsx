import { useState } from 'react'
import './Header.css'

const NAV_LINKS = [
  { href: '#kurslar', label: 'Kurslar' },
  { href: '#oqituvchilar', label: "O'qituvchilar" },
  { href: '#yol', label: 'Qanday boshlash' },
  { href: '#fikrlar', label: 'Fikrlar' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header>
      <div className="wrap">
        <nav>
          <div className="logo">MA<span>VR</span></div>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>

          <a href="#ariza" className="nav-cta desktop-only">Sinov darsiga yozilish</a>

          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            aria-label="Menyuni ochish"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>

      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a href="#ariza" className="btn-primary nav-cta" onClick={closeMenu}>
          Sinov darsiga yozilish
        </a>
      </nav>
    </header>
  )
}
