import "../css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-section">
        <h3 className="footer-title">EFIY</h3>
        <p className="footer-slogan">Every product at the cheapest price, for you.</p>
        <p className="footer-desc">
          Plateforme frontend réalisée dans un cadre d’apprentissage et de démonstration.
        </p>
      </div>

      <div className="footer-section">
        <h4 className="footer-subtitle">Informations</h4>
        <span className="footer-text">Mentions générales</span>
        <span className="footer-text">Politique de confidentialité</span>
        <span className="footer-text">Conditions d'utilisation</span>
      </div>

      <div className="footer-section">
        <h4 className="footer-subtitle">Aide & Support</h4>
        <Link to="/contact" className="footer-link">Contact</Link>
        <Link to="/centreDaide" className="footer-link">Centre d'aide</Link>
      </div>

      <div className="footer-bottom">
        © 2025 EFIY — All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
