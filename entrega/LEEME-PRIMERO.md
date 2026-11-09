# 👋 Léeme primero — Tu web de Clínica Gironés

Esta carpeta es tu guía para quedarte la web y gestionarla tú. No necesitas saber programar: **Claude Code hace la parte técnica** y te va diciendo, paso a paso, lo poco que tienes que hacer tú (crear cuentas y pulsar algún botón).

## Qué tienes aquí

| Fichero | Para qué |
|---|---|
| `LEEME-PRIMERO.md` | Esto. Empieza aquí. |
| `ESTADO.md` | La lista de pasos con casillas. Claude la va marcando. |
| `PROMPTS.md` | Los textos que pegas a Claude, todos juntos. |
| `pasos/01…07` | El detalle de cada paso (Claude los lee por ti). |
| `MAPA-DEL-PROYECTO.md` | Qué fichero tocar para cambiar cada cosa de la web. |
| `../CLAUDE.md` | Las instrucciones permanentes para Claude. Gracias a este fichero, **cada vez que abras Claude en esta carpeta sabe qué es el proyecto, en qué paso vas y qué no puede romper.** |

## Cómo está la web hoy (antes de empezar)

- La web nueva ya funciona en **https://www.clinicagirones.es**, pero está publicada en la cuenta de Railway de Vicente.
- **https://clinicagirones.es** (sin «www») todavía enseña la web antigua (WordPress).
- El **correo** `recepcion@clinicagirones.es` está en el hosting antiguo (Ramnet). **No se toca** en todo este proceso.
- El **formulario de contacto** de la web nueva todavía **no envía mensajes** (lo arreglamos en el paso 5).

## Qué necesitas

1. Un ordenador (Mac o Windows).
2. Una cuenta de **GitHub** (gratis) → https://github.com/signup
3. Una cuenta de **Vercel** (gratis para esto; te registras con tu GitHub) → https://vercel.com/signup
   *(O Railway si lo prefieres; Vercel es más sencillo para este tipo de web.)*
4. **Claude Code** instalado (necesitas una suscripción de Claude: Pro o Max) → https://claude.com/claude-code
5. Acceso al **panel del dominio** `clinicagirones.es` (donde se contrató; sus DNS son `ns.gestiondecuenta.com`). Si no lo tienes, pídeselo a quien lo contrató. Lo necesitarás en el paso 4.

## Los 7 pasos

1. **Preparar el ordenador** — instalar lo necesario. *(15 min)*
2. **Quedarte el código** — aceptar el repositorio en tu GitHub y descargarlo. *(10 min)*
3. **Publicar la web** en tu Vercel. *(10 min)*
4. **Conectar el dominio** `clinicagirones.es` a tu Vercel. *(15 min + esperar a que propague)*
5. **Arreglar el formulario de contacto** para que los mensajes lleguen al correo. *(20 min)*
6. **Cierre con Vicente** — él apaga su copia y la web queda solo en tu cuenta. *(5 min)*
7. **Cambios del día a día** — cómo pedirle a Claude que cambie textos, horarios, fotos… *(siempre)*

## Cómo empezar (ahora mismo)

1. Haz el **paso 1** siguiendo `pasos/01-preparar-el-ordenador.md` (es el único que haces sin Claude, porque todavía no lo tienes instalado). Si prefieres, abre https://claude.ai y pégale ese fichero para que te guíe.
2. Cuando tengas Claude Code y la carpeta descargada (paso 2), abre una terminal **dentro de la carpeta del proyecto**, escribe `claude` y pega el **PROMPT 0** de `PROMPTS.md`.
3. A partir de ahí, Claude te lleva. Cada vez que vuelvas otro día, abre Claude en la carpeta y escribe: **«sigamos con la entrega»**.

> 💡 Si en algún momento te pierdes, dile a Claude: «Lee entrega/ESTADO.md y dime en qué paso estoy y qué tengo que hacer ahora».
