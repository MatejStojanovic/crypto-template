import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../img/logo.png";
const Navmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <div className="main-navbar">
          <NavbarBrand href="/">
            {" "}
            <img src={logo} className="main-navbar_logo" />
          </NavbarBrand>
          <NavbarBrand href="/" className="main-navbar_name">
            <h1>MatixCoin</h1>
          </NavbarBrand>
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar className="navbar_container">
            <NavItem>
              <NavLink href="/" className="navbar_items">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="navbar_items">
                Telegram
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="navbar_items">
                Chart
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="navbar_items">
                Buy on Pancake
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navmenu;
