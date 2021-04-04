import { useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import gsap from "gsap";

import * as animations from "../../util/animations";

function NavIcon({ type, items }) {
  let cartRef = useRef(null);
  const [cartDropdownState, setDropdown] = useState(false);

  const handleClick = () => {
    cartDropdownState
      ? gsap.to(cartRef, animations.dropdownOut())
      : gsap.to(cartRef, animations.dropdownIn());
    setDropdown(!cartDropdownState);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
    gsap.to(cartRef, animations.dropdownOut());
  };
  return (
    // <div className="cart-container">
    //   <div onClick={handleClick} onMouseLeave={handleMouseLeave}>
    //     <div className="cart-dropdown" ref={(el) => (cartRef = el)}>
    //       <ul>
    //
    //       </ul>
    //     </div>
    //

    //   </div>
    // </div>
    <Dropdown className="navbar-links nav-link cart-container">
      <Dropdown.Toggle as="a">
        {type === "cart" ? <i className="fa fa-shopping-cart"></i> : null}
        {type === "wishlist" ? <i className="fa fa-heart-o"></i> : null}
        <span className="counter-container">
        <span className="counter">{items.length || "0"}</span>
      </span>
      </Dropdown.Toggle>

      <Dropdown.Menu align="right" className="cart-dropdown">
        {items.map((item) => (
          <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
      
    </Dropdown>
  );
}

export default NavIcon;
