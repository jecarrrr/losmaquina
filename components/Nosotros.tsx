'use client'

export default function Nosotros() {
  const valores = [
    {
      titulo: 'Honestidad',
      desc: 'Solo reparamos lo que realmente necesita tu vehiculo. Sin cobros innecesarios.',
    },
    {
      titulo: 'Precision',
      desc: 'Diagnostico exacto antes de tocar nada. Herramientas de ultima generacion.',
    },
    {
      titulo: 'Garantia',
      desc: 'Todo nuestro trabajo tiene garantia por escrito. Sin letra chica.',
    },
    {
      titulo: 'Rapidez',
      desc: 'Entregamos en el plazo acordado. Tu tiempo es tan valioso como el nuestro.',
    },
  ]

  return (
    <section
      id="nosotros"
      style={{
        background: '#050F28',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="nosotros-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div>
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
              Quienes somos
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                letterSpacing: '3px',
                color: '#F5F5F0',
                lineHeight: 1,
                marginBottom: '1.5rem',
              }}
            >
              MECANICOS DE
              <br />
              <span style={{ color: '#D32F2F' }}>VERDAD</span>
            </h2>
            <div style={{ height: '2px', width: '60px', background: '#D32F2F', marginBottom: '2rem' }} />

            <p
              style={{
                color: '#C8D4E8',
                lineHeight: 1.8,
                fontSize: '1rem',
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}
            >
              Somos un taller familiar fundado en Carahue con mas de 5 años sirviendo
              a la comunidad. Comenzamos con un solo foso y una llave inglesa. Hoy contamos
              con equipos de diagnostico de ultima generacion y un equipo tecnico con
              experiencia comprobada.
            </p>
            <p
              style={{
                color: '#C8D4E8',
                lineHeight: 1.8,
                fontSize: '1rem',
                fontWeight: 300,
              }}
            >
              Nos especializamos en vehiculos europeos, japoneses y americanos. Cada trabajo
              es revisado antes de ser entregado al cliente, porque tu seguridad no admite
              improvisaciones.
            </p>

            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #0D2045',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  background: '#D32F2F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.3rem',
                  color: 'white',
                  letterSpacing: '1px',
                }}
              >
                LM
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.1rem',
                    letterSpacing: '2px',
                    color: '#F5F5F0',
                  }}
                >
                  Equipo Los Maquinas
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: '#D32F2F',
                    fontSize: '0.75rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  Taller en Carahue
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="valores-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                background: '#0D2045',
                border: '1px solid #0D2045',
              }}
            >
              {valores.map((valor) => (
                <div
                  key={valor.titulo}
                  className="valor-cell"
                  style={{
                    background: '#0A1A3A',
                    padding: '2.5rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.5rem',
                      letterSpacing: '2px',
                      color: '#D32F2F',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {valor.titulo}
                  </div>
                  <p
                    style={{
                      color: '#C8D4E8',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {valor.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .valores-grid {
            grid-template-columns: 1fr !important;
          }
          .valor-cell {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
