import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-column">
        <p>John Doe</p>
        <p>Address</p>
        <p>Phone Number</p>
        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer-column">Links to other pages</div>
      <div className="footer-column">Latest Projects</div>
      <div className="footer-column">Latest Blog Posts</div>
      <div className="footer-bottom">
        <p>© 2024 John Doe. All rights reserved.</p>
        <a href="#top">Back to Top</a>
      </div>
    </footer>
  );
}

export default Footer;
