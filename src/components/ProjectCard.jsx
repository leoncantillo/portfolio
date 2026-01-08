import TechItem from './TechItem';

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
        <ul className="project-card__list">
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

      <footer className="project-card__actions">
        <a href={project.slug}>
          Ver más
        </a>
      </footer>
    </article>
  );
};

export default ProjectCard;
