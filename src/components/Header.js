import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Importer NavLink à la place de Link
import "./header.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <NavLink to="/">John Doe</NavLink>
        </div>
        <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/home"
              activeClassName="active"
              className="inactive" // Classe par défaut pour les éléments non actifs
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              activeClassName="active"
              className="inactive"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              activeClassName="active"
              className="inactive"
            >
              Réalisations
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active" className="inactive">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="inactive"
            >
              Me contacter
            </NavLink>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleNav}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
