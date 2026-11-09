# Prompts para Claude Code

Cópialos tal cual. Siempre con Claude abierto **dentro de la carpeta del proyecto** (`clinica-girones`).

---

## PROMPT 0 — La primera vez (arranque)

```
Hola. Soy el nuevo dueño de esta web y no soy programador. Lee CLAUDE.md, entrega/LEEME-PRIMERO.md y entrega/ESTADO.md. Después dime en dos frases qué es este proyecto, en qué paso de la entrega estoy y qué vamos a hacer ahora. Guíame paso a paso: haz tú todo lo que puedas desde el ordenador y a mí dame instrucciones cortas, una acción por línea. Espera a que te diga "hecho" antes de seguir.
```

## PROMPT DE SIEMPRE — Volver otro día

```
Sigamos con la entrega. Lee entrega/ESTADO.md y continúa por el siguiente paso pendiente.
```
Atajo: escribe **`/siguiente-paso`** en Claude y hace lo mismo.

---

## Prompts por paso (por si quieres ir directo a uno)

**Paso 2 — Quedarte el código**
```
Vamos con el paso 2 (entrega/pasos/02-quedarte-el-codigo.md). Comprueba que el repositorio es mío en GitHub, que esta carpeta está conectada a él y que la web compila. Cuando lo esté, actualiza entrega/ESTADO.md.
```

**Paso 3 — Publicar**
```
Vamos con el paso 3 (entrega/pasos/03-publicar-en-vercel-o-railway.md). Quiero publicarla en Vercel [o: Railway]. Guíame pantalla a pantalla y comprueba tú que la URL provisional funciona antes de dar el paso por terminado.
```

**Paso 4 — Dominio**
```
Vamos con el paso 4 (entrega/pasos/04-conectar-el-dominio.md). Antes de que toque nada en el panel del dominio, comprueba y apunta cómo están ahora los registros DNS, incluido el correo. Luego dime exactamente qué registro cambiar y cuál NO tocar.
```

**Paso 5 — Formulario**
```
Vamos con el paso 5 (entrega/pasos/05-formulario-de-contacto.md). Quiero que los mensajes del formulario de contacto lleguen a recepcion@clinicagirones.es. Recomiéndame la opción más sencilla, impleméntala, pruébala y publícala.
```

**Paso 6 — Cierre**
```
Vamos con el paso 6 (entrega/pasos/06-cierre-con-vicente.md). Comprueba que la web y el dominio ya funcionan solo desde mi cuenta y prepárame el mensaje para Vicente.
```

---

## Prompts para el día a día (después de la entrega)

**Cambiar un texto o dato**
```
Quiero cambiar [qué] por [qué nuevo]. Búscalo en la web, enséñame dónde sale, cámbialo, comprueba que compila y publícalo.
```
*Ejemplo:* «Quiero cambiar el horario a Lunes-Viernes 9:00-14:00 y 16:00-20:30».

**Cambiar o añadir una foto**
```
Quiero cambiar la foto de [sitio] por esta: [ruta del fichero en mi ordenador]. Optimízala para web, ponla en su sitio, enséñamelo en local y publícalo.
```

**Añadir un miembro del equipo / un servicio / un artículo del blog**
```
Quiero añadir [un miembro del equipo / un servicio / un artículo] con estos datos: [pega aquí la información]. Hazlo siguiendo el mismo estilo que los que ya hay, enséñamelo en local y publícalo cuando te diga que está bien.
```

**Ver un cambio antes de publicarlo**
```
Arranca la web en local para que la vea antes de publicar.
```

**Algo se ha roto**
```
La web [describe qué pasa y en qué página]. Averigua la causa, explícamela en una frase y arréglala. Si el último cambio la ha roto, vuelve a la versión anterior.
```

**Deshacer el último cambio publicado**
```
Deshaz el último cambio que publicamos y vuelve a publicar la versión anterior.
```
