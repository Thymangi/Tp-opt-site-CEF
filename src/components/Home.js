import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary">
            En savoir plus
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>À propos</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Passionné par l'informatique et les nouvelles technologies, je
                suis un...
              </p>
              <p>
                Depuis 5 ans, je m'épanouis dans le domaine du développement
                web...
              </p>
            </div>
            <div className="about-photo">
              <img src="/img/john-doe.jpg" alt="John Doe" />
            </div>
          </div>
          <h3>Mes compétences</h3>
          <div className="skills">
            <div className="skill">
              <label>HTML</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  100%
                </div>
              </div>
            </div>
            <div className="skill">
              <label>CSS</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  85%
                </div>
              </div>
            </div>
            <div className="skill">
              <label>JavaScript</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
            </div>
            <div className="skill">
              <label>PHP</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  60%
                </div>
              </div>
            </div>
            <div className="skill">
              <label>React</label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
