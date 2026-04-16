import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { nombre, telefono, vehiculo, mensaje } = await req.json()

  console.log('📧 Datos recibidos:', { nombre, telefono, vehiculo, mensaje })

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'lubricentro.losmaquinas@gmail.com',
      subject: `Los Maquinas`,
      html: `
        <h2>Esta persona se quiere contactar contigo</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Vehículo:</strong> ${vehiculo}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    })

    console.log('✅ Resultado:', result)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.log('❌ Error:', error)
    return NextResponse.json({ ok: false, error }, { status: 500 })
  }
}