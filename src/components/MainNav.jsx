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

  const handleClick = (poll) => {
    props.onUserClick(poll)
  }

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
          {props.loggedInUser ? <NavItem eventKey={1} href="#"><Button>My Polls</Button></NavItem> : null}
          {props.loggedInUser ? <NavItem eventKey={2} href="#"><Button>Logout</Button></NavItem> : null}
          {!props.loggedInUser ? <NavItem eventKey={3} href="#"><Button>Sign Up</Button></NavItem> : null}
          {!props.loggedInUser ? <NavItem eventKey={4} href="#"><Button>Login</Button></NavItem> : null}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default MainNav;
