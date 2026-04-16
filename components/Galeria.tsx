'use client'

import Image from 'next/image'
import { useState } from 'react'

const fotos = [
  { src: '/taller-principal.png', titulo: 'Nuestro Taller', tipo: 'Instalaciones' },
  { src: '/alineacion.png', titulo: 'Equipo Hunter', tipo: 'Reparaciones' },
  { src: '/neumaticos.png', titulo: 'Stock de Neumaticos', tipo: 'Neumaticos' },
  { src: '/productos.png', titulo: 'Alineaciones', tipo: 'Reparaciones' },
  { src: '/repuestos.png', titulo: 'Repuestos y Accesorios', tipo: 'Tienda' },
  { src: '/productos2.png', titulo: 'Venta de Repuestos', tipo: 'Repuestos' },
]

const resenas = [
  {
    nombre: 'Carlos V.',
    texto:
      '"Lleve mi Chevrolet porque perdia potencia. En 2 horas tenian el diagnostico exacto. Trabajo impecable y a buen precio."',
    stars: 5,
  },
  {
    nombre: 'Maria J.',
    texto:
      '"Muy profesionales. Me explicaron todo lo que hacian y por que. No como otros talleres que cobran de mas sin avisar."',
    stars: 5,
  },
  {
    nombre: 'Pedro R.',
    texto:
      '"Hace anos que llevo mis vehiculos aca. Nunca me han fallado. El mejor taller de Carahue, sin duda."',
    stars: 5,
  },
]

export default function Galeria() {
  const [fotoActiva, setFotoActiva] = useState<string | null>(null)
  const fotosGrid = fotos.slice(1)

  return (
    <section id="galeria" style={{ background: '#050F28', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: '#D32F2F',
              fontSize: '0.8rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Nuestras instalaciones
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              letterSpacing: '3px',
              color: '#F5F5F0',
              lineHeight: 1,
            }}
          >
            CONOCE EL TALLER
          </h2>
          <div style={{ height: '3px', width: '80px', background: '#D32F2F', marginTop: '1rem' }} />
        </div>

        <div
          onClick={() => setFotoActiva('/taller-principal.png')}
          style={{
            width: '100%',
            height: 'clamp(220px, 40vw, 420px)',
            overflow: 'hidden',
            marginBottom: '2px',
            cursor: 'pointer',
            position: 'relative',
          }}
          onMouseEnter={(e) => {
            const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement
            if (overlay) overlay.style.opacity = '1'
          }}
          onMouseLeave={(e) => {
            const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement
            if (overlay) overlay.style.opacity = '0'
          }}
        >
          <Image
            src="/taller-principal.png"
            alt="Taller Los Maquinas"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }}
            onMouseEnter={(e) => (((e.target as HTMLElement).style.transform = 'scale(1.03)'))}
            onMouseLeave={(e) => (((e.target as HTMLElement).style.transform = 'scale(1)'))}
          />
          <div
            className="overlay"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.4)',
              opacity: 0,
              transition: 'opacity 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.5rem',
                letterSpacing: '4px',
                color: 'white',
              }}
            >
              VER FOTO COMPLETA
            </span>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              padding: '1.5rem',
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: '#D32F2F',
                fontSize: '0.75rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Instalaciones
            </div>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.5rem',
                letterSpacing: '2px',
                color: '#F5F5F0',
              }}
            >
              Nuestro Taller Principal
            </div>
          </div>
        </div>

        <div className="fotos-grid" style={{ marginBottom: '4rem' }}>
          {fotosGrid.map((foto) => (
            <div
              key={foto.src}
              onClick={() => setFotoActiva(foto.src)}
              className="foto-item"
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement
                if (img) img.style.transform = 'scale(1.08)'
                if (overlay) overlay.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement
                if (img) img.style.transform = 'scale(1)'
                if (overlay) overlay.style.opacity = '0'
              }}
            >
              <Image
                src={foto.src}
                alt={foto.titulo}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.5s',
                  display: 'block',
                }}
              />
              <div
                className="overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(211,47,47,0.3)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                  padding: '1rem',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: '#D32F2F',
                    fontSize: '0.65rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {foto.tipo}
                </div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.1rem',
                    letterSpacing: '2px',
                    color: '#F5F5F0',
                  }}
                >
                  {foto.titulo}
                </div>
              </div>
            </div>
          ))}
        </div>

        {fotoActiva && (
          <div
            onClick={() => setFotoActiva(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(0,0,0,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              padding: '1rem',
            }}
          >
            <Image
              src={fotoActiva}
              alt="Foto ampliada"
              width={1400}
              height={900}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                border: '1px solid #0D2045',
              }}
            />
            <button
              onClick={() => setFotoActiva(null)}
              style={{
                position: 'fixed',
                top: '1rem',
                right: '1rem',
                background: '#D32F2F',
                border: 'none',
                color: 'white',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontFamily: "'Bebas Neue', sans-serif",
              }}
            >
              X
            </button>
          </div>
        )}

        <div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              letterSpacing: '3px',
              color: '#F5F5F0',
              marginBottom: '2rem',
            }}
          >
            LO QUE DICEN NUESTROS CLIENTES
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1px',
              background: '#0D2045',
            }}
          >
            {resenas.map((resena) => (
              <div key={resena.nombre} style={{ background: '#0A1A3A', padding: '1.75rem' }}>
                <div
                  style={{ color: '#F5C518', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '3px' }}
                >
                  {'*'.repeat(resena.stars)}
                </div>
                <p
                  style={{
                    color: '#C8D4E8',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    fontWeight: 300,
                    marginBottom: '1.5rem',
                  }}
                >
                  {resena.texto}
                </p>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: '#E8EEF8',
                    fontSize: '0.85rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {resena.nombre}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .fotos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
        }
        .foto-item {
          height: 220px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
        }
        @media (max-width: 1024px) {
          .fotos-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .fotos-grid {
            grid-template-columns: 1fr 1fr;
          }
          .foto-item {
            height: 180px;
          }
        }
        @media (max-width: 480px) {
          .fotos-grid {
            grid-template-columns: 1fr;
          }
          .foto-item {
            height: 200px;
          }
        }
      `}</style>
    </section>
  )
}
