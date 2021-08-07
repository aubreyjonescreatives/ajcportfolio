import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import logofull from '../../images/ajclogofull.png'

function NavBar() {
  return (
  <>
<Navbar fixed="top" bg="light" expand="lg" className="navbar">
<NavLink activeClassName="activeLink" to="/"><Navbar.Brand className="logo-image">
    <img 
    src={logofull}
    alt="logo"
    href="#home"
    />
</Navbar.Brand>
  <Navbar.Brand className="portfolio-title" href="#about"></Navbar.Brand>
  </NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="UX Case Studies" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Grocery Store App</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Tesla Solar</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="DNApp">Disney Vs. Netflix</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Full Stack Web Dev Case Studies" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Grocery Store App</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Homeschool Web App</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Board Games Store</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link className="navbar-link" href="#resume">Resume</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </>
  );
}

export default NavBar;
