import * as TechLogos from '../../assets/TechLogos';
import { getProjectMedia } from '../../assets/project.media';

const media = getProjectMedia('miscelanea-ello');

export default {
    id: 1,
    slug: "miscellaneousello-online-store",
    featured: {
        src: media.cover,
        type: "image",
        alt: "Miscelanea Ello · Tienda online",
    },
    title: "Miscelanea Ello · Tienda online",
    brief_description:
      "Tienda online desarrollada en PHP bajo el patrón MVC, con gestión completa de productos, usuarios y pedidos.",
    complete_description:
      "MiscellaneousEllo es una tienda online desarrollada como proyecto académico en el programa de Análisis y Desarrollo de Software del SENA. El sistema implementa un CRUD completo para productos, usuarios y pedidos, integrando validaciones exhaustivas, persistencia de datos en MySQL y envío automático de correos electrónicos para notificaciones. El proyecto sigue el patrón MVC, garantizando una separación clara de responsabilidades y un código mantenible.",
    role: "Backend Developer · Frontend Developer",
    architecture: "Arquitectura MVC (Model · View · Controller)",
    tech: [
      { icon: TechLogos.Php, label: "PHP" },
      { icon: TechLogos.MySQL, label: "MySQL" },
      { icon: TechLogos.Qicon, label: "SQL" },
      { icon: TechLogos.Qicon, label: "XAMPP" },
      { icon: TechLogos.Qicon, label: "PHP Mail" },
    ],
    gallery: [
      { src: media.gallery[0].src, alt: "Video Demo", type: media.gallery[0].type },
    ],
    challenges: [
      "Implementación correcta del patrón MVC en PHP puro",
      "Validaciones completas en operaciones CRUD",
      "Gestión de relaciones entre productos, usuarios y pedidos",
      "Envío automático de correos electrónicos desde el backend",
    ],
    impact:
      "Consolidación de conocimientos en desarrollo web backend con PHP, aplicando buenas prácticas, validaciones y arquitectura MVC en un proyecto funcional.",
    learnings: [
      "Aplicación práctica del patrón MVC",
      "Integración de bases de datos relacionales en aplicaciones web",
      "Diseño e implementación de CRUD completos",
      "Gestión de flujo de datos y lógica de negocio",
      "Configuración de entornos locales con XAMPP",
    ],
    links: [
      { label: "Repositorio", url: "https://github.com/leoncantillo/MiscelaneaELLO", icon: "fa-brands fa-github" },
    ],
  }