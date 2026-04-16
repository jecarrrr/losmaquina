# Los Maquinas

Sitio web de `Los Maquinas`, construido con Next.js 16.

## Requisitos

- Node.js 20 o superior
- npm

## Variables de entorno

Crea un archivo `.env.local` con estas variables:

```env
RESEND_API_KEY=tu_api_key
CONTACT_FROM_EMAIL=contacto@tu-dominio.com
CONTACT_TO_EMAIL=Lubricentro.losmaquinas@gmail.com
NEXT_PUBLIC_WHATSAPP_PHONE=56965016699
```

Notas:

- `CONTACT_FROM_EMAIL` debe ser un remitente verificado en Resend para produccion.
- `CONTACT_TO_EMAIL` es el correo que recibira los mensajes del formulario.
- `NEXT_PUBLIC_WHATSAPP_PHONE` debe ir sin espacios ni simbolos.

## Desarrollo

```bash
npm install
npm run dev
```

## Produccion

```bash
npm run build
npm run start
```

## Checklist antes de publicar

- Configurar las variables de entorno en tu proveedor.
- Verificar que `CONTACT_FROM_EMAIL` este autenticado en Resend.
- Probar el formulario `/api/contacto` en el entorno desplegado.
- Revisar enlaces de telefono, WhatsApp, Maps y correo.
