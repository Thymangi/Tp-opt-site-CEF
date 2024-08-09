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
          <div className="about-content">
            <div className="about-text">
              <h2>À propos</h2>
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation{" "}
                <span className="highlight">d'intégrateur-développeur web</span>
                au CEF. Au cours de cette formation, j'ai pu acquérir des bases
                solides pour travailler dans le domaine du{" "}
                <span className="highlight">développement web</span>.
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consolider ma formation de{" "}
                <span className="highlight">développeur web full stack</span>.
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que
                j'écris et je respecte les bonnes pratiques du web.
              </p>
            </div>
            <div className="photo-skills">
              <div className="about-photo">
                <img src="/img/john-doe-about.jpg" alt="John Doe" />
              </div>
              <div id="skills" className="skills">
                <h2>Mes compétences</h2>
                <div className="skill">
                  <label>HTML5 90%</label>
                  <div className="progress">
                    <div
                      className="progress-bar-html"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="skill">
                    <label>CSS3 80%</label>
                    <div className="progress">
                      <div
                        className="progress-bar-css"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill">
                    <label>JavaScript 70%</label>
                    <div className="progress">
                      <div
                        className="progress-bar-js"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill">
                    <label>PHP 60%</label>
                    <div className="progress">
                      <div
                        className="progress-bar-php"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill">
                    <label>React 50%</label>
                    <div className="progress">
                      <div
                        className="progress-bar-react"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
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
