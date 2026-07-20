import { Link } from 'react-router-dom';
import CurvedScrollbar from './CurvedScrollbar';
import TechItem from './TechItem';

const ProjectCard = ({ project }) => {
  return (
    <CurvedScrollbar as="article" className="project-card">
      <header className="project-card__header">
        <picture>
          <img
            className='featured-photo'
            src={project.featured.src}
            alt={`Featured image of the ${project.title} project.`}
          />
        </picture>
        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.brief_description}
        </p>

        <p className="project-card__role">
          {project.role}
        </p>
      </header>

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
        <Link to={`/projects/${project.slug}`}>
          Ver más
        </Link>
      </footer>
    </CurvedScrollbar>
  );
};

export default ProjectCard;
