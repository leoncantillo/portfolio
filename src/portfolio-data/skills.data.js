import * as SkillLogos from '../assets/DevelopSkillLogos';
import * as ToolLogos from '../assets/DevelopToolLogos';

export const skillsData = [
  {
    title: "Servidor",
    modifier: "server",
    skills: [
      { icon: SkillLogos.C, label: "C" },
      { icon: SkillLogos.Cpp, label: "C++" },
      { icon: SkillLogos.Java, label: "Java" },
      { icon: SkillLogos.Kotlin, label: "Kotlin" },
      { icon: SkillLogos.Spring, label: "Spring" },
      { icon: SkillLogos.TypeScript, label: "TypeScript" },
      { icon: SkillLogos.Expressjs, label: "ExpressJs" },
      { icon: SkillLogos.MySQL, label: "MySQL" },
      { icon: SkillLogos.PostgreSQL, label: "PostgreSQL" },
      { icon: SkillLogos.Php, label: "PHP" },
    ],
  },
  {
    title: "Cliente",
    modifier: "client",
    skills: [
      { icon: SkillLogos.JavaScript, label: "JavaScript" },
      { icon: SkillLogos.React, label: "React" },
      { icon: SkillLogos.Threejs, label: "ThreeJs" },
    ],
  },
  {
    title: "Herramientas",
    modifier: "tools",
    skills: [
      { icon: ToolLogos.Git, label: "Git" },
      { icon: ToolLogos.Docker, label: "Docker" },
      { icon: ToolLogos.Postman, label: "Postman" },
      { icon: ToolLogos.Nodejs, label: "NodeJs" },
      { icon: ToolLogos.Vite, label: "Vite" },
      { icon: ToolLogos.WordPress, label: "Wordpress" },
    ],
  },
];
