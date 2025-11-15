import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetail(){
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products/${id}`);

            setProduct(res.data);
            console.log(res.data.title)
        }
         catch (err) {
            console.error("Erreur lors du fetch:", err);
        }
        };

    fetchProducts();
  }, [id]);

return (
  <div className="product-detail-container">
    <button className="back-button" onClick={() => navigate(-1)}>
      ← Retour
    </button>

    {product?.images?.[0] && (
      <img src={product.images[0]} alt={product.title} className="product-image" />
    )}

    <h1 className="product-title">{product?.title}</h1>
    <p className="product-price">{product?.price}$</p>
    <p className="product-category">{product?.category}</p>
    <p className="product-description">{product?.description}</p>

  <div className="product-reviews">
    {product?.reviews?.length > 0 ? (
      product.reviews.map((review, index) => (
        <div key={index} className="product-review">
          <span>{review.reviewerName}</span>
          <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
          <p>{review.comment} ⭐{review.rating}</p>
        </div>
      ))
    ) : (
      <p>Aucun avis pour ce produit.</p>
    )}
  </div>
  </div>
);
}

export default ProductDetail;