import { projects } from "../portfolio-data/projects.data";
import { Link, useParams } from "react-router-dom";
import PixelGlitchImage from '../components/PixelGlitchImage';
import { useEffect, useRef, useState } from "react";
import ImageFullscreenZoom from "../components/ImageFullscreenZoom";
import TechItem from '../components/TechItem';
import Layout from "../components/Layout";
import '../styles/ProjectDetails.scss';
import ImageCarousel from "../components/ImageCarousel";

const ProjectDetails = () => {
  const { slug } = useParams();
  const featuredImgRef = useRef();
  const [openGallery, setOpenGallery] = useState(false);
  const [indexGallery, setIndexGallery] = useState(0);

  const project = projects.find(
    (p) => p.slug === `${slug}`
  );

  if (!project) {
    return (
      <section className="project-404">
        <h2>404 Proyecto no encontrado</h2>
        <p>El proyecto que buscas no existe o fue movido.</p>
        <Link to="/" className="button">Volver a la página principal</Link>
      </section>
    );
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // opcional
    });
  }, [project]);

  const currentIndex = projects.findIndex(
    (p) => p.id === project.id
  );

  const prevProject =
    project.id > 1 && currentIndex > 0
      ? projects[currentIndex - 1]
      : null;

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  const projectGallery = [
  project.src_featured_img,
  ...(project.gallery?.map(item => item.imgURL) ?? [])
];

  return (
    <Layout as='article' className="project-details">
      {/* Header */}
      <header className="project-details__header">
        <input type="checkbox" name="show-featured-image" id="show-featured-image" />
        <label htmlFor="show-featured-image" className="glitch-wrapper">
          <picture>
            <source srcSet={project.src_featured_img} />

            <img
              ref={featuredImgRef}
              className="featured-photo"
              src={project.src_featured_img}
              alt={`Featured image of the ${project.title} project.`}
            />
          </picture>
          <PixelGlitchImage imgRef={featuredImgRef} />
        </label>

        <h1>{project.title}</h1>
        <p>{project.complete_description}</p>
        <p className="project-details__role">{project.role}</p>
      </header>

      {/* Arquitectura */}
      {project.architecture && (
        <section className="project-details__architecture">
          <h2>Arquitectura</h2>
          <p>{project.architecture}</p>
        </section>
      )}

      {/* Tecnologías */}
      <section className="project-details__tech">
        <h2>Tecnologías</h2>

        <ul className="project-details__list">
          {project.tech.map(({ icon, label, className }) => (
            <li key={label}>
              <TechItem
                icon={icon}
                label={label}
                className={className}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Galería de Fotos */}
      {project.gallery?.length > 0 && (
        <section className="project-details__image-gallery">
          <ImageCarousel paused={openGallery}>
            {project.gallery.map(({imgURL, alt}, index) => {
              const i = index+1; // featured + gallery
              return (
                <img
                  key={i}
                  src={imgURL}
                  alt={alt}
                  style={{ cursor: "pointer" }}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setIndexGallery(i);
                    setOpenGallery(true);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setIndexGallery(i);
                      setOpenGallery(true);
                    }
                  }}
                />
              );
            })}
          </ImageCarousel>
        </section>
      )}

      {/* Retos técnicos */}
      {project.challenges?.length > 0 && (
        <section className="project-details__challenges">
          <h2>Retos técnicos</h2>

          <ul>
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Impacto */}
      {project.impact && (
        <section className="project-details__impact">
          <h2>Impacto</h2>
          <p>{project.impact}</p>
        </section>
      )}

      {/* Aprendizajes */}
      {project.learnings?.length > 0 && (
        <section className="project-details__learnings">
          <h2>Aprendizajes</h2>

          <ul>
            {project.learnings.map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Enlaces */}
      {(project.repository || project.demo) && (
        <footer className="project-details__links">
          <h2>Enlaces</h2>

          <ul>
            {project.repository && (
              <li>
                <a
                  className="button"
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>Repositorio
                </a>
              </li>
            )}

            {project.demo && (
              <li>
                <a
                  className="button"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-pager"></i>Demo
                </a>
              </li>
            )}

            {project.data_base && (
              <li>
                <a
                  className="button"
                  href={project.data_base}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-database"></i>Base de Datos
                </a>
              </li>
            )}
          </ul>

          <nav className="project-details__pagination">
            {prevProject && (
              <Link
                to={`/projects/${prevProject.slug}`}
              >
                ← Proyecto anterior
              </Link>
            )}

            {nextProject && (
              <Link
                to={`/projects/${nextProject.slug}`}
              >
                Proyecto siguiente →
              </Link>
            )}
          </nav>
        </footer>
      )}

      {/* Visor fullscreen */}
      <ImageFullscreenZoom
        images={projectGallery}
        initialIndex={indexGallery}
        open={openGallery}
        onClose={() => setOpenGallery(false)}
      />
    </Layout>
  );
};

export default ProjectDetails;
