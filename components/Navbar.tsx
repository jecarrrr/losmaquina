'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Ofertas', href: '#ofertas' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(5,15,40,0.97)' : 'rgba(5,15,40,0.88)',
        borderBottom: scrolled ? '1px solid #D32F2F' : '1px solid rgba(255,255,255,0.08)',
        transition: 'all 0.3s ease',
        padding: '0 1rem',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '78px',
          gap: '1rem',
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            minWidth: 0,
            flex: 1,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '52px',
              height: '52px',
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.png"
              alt="Serviteca Los Maquinas SYM"
              fill
              priority
              sizes="52px"
              style={{
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))',
              }}
            />
          </div>

          <div
            className="logo-text"
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1,
              minWidth: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.2rem',
                letterSpacing: '3px',
                color: '#F5F5F0',
                whiteSpace: 'nowrap',
              }}
            >
              SERVITECA
            </span>
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1rem',
                letterSpacing: '2px',
                color: '#D32F2F',
                whiteSpace: 'nowrap',
              }}
            >
              LOS MAQUINAS SYM
            </span>
          </div>
        </a>

        <ul
          className="desktop-nav"
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2.2rem',
            alignItems: 'center',
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: '#C0C0C0',
                  textDecoration: 'none',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '1rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#D32F2F')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#C0C0C0')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          className="hamburger"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '5px',
            padding: '8px',
            margin: 0,
            flexShrink: 0,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '26px',
                height: '2px',
                background: '#D32F2F',
              }}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: 'rgba(5,15,40,0.98)',
            borderTop: '1px solid #D32F2F',
            padding: '0.5rem 1rem 1.25rem',
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: '#C8D4E8',
                textDecoration: 'none',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '1.05rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '14px 0',
                borderBottom: '1px solid #0D2045',
                fontWeight: 600,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }

          .logo-text span:first-child {
            font-size: 1rem !important;
            letter-spacing: 2px !important;
          }

          .logo-text span:last-child {
            font-size: 0.82rem !important;
            letter-spacing: 1.2px !important;
          }
        }

        @media (max-width: 480px) {
          .logo-text span:first-child {
            font-size: 0.92rem !important;
            letter-spacing: 1.5px !important;
          }

          .logo-text span:last-child {
            font-size: 0.72rem !important;
            letter-spacing: 1px !important;
          }
        }
      `}</style>
    </nav>
  )
}