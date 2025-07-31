import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../Products/product.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="CardProduct">
      <div className="ImageProduct">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="infoProduct">
        <h2>{product.title}</h2>
        <h4 className="category">{product.category}</h4>
        <h3 className="price">${product.price}</h3>
        <div className="rating">
          <span className="stars">★★★★☆</span>
          <h6 className="reviews">({product.rating} rating)</h6>
        </div>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
