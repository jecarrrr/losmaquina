'use client'

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background:
          "linear-gradient(rgba(4,12,32,0.78), rgba(4,12,32,0.88)), url('/hero-bg.jpg') center/cover no-repeat",
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(211,47,47,0.08) 0%, rgba(211,47,47,0) 35%, rgba(255,255,255,0.03) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '7.5rem 1.5rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '760px' }}>
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: '#D32F2F',
              fontSize: '0.9rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Servicio automotriz profesional
          </div>

          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.2rem, 10vw, 7rem)',
              lineHeight: 0.95,
              letterSpacing: '3px',
              margin: 0,
              color: '#F5F5F0',
            }}
          >
            TU VEHICULO
            <br />
            <span style={{ color: '#D32F2F' }}>EN LAS MEJORES</span>
            <br />
            MANOS
          </h1>

          <p
            style={{
              marginTop: '1.4rem',
              color: '#D7E1F2',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: '640px',
            }}
          >
            Diagnóstico, mantenciones, reparación, repuestos y atención confiable para que tu
            vehículo rinda al máximo.
          </p>

          <div
            className="hero-buttons"
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '2rem',
            }}
          >
            <a
              href="#servicios"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '56px',
                padding: '0 28px',
                border: '1px solid rgba(255,255,255,0.45)',
                color: '#F5F5F0',
                textDecoration: 'none',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '1rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontWeight: 700,
                background: 'rgba(255,255,255,0.02)',
                textAlign: 'center',
              }}
            >
              Ver servicios
            </a>

            <a
              href="#contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '56px',
                padding: '0 28px',
                background: '#D32F2F',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '1rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontWeight: 700,
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                textAlign: 'center',
              }}
            >
              Solicitar atención
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #inicio {
            min-height: auto !important;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-buttons a {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          #inicio > div:last-child {
            padding-top: 7rem !important;
            padding-bottom: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}