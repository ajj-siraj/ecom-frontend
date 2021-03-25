import { Container, Col, Row, Card } from "react-bootstrap";

import MainCarousel from "./MainCarousel";


import cover2 from "../assets/pexels-r-fera-432059.jpg";

function Homepage() {
  return (
    <Container fluid className="homepage-container mt-5">
      <Row>
        <Col md={8}>
          <MainCarousel />
        </Col>
        <Col md={4}>
        <Card className="bg-dark text-white rounded-0">
            <Card.Img src={cover2} className="cover-image img-fluid" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
