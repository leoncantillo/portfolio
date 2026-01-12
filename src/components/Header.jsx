import { useState } from "react";
import "./../styles/Header.scss";
import Layout from "./Layout";

const Header = () => {
  const [menuState, setMenuState] = useState('closed');

  const toggleMenuState = () => {
    setMenuState(prev => (prev === "closed" ? "opened" : "closed"));
  };

  const closeMenu = () => {
    setMenuState('closed');
  };

  return (
    <>
      <Layout as="header" containerClasses="header">
        <div className="profile-card">
          <img src="./profile-photo.jpeg" alt="profile-photo" />
          <div className="profile-card__info">
            <h3 className="profile-card__name">León Cantillo</h3>
            <h4 className="profile-card__professional-title">Software Developer</h4>
          </div>
        </div>
        <div className="burguer-menu-button">
          <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger"
              checked={menuState === "opened"} onChange={toggleMenuState} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <nav className={`navbar${menuState === "opened" ? " navbar--menu-opened" : ""}`}>
          <ul className="navbar__list">
            <li className="navbar__item"><a href="#about" className="navbar__link">Sobre mí</a></li>
            <li className="navbar__item"><a href="#skills" className="navbar__link">Habilidades</a></li>
            <li className="navbar__item"><a href="#projects" className="navbar__link">Proyectos</a></li>
            <li className="navbar__item"><a href="#contact" className="navbar__link">Contacto</a></li>
          </ul>
        </nav>
      </Layout>
      {menuState === "opened" && <span className="underlay" onClick={closeMenu}></span>}
    </>
  );
};

export default Header;
