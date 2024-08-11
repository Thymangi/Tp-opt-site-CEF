import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header-section">
        <header className="contact-header">
          <h1>ME CONTACTER</h1>
          <p>
            <span className="highlight">
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </span>
          </p>
        </header>
        <section className="contact-form-section">
          <div className="contact-form">
            <h3>Formulaire de contact</h3>
            <form>
              <input type="text" placeholder="Votre nom" required />
              <input type="email" placeholder="Votre adresse email" required />
              <input
                type="text"
                placeholder="Votre numéro de téléphone"
                required
              />
              <input type="text" placeholder="Sujet" required />
              <textarea
                placeholder="Votre message"
                rows="5"
                required
              ></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Mes coordonnées</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 40 Rue Laure Diebold,
              69009 Lyon, France
            </p>
            <p>
              <i className="fas fa-phone"></i> 06 20 30 40 50
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.302779154347!2d4.800101315312268!3d45.78037997910539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebd4444444f%3A0xa31e54dcd91840e5!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sfr!4v1660661336660!5m2!1sen!2sfr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
