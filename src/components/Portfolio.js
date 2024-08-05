import React from "react";
import "./portfolio.css";

function Portfolio() {
  const portfolioItems = [
    {
      title: "Fresh food",
      description: "Réalisation d'un site web de commande en ligne.",
      tech: "Site réalisé avec PHP et MySQL",
      image: "/images/fresh-food.jpg",
      link: "#", // Placeholder link
    },
    {
      title: "Restaurant Akira",
      description: "Réalisation d'un site vitrine pour un restaurant.",
      tech: "Site réalisé avec WordPress",
      image: "/images/restaurant-akira.jpg",
      link: "#", // Placeholder link
    },
    {
      title: "Espace bien-être",
      description: "Réalisation d'un site vitrine pour un praticien.",
      tech: "Site réalisé en HTML/CSS",
      image: "/images/espace-bien-etre.jpg",
      link: "#", // Placeholder link
    },
    // More items...
  ];

  return (
    <div className="portfolio-container">
      <section className="portfolio-header">
        <h1>PORTFOLIO</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
      </section>

      <section className="portfolio-items">
        <div className="container">
          <div className="row">
            {portfolioItems.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.description}</p>
                    <p className="small-text">{item.tech}</p>
                    <button
                      onClick={() => alert("View Project")}
                      className="btn btn-primary"
                    >
                      Voir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
