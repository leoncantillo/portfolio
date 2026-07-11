import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/section_contact.scss';

const Contact = () => {
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
        <input
          type="hidden"
          name="_autoresponse"
          value="¡Hola! He recibido tu mensaje. Gracias por contactarme; te responderé lo antes posible. — León Cantillo"
        />
        <button className="contact__button" type="submit" disabled={contactStatus === 'submitting'}>
          {contactStatus === 'submitting' ? 'Enviando…' : 'Enviar'}
        </button>
        <p className="contact__status" role="status" aria-live="polite">
          {contactStatus === 'success' && '¡Gracias! Tu mensaje fue enviado.'}
          {contactStatus === 'error' && 'No fue posible enviar el mensaje. Inténtalo de nuevo más tarde.'}
        </p>
      </form>
    </Layout>
  );
};

export default Contact;
