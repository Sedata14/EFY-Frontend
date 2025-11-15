import "../css/Auth.css";
import { Link } from "react-router-dom";

function Inscription() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inscription non disponible pour le moment.");
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Créer un compte</h1>
      <p className="auth-subtitle">Rejoignez la communauté EFY !</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom complet" required />
        <input type="email" placeholder="Adresse email" required />
        <input type="password" placeholder="Mot de passe" required />
        <input type="password" placeholder="Confirmer le mot de passe" required />

        <button type="submit" className="auth-button">S'inscrire</button>
      </form>

      <div className="auth-link">
        Déjà un compte ? <Link to="/connexion">Connectez-vous</Link>
      </div>
    </div>
  );
}

export default Inscription;
