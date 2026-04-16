'use client'

const servicios = [
  {
    icono: 'DX',
    titulo: 'Diagnostico Computarizado',
    desc: 'Lectura de codigos OBD-II, analisis de sensores y deteccion precisa de fallas electronicas en todo tipo de vehiculos.',
    detalle: 'Scanner profesional',
  },
  {
    icono: 'MT',
    titulo: 'Motor y Transmision',
    desc: 'Reparacion completa de motores a gasolina y diesel. Caja de cambios manual y automatica con garantia por escrito.',
    detalle: 'Toda marca y modelo',
  },
  {
    icono: 'FS',
    titulo: 'Frenos y Suspension',
    desc: 'Cambio de pastillas, discos y amortiguadores. Seguridad garantizada en cada trabajo.',
    detalle: 'Balanceo incluido',
  },
  {
    icono: 'TT',
    titulo: 'Tren Delantero y Trasero',
    desc: 'Revision y reparacion de brazos, rotulas, bujes, rodamientos y geometria completa del tren delantero y trasero.',
    detalle: 'Revision completa',
  },
  {
    icono: 'SE',
    titulo: 'Sistema Electrico',
    desc: 'Diagnostico y reparacion electrica avanzada. Revision de bateria, alternador, partidas y sistema de luces.',
    detalle: 'Instalaciones certificadas',
  },
  {
    icono: 'MP',
    titulo: 'Mantenciones Preventivas',
    desc: 'Cambio de aceite, filtros, correa de distribucion, bujias y revision tecnica integral con protocolo de 50 puntos.',
    detalle: 'Con sticker de mantencion',
  },
  {
    icono: 'AC',
    titulo: 'Alineacion Computarizada',
    desc: 'Alineacion de precision con equipos de ultima generacion. Corregimos geometria para mayor seguridad y rendimiento de los neumaticos.',
    detalle: '2 alineadores disponibles',
  },
  {
    icono: 'BR',
    titulo: 'Balanceo de Ruedas',
    desc: 'Balanceo dinamico y estatico para eliminar vibraciones, alargar la vida util de los neumaticos y mejorar el confort de manejo.',
    detalle: 'Equipamiento profesional',
  },
  {
    icono: 'LI',
    titulo: 'Limpieza de Inyectores',
    desc: 'Limpieza ultrasonica y en banco de inyectores. Recupera el rendimiento del motor, reduce el consumo de combustible y emisiones.',
    detalle: 'Diesel y gasolina',
  },
  {
    icono: 'CE',
    titulo: 'Cambio Disco de Embrague',
    desc: 'Reemplazo de disco, plato y collarin de embrague con piezas de calidad. Aplicamos para vehiculos manuales de toda marca y modelo.',
    detalle: 'Garantia por escrito',
  },
  {
    icono: 'MC',
    titulo: 'Medicion de Compresion',
    desc: 'Diagnostico del estado interno del motor mediante medicion de compresion en cada cilindro. Detectamos desgaste antes de que se agrave.',
    detalle: 'Diagnostico preventivo',
  },
  {
    icono: 'BN',
    titulo: 'Bateria y Neumaticos',
    desc: 'Venta, instalacion y prueba de baterias. Montaje, desmontaje y revision de neumaticos con maquina de montaje profesional.',
    detalle: 'Montaje en sitio',
  },
]

export default function Servicios() {
  return (
    <section
      id="servicios"
      style={{
        background: '#050F28',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
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
            Lo que hacemos
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
            NUESTROS SERVICIOS
          </h2>
          <div style={{ height: '3px', width: '80px', background: '#D32F2F', marginTop: '1rem' }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: '#0D2045',
            border: '1px solid #0D2045',
          }}
        >
          {servicios.map((servicio, i) => (
            <div
              key={servicio.titulo}
              style={{
                background: '#0A1A3A',
                padding: '2rem 1.5rem',
                position: 'relative',
                cursor: 'default',
                transition: 'background 0.3s',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0F2248'
                const accent = e.currentTarget.querySelector('.accent-line') as HTMLElement
                if (accent) accent.style.width = '100%'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0A1A3A'
                const accent = e.currentTarget.querySelector('.accent-line') as HTMLElement
                if (accent) accent.style.width = '0%'
              }}
            >
              <div
                className="accent-line"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '2px',
                  width: '0%',
                  background: '#D32F2F',
                  transition: 'width 0.4s ease',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '3rem',
                  color: '#0D2045',
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(211,47,47,0.3)',
                  color: '#D32F2F',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.15rem',
                  letterSpacing: '1px',
                }}
              >
                {servicio.icono}
              </div>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.4rem',
                  letterSpacing: '2px',
                  color: '#F5F5F0',
                  marginBottom: '0.75rem',
                  paddingRight: '2.5rem',
                }}
              >
                {servicio.titulo}
              </h3>
              <p
                style={{
                  color: '#C8D4E8',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: '1.5rem',
                }}
              >
                {servicio.desc}
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(211,47,47,0.1)',
                  border: '1px solid rgba(211,47,47,0.3)',
                  padding: '4px 12px',
                  fontSize: '0.75rem',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#D32F2F',
                }}
              >
                OK {servicio.detalle}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem 1.5rem',
            background: 'linear-gradient(135deg, #0A1A3A, #0D2045)',
            border: '1px solid #0D2045',
          }}
        >
          <p
            style={{
              color: '#C8D4E8',
              fontFamily: "'Barlow', sans-serif",
              marginBottom: '1.5rem',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
            }}
          >
            No encuentras lo que necesitas? Contactanos y revisamos tu caso.
          </p>
          <a
            href="#contacto"
            style={{
              background: '#D32F2F',
              color: 'white',
              padding: '14px 32px',
              textDecoration: 'none',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '1rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 700,
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
              display: 'inline-block',
            }}
          >
            Consultar Ahora
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #servicios .accent-line { display: none; }
        }
      `}</style>
    </section>
  )
}
