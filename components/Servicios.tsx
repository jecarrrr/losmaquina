'use client'

import Image from 'next/image'

const servicios = [
  {
    titulo: 'Diagnostico computarizado',
    descripcion:
      'Lectura de codigos OBD-II, analisis de sensores y deteccion precisa de fallas electronicas en todo tipo de vehiculos.',
    imagen: '/servicios/diagnostico_computarizado.png',
  },
  {
    titulo: 'Motor y transmision',
    descripcion:
      'Reparacion completa de motores a gasolina y diesel. Caja de cambios manual y automatica con garantia por escrito.',
    imagen: '/servicios/motor_y_transmision.png',
  },
  {
    titulo: 'Frenos y suspension',
    descripcion:
      'Cambio de pastillas, discos y amortiguadores. Seguridad garantizada en cada trabajo.',
    imagen: '/servicios/frenos_y_suspension.png',
  },
  {
    titulo: 'Tren delantero y trasero',
    descripcion:
      'Revision y reparacion de brazos, rotulas, bujes, rodamientos y geometria completa del tren delantero y trasero.',
    imagen: '/servicios/tren_delantero_y_trasero.png',
  },
  {
    titulo: 'Sistema electrico',
    descripcion:
      'Diagnostico y reparacion electrica avanzada. Revision de bateria, alternador, partidas y sistema de luces.',
    imagen: '/servicios/sistema_electrico.png',
  },
  {
    titulo: 'Mantenciones preventivas',
    descripcion:
      'Cambio de aceite, filtros, correa de distribucion, bujias y revision tecnica integral con protocolo de 50 puntos.',
    imagen: '/servicios/mantenciones_preventivas.png',
  },
  {
    titulo: 'Alineacion computarizada',
    descripcion:
      'Alineacion de precision con equipos de ultima generacion. Corregimos geometria para mayor seguridad y rendimiento de los neumaticos.',
    imagen: '/servicios/alineacion_computarizada.png',
  },
  {
    titulo: 'Balanceo de ruedas',
    descripcion:
      'Balanceo dinamico y estatico para eliminar vibraciones, alargar la vida util de los neumaticos y mejorar el confort de manejo.',
    imagen: '/servicios/balanceo_de_ruedas.png',
  },
  {
    titulo: 'Limpieza de inyectores',
    descripcion:
      'Limpieza ultrasonica y en banco de inyectores. Recupera el rendimiento del motor, reduce el consumo de combustible y emisiones.',
    imagen: '/servicios/limpieza_de_inyectores.png',
  },
  {
    titulo: 'Cambio disco de embrague',
    descripcion:
      'Reemplazo de disco, plato y collarin de embrague con piezas de calidad. Aplicamos para vehiculos manuales de toda marca y modelo.',
    imagen: '/servicios/cambio_disco_de_embrague.png',
  },
  {
    titulo: 'Medicion de compresion',
    descripcion:
      'Diagnostico del estado interno del motor mediante medicion de compresion en cada cilindro. Detectamos desgaste antes de que se agrave.',
    imagen: '/servicios/medicion_de_compresion.png',
  },
  {
    titulo: 'Bateria y neumaticos',
    descripcion:
      'Venta, instalacion y prueba de baterias. Montaje, desmontaje y revision de neumaticos con maquina de montaje profesional.',
    imagen: '/servicios/bateria_y_neumaticos.png',
  },
]

export default function Servicios() {
  return (
    <section
      id="servicios"
      style={{
        background: '#061329',
        padding: '6rem 1rem',
        borderTop: '1px solid #0D2045',
        borderBottom: '1px solid #0D2045',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
            Nuestros servicios
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
            SERVICIOS ESPECIALIZADOS
          </h2>

          <p
            style={{
              color: '#C8D4E8',
              maxWidth: '850px',
              lineHeight: 1.7,
              fontSize: '1rem',
            }}
          >
            Contamos con equipamiento profesional y experiencia en diagnostico, reparacion,
            mantencion y servicios especializados para entregar un trabajo confiable y de calidad.
          </p>
        </div>

        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <article key={servicio.titulo} className="servicio-card">
              <div className="servicio-imagen-wrap">
                <Image
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  width={900}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className="servicio-imagen"
                />
              </div>

              <div className="servicio-contenido">
                <h3 className="servicio-titulo">{servicio.titulo}</h3>
                <p className="servicio-descripcion">{servicio.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .servicios-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
          align-items: stretch;
        }

        .servicio-card {
          background: linear-gradient(180deg, #0A1A3A 0%, #091A39 100%);
          border: 1px solid #102A57;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .servicio-imagen-wrap {
          background: #081427;
          border-bottom: 1px solid #102A57;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 320px;
          max-height: 320px;
          overflow: hidden;
        }

        .servicio-imagen {
          width: 100%;
          height: 100%;
          max-height: 290px;
          object-fit: contain;
          display: block;
          transition: transform 0.35s ease;
        }

        .servicio-card:hover .servicio-imagen {
          transform: scale(1.02);
        }

        .servicio-contenido {
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          min-height: 220px;
        }

        .servicio-titulo {
          margin: 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.7rem, 2.4vw, 2.2rem);
          letter-spacing: 2px;
          color: #F5F5F0;
          line-height: 1.1;
        }

        .servicio-descripcion {
          margin: 0;
          color: #C8D4E8;
          font-size: 1rem;
          line-height: 1.75;
        }

        @media (max-width: 1400px) {
          .servicios-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 1100px) {
          .servicios-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .servicio-imagen-wrap {
            min-height: 300px;
            max-height: 300px;
          }

          .servicio-imagen {
            max-height: 270px;
          }
        }

        @media (max-width: 768px) {
          .servicios-grid {
            grid-template-columns: 1fr;
          }

          .servicio-imagen-wrap {
            min-height: 340px;
            max-height: 340px;
          }

          .servicio-imagen {
            max-height: 310px;
          }

          .servicio-contenido {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  )
}