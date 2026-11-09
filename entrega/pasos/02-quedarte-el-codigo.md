# Paso 2 — Quedarte el código

**Objetivo:** que el repositorio (la carpeta del código en GitHub) sea **tuyo**, y tenerlo descargado y funcionando en tu ordenador.
**Tiempo:** 10 minutos.

## Cómo te quedas tu copia (Fork)

El código está en abierto en https://github.com/ViBaTo/clinica-girones. Te haces **tu propia copia** en tu cuenta con el botón *Fork*:

1. Crea tu cuenta en https://github.com/signup si no la tienes, y entra.
2. Abre https://github.com/ViBaTo/clinica-girones
3. Arriba a la derecha, pulsa **Fork** → **Create fork**.
4. Listo: ya tienes `github.com/TU-USUARIO/clinica-girones`. **A partir de ahora trabajas siempre sobre TU copia**, nunca sobre la de Vicente.

> **Ojo:** mientras no termine el paso 6, la web que está en internet sigue saliendo del Railway de Vicente. Hacer el fork **no** apaga la web; no hay prisa.

## Descargarlo en tu ordenador

En la terminal (cambia `TU-USUARIO` por el tuyo):
```
cd ~/Documents
git clone https://github.com/TU-USUARIO/clinica-girones.git
cd clinica-girones
claude
```
La primera vez que hagas `git clone` o `git push`, Git te pedirá entrar en GitHub (se abre el navegador). Si te pide «password», no vale tu contraseña: dile a Claude «Git me pide contraseña al hacer push, ayúdame a iniciar sesión en GitHub» y te guía (normalmente con `gh auth login`).

Ahora pega el **PROMPT 0** de `entrega/PROMPTS.md`.

## Lo que hace Claude en este paso

1. Comprobar que la carpeta está conectada a **tu** repositorio: `git remote -v` debe mostrar `TU-USUARIO/clinica-girones`. Si muestra `ViBaTo/...`, cambiarlo con `git remote set-url origin https://github.com/TU-USUARIO/clinica-girones.git`.
2. Comprobar que git sabe quién eres (`git config user.name` / `user.email`); si no, configurarlo con tus datos.
3. `pnpm install` y `pnpm build` → tiene que terminar sin errores (salen ~12 páginas generadas).
4. `pnpm dev` y decirte que abras http://localhost:3000 para ver la web en tu ordenador. Después pararla (Ctrl + C).
5. Apuntar tu usuario y la URL del repositorio en `entrega/ESTADO.md` y marcar el paso 2.

## Cómo se comprueba

- `git remote -v` → apunta a tu cuenta.
- `pnpm build` → termina sin errores.
- Has visto la web en http://localhost:3000.

## Siguiente

Paso 3 → `03-publicar-en-vercel-o-railway.md`.
