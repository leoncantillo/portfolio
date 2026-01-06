import { projects } from '../portfolio-data/projects.data';
import ProjectCard from '../components/ProjectCard';
import Layout from '../components/Layout';
import '../styles/section_projects.scss';


const Projects = () => {
  return (
    <Layout className="projects">
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
