import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { nombre, telefono, vehiculo, patente, mensaje } = await req.json()

  if (!nombre || !telefono || !vehiculo || !patente || !mensaje) {
    return NextResponse.json(
      { ok: false, error: 'Todos los campos son obligatorios.' },
      { status: 400 }
    )
  }

  console.log('📧 Datos recibidos:', { nombre, telefono, vehiculo, patente, mensaje })

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'lubricentro.losmaquinas@gmail.com',
      subject: `Nueva solicitud de contacto - ${nombre}`,
      html: `
        <div style="margin:0;padding:32px 16px;background:#f3f5f8;font-family:Arial,sans-serif;color:#10213a;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #d9e0ea;border-radius:16px;overflow:hidden;">
            <div style="background:#0b1f4d;padding:24px 28px;border-bottom:4px solid #d32f2f;">
              <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#9fb3d9;margin-bottom:8px;">
                Formulario Web
              </div>
              <h1 style="margin:0;font-size:28px;line-height:1.1;color:#ffffff;">
                Nueva solicitud de contacto
              </h1>
              <p style="margin:10px 0 0;color:#d8e2f3;font-size:14px;">
                Un cliente quiere comunicarse con Los Maquinas.
              </p>
            </div>

            <div style="padding:28px;">
              <div style="margin-bottom:24px;padding:18px;border:1px solid #e4e8ef;border-radius:12px;background:#f9fbfd;">
                <div style="font-size:12px;color:#6b7a90;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">
                  Datos del cliente
                </div>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e6ebf2;font-weight:bold;width:140px;">Nombre</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e6ebf2;">${nombre}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e6ebf2;font-weight:bold;">Telefono</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e6ebf2;">${telefono}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e6ebf2;font-weight:bold;">Vehiculo</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e6ebf2;">${vehiculo}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">Patente</td>
                    <td style="padding:10px 0;">${patente}</td>
                  </tr>
                </table>
              </div>

              <div style="margin-bottom:24px;">
                <div style="font-size:12px;color:#6b7a90;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">
                  Mensaje del cliente
                </div>
                <div style="padding:18px;border-radius:12px;background:#fff5f5;border:1px solid #f0c7c7;color:#2a3340;font-size:15px;line-height:1.6;">
                  ${mensaje}
                </div>
              </div>

              <div style="margin-bottom:8px;">
                <a
                  href="tel:${telefono}"
                  style="display:inline-block;background:#d32f2f;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:10px;font-weight:bold;font-size:14px;"
                >
                  Llamar al cliente
                </a>
              </div>
            </div>

            <div style="padding:18px 28px;background:#f7f9fc;border-top:1px solid #e4e8ef;color:#6c7890;font-size:12px;line-height:1.5;">
              Este correo fue enviado automaticamente desde el formulario de contacto de Los Maquinas.
            </div>
          </div>
        </div>
      `,
    })

    console.log('✅ Resultado:', result)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.log('❌ Error:', error)
    return NextResponse.json({ ok: false, error }, { status: 500 })
  }
}
