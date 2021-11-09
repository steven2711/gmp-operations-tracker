import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import Nav from "../../../elements/Nav";

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <Links />
    </Nav>
  );
};

export default Navbar;
