import React from "react";
import "./blog.css";

function Blog() {
  const blogPosts = [
    {
      title: "Coder son site en HTML/CSS",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "20 août 2022",
      image: "img/blog/coder.jpeg",
      link: "#", // Placeholder link
    },
    {
      title: "Vendre ses produits sur le web",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "20 août 2022",
      image: "/images/blog-vendre-produits.jpg",
      link: "#", // Placeholder link
    },
    // More posts...
  ];

  return (
    <div className="blog-container">
      <section className="blog-header">
        <h1>BLOG</h1>
        <p>Retrouvez ici quelques articles sur le développement web.</p>
      </section>

      <section className="blog-posts">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                    <p className="card-date">Publié le {post.date}</p>
                    <button
                      onClick={() => alert("Lire la suite")}
                      className="btn btn-primary"
                    >
                      Lire la suite
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

export default Blog;
