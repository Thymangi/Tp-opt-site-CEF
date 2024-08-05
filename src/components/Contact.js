import React from "react";
import "./blog.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Header Section */}
      <section className="contact-header">
        <h1>ME CONTACTER</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
      </section>

      {/* Contact Form and Info */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-form">
            <h3>Formulaire de contact</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Votre nom</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Votre adresse email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Votre adresse email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Votre numéro de téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  placeholder="Sujet"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Votre message</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Mes coordonnées</h3>
            <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p>Téléphone : 00 00 00 00 00</p>
            <p>Email : contact@johndoe.com</p>
            <div className="map-container">
              {/*<iframe src="https://www.google.com/maps"></iframe>*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
