import { useState } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import '../styles/Introduction.scss';
import './../styles/section_hero.scss';
import './../styles/section_about.scss';
import './../styles/section_skills.scss';
import './../styles/section_contact.scss';
import './../styles/Footer.scss';

const Introduction = () => {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2022;
  const [contactStatus, setContactStatus] = useState('idle');

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setContactStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/leonjob13@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) throw new Error('Unable to send the contact form.');

      form.reset();
      setContactStatus('success');
    } catch {
      setContactStatus('error');
    }
  };

  return (
    <div className="portfolio">

      { /* <!-- Header --> */}
      <Header />

      {/* <!-- HERO BANNER --> */}
      <Layout className="hero" id="hero">
        <h1 className="hero__name">León Cantillo</h1>
        <h2 className="hero__professional-title">Backend Software Developer</h2>
        <p className="hero__experience">+{experienceYears - 1} años de experiencia • Especialista en arquitectura, APIs y lógica de negocio</p>
        <ul className="hero__networks">
          <li>
            <a className="hero__networks-button hero__networks-button--download button"
              href="https://drive.google.com/file/d/1Vr17q0D9UbWQiQGSBsDmB4rlChUPic15/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-download"></i> Descargar CV</a>
          </li>
          <li>
            <a className="hero__networks-button hero__networks-button--linkedin button-2"
              href="https://www.linkedin.com/in/leoncantillo/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i> LinkedIn</a>
          </li>
          <li>
            <a className="hero__networks-button hero__networks-button--github button"
              href="https://github.com/leoncantillo/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> GitHub</a>
          </li>
        </ul>
      </Layout>


      {/* <!-- About --> */}
      <Layout className="about" id="about">
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
          <picture>
            <img src="./profile-photo.jpeg" alt="profile-photo" />
          </picture>
        </div>
      </Layout>

      {/* <!-- Skills --> */}
      <Skills />

      {/* <!-- Projects --> */}
      <Projects />

      {/* <!-- Contact --> */}
      <Layout className="contact" id="contact">
        <h2 className="contact__title">Contáctame</h2>
        <form className="contact__form" onSubmit={handleContactSubmit}>
          <label className="visually-hidden" htmlFor="contact-name">Tu nombre</label>
          <input className="contact__input" id="contact-name" name="name" type="text" autoComplete="name" placeholder="Tu nombre" required />
          <label className="visually-hidden" htmlFor="contact-email">Tu email</label>
          <input className="contact__input" id="contact-email" name="email" required type="email" autoComplete="email" placeholder="Tu email *" />
          <label className="visually-hidden" htmlFor="contact-message">Tu mensaje</label>
          <textarea className="contact__textarea" id="contact-message" name="message" required placeholder="Tu mensaje *"></textarea>
          <input className="contact__honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />
          <input type="hidden" name="_template" value="table" />
          <button className="contact__button" type="submit" disabled={contactStatus === 'submitting'}>
            {contactStatus === 'submitting' ? 'Enviando…' : 'Enviar'}
          </button>
          <p className="contact__status" role="status" aria-live="polite">
            {contactStatus === 'success' && '¡Gracias! Tu mensaje fue enviado.'}
            {contactStatus === 'error' && 'No fue posible enviar el mensaje. Inténtalo de nuevo más tarde.'}
          </p>
        </form>
      </Layout>

      {/* <!-- Footer --> */}
      <Layout as='footer'>
        <p className="footer__text">&copy; {currentYear} - León Cantillo</p>
      </Layout>
    </div>

  );
};

export default Introduction;
