import { Container, Col, Row, Card } from "react-bootstrap";
// import {useParams} from "react-router-dom";

function CategoryPage({match}) {
  
  return (
    <Container fluid className="mr-0 ml-0 p-5">
      <Row className="justify-content-center">
        <Col lg="6">
          This is the category page for category: {match.params.catName}
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryPage;
