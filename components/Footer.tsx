'use client'

const servicios = [
  'Alineacion',
  'Balanceo',
  'Limpieza de inyectores',
  'Ajuste de motor',
  'Tren delantero y trasero',
  'Cambio disco embrague',
  'Frenos y suspensiones',
  'Medicion de compresion',
  'Cambio de aceite y filtros',
  'Baterias',
  'Neumaticos',
  'Luces',
  'Scanner',
]

const datosContacto = [
  {
    texto: 'Avenida Ercilla 461',
    link: 'https://www.google.com/maps/search/?api=1&query=Avenida+Ercilla+461+Carahue+Chile',
  },
  { texto: '+56 9 65016699', link: 'tel:+56965016699' },
  {
    texto: 'Lubricentro.losmaquinas@gmail.com',
    link: 'mailto:Lubricentro.losmaquinas@gmail.com',
  },
  { texto: 'Lun-Vie: 9:00-18:30 | Sab: 9:00-14:00' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: '#030D20',
        borderTop: '1px solid #0D2045',
        padding: '3rem 2rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          <div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  background: '#D32F2F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="white" opacity="0.9" />
                  <path d="M12 10a2 2 0 100 4 2 2 0 000-4z" fill="#D32F2F" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.3rem',
                  letterSpacing: '3px',
                  color: '#F5F5F0',
                }}
              >
                LOS MAQUINAS
              </span>
            </div>
            <p
              style={{
                color: '#8A9BBF',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: '220px',
              }}
            >
              Taller mecanico de confianza en Carahue. Mas de 20 anos al servicio de tu
              vehiculo.
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: '#D32F2F',
                fontSize: '0.75rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
                fontWeight: 700,
              }}
            >
              Servicios
            </div>
            {servicios.map((servicio) => (
              <a
                key={servicio}
                href="#servicios"
                style={{
                  display: 'block',
                  color: '#8A9BBF',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  marginBottom: '8px',
                  transition: 'color 0.2s',
                  fontWeight: 300,
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E8EEF8')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8A9BBF')}
              >
                {servicio}
              </a>
            ))}
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: '#D32F2F',
                fontSize: '0.75rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
                fontWeight: 700,
              }}
            >
              Contacto
            </div>
            {datosContacto.map((item) =>
              item.link ? (
                <a
                  key={item.texto}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    color: '#8A9BBF',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    marginBottom: '8px',
                    fontWeight: 300,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E8EEF8')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8A9BBF')}
                >
                  {item.texto}
                </a>
              ) : (
                <p
                  key={item.texto}
                  style={{
                    color: '#8A9BBF',
                    fontSize: '0.85rem',
                    marginBottom: '8px',
                    fontWeight: 300,
                  }}
                >
                  {item.texto}
                </p>
              )
            )}
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid #0D2045',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span
            style={{
              color: '#8A9BBF',
              fontSize: '0.8rem',
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: '1px',
            }}
          >
            {new Date().getFullYear()} Los Maquinas - Todos los derechos reservados
          </span>
          <span
            style={{
              color: '#8A9BBF',
              fontSize: '0.8rem',
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: '1px',
            }}
          >
            Carahue, Chile
          </span>
        </div>
      </div>
    </footer>
  )
}
