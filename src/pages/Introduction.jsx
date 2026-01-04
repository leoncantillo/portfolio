import Header from '../components/Header';
import Layout from '../components/Layout';
import Skills from '../sections/Skills';
import './../styles/section_hero.scss';
import './../styles/section_about.scss';
import './../styles/section_skills.scss';
import './../styles/section_contact.scss';

const Introduction = () => {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2022;

  return (
    <div className="portfolio">

      { /* <!-- Header --> */}
      <Header />

      {/* <!-- HERO BANNER --> */}
      <section className="hero" id="hero">
        <Layout>
          <h1 className="hero__name">León Cantillo</h1>
          <h2 className="hero__professional-title">Backend Software Developer</h2>
          <p className="hero__experience">+{experienceYears - 1} años de experiencia • Especialista en arquitectura, APIs y lógica de negocio</p>
          <ul className="hero__networks">
            <li>
              <a className="hero__networks-button hero__networks-button--download button" href="" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-download"></i> Descargar CV</a>
            </li>
            <li>
              <a className="hero__networks-button hero__networks-button--linkedin button-2" href="https://www.linkedin.com/in/leoncantillo/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i> LinkedIn</a>
            </li>
            <li>
              <a className="hero__networks-button hero__networks-button--github button" href="https://github.com/leoncantillo/" target="_blank" rel="noopener noreferrer">
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
                Soy desarrollador <b><i>backend</i></b> con <b>más de {experienceYears - 1} años de experiencia</b>. Aunque puedo construir aplicaciones completas de extremo a extremo, mi mayor fortaleza y especialización se encuentran en el backend: arquitectura, lógica de negocio, APIs y manejo de datos. Trabajo el <b><i>frontend</i></b> con un conjunto específico de tecnologías que domino, suficientes para crear interfaces funcionales y bien integradas.
                <br /><br />
                No me identifico plenamente con la etiqueta <i>fullstack</i>, ya que considero que no es realista abarcar todas las áreas con la misma profundidad. Prefiero definir mi perfil como un backend especializado con una visión integral del desarrollo.
                <br /><br />
                Me gusta liderar equipos y he asumido el rol de <b><i>arquitecto de software</i></b> en distintos proyectos. Aunque no ostento ese título de forma oficial, mi comprensión completa del panorama técnico me permite tomar decisiones sólidas y coordinar de manera eficiente las distintas áreas de trabajo.
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
      <Skills />

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
            <input className="contact__input" required type="email" placeholder="Tu email *" />
            <textarea className="contact__textarea" required placeholder="Tu mensaje *"></textarea>
            <button className="contact__button" type="submit">Enviar</button>
          </form>
        </Layout>
      </section>

      {/* <!-- Footer --> */}
      <footer className="footer">
        <Layout>
          <p className="footer__text">&copy; {currentYear} - León Cantillo</p>
        </Layout>
      </footer>

    </div>

  );
};

export default Introduction;
