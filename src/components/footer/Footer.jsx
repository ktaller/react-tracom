import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <p>Contact us at info@tracomacademy.com | Follow us on Social Media</p>
        <div className="social-links">
          <a href="#">Facebook</a> | <a href="#">LinkedIn</a> |{" "}
          <a href="#">Twitter</a>
        </div>
        <div className="newsletter">
          <input type="email" placeholder="Subscribe to stay updated" />
          <button>Subscribe</button>
        </div>
        <div className="rights">
          <p>&copy; 2024 Tracom Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
