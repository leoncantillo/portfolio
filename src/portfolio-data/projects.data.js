import * as TechLogos from '../assets/TechLogos';

// Project images
import imgMiscelaneaEllo from '../assets/images/Miscelanea Ello.png';
import imgReservasUno from '../assets/images/ReservasUno.png';
import imgReservasUnoGallery1 from '../assets/images/ReservasUno Gallery - image 1.png';
import imgReservasUnoGallery2 from '../assets/images/ReservasUno Gallery - image 2.png';
import imgReservasUnoGallery3 from '../assets/images/ReservasUno Gallery - image 3.png';
import imgReservasUnoGallery4 from '../assets/images/ReservasUno Gallery - image 4.png';
import imgReservasUnoGallery5 from '../assets/images/ReservasUno Gallery - image 5.png';
import imgReservasUnoGallery6 from '../assets/images/ReservasUno Gallery - image 6.png';
import imgReservasUnoGallery7 from '../assets/images/ReservasUno Gallery - image 7.png';
import imgSolarSystem3D from '../assets/images/Solar System 3D.jpg';
import imgSolarSystem3DGallery1 from '../assets/images/Solar System 3D Gallery - image 1.png';
import imgSolarSystem3DGallery2 from '../assets/images/Solar System 3D Gallery - image 2.png';
import imgSolarSystem3DGallery3 from '../assets/images/Solar System 3D Gallery - image 3.png';

export const projects = [
  {
    id: 1,
    slug: "miscellaneousello-online-store",
    src_featured_img: imgMiscelaneaEllo,
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
  },
  {
    id: 2,
    slug: "reservasuno-airline-system",
    src_featured_img: imgReservasUno,
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
      { imgURL: imgReservasUnoGallery1, alt: "Api test /login."},
      { imgURL: imgReservasUnoGallery2, alt: "Api test /flights."},
      { imgURL: imgReservasUnoGallery3, alt: "Test de búsqueda en interfaz gráfica."},
      { imgURL: imgReservasUnoGallery4, alt: "Resultados de búsqueda en interfaz gráfica."},
      { imgURL: imgReservasUnoGallery5, alt: "Vuelos disponibles."},
      { imgURL: imgReservasUnoGallery6, alt: "Buscar vuelo por cédula de cliente."},
      { imgURL: imgReservasUnoGallery7, alt: "Intrerfaz para login."},
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
  },
  {
    id: 3,
    slug: "3d-solar-system",
    src_featured_img: imgSolarSystem3D,
    title: "Sistema Solar 3D",
    brief_description:
      "Aplicación web interactiva que representa el sistema solar en 3D, permitiendo explorar los planetas mediante animaciones fluidas y una visualización espacial realista.",
    complete_description:
      "Sistema Solar 3D es una aplicación web desarrollada con React y Three.js que simula el comportamiento y la disposición de los planetas del sistema solar en un entorno tridimensional. El proyecto se enfoca en ofrecer una experiencia visual inmersiva, donde el usuario puede observar las órbitas, rotaciones y escalas relativas de los planetas, así como interactuar con la escena mediante eventos como el desplazamiento, el zoom y la selección de objetos. La arquitectura del proyecto prioriza el rendimiento y la optimización del renderizado, asegurando una ejecución fluida incluso en dispositivos con recursos limitados.",
    role: "Frontend Developer",
    architecture: "Monolito",
    tech: [
      { icon: TechLogos.JavaScript, label: "JavaScript" },
      { icon: TechLogos.Nodejs, label: "Node.js" },
      { icon: TechLogos.React, label: "React.js" },
      { icon: TechLogos.Threejs, label: "Three.js" },
      { icon: TechLogos.Vite, label: "Vite" },
    ],
    gallery: [
    { imgURL: imgSolarSystem3DGallery1, alt: "Vista enfocada a Mercurio."},
    { imgURL: imgSolarSystem3DGallery2, alt: "Vista enfocada a Jupiter."},
    { imgURL: imgSolarSystem3DGallery3, alt: "Texto en 3D"},
    ],
    challenges: [
      "Sincronizar las animaciones orbitales y rotacionales de todos los planetas para mantener coherencia visual.",
      "Optimizar el renderizado 3D para reducir el consumo de recursos y mejorar el rendimiento.",
      "Gestionar correctamente el ciclo de vida de los objetos 3D dentro de un entorno React.",
    ],
    impact:
      "El proyecto permitió demostrar la viabilidad de integrar gráficos 3D complejos en aplicaciones web modernas, mejorando la experiencia de usuario y sirviendo como base para futuros desarrollos educativos e interactivos.",
    learnings: [
      "Renderizado y manipulación de texto 3D.",
      "Creación y gestión de objetos 3D con Three.js.",
      "Animación basada en eventos y control del estado visual.",
      "Optimización de escenas 3D para aplicaciones web.",
    ],
    repository: "https://github.com/leoncantillo/learning_threejs",
    demo: "https://leoncantillo.github.io/learning_threejs/#/practice_3",
  },
];
