import Header from "../components/Header";
import Layout from "../components/Layout";
import { C, Cpp, Expressjs, Java, JavaScript, Kotlin, MySQL, Nodejs, Php, PostgreSQL, React, Spring, Threejs, TypeScript } from "../components/DevelopSkillLogos";
import { AmazonWebServices, Docker, Git, MicrosoftAzure, Vite, WordPress } from "../components/DevelopToolLogos";
import './../styles/introduction.scss';
import './../styles/section_hero.scss';
import './../styles/section_about.scss';

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
          <div className="about__container">
            <div className="about__info">
              <h2 className="about__title">Sobre mí</h2>
              <p className="about__description">
                Soy desarrollador backend con una base sólida en frontend. Aunque puedo construir aplicaciones completas de extremo a extremo, mi mayor fortaleza y especialización se encuentran en el backend: arquitectura, lógica de negocio, APIs y manejo de datos. Trabajo el frontend con un conjunto específico de tecnologías que domino, suficientes para crear interfaces funcionales y bien integradas.
                <br /><br />
                No me identifico plenamente con la etiqueta fullstack, ya que considero que no es realista abarcar todas las áreas con la misma profundidad. Prefiero definir mi perfil como un backend especializado con una visión integral del desarrollo.
                <br /><br />
                Me gusta liderar equipos y he asumido el rol de arquitecto de software en distintos proyectos. Aunque no ostento ese título de forma oficial, mi comprensión completa del panorama técnico me permite tomar decisiones sólidas y coordinar de manera eficiente las distintas áreas de trabajo.
              </p>
            </div>
            <div className="about__photo">
              <figure>
                <img src="./profile-photo.jpeg" alt="" />
              </figure>
            </div>
          </div>
        </Layout>
      </section>

      {/* <!-- Skills --> */}
      <section className="skills" id="skills">
        <Layout>
          <div className="skills__container">
          <h2 className="skills__title">Habilidades</h2>
            <div className="skills__container--server">
              <h3 className="skills__subtitle">Servidor</h3>
              <ul className="skills__list">
                <li className="skills__item">
                  <picture>
                    <C />
                    <figcaption>C</figcaption>
                  </picture>
                </li>
                <li className="skills__item">
                  <picture>
                    <Cpp />
                    <figcaption>C++</figcaption>
                  </picture>
                </li>
                <li className="skills__item">
                  <picture>
                    <Java />
                    <figcaption>Java</figcaption>
                  </picture>
                </li>
                <li className="skills__item">
                  <picture>
                    <Kotlin />
                    <figcaption>Kotlin</figcaption>
                  </picture>
                </li>
                <li className="skills__item">
                  <picture>
                    <Spring />
                    <figcaption>Spring</figcaption>
                  </picture>
                </li>
                <li className="skills__item">
                  <picture>
                    <TypeScript />
                    <figcaption>TypeScript</figcaption>
                  </picture>
                </li>
                <li className="skills__item">
                  <picture>
                    <Expressjs />
                    <figcaption>ExpressJs</figcaption>
                  </picture>
                </li>
                <li className="skills__item">
                  <picture>
                    <MySQL />
                    <figcaption>MySQL</figcaption>
                  </picture>
                </li>
                <li className="skills__item">
                  <picture>
                    <PostgreSQL />
                    <figcaption>PostgreSQL</figcaption>
                  </picture>
                </li>
                <li className="skills__item">
                  <picture>
                    <Php />
                    <figcaption>PHP</figcaption>
                  </picture>
                </li>
              </ul>
            </div>
            <div className="skills__container--client">
              <h3 className="skills__subtitle">Cliente</h3>
              <ul className="skills__list">
                <li className="skills__item">
                  <picture>
                    <JavaScript />
                    <figcaption>JavaScript</figcaption>
                  </picture>
                </li>
                <li className="skills__item react">
                  <picture>
                    <React />
                    <figcaption>React</figcaption>
                  </picture>
                </li>
                <li className="skills__item">
                  <picture>
                    <Threejs />
                    <figcaption>ThreeJs</figcaption>
                  </picture>
                </li>
              </ul>
            </div>
            <div className="skills__container--tools">
              <h3 className="skills__subtitle">Herramientas</h3>
          <ul className="skills__list">
                <li className="skills__item skills__item--tool">
                  <picture>
                    <Git />
                    <figcaption>Git</figcaption>
                  </picture>
                </li>
                <li className="skills__item skills__item--tool">
                  <picture>
                    <Docker />
                    <figcaption>Docker</figcaption>
                  </picture>
                </li>
                <li className="skills__item skills__item--tool">
                  <picture>
                    <Nodejs />
                    <figcaption>NodeJs</figcaption>
                  </picture>
                </li>
                <li className="skills__item skills__item--tool">
                  <picture>
                    <Vite />
                    <figcaption>Vite</figcaption>
                  </picture>
                </li>
                <li className="skills__item skills__item--tool">
                  <picture>
                    <WordPress />
                    <figcaption>Wordpress</figcaption>
                  </picture>
                </li>
                <li className="skills__item skills__item--tool">
                  <picture>
                    <MicrosoftAzure />
                    <figcaption>Microsoft Azure</figcaption>
                  </picture>
                </li>
                <li className="skills__item skills__item--tool">
                  <picture>
                    <AmazonWebServices />
                    <figcaption>AWS</figcaption>
                  </picture>
                </li>
          </ul>
            </div>
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
