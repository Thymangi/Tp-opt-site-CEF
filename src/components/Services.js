import React from "react";
import "./services.css";

function Services() {
  return (
    <div className="serv-container">
      {/* Bandeau d'image */}
      <div className="banner-image"></div>
      {/* Titre Section */}
      <section className="serv-header">
        <h1>MON OFFRE DE SERVICES</h1>
        <p>
          <span className="serv-highlight">
            Voici les prestations sur lesquelles je peux intervenir.
          </span>
        </p>
      </section>

      {/* Services Section */}
      <section className="serv-list">
        <div className="serv-container-card">
          <div className="serv-card">
            <i className="fas fa-desktop"></i>
            <h3>UX DESIGN</h3>
            <p>
              <span className="serv-bold">L'UX Design</span> est une
              méthodologie de conception qui se concentre sur l'amélioration de
              l'expérience utilisateur. Son but est d'offrir une expérience de
              qualité et adaptée à l'utilisateur.
            </p>
          </div>
          <div className="serv-card">
            <i className="fas fa-file-code"></i>
            <h3>DÉVELOPPEMENT WEB</h3>
            <p>
              Le développement de sites web requiert l'utilisation des langages{" "}
              <span className="serv-bold-dotted-underline">HTML</span>
              {", "}
              <span className="serv-bold-dotted-underline">CSS</span>
              {", "}
              <span className="serv-bold-dotted-underline">JavaScript</span>
              {", "}
              et autres technologies pour créer des sites web performants et
              adaptatifs.
            </p>
          </div>
          <div className="serv-card">
            <i className="fas fa-search-dollar"></i>
            <h3>RÉFÉRENCEMENT</h3>
            <p>
              Le{" "}
              <span className="serv-bold">référencement naturel d'un site</span>
              , aussi appelé{" "}
              <span className="serv-bold-dotted-underline">SEO</span>, consiste
              à améliorer sa visibilité sur les moteurs de recherche pour
              augmenter le nombre de visites.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
