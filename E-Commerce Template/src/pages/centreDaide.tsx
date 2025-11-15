import "../css/CentreDaide.css"

function CentreDaide() {
  const questions = [
    "Comment créer un compte ?",
    "Comment passer une commande ?",
    "Quels sont les moyens de paiement acceptés ?",
    "Comment suivre ma commande ?",
    "Comment retourner un produit ?",
    "Puis-je modifier ma commande après validation ?",
    "Quels sont les frais de livraison ?",
    "Comment contacter le support ?",
  ];

  return (
    <div className="centre-d-aide-container">
      <h1 className="centre-d-aide-title">Centre d’aide</h1>
      <p className="centre-d-aide-subtitle">
        Retrouvez ici les réponses à nos questions les plus fréquentes.
      </p>

      <div className="questions-list">
        {questions.map((q, index) => (
          <div key={index} className="question-item">
            {q}
          </div>
        ))}
      </div>

      <div className="contact-support">
        <p>Vous n'avez pas trouvé de réponse ? Contactez notre support : <strong>support@efy.com</strong></p>
      </div>
    </div>
  );
}

export default CentreDaide;
