'use client'

export default function WhatsappButton() {
  const telefono = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? '56965016699'
  const mensaje = encodeURIComponent('Hola.')
  const url = `https://wa.me/${telefono}?text=${mensaje}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      style={{
        position: 'fixed',
        bottom: 'clamp(1.25rem, 4vw, 2rem)',
        right: 'clamp(1.25rem, 4vw, 2rem)',
        zIndex: 9000,
        background: '#25D366',
        width: 'clamp(52px, 14vw, 60px)',
        height: 'clamp(52px, 14vw, 60px)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        transition: 'transform 0.2s',
        WebkitTapHighlightColor: 'transparent',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="white">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.744 5.489 2.044 7.788L.057 30.743a.75.75 0 00.916.916l6.955-1.987A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.771-1.851l-.486-.289-4.354 1.244 1.244-4.354-.289-.486A13.27 13.27 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333z" />
        <path d="M23.3 19.219c-.395-.198-2.343-1.156-2.706-1.288-.363-.131-.628-.197-.892.198-.264.395-1.023 1.288-1.254 1.553-.231.264-.462.297-.857.099-.395-.198-1.668-.615-3.178-1.963-1.174-1.049-1.967-2.344-2.199-2.739-.231-.395-.025-.609.173-.806.178-.177.395-.462.593-.692.198-.231.264-.395.395-.66.132-.264.066-.494-.033-.692-.099-.198-.892-2.146-1.221-2.937-.321-.769-.648-.665-.892-.677-.231-.011-.494-.014-.758-.014s-.692.099-1.055.494c-.363.395-1.386 1.354-1.386 3.302s1.419 3.831 1.617 4.095c.198.264 2.793 4.264 6.766 5.981.946.408 1.682.652 2.258.833.949.302 1.813.26 2.496.158.761-.114 2.343-.958 2.674-1.883.33-.924.33-1.717.231-1.883-.099-.165-.363-.264-.758-.462z" />
      </svg>
    </a>
  )
}
