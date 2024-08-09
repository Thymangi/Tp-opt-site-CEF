import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Colonne 1 */}
          <div className="footer-column">
            <h3>John Doe</h3>
            <p>
              40 Rue Laure Diebold
              <br />
              69009 Lyon, France
              <br />
              Téléphone : 06 20 30 40 50
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          {/* Colonne 2 */}
          <div className="footer-column">
            <h3>Liens utiles</h3>
            <ul>
              <li>
                <a href="/home">Accueil</a>
              </li>
              <li>
                <a href="/about">À propos</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Me contacter</a>
              </li>
              <li>
                <a href="/legal">Mentions légales</a>
              </li>
            </ul>
          </div>
          {/* Colonne 3 */}
          <div className="footer-column">
            <h3>Mes dernières réalisations</h3>
            <ul>
              <li>
                <a href="/portfolio#fresh-food">Fresh food</a>
              </li>
              <li>
                <a href="/portfolio#restaurant-akira">Restaurant Akira</a>
              </li>
              <li>
                <a href="/portfolio#espace-bien-etre">Espace bien-être</a>
              </li>
            </ul>
          </div>
          {/* Colonne 4 */}
          <div className="footer-column">
            <h3>Mes derniers articles</h3>
            <ul>
              <li>
                <a href="/blog#coder-html-css">Coder son site en HTML/CSS</a>
              </li>
              <li>
                <a href="/blog#vendre-produits-web">
                  Vendre ses produits sur le web
                </a>
              </li>
              <li>
                <a href="/blog#se-positionner-google">
                  Se positionner sur Google
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-bottom">
          <p>© Designed by John Doe</p>
        </div>
        <a href="#top" id="back-to-top" className="back-to-top">
          ↑ Haut
        </a>
      </div>
    </footer>
  );
};

export default Footer;
