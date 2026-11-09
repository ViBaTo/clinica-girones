# Paso 4 — Conectar el dominio clinicagirones.es

**Objetivo:** que `clinicagirones.es` y `www.clinicagirones.es` enseñen **tu** despliegue, con candado (HTTPS), **sin romper el correo**.
**Tiempo:** 15 minutos de trabajo + entre 10 minutos y unas horas de espera (propagación de DNS).

## ⛔ Antes de nada: el correo

El correo `recepcion@clinicagirones.es` vive en el hosting antiguo (Ramnet). Depende de estos registros DNS, que **NO se tocan**:

| Tipo | Nombre | Valor | ¿Tocar? |
|---|---|---|---|
| MX | `@` | `10 mail.clinicagirones.es` | ⛔ NO |
| A | `mail` | `178.18.242.153` | ⛔ NO |
| TXT | `@` | `v=spf1 a mx include:ramnet.com.es ~all` | ⛔ NO |
| *cualquier otro* | | | ⛔ NO |

**Solo se cambian dos registros: `@` (la raíz) y `www`.** Y no canceles el hosting de Ramnet: el correo sigue allí.

## Cómo está hoy

| Registro | Apunta a | Qué enseña |
|---|---|---|
| `@` (clinicagirones.es) | A `178.18.242.153` (Ramnet) | la web **antigua** (WordPress) |
| `www` | CNAME `0nwdawk1.up.railway.app` | la web **nueva**, desde el Railway de Vicente |

## Lo que hace Claude primero

1. Hacer una «foto» del DNS actual y guardarla en `entrega/ESTADO.md` (Notas), para poder volver atrás:
   ```
   dig +short clinicagirones.es A
   dig +short www.clinicagirones.es CNAME
   dig +short clinicagirones.es MX
   dig +short mail.clinicagirones.es A
   dig +short clinicagirones.es TXT
   ```
2. Confirmar que siguen como en la tabla de arriba. Si algo ha cambiado, parar y explicártelo.

## Con Vercel — lo que haces tú

1. En Vercel → tu proyecto → **Settings → Domains**.
2. Añade `clinicagirones.es` → **Add**. Si pregunta, elige la opción recomendada (redirigir `clinicagirones.es` → `www.clinicagirones.es` o al revés; cualquiera vale, Claude ajusta el SEO).
3. Añade también `www.clinicagirones.es`.
4. Vercel te enseña qué registros poner (normalmente: **A `@` → `76.76.21.21`** y **CNAME `www` → `cname.vercel-dns.com`**, pero **usa exactamente lo que te muestre Vercel**). Haz una captura y pásasela a Claude.
5. Entra en el **panel del dominio** (el proveedor con servidores `ns.gestiondecuenta.com`). Busca «DNS», «Zona DNS» o «Gestionar DNS».
6. Con Claude delante, cambia **solo**:
   - El registro **A** de `@` (o «clinicagirones.es» / vacío): de `178.18.242.153` → al valor de Vercel.
   - El registro **CNAME** de `www`: de `0nwdawk1.up.railway.app` → al valor de Vercel.
7. Guarda. Vuelve a Vercel → *Domains* y espera a que ambos salgan en verde («Valid Configuration»). El certificado HTTPS se crea solo.

## Con Railway — lo que haces tú

1. En tu servicio → **Settings → Networking → Custom Domain** → añade `www.clinicagirones.es` y `clinicagirones.es`.
2. Railway te da un **CNAME** para cada uno (y a veces un TXT de verificación). Pásaselo a Claude.
3. ⚠️ Muchos proveedores **no permiten CNAME en la raíz** (`@`). Si el tuyo no deja, Claude te propondrá la salida: lo más sencillo es usar solo `www` en Railway y configurar en el panel del dominio una **redirección** de `clinicagirones.es` → `https://www.clinicagirones.es` (si el panel la ofrece), o pasar a Vercel, que sí da una IP para la raíz.
4. Cambia en el panel del dominio **solo** los registros `@` y `www` (más el TXT de verificación si lo pide, **añadiéndolo**, sin borrar el SPF).

## Lo que hace Claude después

1. Esperar y comprobar (repetir cada pocos minutos):
   ```
   dig +short clinicagirones.es A
   dig +short www.clinicagirones.es
   curl -sI https://clinicagirones.es
   curl -sI https://www.clinicagirones.es
   ```
   Ya no debe salir `server: Apache` ni WordPress; debe responder Vercel (`server: Vercel`) o Railway.
2. **Comprobar que el correo sigue igual:** `dig +short clinicagirones.es MX` → `10 mail.clinicagirones.es.` y `dig +short mail.clinicagirones.es A` → `178.18.242.153`. Pídete que envíes un correo de prueba a `recepcion@clinicagirones.es` desde otra cuenta y confirmes que llega.
3. Si se eligió como principal `www.clinicagirones.es` en vez de la raíz, cambiar `siteUrl` en `src/lib/constants.ts` para que coincida (SEO), build y push.
4. Anotar la fecha del cambio de DNS en `entrega/ESTADO.md` y marcar el paso 4.

## Cómo se comprueba

- `https://clinicagirones.es` y `https://www.clinicagirones.es` enseñan la web nueva, con candado.
- Una de las dos redirige a la otra.
- El correo de prueba a `recepcion@clinicagirones.es` ha llegado.

## Si algo sale mal

Vuelve a poner en el panel del dominio los valores de la «foto» que guardó Claude. En minutos/horas todo vuelve a como estaba.

## Siguiente

Paso 5 → `05-formulario-de-contacto.md`.
