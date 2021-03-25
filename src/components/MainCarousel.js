import {Carousel} from "react-bootstrap";

import cover1 from "../assets/20139.jpg";
import cover2 from "../assets/pexels-sam-lion-5709296.jpg";
import cover3 from "../assets/pexels-karol-d-325153.jpg";

function Footer() {
  return (
      <Carousel id="main-carousel" fade={true} interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cover1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cover2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cover3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default Footer;
