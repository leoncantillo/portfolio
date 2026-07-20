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
    repository: "https://github.com/leoncantillo/MiscelaneaELLO",
    demo: "https://soysena-my.sharepoint.com/:v:/g/personal/ldcantillo78_soy_sena_edu_co/IQBYzpfSXbD1SrkoNTG6v0IpAWJy9SY6LheFyF9ZO-U7bVw?e=GcfinQ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
  }