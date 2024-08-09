import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

// Votre script personnalisé
function BackToTopScript() {
  useEffect(() => {
    const backToTopButton = document.getElementById("back-to-top");

    if (backToTopButton) {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          // Affiche le bouton dès que le défilement dépasse 10px
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      };

      // Ajouter l'écouteur de l'événement de défilement
      window.addEventListener("scroll", handleScroll);

      // Nettoyer l'écouteur de l'événement lors du démontage du composant
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <BackToTopScript />
    </Router>
  </React.StrictMode>
);
