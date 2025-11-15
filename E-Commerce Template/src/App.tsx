import './css/style.css'
import './css/NavBar.css'
import './css/Home.css'
import "./css/App.css"
import "./css/ProductList.css"
import "./css/ProductDetail.css"
import "./css/Contact.css"
import "./css/QuiSommesNous.css";
import "./css/CentreDaide.css";
import "./css/Auth.css"
import "./css/Panier.css"
import "./css/Footer.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 👈 Importer le Provider
import { CategoryProvider } from './context/CategoryContext'; // Ajustez le chemin si nécessaire

import Home from "./pages/home";
import BasicNavBar from './component/BasicNavBar';
import Contact from './pages/contact';
import OurProducts from './pages/ourProducts';
import ProductDetail from './pages/productDetail'
import QuiSommesNous from './pages/quiSommesNous'
import CentreDaide from './pages/centreDaide'
import Connexion from './pages/connexion'
import Inscription from './pages/inscription'
import Panier from './pages/panier'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Router>
        <CategoryProvider>
          
          <BasicNavBar/> 

          <Routes>
           
            <Route path="/" element = {<Home />} />
            <Route path="/products" element = {<OurProducts />} />
            <Route path ="/product/:id" element = {<ProductDetail />}/>
            <Route path="/contact" element = {<Contact />} />
            <Route path="/quiSommesNous" element = {<QuiSommesNous/>}/>
            <Route path="/centreDaide" element = {<CentreDaide/>}/>
            <Route path="/connexion" element = {<Connexion/>}/>
            <Route path="/inscription" element = {<Inscription/>}/>
            <Route path="/panier" element = {<Panier/>}/>
          </Routes>

          <Footer/>
        </CategoryProvider>
        
      </Router>
    </>
  )
}

export default App