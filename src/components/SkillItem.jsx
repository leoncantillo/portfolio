const SkillItem = ({ icon: Icon, label, className = "" }) => {
  return (
    <li className={`skills__item ${className}`}>
      <div className="skills__icon">
        <Icon />
        <span className="skills__label">{label}</span>
      </div>
    </li>
  );
};

export default SkillItem;
