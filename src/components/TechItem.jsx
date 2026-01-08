import '../styles/TechItem.scss';

const TechItem = ({ icon: Icon, label, className = "" }) => {
  return (
    <div className={"tech__item " + className}>
      <Icon />
      <span className="tech__label">{label}</span>
    </div>
  );
};

export default TechItem;
