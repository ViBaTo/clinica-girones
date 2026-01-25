# Clínica Podológica Gironés - Web

Página web profesional para una clínica de podología desarrollada con Next.js 14, Tailwind CSS y Framer Motion.

## 🚀 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Iconos**: Lucide React
- **Tipografía**: Inter (Google Fonts)

## 📋 Características

- ✅ Diseño responsive (Mobile-first)
- ✅ SEO optimizado con Schema.org
- ✅ Formulario de contacto con validación
- ✅ Botón flotante de WhatsApp
- ✅ Click-to-call
- ✅ Blog integrado
- ✅ Animaciones sutiles
- ✅ Accesibilidad WCAG 2.1
- ✅ Sitemap y robots.txt
- ✅ Páginas legales

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home
│   ├── servicios/          # Página de servicios
│   ├── sobre-nosotros/     # Página sobre nosotros
│   ├── contacto/           # Página de contacto
│   ├── blog/               # Blog
│   │   └── [slug]/         # Artículos individuales
│   ├── privacidad/         # Política de privacidad
│   ├── aviso-legal/        # Aviso legal
│   ├── sitemap.ts          # Sitemap dinámico
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Header, Footer, WhatsAppButton
│   ├── ui/                 # Componentes reutilizables
│   └── sections/           # Secciones de la home
├── lib/
│   ├── constants.ts        # Datos de la clínica
│   └── utils.ts            # Funciones de utilidad
└── styles/
    └── globals.css         # Estilos globales
```

## 🎨 Paleta de Colores

- **Primary**: `#4A90A4` (azul médico profesional)
- **Primary Light**: `#E8F4F8`
- **Primary Dark**: `#2D6A7A`
- **Neutrales**: Escala de grises

## 🛠️ Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Iniciar servidor de producción
pnpm start
```

## 📱 Páginas

1. **Home** (`/`) - Página principal con hero, servicios destacados, testimonios y CTA
2. **Servicios** (`/servicios`) - Listado completo de los 7 tratamientos
3. **Sobre Nosotros** (`/sobre-nosotros`) - Historia, equipo y valores
4. **Contacto** (`/contacto`) - Formulario, mapa y datos de contacto
5. **Blog** (`/blog`) - Artículos de salud podológica
6. **Privacidad** (`/privacidad`) - Política de privacidad
7. **Aviso Legal** (`/aviso-legal`) - Términos legales

## 🔧 Personalización

Los datos de la clínica se encuentran en `src/lib/constants.ts`:

- Información de contacto
- Horarios
- Servicios
- Equipo profesional
- Testimonios
- Artículos del blog

## 📈 SEO

- Metadata optimizada por página
- Schema.org para LocalBusiness y MedicalClinic
- Open Graph y Twitter Cards
- Sitemap XML dinámico
- Robots.txt configurado

## 🚀 Despliegue

El proyecto está optimizado para desplegar en:

- **Vercel** (recomendado)
- **Netlify**
- Cualquier plataforma compatible con Next.js

```bash
# Desplegar en Vercel
pnpm vercel

# O simplemente conectar el repositorio a Vercel
```

## 📄 Licencia

Proyecto privado - Todos los derechos reservados.
