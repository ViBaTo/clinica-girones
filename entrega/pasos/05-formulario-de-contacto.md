# Paso 5 — Que el formulario de contacto funcione de verdad

**Objetivo:** que cuando un paciente rellene el formulario de `/contacto`, el mensaje **llegue** a `recepcion@clinicagirones.es`.
**Tiempo:** 20 minutos.

## El problema

Hoy el formulario es una maqueta: espera 1,5 segundos, dice «enviado» y **no manda nada** (`src/app/contacto/page.tsx`, función `onSubmit`, comentario `// Simulate form submission`). Cualquier mensaje que alguien envíe ahora se pierde.

## Opciones (Claude recomienda una y la hace)

| Opción | Cómo | Pros | Contras |
|---|---|---|---|
| **A. Resend** *(recomendada)* | Ruta de servidor de Next.js (`src/app/api/contacto/route.ts`) que envía el correo con la API de Resend. | Gratis hasta 3.000 correos/mes, fiable, todo dentro del proyecto, funciona igual en Vercel y Railway. | Hay que crear cuenta en Resend y verificar el dominio (añadir 2-3 registros DNS **nuevos**; no se toca nada de lo que hay). |
| B. Formspree / Web3Forms | El formulario envía directamente a un servicio externo. | Cero servidor, 5 minutos. | Plan gratis limitado, depende de un tercero, menos control. |
| C. Quitar el formulario | Dejar solo teléfono, WhatsApp y email (ya están en la página). | Nada que mantener. | Se pierde el formulario. |

## Con la opción A (Resend) — lo que haces tú

1. Crea cuenta en https://resend.com.
2. **Domains → Add Domain** → `clinicagirones.es`. Resend te da unos registros DNS (normalmente un TXT/MX en un subdominio tipo `send` y un TXT `resend._domainkey`). Pásaselos a Claude.
3. Añádelos en el panel del dominio **como registros nuevos**. ⛔ No borres ni edites el MX ni el SPF existentes de `@`: los de Resend van en subdominios aparte. Claude lo revisa contigo antes de guardar.
4. Espera a que Resend marque el dominio como **Verified**.
5. **API Keys → Create API Key** (permiso *Sending access*). Cópiala **y pégala solo en Vercel/Railway**, no en el chat si puedes evitarlo:
   - Vercel: *Settings → Environment Variables* → `RESEND_API_KEY` = la clave (en *Production* y *Preview*).
   - Railway: servicio → *Variables* → `RESEND_API_KEY`.
   - En tu ordenador, Claude creará `.env.local` (no se sube a GitHub) para probar en local; ahí sí tendrás que pegarla.

## Lo que hace Claude en este paso

1. Recomendar la opción (por defecto A) y confirmar contigo.
2. Implementarla:
   - `src/app/api/contacto/route.ts`: valida los datos con el **mismo esquema Zod** que el formulario, envía el correo a `recepcion@clinicagirones.es` desde `web@clinicagirones.es` (o similar, del dominio verificado) con `reply_to` = email del paciente, y responde error si falla. Clave leída de `process.env.RESEND_API_KEY`; si no existe, error claro.
   - `src/app/contacto/page.tsx`: cambiar la simulación por un `fetch('/api/contacto', …)` y mostrar **error de verdad** si el envío falla (nunca «enviado» si no se envió).
   - Protección antispam sencilla (campo oculto «trampa» y/o límite básico).
   - Revisar que el texto legal de `/privacidad` encaja con que se guarden/envíen datos del formulario; si no, proponer el cambio.
3. Probar en local con `.env.local`, enviar un mensaje de prueba y que confirmes que ha llegado a `recepcion@`.
4. `pnpm build`, commit, push. Esperar el despliegue y repetir la prueba **en la web publicada**.
5. Apuntar el servicio usado en `entrega/ESTADO.md` y marcar el paso 5.

## Cómo se comprueba

Envías un mensaje desde `https://clinicagirones.es/contacto` (la web publicada, no la local) y llega a `recepcion@clinicagirones.es`. Y si desactivas la clave a propósito, la web enseña un error en vez de «enviado».

## Siguiente

Paso 6 → `06-cierre-con-vicente.md`.
