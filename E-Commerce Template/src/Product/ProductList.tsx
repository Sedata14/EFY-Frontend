import { useEffect, useState } from "react";
import axios from "axios";
import { type Product } from "../model/Product";
import { useCategory } from "../context/CategoryContext";
import { Link, useLocation } from "react-router-dom";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { category } = useCategory();
  const [sortOption, setSortOption] = useState("default");


  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search")?.toLowerCase() || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get<{ products: Product[] }>(
          "https://dummyjson.com/products"
        );

        let prods = res.data.products;

 
        if (category && category !== "") {
          prods = prods.filter((p) => p.category === category);
        }

        setProducts(prods);

        if (search !== "") {
          const s = prods.filter((p) =>
            p.title.toLowerCase().includes(search)
          );
          setFilteredProducts(s);
        } else {
          setFilteredProducts(prods);
        }
      } catch (err) {
        console.error("Erreur lors du fetch:", err);
      }
    };

    fetchProducts();
  }, [category, search]); 


  const handleSearch = (term: string) => {
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  const handleSort = (option: string) => {
    setSortOption(option);
    let sorted = [...filteredProducts];

    if (option === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === "name-asc") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "name-desc") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(sorted);
  };

  return (
    <div className="shop-container">
      <div className="sidebar">
        <h2>Filtres</h2>

        <div>
          <label>Tri :</label>
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            style={{ padding: "8px", marginTop: "10px" }}
          >
            <option value="default">Par défaut</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="name-asc">Nom A-Z</option>
            <option value="name-desc">Nom Z-A</option>
          </select>
        </div>
      </div>

      <div className="products-container">
        {filteredProducts.map((p) => (
          <div className="product-card" key={p.id}>
            <Link to={`/product/${p.id}`}>
              <img className="product-image" src={p.thumbnail} alt={p.title} />
            </Link>
            <div className="product-info">
              <div className="product-name">{p.title}</div>
              <div className="product-price">{p.price} €</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
