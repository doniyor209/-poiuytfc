// ✅ To‘g‘ri yozilishi kerak:
import { Link } from 'react-router-dom';
import './card.css';

function Card({ id, image, title, category, price }) {
  return (
    <div className="Card">
      <img src={image} alt={title} className="image" />
      <div className="Text">
        <h2>{title}</h2>
        <h3>{category}</h3>
        <h4>${price}</h4>
        <Link to={`/product/${id}`}>
          <button className="btn1">View Details</button>
        </Link>
      </div>
    </div>
  );
}

// ✅ Default export shart:
export default Card;
