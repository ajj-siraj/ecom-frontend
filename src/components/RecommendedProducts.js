import { CardGroup, Col } from "react-bootstrap";

import { recProducts } from "../assets/data/products";
import ProductCard from "./subcomponents/ProductCard";

function RecommendedProducts() {
  return (
    <>
      <h3 className="page-heading">Recommended Products</h3>
      <CardGroup className="ml-5 mr-5 justify-content-center">
        {recProducts.map((product, idx) => (
          <Col sm="6" md="3" key={`rec-product-key-${idx}`}>
            <ProductCard product={product} />
          </Col>
        ))}
      </CardGroup>
    </>
  );
}

export default RecommendedProducts;
