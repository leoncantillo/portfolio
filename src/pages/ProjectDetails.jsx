import { projects } from "../portfolio-data/projects.data";
import { Link, useParams } from "react-router-dom";
import TechItem from '../components/TechItem';
import Layout from "../components/Layout";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === `${slug}`
  );

  if (!project) {
    return (
      <section className="project-404">
        <h2>404 Proyecto no encontrado</h2>
        <p>Volver a la página principal</p>
      </section>
    );
  }

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


  return (
    <Layout as='article' className="project-details">
      {/* Header */}
      <header className="project-details__header">

        <picture className="glitch-wrapper">
          <source srcSet={project.src_featured_img} />

          <img
            className="featured-photo"
            src={project.src_featured_img}
            alt={`Featured image of the ${project.title} project.`}
          />

        </picture>

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
    </Layout>
  );
};

export default ProjectDetails;
