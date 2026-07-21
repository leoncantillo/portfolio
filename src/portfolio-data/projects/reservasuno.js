import * as TechLogos from '../../assets/TechLogos';
import { getProjectMedia } from '../../assets/project.media';

const media = getProjectMedia('reservasuno');

export default {
    id: 2,
    slug: "reservasuno-airline-system",
    featured: {
        src: media.cover,
        type: "image",
        alt: "ReservasUno",
    },
    title: "ReservasUno · Sistema de reservas aéreas",
    brief_description:
    "Plataforma web y API REST para la gestión de vuelos y reservas aéreas, con autenticación y flujo completo de búsqueda y selección.",
    complete_description:
    "ReservasUno es un proyecto académico de sistema de reservas aéreas que permite a los usuarios buscar vuelos, seleccionar trayectos, gestionar reservas y consultar información asociada. El proyecto integra un frontend web con una API REST desarrollada en Spring Boot, autenticación basada en JWT, transferencia de datos con DTOs y persistencia en PostgreSQL. Fue desarrollado como proyecto de aprendizaje enfocado en arquitectura backend y buenas prácticas iniciales.",
    role: "Backend Developer",
    architecture: "Arquitectura monolítica en capas (Controller · Service · Repository)",
    tech: [
    { icon: TechLogos.Java, label: "Java" },
    { icon: TechLogos.Spring, label: "Spring Boot" },
    { icon: TechLogos.PostgreSQL, label: "PostgreSQL" },
    { icon: TechLogos.Qicon, label: "Maven" },
    { icon: TechLogos.Qicon, label: "MapStruct" },
    { icon: TechLogos.Docker, label: "Docker" },
    { icon: TechLogos.Qicon, label: "JWT" },
    ],
    gallery: [
    { src: media.gallery[0].src, alt: "Api test /login.", type: media.gallery[0].type },
    { src: media.gallery[1].src, alt: "Api test /flights.", type: media.gallery[1].type },
    { src: media.gallery[2].src, alt: "Test de búsqueda en interfaz gráfica.", type: media.gallery[2].type },
    { src: media.gallery[3].src, alt: "Resultados de búsqueda en interfaz gráfica.", type: media.gallery[3].type },
    { src: media.gallery[4].src, alt: "Vuelos disponibles.", type: media.gallery[4].type },
    { src: media.gallery[5].src, alt: "Buscar vuelo por cédula de cliente.", type: media.gallery[5].type },
    { src: media.gallery[6].src, alt: "Interfaz para login.", type: media.gallery[6].type },
    ],
    challenges: [
    "Diseño del modelo de datos para vuelos, reservas y pasajeros",
    "Implementación de autenticación y autorización con JWT",
    "Integración entre frontend y API REST",
    "Mapeo de entidades a estructuras de transferencia de datos",
    ],
    impact:
    "Proyecto base sólido para comprender el desarrollo de APIs REST con Spring Boot, integrando seguridad, persistencia y comunicación con un frontend funcional.",
    learnings: [
    "Arquitectura en capas con Spring Boot",
    "Diseño de APIs REST",
    "Manejo de dependencias con Maven",
    "Autenticación y roles con JWT",
    "Persistencia de datos con JPA y PostgreSQL",
    "Mapeo de entidades con MapStruct",
    "Buenas prácticas iniciales en backend",
    ],
    links: [
      { label: "Repositorio Server", url: "https://github.com/ldcantillom/reservasuno-backend", icon: "fa-brands fa-github" },
      { label: "Repositorio Client", url: "https://github.com/ldcantillom/reservasuno-frontend", icon: "fa-brands fa-github" }
    ],
};