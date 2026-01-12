import '../styles/TechItem.scss';
import { Qicon } from '../assets/TechLogos';

const TechItem = ({ icon: Icon, label, className = "" }) => {
  const IconToRender = Icon || (label ? Qicon : null);
  return (
    <div className={"tech__item " + className}>
      <IconToRender />
      <span className="tech__label">{label}</span>
    </div>
  );
};

export default TechItem;
