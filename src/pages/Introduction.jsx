import Layout from "../components/Layout";

const Introduction = () => {
  return (
    <div className="portfolio">

      { /* <!-- Header --> */}
      <header>
        <Layout>
          <div className="header">
            <div className="profile-card">
              <figure className="profile-card__photo">
                <img src="./profile-photo.jpeg" alt="profile-photo" />
              </figure>
              <div className="profile-card__info">
                <h3 className="profile-card__name">León Cantillo</h3>
                <h4 className="profile-card__professional-title">Software Developer</h4>
              </div>
            </div>

            <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar__item"><a href="#about" className="navbar__link">Sobre mí</a></li>
                <li className="navbar__item"><a href="#skills" className="navbar__link">Habilidades</a></li>
                <li className="navbar__item"><a href="#projects" className="navbar__link">Proyectos</a></li>
                <li className="navbar__item"><a href="#contact" className="navbar__link">Contacto</a></li>
              </ul>
            </nav>
          </div>
        </Layout>
      </header>

      {/* <!-- HERO BANNER --> */}
      <section className="hero" id="hero">
        <Layout>

          <h2 className="hero__professional-title">Software Developer</h2>
          <h1>León Cantillo</h1>
        </Layout>

      </section>

      {/* <!-- About --> */}
      <section className="about" id="about">
        <Layout>

          <h2 className="about__title">Sobre mí</h2>
          <p className="about__description">Desarrollador Full Stack con pasión por crear experiencias digitales intuitivas y funcionales.</p>
        </Layout>
      </section>

      {/* <!-- Skills --> */}
      <section className="skills" id="skills">
        <Layout>
          <h2 className="skills__title">Habilidades</h2>
          <ul className="skills__list">
            <li className="skills__item">JavaScript</li>
            <li className="skills__item">React</li>
            <li className="skills__item">Node.js</li>
            <li className="skills__item">PostgreSQL</li>
          </ul>
        </Layout>
      </section>

      {/* <!-- Tools --> */}
      <section className="tools">
        <Layout>
          <h2 className="tools__title">Herramientas</h2>
          <div className="tools__grid">
            <div className="tools__item tools__item--icon figma">Figma</div>
            <div className="tools__item tools__item--icon vscode">VS Code</div>
            <div className="tools__item tools__item--icon git">Git</div>
            <div className="tools__item tools__item--icon docker">Docker</div>
          </div>
        </Layout>
      </section>

      {/* <!-- Projects --> */}
      <section className="projects" id="projects">
        <Layout>
          <h2 className="projects__title">Proyectos</h2>
          <div className="projects__grid">
            <div className="projects__card">
              <img className="projects__image" src="project1.png" alt="Project 1" />
              <h3 className="projects__name">Mi Tienda Virtual</h3>
              <p className="projects__description">E-commerce con React, Express y PostgreSQL.</p>
              <a className="projects__link" href="#">Ver más</a>
            </div>
            {/* <!-- Más tarjetas... --> */}
          </div>
        </Layout>
      </section>

      {/* <!-- Contact --> */}
      <section className="contact" id="contact">
        <Layout>
          <h2 className="contact__title">Contáctame</h2>
          <form className="contact__form">
            <input className="contact__input" type="text" placeholder="Tu nombre" />
            <input className="contact__input" type="email" placeholder="Tu email" />
            <textarea className="contact__textarea" placeholder="Tu mensaje"></textarea>
            <button className="contact__button" type="submit">Enviar</button>
          </form>
        </Layout>
      </section>

      {/* <!-- Footer --> */}
      <footer className="footer">
        <Layout>
          <p className="footer__text">&copy; 2025 - Tu Nombre</p>
        </Layout>
      </footer>

    </div>

  );
};

export default Introduction;
