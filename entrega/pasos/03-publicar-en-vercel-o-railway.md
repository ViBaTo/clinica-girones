# Paso 3 — Publicar la web en tu cuenta

**Objetivo:** que la web esté publicada en **tu** Vercel (o Railway) con una dirección provisional, antes de tocar el dominio.
**Tiempo:** 10 minutos.

## Recomendación: Vercel

Vercel es de los creadores de Next.js (la tecnología de esta web): se configura solo, el plan gratuito (*Hobby*) sobra para una web así y cada vez que guardas un cambio en GitHub la vuelve a publicar sola.
> Nota: el plan *Hobby* de Vercel es para uso no comercial. Para la web de una clínica, lo correcto es el plan **Pro** (unos 20 $/mes). Si prefieres no pagarlo, Railway (abajo) cuesta unos pocos dólares al mes con su plan *Hobby*. Decide tú; técnicamente funcionan igual.

### Vercel — lo que haces tú

1. Entra en https://vercel.com/signup → **Continue with GitHub** (con tu cuenta).
2. Pulsa **Add New… → Project**.
3. En la lista de repositorios, junto a `clinica-girones`, pulsa **Import**. Si no aparece: *Adjust GitHub App Permissions* → dale acceso a ese repositorio.
4. Vercel detecta solo **Next.js** y **pnpm**. **No cambies nada.** No hace falta ninguna «Environment Variable».
5. Pulsa **Deploy** y espera 1–2 minutos.
6. Te da una dirección tipo `clinica-girones-xxxx.vercel.app`. **Pásasela a Claude.**

### Railway — alternativa

1. Entra en https://railway.com → *Login with GitHub*.
2. **New Project → Deploy from GitHub repo →** `clinica-girones`.
3. Railway detecta Next.js y pnpm solo. Espera a que el despliegue salga en verde.
4. En el servicio → *Settings* → *Networking* → **Generate Domain**. Te da una dirección tipo `xxxx.up.railway.app`. **Pásasela a Claude.**

## Lo que hace Claude en este paso

1. Abrir la URL provisional y comprobar que responden bien estas páginas: `/`, `/servicios`, `/servicios/podologia`, `/sobre-nosotros`, `/contacto`, `/blog`, `/sitemap.xml` (por ejemplo con `curl -sI URL` → `200`).
2. Comprobar que las fotos cargan (una del equipo, p. ej. `/team/pilar-girones.jpg`).
3. Si el despliegue falla: leer el error que muestra Vercel/Railway (pídete que se lo copies), arreglarlo en el código, `pnpm build`, push, y repetir.
4. Apuntar plataforma y URL provisional en `entrega/ESTADO.md` y marcar el paso 3.

## Cómo se comprueba

La URL provisional enseña la web completa, igual que en tu ordenador, y todas las páginas de la lista responden `200`.

## Siguiente

Paso 4 → `04-conectar-el-dominio.md`.
