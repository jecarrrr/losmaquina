import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Los Maquinas | Taller Mecanico en Carahue',
  description:
    'Taller mecanico de confianza en Carahue. Diagnostico, reparacion y mantenimiento de vehiculos con equipamiento profesional.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
