import TechItem from "./TechItem";

const SkillCard = ({ title, modifier, skills }) => {
  const classModifier = `skills__card--${modifier}`;
  return (
    <div className={`skills__card ${classModifier}`}>
      <h3 className="skills__subtitle">{title}</h3>
      <ul className="skills__list">
        {skills.map(({ icon, label, className }) => (
          <li key={label}>
            <TechItem
              icon={icon}
              label={label}
              className={className}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
