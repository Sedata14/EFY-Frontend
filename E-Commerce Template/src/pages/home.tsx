import { Link } from "react-router-dom";
import "../css/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../model/Product";

function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get<{ products: Product[] }>("https://dummyjson.com/products");

          setProducts(res.data.products.slice(0, 4));

      } catch (err) {
        console.error("Erreur lors du fetch:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="main-container">
      {products.length > 0 && (
        <div
          className="home-backgroundImage"
          
        >
          <div className="containerOverImage">
            <h1>The cheapest product at the best quality</h1>
            <p>No more worries, only desires</p>
            <Link to="/products">
              <button>Click me</button>
            </Link>
          </div>
        </div>
      )}

      <div className="container">
        {products.map((product) => (
          <div
            className="imageCard"
            key={product.id}
            style={{ backgroundImage: `url(${product.images[0]})` }}
          >
            <div className="imageCardOverlay">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <Link to={`/product/${product.id}`}>
                <button>View More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
