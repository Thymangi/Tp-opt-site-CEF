import React from "react";
import "./services.css";

function Services() {
  return (
    <div className="services-container">
      {/* Header Section */}
      <section className="services-header">
        <h1>MON OFFRE DE SERVICES</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
      </section>

      {/* Services Section */}
      <section className="services-list">
        <div className="container">
          <div className="card">
            <i className="fas fa-paint-brush"></i>
            <h3>UX DESIGN</h3>
            <p>
              L'UX Design est une méthodologie de conception qui se concentre
              sur l'amélioration de l'expérience utilisateur. Son but est
              d'offrir une expérience de qualité et adaptée à l'utilisateur.
            </p>
          </div>
          <div className="card">
            <i className="fas fa-code"></i>
            <h3>DÉVELOPPEMENT WEB</h3>
            <p>
              Le développement de sites web requiert l'utilisation des langages
              HTML, CSS, JavaScript et autres technologies pour créer des sites
              web performants et adaptatifs.
            </p>
          </div>
          <div className="card">
            <i className="fas fa-search"></i>
            <h3>RÉFÉRENCEMENT</h3>
            <p>
              Le référencement naturel d'un site, aussi appelé SEO, consiste à
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
