# Basildon Menu - Next.js

Menú digital para Basildon Listening Restobar, migrado a Next.js 15 para deployment en Vercel.

## 🚀 Quick Start

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev
# Abrir http://localhost:3000

# Build de producción
npm run build

# Ejecutar build localmente
npm start
```

## 📦 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **UI**: React 18
- **Styling**: TailwindCSS v4
- **TypeScript**: Configurado
- **Fonts**: Google Fonts (Cinzel, Montserrat, Inter)

## 🎨 Características

- ✅ Menú digital interactivo con 5 categorías
- ✅ Diseño elegante con tema oscuro y acentos dorados
- ✅ Navegación sticky con scroll horizontal
- ✅ Responsive design
- ✅ Optimizado para SEO
- ✅ Build estático para máxima performance

## 📁 Estructura del Proyecto

```
basildon/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Página principal con menú
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Header con logo
│   ├── CategoryNav.tsx     # Navegación de categorías
│   ├── MenuItem.tsx        # Tarjeta de plato
│   └── FrameContainer.tsx  # Contenedor decorativo
├── public/
│   └── images/             # Assets (logos, imágenes)
├── next.config.mjs         # Configuración Next.js
├── tailwind.config.ts      # Configuración Tailwind
└── tsconfig.json           # Configuración TypeScript
```

## 🚀 Deploy en Vercel

### Opción 1: CLI

```bash
npm install -g vercel
vercel
```

### Opción 2: GitHub

1. Push a GitHub
2. Importar en [vercel.com](https://vercel.com)
3. Deploy automático

## 📝 Notas

- El logo actual es un placeholder. Reemplazar con logo real en `public/images/`
- Los datos del menú están en `app/page.tsx` (líneas 8-298)
- Para actualizar el menú, editar el objeto `menuData`

## 📖 Documentación

Ver [walkthrough.md](file:///Users/joaquincm/.gemini/antigravity/brain/eff949a3-98ff-4693-886e-490248cd834b/walkthrough.md) para detalles completos de la migración.

## 🎯 Performance

- First Load JS: 106 kB
- Página principal: 3.5 kB
- Build optimizado para producción