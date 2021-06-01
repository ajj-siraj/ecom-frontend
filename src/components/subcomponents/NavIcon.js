import { useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import gsap from "gsap";
import CustomDropdownItem from "./CustomDropdownItem";
import * as animations from "../../util/animations";
import { Link } from "react-router-dom";


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
    <Dropdown className="navbar-links nav-link cart-container">
      <Dropdown.Toggle as="a">
        {type === "cart" ? <i className="fa fa-shopping-cart"></i> : null}
        {type === "wishlist" ? <i className="fa fa-heart-o"></i> : null}
        <span className="counter-container">
          <span className="counter">{items.length || "0"}</span>
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu align="right" className="cart-dropdown">
        {items && items?.length > 0 ? (
          items.map((item, idx) => (
            <CustomDropdownItem item={item} href={"#"} key={`custom-cart-dropdown-item-${idx}`} />
          ))
        ) : (
          <CustomDropdownItem empty={true} />
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavIcon;
