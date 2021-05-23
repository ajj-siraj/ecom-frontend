import {Col, Row} from "react-bootstrap";

function CustomDropdownItem({item, href}) {
  let itemName = item.name.length > 15 ? item.name.slice(0,15) + '...' : item.name;
  return (
    <Row className="custom-cart-dropdown-item">
      <Col xs="3"><img src="#" /></Col>
      <Col xs="5">{itemName}</Col>
      {item?.quantity? <Col xs="2"><input type="number" disabled placeholder={item.quantity}/></Col> : null}
      <Col xs="2" style={{color: "red"}}>X</Col>
    </Row>
  );
}

export default CustomDropdownItem;
