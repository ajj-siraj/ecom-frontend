import { CardGroup, Col } from "react-bootstrap";

import { newProducts } from "../assets/data/products";
import ProductCard from "./subcomponents/ProductCard";

function NewProducts() {
  return (
    <>
      <h3 className="page-heading mt-5">New Arrivals</h3>
      <CardGroup className="ml-5 mr-5 justify-content-center">
        {newProducts.map((product, idx) => (
          <Col sm="6" md="3" key={`new-product-key-${idx}`}>
            <ProductCard product={product} />
          </Col>
        ))}
      </CardGroup>
    </>
  );
}

export default NewProducts;
