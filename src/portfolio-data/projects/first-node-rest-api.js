import * as TechLogos from '../../assets/TechLogos';
import { getProjectMedia } from '../../assets/project.media';

const media = getProjectMedia('first-node-rest-api');

export default {
  id: 4,
  slug: "first-node-rest-api",
  featured: {
    src: media.cover,
    type: "image",
    alt: "",
  },
  title: "First Node REST API",
  brief_description:
    "Primera API REST desarrollada con Node.js, Express y PostgreSQL, aplicando una arquitectura modular y operaciones CRUD reutilizables.",

  complete_description:
    "First Node REST API es un proyecto de aprendizaje personal desarrollado con el objetivo de comprender el desarrollo de APIs REST utilizando Node.js y Express. La aplicación implementa dos recursos (usuarios y clientes) mediante una arquitectura organizada por capas, separando rutas, controladores y acceso a datos. La persistencia se realiza sobre PostgreSQL utilizando consultas SQL parametrizadas con el paquete pg, mientras que Docker Compose facilita la creación del entorno de desarrollo. El proyecto incorpora una capa de acceso a datos reutilizable para operaciones CRUD, manejo centralizado de respuestas y gestión de errores, sirviendo como base para el desarrollo de proyectos backend posteriores.",

  role: "Backend Developer",

  architecture:
    "REST API · Layered Architecture (Routes · Controllers · Data Access)",

  tech: [
    { icon: TechLogos.Nodejs, label: "Node.js" },
    { icon: TechLogos.Expressjs, label: "Express" },
    { icon: TechLogos.PostgreSQL, label: "PostgreSQL" },
    { icon: TechLogos.Docker, label: "Docker" },
  ],

  gallery: [
    { src: media.gallery[0].src, alt: media.gallery[0].alt, type: media.gallery[0].type },
    { src: media.gallery[1].src, alt: media.gallery[1].alt, type: media.gallery[1].type },
    { src: media.gallery[2].src, alt: media.gallery[2].alt, type: media.gallery[2].type },
    { src: media.gallery[3].src, alt: media.gallery[3].alt, type: media.gallery[3].type },
    { src: media.gallery[4].src, alt: media.gallery[4].alt, type: media.gallery[4].type },
    { src: media.gallery[5].src, alt: media.gallery[5].alt, type: media.gallery[5].type },
    { src: media.gallery[6].src, alt: media.gallery[6].alt, type: media.gallery[6].type },
    { src: media.gallery[7].src, alt: media.gallery[7].alt, type: media.gallery[7].type },
    { src: media.gallery[8].src, alt: media.gallery[8].alt, type: media.gallery[8].type },
    { src: media.gallery[9].src, alt: media.gallery[9].alt, type: media.gallery[9].type },
    { src: media.gallery[10].src, alt: media.gallery[10].alt, type: media.gallery[10].type },
    { src: media.gallery[11].src, alt: media.gallery[11].alt, type: media.gallery[11].type },
    { src: media.gallery[12].src, alt: media.gallery[12].alt, type: media.gallery[12].type },
    { src: media.gallery[13].src, alt: media.gallery[13].alt, type: media.gallery[13].type },
  ],

  challenges: [
    "Diseñar una arquitectura modular separando rutas, controladores y acceso a datos.",
    "Construir una capa de acceso a datos reutilizable para múltiples entidades.",
    "Implementar operaciones CRUD utilizando consultas SQL parametrizadas.",
    "Gestionar errores y respuestas de forma centralizada.",
    "Configurar un entorno de desarrollo reproducible con Docker Compose y PostgreSQL.",
  ],

  impact:
    "Este proyecto marcó mi transición al desarrollo backend con Node.js y Express, permitiéndome comprender la estructura de una API REST, la organización del código por responsabilidades y la integración con PostgreSQL en un entorno moderno de desarrollo.",

  learnings: [
    "Desarrollo de APIs REST utilizando Node.js y Express.",
    "Organización de proyectos backend mediante una arquitectura por capas.",
    "Integración de Express con PostgreSQL mediante el paquete pg.",
    "Diseño de componentes reutilizables para operaciones CRUD.",
    "Implementación de manejo centralizado de respuestas y errores.",
    "Uso de Docker Compose para crear entornos de desarrollo consistentes.",
    "Configuración de proyectos Node.js utilizando ES Modules.",
  ],

  links: [
    {
      label: "Repositorio Api",
      url: "https://github.com/leoncantillo/first-node-rest-api",
      icon: "fa-brands fa-github",
    },
  ],
};