import "../css/QuiSommesNous.css";

function QuiSommesNous() {
  return (
    <div className="about-container">

      <h1 className="about-title">Qui sommes-nous ?</h1>
      <p className="about-subtitle">
        EFIY — Everything For You  
        <br />
        <span className="slogan">“Every product at the cheapest price, for you.”</span>
      </p>

      <div className="about-image">
      </div>

      <div className="about-content">

        <div className="about-card">
          <h2>Notre vision</h2>
          <p>
            EFIY est une plateforme moderne dédiée à rendre chaque produit accessible au meilleur prix. 
            Notre objectif est simple : vous proposer une expérience d'achat fluide, rapide et fiable.
          </p>
        </div>

        <div className="about-card">
          <h2>Notre mission</h2>
          <p>
            Nous travaillons chaque jour pour sélectionner des produits de qualité, négocier les prix 
            les plus bas et garantir une transparence totale à nos clients.
          </p>
        </div>

        <div className="about-card">
          <h2>Nos valeurs</h2>
          <ul>
            <li>✔ Transparence totale</li>
            <li>✔ Prix bas garantis</li>
            <li>✔ Produits vérifiés et fiables</li>
            <li>✔ Respect du client avant tout</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default QuiSommesNous;
