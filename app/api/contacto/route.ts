import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const contactFromEmail =
  process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'
const contactToEmail =
  process.env.CONTACT_TO_EMAIL ?? 'Lubricentro.losmaquinas@gmail.com'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function getField(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(req: Request) {
  const body = await req.json()

  const nombre = getField(body?.nombre)
  const telefono = getField(body?.telefono)
  const vehiculo = getField(body?.vehiculo)
  const mensaje = getField(body?.mensaje)

  if (!nombre || !telefono || !vehiculo || !mensaje) {
    return NextResponse.json(
      { ok: false, error: 'Todos los campos son obligatorios.' },
      { status: 400 }
    )
  }

  if (!resendApiKey) {
    console.error('Falta RESEND_API_KEY.')

    return NextResponse.json(
      { ok: false, error: 'El formulario no esta configurado correctamente.' },
      { status: 500 }
    )
  }

  const resend = new Resend(resendApiKey)

  try {
    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      subject: `Nueva consulta de ${nombre}`,
      html: `
        <h2>Nueva consulta desde la web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Vehiculo:</strong> ${escapeHtml(vehiculo)}</p>
        <p><strong>Mensaje:</strong> ${escapeHtml(mensaje)}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error al enviar correo de contacto.', error)

    return NextResponse.json(
      { ok: false, error: 'No se pudo enviar el mensaje.' },
      { status: 500 }
    )
  }
}
