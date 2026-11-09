# CLAUDE.md — Web de Clínica Gironés

> Este fichero lo lee Claude Code automáticamente al abrir el proyecto. Si eres Claude: **léelo entero antes de hacer nada.**

## Quién te habla y qué quiere

La persona que te escribe es el **nuevo dueño** de esta web. Se la han traspasado y ahora la gestiona él.
**No es programador.** Háblale en español llano, sin jerga; si una palabra técnica es inevitable, explícala en una frase.

Su objetivo, por orden:
1. Tener el código en **su** cuenta de GitHub.
2. Publicar la web en **su** Vercel (recomendado) o **su** Railway.
3. Que `clinicagirones.es` y `www.clinicagirones.es` apunten a **su** despliegue.
4. Poder hacer cambios él mismo (textos, horarios, fotos, servicios) contigo.

## Cómo trabajas SIEMPRE (no negociable)

1. **Al empezar cualquier conversación, lee `entrega/ESTADO.md`.** Ahí está en qué paso va. No preguntes «¿por dónde íbamos?»: míralo.
2. Si la entrega **no** está terminada, ofrece continuar con el **siguiente paso pendiente** leyendo su fichero en `entrega/pasos/`. Haz **un paso cada vez**.
3. Dentro de cada paso: tú haces todo lo que se pueda hacer desde el ordenador (comandos, comprobaciones, cambios de código). Lo que solo puede hacer él (crear cuentas, pulsar botones en webs, pagar, tocar el panel del dominio) se lo das como **instrucciones numeradas, cortas, de una acción por línea**, y esperas a que te diga «hecho».
4. **Comprueba antes de dar un paso por bueno** (cada paso tiene su apartado «Cómo se comprueba»). Ver una pantalla no es comprobarlo: ejecuta el comando o abre la URL.
5. **Al cerrar un paso, actualiza `entrega/ESTADO.md`**: marca la casilla, pon la fecha y anota en «Notas» cualquier dato útil (URL de Vercel, nombre del proyecto, etc.). Luego dile en una frase cuál es el siguiente.
6. Si algo falla, explica qué ha pasado en una frase, arréglalo de raíz y no sigas al paso siguiente hasta que funcione.

## Reglas de seguridad (muy importantes)

- ⛔ **El correo de la clínica (`recepcion@clinicagirones.es`) NO está en Vercel ni en Railway.** Está en el hosting antiguo (Ramnet), en el registro `mail.clinicagirones.es` y en el registro **MX**. Al tocar el DNS **jamás** borres ni cambies los registros `MX`, `mail`, `TXT` (SPF) ni ninguno que no sea el de la web (`@` y `www`). Si los rompes, la clínica deja de recibir correo.
- ⛔ **No canceles el hosting antiguo de Ramnet** aunque la web ya esté en Vercel: el correo sigue ahí. Solo se podría cancelar después de mudar el correo a otro sitio, y eso es otro proyecto.
- ⛔ Nunca pongas contraseñas, claves de API ni tokens en el código ni en un commit. Van en las «Environment Variables» de Vercel/Railway y, en local, en `.env.local` (que git ignora).
- ⛔ No hagas `git push --force` a `main`. Cada push a `main` **publica la web automáticamente**: antes de hacer push, ejecuta `pnpm build` y que salga bien.
- Antes de borrar cualquier fichero, imagen o registro, dile qué es y pide su OK.

## El proyecto en 30 segundos

- Web estática hecha con **Next.js 16 + React 19 + Tailwind CSS 3 + Framer Motion**. Gestor de paquetes: **pnpm**.
- **No usa base de datos ni variables de entorno.** Todo el contenido está en el código.
- **Casi todo el texto de la web está en un solo fichero: `src/lib/constants.ts`** (datos de contacto, horario, servicios, equipo, testimonios, blog, SEO). La mayoría de cambios se hacen ahí.
- Fotos y logos en `public/`. La carpeta `src/public/` es material en bruto que **no** se sube a GitHub (está en `.gitignore`).
- Mapa detallado de qué tocar para cada cambio: `entrega/MAPA-DEL-PROYECTO.md`.

Comandos:
```bash
pnpm install    # instalar dependencias (la primera vez)
pnpm dev        # ver la web en local: http://localhost:3000
pnpm build      # comprobar que todo compila (hacerlo SIEMPRE antes de push)
```

## Cosas pendientes que debes conocer

- ⚠️ **El formulario de `/contacto` NO envía nada**: solo simula el envío (`src/app/contacto/page.tsx`, función `onSubmit`). El paciente ve «enviado» pero el mensaje se pierde. Se arregla en `entrega/pasos/05-formulario-de-contacto.md`. Hasta entonces, si te lo preguntan, dilo claramente.
- `siteUrl` en `src/lib/constants.ts` es `https://clinicagirones.es` (se usa para SEO, sitemap y robots). Si el dominio cambiara, cámbialo ahí.

## Cuando hace cambios del día a día (después de la entrega)

Flujo estándar: entender qué quiere → cambiarlo → `pnpm build` → enseñárselo con `pnpm dev` si es visual → commit con mensaje claro en español → `git push` → esperar el despliegue y comprobar la web publicada. Detalle en `entrega/pasos/07-cambios-del-dia-a-dia.md`.
