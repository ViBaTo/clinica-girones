# Paso 1 — Preparar el ordenador

**Objetivo:** tener instaladas las 4 herramientas que hacen falta.
**Quién lo hace:** tú (Claude Code todavía no está instalado). Si te atascas, abre https://claude.ai, pega este fichero y pídele ayuda.
**Tiempo:** unos 15 minutos.

## Qué vas a instalar

| Herramienta | Para qué sirve |
|---|---|
| **Git** | Descargar el código y guardar los cambios en GitHub. |
| **Node.js 22** | Hace funcionar la web en tu ordenador. |
| **pnpm** | Instala las piezas que usa la web. |
| **Claude Code** | El asistente que hará el trabajo técnico contigo. |

## En Mac

1. Abre la app **Terminal** (Cmd + Espacio, escribe «Terminal», Enter).
2. Pega esto y pulsa Enter (instala Git; si sale una ventana, pulsa «Instalar»):
   ```
   xcode-select --install
   ```
3. Descarga e instala **Node.js 22 (LTS)** desde https://nodejs.org (botón «LTS»). Doble clic y «Siguiente» hasta el final.
4. Cierra la Terminal, ábrela de nuevo y pega:
   ```
   corepack enable pnpm
   ```
   (Si te pide contraseña, es la de tu Mac; no se ve al escribir, es normal.) Si da error de permisos, usa `sudo corepack enable pnpm`.
5. Instala Claude Code siguiendo https://claude.com/claude-code (te da un comando para pegar en la Terminal). Después escribe `claude` y entra con tu cuenta de Claude.

## En Windows

1. Instala **Git** desde https://git-scm.com/download/win («Next» en todo).
2. Instala **Node.js 22 (LTS)** desde https://nodejs.org.
3. Abre **PowerShell como administrador** y pega:
   ```
   corepack enable pnpm
   ```
4. Instala Claude Code siguiendo https://claude.com/claude-code. Después escribe `claude` y entra con tu cuenta de Claude.

## Cómo se comprueba

En una terminal nueva, pega:
```
git --version
node --version
pnpm --version
claude --version
```
Las cuatro tienen que responder con un número de versión. `node` tiene que empezar por **v22** (o superior).

## Siguiente

Paso 2 → `02-quedarte-el-codigo.md`. A partir de aquí ya puedes usar Claude: abre la terminal, escribe `claude` y pega el **PROMPT 0** de `PROMPTS.md` cuando tengas la carpeta descargada.
