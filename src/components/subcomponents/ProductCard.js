import { Row, Col, Card } from "react-bootstrap";

function ProductCard({ product }) {
  return (
    <Card className="product-card">
      <div className="product-card-img" style={{ backgroundImage: `url("${product.img}")` }} />
      <div className="product-card-icons">
        <i className="fa fa-heart-o"></i>
        <i className="fa fa-search"></i>
      </div>
      <div className="product-card-details">
        <div>{product.name}</div>
        <div>${product.price}</div>
        <div>{product.category}</div>
      </div>
    </Card>
  );
}

export default ProductCard;
