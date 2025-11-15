import "../css/Panier.css";

function Panier() {

  const produits = [
    { id: 1, name: "Produit 1", price: 29.99, quantity: 1, img: "https://via.placeholder.com/80" },
    { id: 2, name: "Produit 2", price: 15.49, quantity: 2, img: "https://via.placeholder.com/80" },
  ];

  const totalProduits = produits.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const livraison = 4.99;
  const totalFinal = totalProduits + livraison;

  return (
    <div className="panier-container">
      <div className="panier-produits">
        <h2>Votre panier</h2>

        {produits.map((p) => (
          <div key={p.id} className="panier-item">
            <img src={p.img} alt={p.name} />
            <div className="panier-info">
              <h3>{p.name}</h3>
              <p>Quantité : {p.quantity}</p>
              <p className="panier-price">{p.price.toFixed(2)} €</p>
            </div>
          </div>
        ))}
      </div>

      <div className="panier-total">
        <h2>Résumé</h2>

        <div className="panier-ligne">
          <span>Total produits :</span>
          <span>{totalProduits.toFixed(2)} €</span>
        </div>

        <div className="panier-ligne">
          <span>Livraison :</span>
          <span>{livraison.toFixed(2)} €</span>
        </div>

        <div className="panier-total-final">
          <span>Total :</span>
          <span>{totalFinal.toFixed(2)} €</span>
        </div>

        <input 
          type="text" 
          placeholder="Code promo" 
          className="panier-code"
        />

        <button className="panier-btn">Commander</button>
      </div>
    </div>
  );
}

export default Panier;
