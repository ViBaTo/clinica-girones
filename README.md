# Clínica Gironés — Web

Web de **Clínica Gironés** (podología, fisioterapia, suelo pélvico, pilates y ejercicio terapéutico) · València.
Publicada en https://clinicagirones.es

## 👉 ¿Te acaban de pasar esta web? Empieza aquí

Abre **[`entrega/LEEME-PRIMERO.md`](entrega/LEEME-PRIMERO.md)**. Es una guía paso a paso para quedarte el código, publicarlo en tu Vercel o Railway, conectar el dominio y hacer cambios con Claude Code.

Con Claude Code abierto en esta carpeta, escribe `/siguiente-paso` o «sigamos con la entrega».

## Técnica

- Next.js 16 (App Router) · React 19 · Tailwind CSS 3 · Framer Motion · React Hook Form + Zod
- Node.js 22 · pnpm 10 · sin base de datos ni variables de entorno
- Todo el contenido está en `src/lib/constants.ts` → ver [`entrega/MAPA-DEL-PROYECTO.md`](entrega/MAPA-DEL-PROYECTO.md)

```bash
pnpm install   # dependencias
pnpm dev       # http://localhost:3000
pnpm build     # comprobar antes de publicar
```

Cada push a `main` se publica automáticamente.

## Licencia

Proyecto privado — Todos los derechos reservados.
