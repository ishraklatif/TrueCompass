import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../assets/img/header-img-removebg.png";
function NavbarComponent() {
  
  return (
    <Navbar expand="md" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
        <img src={logo} alt="Logo" />
        <span className="logo-text">True Compass</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/about"><Nav.Link>About Us</Nav.Link></LinkContainer>
            <NavDropdown title="Services" id="services-dropdown">
              <LinkContainer to="/services/ites"><NavDropdown.Item>ITES Service</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/services/outs"><NavDropdown.Item>Outsourcing Service</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/services/bpo"><NavDropdown.Item>BPO Service</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/services/tech"><NavDropdown.Item>Tech Service</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/services/prm"><NavDropdown.Item>PR Management</NavDropdown.Item></LinkContainer>
            </NavDropdown>
            <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

