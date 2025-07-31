import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=20')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {products.map(product => (
       <Card
  key={product.id}
  id={product.id} // MUHIM!
  image={product.thumbnail} // yoki product.image
  title={product.title}
  category={product.category}
  price={product.price}
/>
      ))}
    </div>
  );
};

export default Products;
