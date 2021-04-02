import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchBar from "./subcomponents/SearchBar";
import WishList from "./subcomponents/WishList";
import Cart from "./subcomponents/Cart";
import UserLogin from "./subcomponents/UserLogin";
import NavLinks from "./subcomponents/NavLinks";

import logo from "../assets/logo.svg";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="align-items-center d-flex logo">
          <embed alt="logo" src={logo} id="brand-logo" className="mr-4 ml-5" />
          eComm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto mr-5">
            <SearchBar />
            <WishList />
            <Cart />
            <UserLogin />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="m-0 p-0">
        <Nav className="mr-auto m-0 main-nav">
          <NavLinks />
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
