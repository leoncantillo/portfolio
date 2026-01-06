
const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <header className="project-card__header">
        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.description}
        </p>
      </header>

      <section className="project-card__role">
        <span>{project.role}</span>
      </section>

      <section className="project-card__tech">
        <ul>
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="project-card__challenges">
        <ul>
          {project.challenges.slice(0, 2).map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </section>

      <section className="project-card__impact">
        <strong>Impacto:</strong>
        <span> {project.impact}</span>
      </section>

      <footer className="project-card__actions">
        <a href={project.slug}>
          Ver más
        </a>
      </footer>
    </article>
  );
};

export default ProjectCard;
