import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchBar from "./subcomponents/SearchBar";
import NavIcon from "./subcomponents/NavIcon";
import LoginButtons from "./subcomponents/LoginButtons";
import NavLinks from "./subcomponents/NavLinks";

import logo from "../assets/logo.svg";

let items1=['cart1','cart2'];
let items2=['wish1','wish2','wish3','wish4','wish5'];

function Header() {
  return (
    <div className="p-0 m-0 brand-nav">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="align-items-center d-flex logo">
          <embed alt="logo" src={logo} id="brand-logo" className="mr-4 ml-5" />
          eComm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto mr-5">
            <SearchBar />
            <NavIcon type="wishlist" items={items2}/>
            <NavIcon type="cart" items={items1}/>
            <LoginButtons />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="m-0 p-0 border-bottom">
        <Nav className="mr-auto m-0 main-nav">
          <NavLinks />
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
