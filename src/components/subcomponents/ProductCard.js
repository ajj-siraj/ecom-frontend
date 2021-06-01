import { useContext, useState } from "react";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import {Ctx} from "../../Context";
function ProductCard({ product }) {

  let ctx = useContext(Ctx);
  const {dispatch} = ctx;

  console.log("Context: ");

  let [showModal, setShow] = useState(false);

  const addToCart = (product) => {
    console.log(product.name);
    dispatch({type: 'ADD_TO_CART', payload: product})
  };

  const viewModal = (product) => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

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
      <div className="product-card-buttons">
        <Button block className="btn-outline-dark" onClick={() => addToCart(product)}>
          <i className="fa fa-shopping-cart pr-3"></i>Add to Cart
        </Button>
        <Button block className="btn-outline-dark" onClick={() => viewModal(product)}>
          <i className="fa fa-search pr-3"></i>View
        </Button>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col><div className="modal-product-img"><img src={product.img}/></div></Col>
            <Col>Product Details</Col>
          </Row>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default ProductCard;
