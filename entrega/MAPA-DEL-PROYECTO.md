# Mapa del proyecto — qué tocar para cambiar cada cosa

> Para el dueño: no necesitas abrir estos ficheros; díselo a Claude con palabras normales. Esto es para que Claude (y tú, si tienes curiosidad) sepa dónde está cada cosa.

## La regla de oro

**El 90 % de los cambios se hacen en `src/lib/constants.ts`.** Es el «almacén» de todos los datos de la web. Las páginas solo los pintan.

| Quieres cambiar… | Dónde está (en `src/lib/constants.ts`) |
|---|---|
| Teléfonos, WhatsApp, email, dirección, Instagram, mapa | `CLINIC_INFO` |
| Horario | `CLINIC_INFO.hours` |
| Menú de arriba | `NAV_LINKS` |
| Tarjetas de servicios (home y `/servicios`) | `SERVICES` |
| Página de cada servicio (`/servicios/podologia`, etc.): tratamientos, proceso, preguntas frecuentes | `SERVICES_DETAIL` (una entrada por servicio; la clave es la URL) |
| Equipo (`/sobre-nosotros`) | `TEAM_MEMBERS` y `RECEPTION_TEAM` |
| Valores de la clínica | `VALUES` |
| Opiniones de pacientes | `TESTIMONIALS` |
| Artículos del blog | `BLOG_POSTS` (la URL sale del campo `slug`) |
| Título de Google, descripción, palabras clave, dominio | `SEO_CONFIG` (`siteUrl` = `https://clinicagirones.es`) |

## Imágenes

- Van en la carpeta `public/` y en el código se escriben empezando por `/`. Ejemplo: `public/team/pilar-girones.jpg` → `'/team/pilar-girones.jpg'`.
- Subcarpetas: `public/team/` (equipo), `public/images/blog/` (blog), `public/aseguradoras/` (logos de aseguradoras), y en la raíz de `public/` las fotos de cabecera de cada servicio (`*-hero.jpg/png`) y los logos de la clínica.
- Antes de subir una foto nueva: JPG, máximo ~1600 px de ancho y menos de 400 KB. Claude puede reducirla (en Mac: `sips -Z 1600 foto.jpg`).
- `src/public/` es material en bruto que **no** se publica ni se sube a GitHub (está en `.gitignore`).

## Páginas (carpeta `src/app/`)

| URL | Fichero |
|---|---|
| `/` (inicio) | `src/app/page.tsx` + secciones en `src/components/sections/` (`Hero`, `ServicesPreview`, `AboutPreview`, `InsurancePartners`, `Testimonials`, `ContactCTA`) |
| `/servicios` y `/servicios/[servicio]` | `src/app/servicios/page.tsx` y `src/app/servicios/[slug]/page.tsx` |
| `/sobre-nosotros` | `src/app/sobre-nosotros/page.tsx` |
| `/contacto` (formulario) | `src/app/contacto/page.tsx` — ⚠️ el envío está simulado (ver paso 5) |
| `/blog` y `/blog/[artículo]` | `src/app/blog/page.tsx` y `src/app/blog/[slug]/page.tsx` |
| `/privacidad`, `/aviso-legal` | `src/app/privacidad/page.tsx`, `src/app/aviso-legal/page.tsx` |
| Cabecera, pie y botón de WhatsApp (salen en todas) | `src/components/layout/` |
| Estructura común, datos de Google (Schema.org), tipografía | `src/app/layout.tsx` |
| Logos de aseguradoras de la home | `src/components/sections/InsurancePartners.tsx` + `public/aseguradoras/` |
| `sitemap.xml` y `robots.txt` | `src/app/sitemap.ts`, `src/app/robots.ts` (se generan solos) |

## Estilo

- Colores y tipografía: `tailwind.config.ts` (color principal `primary`) y `src/app/globals.css`.
- Botones, tarjetas, títulos reutilizables: `src/components/ui/`.

## Técnica

- Next.js 16 (App Router) · React 19 · Tailwind CSS 3 · Framer Motion · React Hook Form + Zod · iconos Lucide.
- Node.js 22 · pnpm 10 (versión fijada en `package.json` → `packageManager`).
- Sin base de datos, sin variables de entorno (hasta el paso 5, si el formulario usa un servicio con clave).
- Cada push a la rama `main` de GitHub → Vercel/Railway vuelve a publicar la web sola en 1–2 minutos.
