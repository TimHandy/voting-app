'use strict'

import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// const divStyle = {
//   header img, header nav {
//       display: inline-block;
//       vertical-align: middle;
//   }
// };

const MainNav = (props) => {
  return (
    <Navbar collapseOnSelect fixedTop fluid>
      <Navbar.Header>
        <Navbar.Brand >
          <a href="#">Voting App</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#"><Button>Sign Up</Button></NavItem>
          <NavItem eventKey={2} href="#"><Button>Login</Button></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default MainNav;
