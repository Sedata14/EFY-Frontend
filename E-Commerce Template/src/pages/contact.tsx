import "../css/Contact.css";
import { useState } from "react";

function Contact() {
  const [popup, setPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    setPopup(true);

    setTimeout(() => setPopup(false), 3000);
  };

  return (
    <div className="contact-container">

      {popup && (
        <div className="contact-popup">
          Votre message a bien été envoyé ! Nous vous répondrons bientôt.
        </div>
      )}

      <h1 className="contact-title">Contactez-nous</h1>
      <p className="contact-subtitle">
        Une question ? Un problème ? Notre équipe est là pour vous aider.
      </p>

      <div className="contact-content">


        <div className="contact-info">
          <h2>Informations</h2>
          <p><strong>Email :</strong> support@efy.com</p>
          <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          <p><strong>Adresse :</strong> Paris, France</p>

          <h2>Horaires</h2>
          <p>Lundi - Vendredi : 9h - 18h</p>
          <p>Samedi : 10h - 16h</p>
        </div>


        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom</label>
            <input type="text" placeholder="Votre nom" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Votre email" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Votre message..." rows={5} required></textarea>
          </div>

          <button type="submit" className="contact-submit">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
