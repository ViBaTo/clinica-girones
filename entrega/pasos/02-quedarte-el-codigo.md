# Paso 2 — Quedarte el código

**Objetivo:** que el repositorio (la carpeta del código en GitHub) sea **tuyo**, y tenerlo descargado y funcionando en tu ordenador.
**Tiempo:** 10 minutos.

## Cómo funciona el traspaso

Vicente usa la función **«Transfer ownership»** de GitHub: el repositorio pasa entero (con todo su historial) de su cuenta a la tuya. Para eso:

1. **Tú:** crea tu cuenta en https://github.com/signup si no la tienes y **pásale a Vicente tu nombre de usuario de GitHub**.
2. **Vicente:** en `github.com/ViBaTo/clinica-girones` → *Settings* → abajo del todo, *Danger Zone* → **Transfer ownership** → escribe tu usuario → confirma.
3. **Tú:** te llega un correo de GitHub. Pulsa el enlace para **aceptar** el repositorio. Ya aparece en `github.com/TU-USUARIO/clinica-girones`.
4. **Tú (recomendado):** en tu repositorio → *Settings* → *General* → *Danger Zone* → **Change visibility** → **Private**. Así el código solo lo ves tú.

> **Ojo:** mientras no termine el paso 6, la web que está en internet sigue saliendo del Railway de Vicente. El traspaso del repositorio **no** apaga la web; no hay prisa.

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
