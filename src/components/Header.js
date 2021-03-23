import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchBar from "./subcomponents/SearchBar";
import WishList from "./subcomponents/WishList";
import Cart from "./subcomponents/Cart";
import NavLinks from "./subcomponents/NavLinks";

function Header() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>eComm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <SearchBar />
          <WishList />
          <Cart />
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
