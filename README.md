# Portafolio de León Cantillo

Sitio web personal de León Cantillo, desarrollador de software especializado en backend. Presenta su perfil profesional, habilidades y proyectos, incluyendo sus decisiones de arquitectura, tecnologías y retos técnicos.

## Tecnologías

- React 19
- Vite
- React Router
- Sass

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo local

Instala las dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

La aplicación estará disponible en la dirección mostrada por Vite, normalmente `http://localhost:5173`.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera el paquete de producción en `dist/`. |
| `npm run preview` | Sirve localmente el paquete de producción. |
| `npm run lint` | Ejecuta las comprobaciones de calidad de código. |
| `npm run lint:fix` | Corrige automáticamente los problemas de linting que sea posible reparar. |

## Estructura del proyecto

- `src/pages/`: páginas principales y detalles de proyectos.
- `src/sections/`: secciones de la página de inicio.
- `src/components/`: componentes reutilizables de interfaz.
- `src/portfolio-data/`: contenido de proyectos y habilidades.
- `src/styles/`: estilos globales y estilos por componente o sección.
- `public/`: imágenes estáticas utilizadas por el portafolio.

## Añadir un proyecto

Agrega un objeto a `src/portfolio-data/projects.data.js`. Cada proyecto debe incluir, como mínimo, un identificador, `slug`, título, descripciones, rol, tecnologías e imagen destacada. Las imágenes deben colocarse en `public/` y referenciarse con rutas que comiencen por `/`.

Los detalles del proyecto se muestran automáticamente en la página principal y en la ruta `/projects/:slug`.
