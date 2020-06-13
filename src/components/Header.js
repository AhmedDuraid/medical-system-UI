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
      <NavItem href="foodapi">Food API</NavItem>
      <NavItem href="feedbackenter">feedback</NavItem>
      <NavItem href="feedback_view">feedback_view</NavItem>
      <NavItem href="create_pateint_profile">create_pateint_profile</NavItem>
      <NavItem href="edit_pateint_profile">edit_pateint_profile</NavItem>

      <NavItem href="wightenter"> patient wight enter</NavItem>
      <NavItem href="patient-program">patient program</NavItem>
      <NavItem href="doctornote">Doctor Note</NavItem>

      <NavItem href="lab">Lab</NavItem>
    </Navbar>
  );
};

export default Header;
