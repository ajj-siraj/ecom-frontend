import { Container, Col, Row, Card } from "react-bootstrap";

import MainCarousel from "./MainCarousel";
import FeaturedCarousel from "./FeaturedCarousel";
import RecommendedProducts from "./RecommendedProducts";
import NewProducts from "./NewProducts";
import FeaturedCard from "./subcomponents/FeaturedCard";

function Homepage() {
  return (
    <Container fluid className="homepage-container mr-0 ml-0 p-0">
      <Row>
        <Col>
          <MainCarousel />
        </Col>
      </Row>
      <Row className="products-container justify-content-center text-center">
        <RecommendedProducts />
      </Row>
      <Row className="products-container justify-content-center text-center">
        <NewProducts />
      </Row>
      <Row className="m-0 p-0 featured-container">
        <Col sm="6" className="m-0 p-0">
          <MainCarousel />
        </Col>
        <Col sm="6">
          <FeaturedCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
