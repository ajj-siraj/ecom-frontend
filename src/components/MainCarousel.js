import { Carousel, Button } from "react-bootstrap";

import cover1 from "../assets/pexels-the-lazy-artist-gallery-999267.jpg";
import cover2 from "../assets/pexels-sam-lion-5709296.jpg";
import cover3 from "../assets/pexels-karol-d-325153.jpg";

function MainCarousel() {
  return (
    <Carousel id="main-carousel" fade={true} interval={3000} indicators={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={cover1} alt="First slide" />
        <Carousel.Caption className="main-carousel-caption">
          <p>Check the latest in Men's Fashion</p>
          <Button>Browse Section</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cover2} alt="Second slide" />

        <Carousel.Caption className="main-carousel-caption">
          <p>
            Shopping for groceries but short on time? Check out our brand new groceries section for
            all kinds of fresh and natural ingredients for your kitchen.
          </p>
          <Button>Browse Section</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cover3} alt="Third slide" />

        <Carousel.Caption className="main-carousel-caption">
          <p>Computers, Mobile Phones, Gaming Consoles, and more in the Electronics section.</p>
          <Button>Browse Section</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
