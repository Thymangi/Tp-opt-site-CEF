import React from "react";
import "./services.css";

function Services() {
  return (
    <div className="services-container">
      {/* Bandeau d'image */}
      <div className="banner-image"></div>
      {/* Titre Section */}
      <section className="services-header">
        <h1>MON OFFRE DE SERVICES</h1>
        <p>
          <span className="highlight">
            Voici les prestations sur lesquelles je peux intervenir.
          </span>
        </p>
      </section>

      {/* Services Section */}
      <section className="services-list">
        <div className="container-card">
          <div className="card">
            <i className="fas fa-desktop"></i>
            <h3>
              <strong>UX DESIGN</strong>
            </h3>
            <p>
              <strong>L'UX Design</strong> est une méthodologie de conception
              qui se concentre sur l'amélioration de l'expérience utilisateur.
              Son but est d'offrir une expérience de qualité et adaptée à
              l'utilisateur.
            </p>
          </div>
          <div className="card">
            <i className="fas fa-file-code"></i>
            <h3>
              <strong>DÉVELOPPEMENT WEB</strong>
            </h3>
            <p>
              <strong> développement de sites web</strong> requiert
              l'utilisation des langages{" "}
              <span className="bold-dotted-underline"> HTML</span>
              {", "}
              <span className="bold-dotted-underline">CSS</span>
              {", "}
              <span className="bold-dotted-underline">Java Script </span>
              {", "}
              et autres technologies pour créer des sites web performants et
              adaptatifs.
            </p>
          </div>
          <div className="card">
            <i className="fas fa-search-dollar"></i>
            <h3>
              <strong>RÉFÉRENCEMENT</strong>
            </h3>
            <p>
              Le <strong>référencement naturel d'un site</strong>, aussi appelé{" "}
              <span className="bold-dotted-underline">SEO</span> , consiste à
              améliorer sa visibilité sur les moteurs de recherche pour
              augmenter le nombre de visites.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
