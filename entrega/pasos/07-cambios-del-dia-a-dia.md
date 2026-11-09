# Paso 7 — Cambios del día a día

**Objetivo:** que sepas hacer cambios tú solo con Claude, de forma segura.

## Cómo funciona (en una frase)

Le dices a Claude qué quieres cambiar → él lo cambia en tu ordenador → te lo enseña → lo guarda en GitHub → **Vercel/Railway publica la web nueva sola en 1–2 minutos.**

## Cada vez que quieras cambiar algo

1. Abre la terminal y entra en la carpeta:
   ```
   cd ~/Documents/clinica-girones
   claude
   ```
2. Pide el cambio con palabras normales (tienes ejemplos en `entrega/PROMPTS.md`, apartado «día a día»). Por ejemplo:
   - «Cambia el horario a Lunes a Viernes de 9:00 a 14:00 y de 16:00 a 20:30.»
   - «Añade a María López, fisioterapeuta, al equipo, con esta foto: [arrastra la foto a la terminal].»
   - «Escribe un artículo para el blog sobre juanetes, en el mismo estilo que los demás.»
3. Si es un cambio visual, dile «enséñamelo antes de publicar» y abre http://localhost:3000.
4. Cuando te guste: «publícalo».

## Lo que hace Claude SIEMPRE en cada cambio

1. **Traer la última versión** antes de empezar: `git pull`.
2. Localizar dónde se cambia (casi siempre `src/lib/constants.ts`; ver `entrega/MAPA-DEL-PROYECTO.md`).
3. Hacer el cambio mínimo, en el mismo estilo que lo que ya hay.
4. `pnpm build` → **si falla, no publica**; lo arregla primero.
5. Commit con un mensaje claro en español (p. ej. «Actualiza horario de invierno») y `git push` a `main`.
6. Esperar al despliegue y **abrir la web publicada** para comprobar que el cambio está y nada se ha roto.

## Para el primer cambio de práctica (cierra la entrega)

Haz un cambio pequeño y real, por ejemplo corregir un texto o añadir una opinión de un paciente. Cuando lo veas publicado en `https://clinicagirones.es`, Claude marca el paso 7 en `entrega/ESTADO.md`. 🎉 La web ya es completamente tuya.

## Si algo se rompe

- Dile a Claude: «La web hace [esto]. Averigua por qué y arréglalo; si lo rompió el último cambio, vuelve a la versión anterior.»
- Volver atrás siempre es posible: en Vercel → *Deployments* → el despliegue anterior → **Promote to Production** (o *Instant Rollback*). En Railway → *Deployments* → el anterior → **Redeploy**. Claude además puede deshacer el cambio en el código con `git revert`.

## Mantenimiento (una o dos veces al año)

Dile a Claude: «Revisa si hay actualizaciones de seguridad importantes en las dependencias y actualiza solo las necesarias, comprobando que todo sigue funcionando». Next.js publica avisos de seguridad de vez en cuando; vale la pena tenerlo al día.
