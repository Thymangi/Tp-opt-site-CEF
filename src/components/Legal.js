import React, { useState } from "react";
import "./legal.css";

function Legal() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="legal-container">
      {/* Header Section */}
      <section className="legal-header">
        <h1>MENTIONS LÉGALES</h1>
      </section>

      {/* Accordion Sections */}
      <section className="legal-content">
        <div className="container">
          <div className="accordion">
            <div className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleSection("editor")}
              >
                <h2>Éditeur du site</h2>
              </div>
              <div
                className={`accordion-body ${
                  activeSection === "editor" ? "active" : ""
                }`}
              >
                <p>John Doe</p>
                <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
                <p>Tel: 06 20 30 40 50</p>
                <p>
                  Email:{" "}
                  <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleSection("host")}
              >
                <h2>Hébergeur</h2>
              </div>
              <div
                className={`accordion-body ${
                  activeSection === "host" ? "active" : ""
                }`}
              >
                <p>Nom de l'hébergeur</p>
                <p>Adresse de l'hébergeur</p>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleSection("credits")}
              >
                <h2>Crédits</h2>
              </div>
              <div
                className={`accordion-body ${
                  activeSection === "credits" ? "active" : ""
                }`}
              >
                <p>
                  Images de <a href="https://pixabay.com/">Pixabay</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Legal;
