import { useState } from "react";
import { Nav, Dropdown } from "react-bootstrap";

function NavLinks() {
  let [hoverState, setHoverState] = useState([false, false, false, false, false, false]);

  const dropdownHover = (state, index) => {
    let newState = [false, false, false, false, false, false];
    newState[index] = state
    setHoverState(newState);
  };

  return (
    <>
      <Dropdown
        className="navbar-links nav-link"
        
        show={hoverState[0]}
        onMouseEnter={() => dropdownHover(true, 0)}
        onMouseLeave={() => dropdownHover(false, 0)}
      >
        <Dropdown.Toggle>Dropdown</Dropdown.Toggle>

        <Dropdown.Menu align="right">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        className="navbar-links nav-link"
        
        show={hoverState[1]}
        onMouseEnter={() => dropdownHover(true, 1)}
        onMouseLeave={() => dropdownHover(false, 1)}
      >
        <Dropdown.Toggle>Dropdown</Dropdown.Toggle>

        <Dropdown.Menu align="right">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        className="navbar-links nav-link"
        
        show={hoverState[2]}
        onMouseEnter={() => dropdownHover(true, 2)}
        onMouseLeave={() => dropdownHover(false, 2)}
      >
        <Dropdown.Toggle>Dropdown</Dropdown.Toggle>

        <Dropdown.Menu align="right">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        className="navbar-links nav-link"
        
        show={hoverState[3]}
        onMouseEnter={() => dropdownHover(true, 3)}
        onMouseLeave={() => dropdownHover(false, 3)}
      >
        <Dropdown.Toggle>Dropdown</Dropdown.Toggle>

        <Dropdown.Menu align="right">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        className="navbar-links nav-link"
        
        show={hoverState[4]}
        onMouseEnter={() => dropdownHover(true, 4)}
        onMouseLeave={() => dropdownHover(false, 4)}
      >
        <Dropdown.Toggle>Dropdown</Dropdown.Toggle>

        <Dropdown.Menu align="right">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        className="navbar-links nav-link"
        
        show={hoverState[5]}
        onMouseEnter={() => dropdownHover(true, 5)}
        onMouseLeave={() => dropdownHover(false, 5)}
      >
        <Dropdown.Toggle>Dropdown</Dropdown.Toggle>

        <Dropdown.Menu align="right">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default NavLinks;
