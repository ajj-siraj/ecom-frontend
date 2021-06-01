import {useContext} from "react";
import { Col, Row } from "react-bootstrap";
import {Ctx, Types} from "../../Context";

function CustomDropdownItem({ item, href, empty }) {

  let ctx = useContext(Ctx);
  const {dispatch} = ctx;

  const removeItem = () => {
    dispatch({type: Types.REMOVE_FROM_CART, payload: item.id})
  }

  if (empty) {
    return (
      <Row>
        <Col className="mr-3 ml-3">You have not added any items yet.</Col>
      </Row>
    );
  }

  let itemName = item.name.length > 15 ? item.name.slice(0, 15) + "..." : item.name;
  return (
    <Row className="custom-cart-dropdown-item">
      <Col xs="3">
        <img src="#" />
      </Col>
      <Col xs="5">{itemName}</Col>
      {item?.quantity ? (
        <Col xs="2">
          <input type="number" disabled placeholder={item.quantity} />
        </Col>
      ) : null}
      <Col xs="2" style={{ color: "red" }}>
        <span className="dropdown-item-remove-button" onClick={removeItem}>X</span>
      </Col>
    </Row>
  );
}

export default CustomDropdownItem;
