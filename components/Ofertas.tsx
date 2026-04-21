'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const ofertas = [
  {
    titulo: 'Cambio de aceite 10W-40',
    src: '/ofertas/aceite-10w40.jpeg',
    alt: 'Oferta cambio de aceite 10W-40 Serviteca Los Maquinas',
  },
  {
    titulo: 'Cambio de aceite 5W-30',
    src: '/ofertas/aceite-5w30.jpeg',
    alt: 'Oferta cambio de aceite 5W-30 Serviteca Los Maquinas',
  },
]

export default function Ofertas() {
  const [imagenActiva, setImagenActiva] = useState<string | null>(null)
  const [imagenAlt, setImagenAlt] = useState('')

  useEffect(() => {
    document.body.style.overflow = imagenActiva ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [imagenActiva])

  const abrirImagen = (src: string, alt: string) => {
    setImagenActiva(src)
    setImagenAlt(alt)
  }

  const cerrarImagen = () => {
    setImagenActiva(null)
    setImagenAlt('')
  }

  return (
    <section
      id="ofertas"
      style={{
        background: '#061329',
        padding: '6rem 1.5rem',
        borderTop: '1px solid #0D2045',
        borderBottom: '1px solid #0D2045',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: '#D32F2F',
              fontSize: '0.85rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Promociones destacadas
          </div>

          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              letterSpacing: '3px',
              color: '#F5F5F0',
              lineHeight: 1,
              marginBottom: '0.8rem',
            }}
          >
            OFERTAS
          </h2>
        </div>

        <div className="ofertas-grid">
          {ofertas.map((oferta) => (
            <article
              key={oferta.src}
              className="oferta-card"
              style={{
                background: 'linear-gradient(180deg, #0A1A3A 0%, #071631 100%)',
                border: '1px solid #123163',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.28)',
              }}
            >
              <button
                type="button"
                onClick={() => abrirImagen(oferta.src, oferta.alt)}
                aria-label={`Ampliar ${oferta.titulo}`}
                style={{
                  display: 'block',
                  width: '100%',
                  background: '#091426',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  cursor: 'zoom-in',
                }}
              >
                <Image
                  src={oferta.src}
                  alt={oferta.alt}
                  width={900}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </button>

              <div
                style={{
                  padding: '1rem 1rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.7rem',
                    letterSpacing: '2px',
                    color: '#F5F5F0',
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  {oferta.titulo}
                </h3>

                <a
                  href="#contacto"
                  style={{
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                    background: '#D32F2F',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    padding: '12px 22px',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                  }}
                >
                  Consultar oferta
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {imagenActiva && (
        <div
          onClick={cerrarImagen}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.94)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            cursor: 'zoom-out',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '950px',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button
              type="button"
              onClick={cerrarImagen}
              aria-label="Cerrar imagen"
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                width: '42px',
                height: '42px',
                borderRadius: '999px',
                border: 'none',
                background: '#D32F2F',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer',
                zIndex: 2,
              }}
            >
              ×
            </button>

            <Image
              src={imagenActiva}
              alt={imagenAlt}
              width={1200}
              height={1600}
              sizes="100vw"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                border: '1px solid #183866',
                background: '#091426',
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        .ofertas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          align-items: start;
        }

        .oferta-card {
          width: 100%;
        }

        @media (max-width: 768px) {
          .ofertas-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}