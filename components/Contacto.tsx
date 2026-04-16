'use client'

import { useState } from 'react'

const contactoItems = [
  {
    icon: 'Ubicacion',
    titulo: 'Direccion',
    info: 'Avenida Ercilla 461',
    sub: 'Carahue, Chile - Click para abrir en Maps',
    link: 'https://www.google.com/maps/search/?api=1&query=Avenida+Ercilla+461+Carahue+Chile',
  },
  {
    icon: 'Telefono',
    titulo: 'Telefono',
    info: '+56 9 65016699',
    sub: 'Tambien WhatsApp',
    link: 'tel:+56965016699',
  },
  {
    icon: 'Horario',
    titulo: 'Horario',
    info: 'Lun-Vie: 9:00 - 18:30',
    sub: 'Sab: 9:00 - 13:00',
  },
  {
    icon: 'Email',
    titulo: 'Email',
    info: 'Lubricentro.losmaquinas@gmail.com',
    sub: 'Respondemos a la brevedad',
    link: 'mailto:Lubricentro.losmaquinas@gmail.com',
  },
]

const campos = [
  { key: 'nombre', label: 'Tu Nombre', placeholder: 'Juan Perez', type: 'text' },
  {
    key: 'telefono',
    label: 'Telefono / WhatsApp',
    placeholder: '+56 9 XXXX XXXX',
    type: 'tel',
  },
  {
    key: 'vehiculo',
    label: 'Tu Vehiculo',
    placeholder: 'Ej: Toyota Corolla 2018',
    type: 'text',
  },
] as const

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    vehiculo: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setEnviado(true)
        setTimeout(() => setEnviado(false), 4000)
        setForm({ nombre: '', telefono: '', vehiculo: '', mensaje: '' })
      } else {
        alert('Error al enviar. Intenta de nuevo.')
      }
    } catch {
      alert('Error de conexion. Intenta de nuevo.')
    } finally {
      setEnviando(false)
    }
  }

  const inputStyle = {
    background: '#071530',
    border: '1px solid #1E3A6E',
    color: '#F5F5F0',
    padding: '14px 16px',
    width: '100%',
    fontFamily: "'Barlow', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section
      id="contacto"
      style={{
        background: '#050F28',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="contacto-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
            gap: '4rem',
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
              CONTACTANOS
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                letterSpacing: '3px',
                color: '#F5F5F0',
                lineHeight: 1,
                marginBottom: '1rem',
              }}
            >
              AGENDA TU
              <br />
              <span style={{ color: '#D32F2F' }}>REVISION</span>
            </h2>
            <div
              style={{
                height: '2px',
                width: '60px',
                background: '#D32F2F',
                marginBottom: '2.5rem',
              }}
            />

            {contactoItems.map((item) => (
              <div
                key={item.titulo}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid #0A1A3A',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(211,47,47,0.1)',
                    border: '1px solid rgba(211,47,47,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.72rem',
                    color: '#D32F2F',
                    textTransform: 'uppercase',
                    flexShrink: 0,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: '1px',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: '#8A9BBF',
                      fontSize: '0.72rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      marginBottom: '2px',
                    }}
                  >
                    {item.titulo}
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#E8EEF8',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        marginBottom: '2px',
                        display: 'block',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#D32F2F')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#E8EEF8')}
                    >
                      {item.info}
                    </a>
                  ) : (
                    <div
                      style={{
                        color: '#E8EEF8',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        marginBottom: '2px',
                      }}
                    >
                      {item.info}
                    </div>
                  )}
                  <div style={{ color: '#8A9BBF', fontSize: '0.82rem', fontWeight: 300 }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              style={{
                background: '#0A1A3A',
                border: '1px solid #0D2045',
                padding: 'clamp(1.25rem, 5vw, 2.5rem)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.5rem',
                  letterSpacing: '3px',
                  color: '#F5F5F0',
                  marginBottom: '2rem',
                  borderBottom: '1px solid #0D2045',
                  paddingBottom: '1rem',
                }}
              >
                FORMULARIO DE CONTACTO
              </div>

              {campos.map((field) => (
                <div key={field.key} style={{ marginBottom: '1rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: '#C8D4E8',
                      fontSize: '0.75rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key]}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, [field.key]: e.target.value }))
                    }
                    required
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = '#D32F2F')}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = '#1E3A6E')}
                  />
                </div>
              ))}

              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: '#C8D4E8',
                    fontSize: '0.75rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  Describe el Problema
                </label>
                <textarea
                  placeholder="Cuentanos que le pasa a tu vehiculo..."
                  value={form.mensaje}
                  onChange={(e) => setForm((prev) => ({ ...prev, mensaje: e.target.value }))}
                  required
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = '#D32F2F')}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = '#1E3A6E')}
                />
              </div>

              <button
                type="submit"
                disabled={enviando}
                style={{
                  width: '100%',
                  background: enviado ? '#1B5E20' : '#D32F2F',
                  color: 'white',
                  border: 'none',
                  padding: '16px',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.1rem',
                  letterSpacing: '3px',
                  cursor: enviando ? 'wait' : 'pointer',
                  opacity: enviando ? 0.8 : 1,
                  transition: 'background 0.3s',
                  clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                }}
              >
                {enviando
                  ? 'ENVIANDO...'
                  : enviado
                    ? 'MENSAJE ENVIADO'
                    : 'ENVIAR MENSAJE'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .contacto-grid {
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
