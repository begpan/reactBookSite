import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow rounded p-1">
      <img src={book.image} alt={book.title} />

      <div className="card-body">
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
      </div>

      <Link to={`/ürün/${book.id}`} className="btn btn-primary w-100">
        Detay gör
      </Link>
    </div>
  );
};

export default Card;
