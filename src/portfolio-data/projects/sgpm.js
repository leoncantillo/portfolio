import * as TechLogos from '../../assets/TechLogos';
import { getProjectMedia } from '../../assets/project.media';

const media = getProjectMedia('sgpm');

export default {
    id: 5,
    slug: "sgpm-parking-management-system",
    featured: {
        src: media.cover,
        type: "image",
        alt: "SGPM · Sistema de Gestión de Parqueaderos",
    },
    title: "SGPM · Sistema de Gestión de Parqueaderos",
    brief_description:
    "API REST desarrollada con Spring Boot para la gestión de parqueaderos, usuarios, reservas y control de acceso mediante autenticación JWT.",

    complete_description:
    "SGPM (Sistema de Gestión de Parqueaderos) es un proyecto académico desarrollado con Spring Boot siguiendo una arquitectura en capas. La aplicación expone una API REST para administrar usuarios, motocicletas, espacios de parqueo, reservas, registros de ingreso y sanciones. Implementa autenticación y autorización mediante JWT y Spring Security, persistencia con Spring Data JPA sobre PostgreSQL y un diseño orientado a entidades relacionadas. Si bien presenta oportunidades de mejora y aspectos que podrían optimizarse, cumple con los objetivos planteados y constituye una base sólida para futuras iteraciones. Si bien presenta oportunidades de mejora y aspectos que podrían optimizarse, cumple con los objetivos planteados y constituye una base sólida para futuras iteraciones. Si bien presenta oportunidades de mejora y aspectos que podrían optimizarse, cumple con los objetivos planteados y constituye una base sólida para futuras iteraciones.",

    role: "Backend Developer",

    architecture: "Arquitectura en capas (Controller · Service · Repository · Entity)",

    tech: [
        { icon: TechLogos.Java, label: "Java 21" },
        { icon: TechLogos.Spring, label: "Spring Boot" },
        { icon: TechLogos.PostgreSQL, label: "PostgreSQL" },
        { icon: TechLogos.Docker, label: "Docker" },
        { icon: TechLogos.Qicon, label: "JWT" },
        { icon: TechLogos.Qicon, label: "JPA / Hibernate" },
        { icon: TechLogos.Maven, label: "Maven" },
    ],

    gallery: [
        { src: media.gallery[0].src, alt: media.gallery[0].alt, type: media.gallery[0].type },
        { src: media.gallery[1].src, alt: media.gallery[1].alt, type: media.gallery[1].type },
        { src: media.gallery[2].src, alt: media.gallery[2].alt, type: media.gallery[2].type },
        { src: media.gallery[3].src, alt: media.gallery[3].alt, type: media.gallery[3].type },
        { src: media.gallery[4].src, alt: media.gallery[4].alt, type: media.gallery[4].type },
        { src: media.gallery[5].src, alt: media.gallery[5].alt, type: media.gallery[5].type },
    ],

    challenges: [
        "Diseño de un modelo relacional con múltiples entidades y relaciones.",
        "Implementación de autenticación y autorización con JWT y Spring Security.",
        "Gestión de reservas y disponibilidad de espacios de parqueo.",
        "Modelado correcto de relaciones JPA (OneToMany, ManyToMany e herencia).",
        "Contenerización de la base de datos con Docker para facilitar el desarrollo.",
    ],

    impact:
    "El proyecto ha fortalecido mis conocimientos en desarrollo backend con Spring Boot, modelado de bases de datos relacionales, seguridad con JWT y resolución de problemas relacionados con JPA e Hibernate. Aunque ya cuenta con funcionalidades operativas, continúa evolucionando con mejoras en arquitectura, validaciones y cobertura funcional.",

    learnings: [
        "Diseño de APIs REST con Spring Boot.",
        "Autenticación y autorización con Spring Security y JWT.",
        "Persistencia de datos mediante Spring Data JPA e Hibernate.",
        "Modelado de relaciones complejas en PostgreSQL.",
        "Uso de Docker para el entorno de desarrollo.",
        "Depuración y resolución de problemas relacionados con ORM y bases de datos.",
    ],

    links: [
        {
            label: "Repositorio",
            url: "https://github.com/ldcantillom/sgpm-api",
            icon: "fa-brands fa-github",
        },
    ],
};
