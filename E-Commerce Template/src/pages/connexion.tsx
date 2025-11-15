import "../css/Auth.css";
import { Link } from "react-router-dom";

function Connexion() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Connexion non disponible pour le moment.");
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Connexion</h1>
      <p className="auth-subtitle">Ravi de vous revoir !</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Adresse email" required />
        <input type="password" placeholder="Mot de passe" required />

        <button type="submit" className="auth-button">Se connecter</button>
      </form>

      <div className="auth-link">
        Pas encore de compte ? <Link to="/inscription">Inscrivez-vous</Link>
      </div>
    </div>
  );
}

export default Connexion;
