import React from "react";
import "./blog.css";

function Blog() {
  const articles = [
    {
      title: "Coder son site en HTML/CSS",
      date: "22 août 2022",
      image: "/img/blog/coder.jpg",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Vendre ses produits sur le web",
      date: "20 août 2022",
      image: "/img/blog/croissance.jpg",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Se positionner sur Google",
      date: "1 août 2022",
      image: "/img/blog/google.jpg",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Coder en responsive design",
      date: "31 juillet 2022",
      image: "/img/blog/screens.jpg",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Techniques de référencement",
      date: "30 juillet 2022",
      image: "/img/blog/seo.jpg",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Apprendre à coder",
      date: "12 juillet 2022",
      image: "/img/blog/technos.png",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  return (
    <div className="blog-container">
      {/* Bandeau d'image */}
      <div className="banner-image"></div>
      <header className="blog-header">
        <section className="blog-header">
          <h1>BLOG</h1>
          <p>
            <span className="highlight">
              Retrouvez ici quelques articles sur le développement web.
            </span>
          </p>
        </section>
      </header>
      <section className="blog-list">
        <div className="blog-container">
          {articles.map((article, index) => (
            <div className="blog-card" key={index}>
              <img src={article.image} alt={article.title} />
              <div className="blog-card-body">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href="/" className="blog-btn">
                  Lire la suite
                </a>
                <p className="blog-small-text">Publié le {article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
