import Header from "../components/Header";
import Layout from "../components/Layout";

const Introduction = () => {
  return (
    <div className="portfolio">

      { /* <!-- Header --> */}
      <Header />

      {/* <!-- HERO BANNER --> */}
      <section className="hero" id="hero">
        <Layout>

          <h2 className="hero__professional-title">Software Developer</h2>
          <h1 className="hero__name">León Cantillo</h1>
          <ul className="hero__networks">
            <li className="hero__networks-button hero__networks-button--download button">
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-download"></i> Descargar CV</a>
            </li>
            <li className="hero__networks-button hero__networks-button--linkedin button">
              <a href="https://www.linkedin.com/in/leoncantillo/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i> LinkedIn</a>
            </li>
            <li className="hero__networks-button hero__networks-button--github button">
              <a href="https://github.com/leoncantillo/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i> Github</a>
            </li>
          </ul>
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
