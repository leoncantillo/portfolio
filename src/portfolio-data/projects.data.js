import * as TechLogos from '../assets/TechLogos';

export const projects = [
  {
    id: 1,
    slug: "student-housing-platform",
    src_featured_img: "/Screenshot from 2026-01-15 07-45-00.png",
    title: "Plataforma de residencias estudiantiles",
    brief_description:
      "Sistema para conectar estudiantes y propietarios, gestionando servicios incluidos y alianzas de vivienda.",
    complete_description:
      "Sistema para conectar estudiantes y propietarios, gestionando servicios incluidos y alianzas de vivienda.",
    role: "Backend Developer · Líder técnico",
    architecture: "Monolítica en capas",
    tech: [
      { icon: TechLogos.Java, label: "Java" },
      { icon: TechLogos.Spring, label: "Spring Boot" },
      { icon: TechLogos.PostgreSQL, label: "PostgreSQL" },
      { icon: TechLogos.Docker, label: "Docker" },
    ],
    challenges: [
      "Diseño de modelo de datos flexible",
      "Autenticación y roles de usuario",
    ],
    impact:
      "Arquitectura escalable y backend preparado para crecimiento del producto.",
    learnings: [
      "Arquitectura monolítica",
      "Patrón de diseño en capas",
    ],
    repository: "#",
    demo: "#",
  },
];
