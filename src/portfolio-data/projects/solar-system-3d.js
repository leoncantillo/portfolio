import * as TechLogos from '../../assets/TechLogos';
import { getProjectMedia } from '../../assets/project.media';

const media = getProjectMedia('solar-system-3d');

export default {
    id: 3,
    slug: "3d-solar-system",
    featured: {
        src: media.cover,
        type: "image",
        alt: "Sistema Solar 3D",
    },
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
    { src: media.gallery[0].src, alt: "Vista enfocada a Mercurio.", type: media.gallery[0].type },
    { src: media.gallery[1].src, alt: "Vista enfocada a Jupiter.", type: media.gallery[1].type },
    { src: media.gallery[2].src, alt: "Texto en 3D", type: media.gallery[2].type },
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
    links: [
      { label: "Repositorio", url: "https://github.com/leoncantillo/learning_threejs", icon: "fa-brands fa-github" },
      { label: "Demo", url: "https://leoncantillo.github.io/learning_threejs/#/practice_3", icon: "fa-solid fa-pager" },
    ],
};