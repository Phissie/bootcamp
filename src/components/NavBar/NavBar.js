import "./navbar.css"
import logo from "../../images/fisayoweblogo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          {" "}
          <div className="heading">
            <img src={logo} alt="logo" width="200" />
            <p className="mylogoname">FISAYO FAGADE</p>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="navButton">
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem className="navButton">
              <Link to="/about">My Story So Far</Link>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
          </Nav>
          <NavbarText className="welcome">HELLO WORLD! WELCOME TO MY PAGE.</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
