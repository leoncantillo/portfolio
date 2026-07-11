import { projects } from '../portfolio-data/projects.data';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import '../styles/section_projects.scss';

const ProjectsArchive = () => {
  return (
    <Layout as="main" id="projects" className="projects projects-archive">
      <header className="projects-archive__header">
        <h1 className="projects__title">Archivo de proyectos</h1>
        <p>Una selección de proyectos en los que he trabajado.</p>
      </header>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Layout>
  );
};

export default ProjectsArchive;
