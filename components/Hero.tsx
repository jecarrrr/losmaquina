'use client'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: `
        linear-gradient(135deg, rgba(5,15,40,0.98) 0%, rgba(10,25,60,0.95) 50%, rgba(5,15,40,0.99) 100%),
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 20px,
          rgba(211,47,47,0.03) 20px,
          rgba(211,47,47,0.03) 21px
        )
      `,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 1.5rem',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-80px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          opacity: 0.06,
          background:
            'conic-gradient(from 0deg, #D32F2F 0deg 30deg, transparent 30deg 60deg, #D32F2F 60deg 90deg, transparent 90deg 120deg, #D32F2F 120deg 150deg, transparent 150deg 180deg, #D32F2F 180deg 210deg, transparent 210deg 240deg, #D32F2F 240deg 270deg, transparent 270deg 300deg, #D32F2F 300deg 330deg, transparent 330deg 360deg)',
          borderRadius: '50%',
          animation: 'rotateSlow 40s linear infinite',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '-40px',
          bottom: '10%',
          width: '300px',
          height: '300px',
          opacity: 0.06,
          background:
            'conic-gradient(from 15deg, #D32F2F 0deg 30deg, transparent 30deg 60deg, #D32F2F 60deg 90deg, transparent 90deg 120deg, #D32F2F 120deg 150deg, transparent 150deg 180deg, #D32F2F 180deg 210deg, transparent 210deg 240deg, #D32F2F 240deg 270deg, transparent 270deg 300deg, #D32F2F 300deg 330deg, transparent 330deg 360deg)',
          borderRadius: '50%',
          animation: 'rotateSlow 25s linear infinite reverse',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          paddingTop: '90px',
          paddingBottom: '5rem',
        }}
      >
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 12vw, 9rem)',
            lineHeight: 0.9,
            letterSpacing: '4px',
            marginBottom: '1rem',
            color: '#F5F5F0',
          }}
        >
          <span style={{ display: 'block' }}>TU VEHICULO</span>
          <span
            style={{
              display: 'block',
              color: '#D32F2F',
              WebkitTextStroke: '2px #D32F2F',
            }}
          >
            EN LAS MEJORES
          </span>
          <span style={{ display: 'block' }}>MANOS</span>
        </h1>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            margin: '2rem 0',
          }}
        >
          <div style={{ height: '2px', width: '40px', background: '#D32F2F', marginTop: '12px', flexShrink: 0 }} />
          <div>
            <p
              style={{
                color: '#E8E8E8',
                fontFamily: "'Barlow', sans-serif",
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                fontWeight: 400,
                maxWidth: '520px',
                lineHeight: 1.7,
                marginBottom: '0.75rem',
              }}
            >
              Diagnostico computarizado, reparacion integral y mantenimiento preventivo.
              Atendemos todo tipo de vehiculos con garantia en cada trabajo.
            </p>
            <p
              style={{
                color: '#C8D4E8',
                fontFamily: "'Barlow', sans-serif",
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                fontWeight: 400,
                maxWidth: '520px',
                lineHeight: 1.7,
              }}
            >
              Contamos con equipamiento profesional de ultima generacion:{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>5 elevadores</span>,{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>
                2 alineadores computarizados
              </span>
              , <span style={{ color: '#FFFFFF', fontWeight: 600 }}>maquina de montaje</span> y{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>balanceadora</span> para
              entregarte un servicio completo, preciso y eficiente.
            </p>
          </div>
        </div>

        <div
          id="hero-cta"
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '2.5rem',
          }}
        >
          <a
            href="#contacto"
            style={{
              background: '#D32F2F',
              color: 'white',
              padding: '14px 28px',
              textDecoration: 'none',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 700,
              clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
              display: 'inline-block',
              transition: 'background 0.2s',
            }}
          >
            Solicitar Revision
          </a>
          <a
            href="#servicios"
            style={{
              border: '1px solid #6080B0',
              color: '#C8D4E8',
              padding: '14px 28px',
              textDecoration: 'none',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 600,
              display: 'inline-block',
            }}
          >
            Ver Servicios
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '1rem',
            marginTop: '4rem',
            borderTop: '1px solid #1E3A6E',
            paddingTop: '2rem',
          }}
        >
          {[
            { num: '5', label: 'Elevadores' },
            { num: '2', label: 'Alineadores' },
            { num: '1', label: 'Maq. Montaje' },
            { num: '1', label: 'Balanceadora' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                  color: '#D32F2F',
                  letterSpacing: '2px',
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: '#C8D4E8',
                  fontSize: '0.75rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to top, rgba(5,15,40,1) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes rotateSlow {
          from { transform: translateY(-50%) rotate(0deg); }
          to { transform: translateY(-50%) rotate(360deg); }
        }
        @media (max-width: 768px) {
          #hero-cta a {
            width: 100%;
            text-align: center;
            display: block !important;
          }
          #hero-cta {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}
