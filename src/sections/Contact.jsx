import Layout from '../components/Layout';
import '../styles/section_contact.scss';

const Contact = () => {
  const returnUrl = typeof window === 'undefined'
    ? ''
    : `${window.location.origin}${window.location.pathname}#contact`;

  return (
    <Layout className="contact" id="contact">
      <h2 className="contact__title">Contáctame</h2>
      <form className="contact__form" action="https://formsubmit.co/leonjob13@gmail.com" method="POST">
        <label className="visually-hidden" htmlFor="contact-name">Tu nombre</label>
        <input className="contact__input" id="contact-name" name="name" type="text" autoComplete="name" placeholder="Tu nombre" required />
        <label className="visually-hidden" htmlFor="contact-email">Tu email</label>
        <input className="contact__input" id="contact-email" name="email" required type="email" autoComplete="email" placeholder="Tu email *" />
        <label className="visually-hidden" htmlFor="contact-message">Tu mensaje</label>
        <textarea className="contact__textarea" id="contact-message" name="message" required placeholder="Tu mensaje *"></textarea>
        <input className="contact__honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={returnUrl} />
        <input
          type="hidden"
          name="_autoresponse"
          value="¡Hola! He recibido tu mensaje. Gracias por contactarme; te responderé lo antes posible. — León Cantillo"
        />
        <button className="contact__button" type="submit">Enviar</button>
      </form>
    </Layout>
  );
};

export default Contact;
