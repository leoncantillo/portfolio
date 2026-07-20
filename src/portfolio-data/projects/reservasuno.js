import * as TechLogos from '../../assets/TechLogos';
import { getProjectImages } from '../../assets/project.images';

const images = getProjectImages('reservasuno');

export default {
    id: 2,
    slug: "reservasuno-airline-system",
    src_featured_img: images.cover,
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
    { imgURL: images.gallery[0], alt: "Api test /login." },
    { imgURL: images.gallery[1], alt: "Api test /flights." },
    { imgURL: images.gallery[2], alt: "Test de búsqueda en interfaz gráfica." },
    { imgURL: images.gallery[3], alt: "Resultados de búsqueda en interfaz gráfica." },
    { imgURL: images.gallery[4], alt: "Vuelos disponibles." },
    { imgURL: images.gallery[5], alt: "Buscar vuelo por cédula de cliente." },
    { imgURL: images.gallery[6], alt: "Interfaz para login." },
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
    repository: "https://github.com/ldcantillom/reservasuno-backend",
};