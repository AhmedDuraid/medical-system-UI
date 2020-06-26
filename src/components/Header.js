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
      <NavItem href="components.html">Status</NavItem>
      <NavItem href="/list">Users List</NavItem>
      <NavItem href="/create-patient">create patient</NavItem>

      <NavItem href="foodapi">Food API</NavItem>
      <NavItem href="feedbackenter">feedback</NavItem>
      <NavItem href="feedback_view">Unreaded feedback</NavItem>
      <NavItem href="patient-program">Patient Program</NavItem>
      <NavItem href="create_pateint_profile">Creating Profile</NavItem>
      <NavItem href="edit_pateint_profile">Edit Pateint Profile</NavItem>
      <NavItem href="wightenter"> patient wight enter</NavItem>
      <NavItem href="labreq"> Lab Request</NavItem>
      <NavItem href="labres"> Lab Response</NavItem>
      <NavItem href="doctornote">Doctor Note</NavItem>
      <NavItem href="lab">Lab</NavItem>
    </Navbar>
  );
};

export default Header;
