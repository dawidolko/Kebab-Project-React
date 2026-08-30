import React from "react";
import { Nav, NavIcon, Bars, NavLink } from "./Navbar";
import Cart from "../Cart";

const Navbar = ({ toggle }) => {
  return (
    <header>
      <Nav aria-label="Primary">
        <NavLink href="#menu">Kebab</NavLink>
        <Cart />
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </header>
  );
};

export default Navbar;
