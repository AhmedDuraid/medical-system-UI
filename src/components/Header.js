import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar, NavItem, Icon } from "react-materialize";

const Header = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <NavLink className="brand-logo" to="/">
          Logo
        </NavLink>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="/list">List</NavItem>
      <NavItem href="components.html">Components</NavItem>
    </Navbar>
  );
};

export default Header;
