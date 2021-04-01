import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import * as animations from "../util/animations";

gsap.registerPlugin(TextPlugin);

function Footer() {
  let [visibleState, setVisible] = useState([false, false, false, false]);
  let [animatedClass, setAnimated] = useState(false);

  let socialRefs = [];
  socialRefs[0] = useRef(null);
  socialRefs[1] = useRef(null);
  socialRefs[2] = useRef(null);
  socialRefs[3] = useRef(null);

  let tl = gsap.timeline({ repeat: 0 });
  let socialTitles = [
    "eComm Page on Facebook",
    "@eComm on Twitter",
    "eComm on Instagram",
    "eCommChannel on YouTube",
  ];

  const handleSocialHover = (id) => {
    // tl.set(socialRefs[id].childNodes[0].childNodes[1], { text: "", opacity: 0 });
    // tl.set(socialRefs[id].childNodes[0], {
    //   borderRadius: "20px",
    //   width: "10%",
    //   boxShadow: "3px 3px 20px #000",
    // });
    // tl.to(socialRefs[id].childNodes[0], animations.footerSocialHover());
    // tl.to(socialRefs[id].childNodes[0].childNodes[1], { text: socialTitles[id], duration: 0.2 });
    // tl.to(socialRefs[id].childNodes[0].childNodes[1], { opacity: 1, duration: 0.2 });

    // let newState = visibleState;
    // newState[id] = true;
    // setVisible(newState);
    // setAnimated(true);
  };

  const handleSocialUnhover = (id) => {
    // tl.seek(0);
    // tl.clear();

    // tl.to(socialRefs[id].childNodes[0].childNodes[1], { opacity: 0, duration: 0.2 });
    // tl.set(socialRefs[id].childNodes[0].childNodes[1], { text: ""});
    // tl.to(socialRefs[id].childNodes[0], animations.footerSocialUnhover());
    // let newState = visibleState;
    // newState[id] = false;
    // setVisible(newState);
    // setAnimated(false);
  };
  return (
    <Container fluid className="footer-container">
      <Row className="justify-content-center text-left">
        <Col xs="6" sm="3">
          <ul>
            <li>Customer Support</li>
            <li>FAQ</li>
            <li>Shipping &amp; Returns</li>
            <li>Track Your Order</li>
            <li>Contact Us</li>
          </ul>
        </Col>
        <Col xs="6" sm="3">
          <ul>
            <li>About eComm</li>
            <li>Our History</li>
            <li>Social Responsibility</li>
            <li>Careers</li>
            <li>Store Locator</li>
          </ul>
        </Col>
        <Col xs="6" sm="3">
          <ul>
            <li>Loyalty Programs</li>
            <li>Join Now</li>
            <li>Activate Membership</li>
            <li>Awards &amp; Points Redemption</li>
          </ul>
        </Col>
        <Col xs="6" sm="3">
          <ul>
            <li>Follow us on Social Media</li>
            <li
              className={`social-media-div`}
              onMouseEnter={() => handleSocialHover(0)}
              onMouseLeave={() => handleSocialUnhover(0)}
              ref={(el) => (socialRefs[0] = el)}
            >
              <div>
                <i className="fa fa-facebook"></i>
                <span className="social-media-title"></span>
              </div>
            </li>
            <li
              className="social-media-div"
              onMouseEnter={() => handleSocialHover(1)}
              onMouseLeave={() => handleSocialUnhover(1)}
              ref={(el) => (socialRefs[1] = el)}
            >
              <div>
                <i className="fa fa-twitter"></i>
                <span className="social-media-title"></span>
              </div>
            </li>
            <li
              className="social-media-div"
              onMouseEnter={() => handleSocialHover(2)}
              onMouseLeave={() => handleSocialUnhover(2)}
              ref={(el) => (socialRefs[2] = el)}
            >
              <div>
                <i className="fa fa-instagram"></i>
                <span className="social-media-title"></span>
              </div>
            </li>
            <li
              className="social-media-div"
              onMouseEnter={() => handleSocialHover(3)}
              onMouseLeave={() => handleSocialUnhover(3)}
              ref={(el) => (socialRefs[3] = el)}
            >
              <div>
                <i className="fa fa-youtube"></i>
                <span className="social-media-title"></span>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
