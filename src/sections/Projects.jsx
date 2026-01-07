import { projects } from '../portfolio-data/projects.data';
import ProjectCard from '../components/ProjectCard';
import Layout from '../components/Layout';
import '../styles/section_projects.scss';


const Projects = () => {
  return (
    <Layout id="projects" className="projects">
      <h2 className="projects__title">Projects</h2>
      
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </Layout>
  );
};

export default Projects;
