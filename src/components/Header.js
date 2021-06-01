import { useContext, useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchBar from "./subcomponents/SearchBar";
import NavIcon from "./subcomponents/NavIcon";
import LoginButtons from "./subcomponents/LoginButtons";
import NavLinks from "./subcomponents/NavLinks";
import { Ctx } from "../Context";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

let items2 = [{ name: "wish1" }, { name: "wish2" }];

function Header() {
  let cartItems = useContext(Ctx).state;
  console.log("Cart Items: ", cartItems);

  return (
    <div className="p-0 m-0 brand-nav">
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand className="align-items-center d-flex logo">
            <embed alt="logo" src={logo} id="brand-logo" className="mr-4 ml-5" />
            eComm
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto mr-5">
            <SearchBar />
            <NavIcon type="wishlist" items={items2} />
            <NavIcon type="cart" items={cartItems} />
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
