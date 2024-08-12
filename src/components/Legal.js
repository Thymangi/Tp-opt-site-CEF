import React, { useState } from "react";
import "./legal.css";

function Legal() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="legal-container">
      <header className="legal-header">
        <h1>MENTIONS LÉGALES</h1>
        <p>Les informations légales concernant ce site.</p>
      </header>

      <div className="legal-section">
        <div
          className="section-header"
          onClick={() => toggleSection("editeur")}
        >
          Éditeur du site
        </div>
        <div
          className={`section-content ${
            activeSection === "editeur" ? "active" : ""
          }`}
        >
          <p className="contact-info">
            John Doe
            <br />
            40 Rue Laure Diebold
            <br />
            69009 Lyon, France
            <br />
            Téléphone : 06 20 30 40 50
            <br />
            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="legal-section">
        <div
          className="section-header"
          onClick={() => toggleSection("hebergeur")}
        >
          Hébergeur
        </div>
        <div
          className={`section-content ${
            activeSection === "hebergeur" ? "active" : ""
          }`}
        >
          <p>Les informations concernant l'hébergeur du site.</p>
        </div>
      </div>

      <div className="legal-section">
        <div
          className="section-header"
          onClick={() => toggleSection("credits")}
        >
          Crédits
        </div>
        <div
          className={`section-content ${
            activeSection === "credits" ? "active" : ""
          }`}
        >
          <p>Les crédits et les droits d'auteur des images et contenus.</p>
        </div>
      </div>
    </div>
  );
}

export default Legal;
