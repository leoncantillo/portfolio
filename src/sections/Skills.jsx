import Layout from "../components/Layout";
import SkillCard from "../components/SkillCard";
import { skillsData } from "../assets/skills.data";

const Skills = () => {
  return (
    <Layout id="skills" className="skills">
      <div className="skills__container">
        <h2 className="skills__title">Habilidades</h2>

        {skillsData.map(({ title, modifier, skills }) => (
          <SkillCard
            key={modifier}
            title={title}
            modifier={modifier}
            skills={skills}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
