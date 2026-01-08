import * as TechLogos from '../assets/TechLogos';

export const projects = [
  {
    id: "student-housing-platform",
    title: "Plataforma de residencias estudiantiles",
    description:
      "Sistema para conectar estudiantes y propietarios, gestionando servicios incluidos y alianzas de vivienda.",
    role: "Backend Developer · Líder técnico",
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
    slug: "student-housing-platform",
  },
];
