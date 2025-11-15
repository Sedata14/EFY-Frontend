import "../css/NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { useCategory } from "../context/CategoryContext";
import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";

function BasicNavBar() {
  const { setCategory } = useCategory();
  const [searchVisible, setSearchVisible] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setSearchVisible(false);
  }, [location.pathname]);

  const handleSearch = (term: string) => {
    console.log("Recherche :", term);
    setSearchVisible(false);
  };

  return (
    <div className="main-container">
      <div className="TopNavBar">
        <div className="TopNavBarItem">
          Livraison gratuite pour votre premier achat !
        </div>

        <div className="TopNavGroup">
          <div className="TopNavItem">
            <Link to="/QuiSommesNous" style={{color:"white"}}>Qui sommes nous</Link>
          </div>
          <div className="TopNavItem">
            <Link to="/contact" style={{color:"white"}}>Contact</Link>
          </div>
          <Link to="/centreDaide" style={{color:"white"}}>Centre d'aides</Link>
        </div>
      </div>

      <div className="MainNavBar">
        <div className="NavGroup NavGroupLeft">
          <Link className="NavLogo" to="/">EFY</Link>

          <div className="NavItem">
            <img
              src="images/icone/loupe.png"
              alt="search"
              className="NavIcon"
              onClick={() => setSearchVisible((v) => !v)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="NavGroup NavGroupRight">
          <div className="NavItem">
            <Link to="/connexion" style={{color:"black"}}>Connexion </Link>
          </div>

          <div className="NavItem">
            <img
              src="images/icone/shopping-cart.png"
              alt="cart"
              className="NavIcon"
            />
            <Link to="/panier">Panier</Link>
          </div>
        </div>
      </div>

      {searchVisible && (
        <div style={{ padding: "0 20px", marginTop: "10px" }}>
          <SearchBar onSearch={handleSearch} close={() => setSearchVisible(false)} />
        </div>
      )}

      <div className="CategoriesNavBar">
        <div className="NavGroup">

          <div className="NavItem">
            <Link to="/products" onClick={() => setCategory("")}>Tout voir</Link>
          </div>

          <div className="NavItem">
            <Link to="/products" onClick={() => setCategory("groceries")}>Courses</Link>
          </div>

          <div className="NavItem">
            <Link to="/products" onClick={() => setCategory("beauty")}>Beauté</Link>
          </div>
          
          <div className="NavItem">
            <Link to="/products" onClick={() => setCategory("fragrances")}>Parfum</Link>
          </div>
          
          <div className="NavItem">
            <Link to="/products" onClick={() => setCategory("furniture")}>Mobilier</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BasicNavBar;
