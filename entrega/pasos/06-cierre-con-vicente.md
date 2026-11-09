# Paso 6 — Cierre con Vicente

**Objetivo:** que la web viva **solo** en tu cuenta. Vicente apaga su copia en Railway.
**Tiempo:** 5 minutos.

## Antes de avisar a Vicente — lo que comprueba Claude

1. `dig +short www.clinicagirones.es` y `dig +short clinicagirones.es` → **ya no** aparece `0nwdawk1.up.railway.app` (el Railway de Vicente) ni `178.18.242.153` (WordPress antiguo).
2. `curl -sI https://clinicagirones.es` y `https://www.clinicagirones.es` → responden desde **tu** Vercel/Railway.
3. Han pasado **al menos 24 horas** desde el cambio de DNS (paso 4), para que todo internet vea ya los valores nuevos.
4. Tu repositorio está en tu cuenta (paso 2) y el formulario funciona (paso 5).

Si todo está bien, Claude te prepara este mensaje para Vicente:

> «Vicente, la web ya está en mi Vercel/Railway y el dominio apunta ahí desde el [fecha]. Puedes borrar tu servicio de Railway de la web de Clínica Gironés. ¡Gracias!»

## Lo que hace Vicente

1. En su Railway, borrar el servicio de la web de Clínica Gironés (incluido el dominio personalizado `www.clinicagirones.es` que tenía añadido).
2. Confirmarte que está hecho.

## Después — lo que comprueba Claude

`curl -sI https://www.clinicagirones.es` y `https://clinicagirones.es` siguen dando `200` desde tu plataforma. Marcar el paso 6 en `entrega/ESTADO.md`.

## Lo que queda pendiente fuera de esta entrega (decídelo tú, sin prisa)

- **Hosting antiguo de Ramnet:** sigue teniendo el correo. No se puede cancelar sin antes mudar el correo (p. ej. a Google Workspace o Microsoft 365). Eso es un proyecto aparte; pídeselo a Claude cuando quieras y te lo planifica.
- **Google Search Console:** dar de alta `clinicagirones.es` y enviar `https://clinicagirones.es/sitemap.xml` ayuda a que Google indexe la web nueva. Claude te guía si quieres.
- **Ficha de Google Maps (Google Business Profile):** comprobar que el enlace a la web apunta a `https://clinicagirones.es`.

## Siguiente

Paso 7 → `07-cambios-del-dia-a-dia.md`.
