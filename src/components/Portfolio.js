import React from "react";
import "./portfolio.css";

function Portfolio() {
  const portfolioItems = [
    {
      title: "Fresh food",
      description: "Réalisation d'un site web de commande en ligne.",
      tech: "Site réalisé avec PHP et MySQL",
      image: "/img/portfolio/fresh-food.jpg",
      link: "#", // Placeholder link
    },
    {
      title: "Restaurant Akira",
      description: "Réalisation d'un site vitrine.",
      tech: "Site réalisé avec WordPress",
      image: "/img/portfolio/restaurant-japonais.jpg",
      link: "#", // Placeholder link
    },
    {
      title: "Espace bien-être",
      description: "Réalisation d'un site vitrine pour un praticien.",
      tech: "Site réalisé en HTML/CSS",
      image: "/img/portfolio/espace-bien-etre.jpg",
      link: "#", // Placeholder link
    },
    // More items...
  ];

  return (
    <div className="port-container">
      {/* Bandeau d'image */}
      <div className="banner-image"></div>
      <section className="port-header">
        <h1>PORTFOLIO</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
      </section>

      <section className="port-items">
        <div className="port-container-card">
          {portfolioItems.map((item, index) => (
            <div className="port-card" key={index}>
              <img
                src={item.image}
                className="port-card-img-top"
                alt={item.title}
              />
              <div className="port-card-body">
                <h3 className="port-card-title">{item.title}</h3>
                <p className="port-card-text">{item.description}</p>
                <button
                  onClick={() => alert("View Project")}
                  className="port-btn"
                >
                  Voir
                </button>
                <p className="port-small-text">{item.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
