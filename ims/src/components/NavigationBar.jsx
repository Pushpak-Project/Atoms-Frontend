import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import logo from '.../PUBLIC_URL/assets/logo.png';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
 <Nav.Link as={NavLink} to="/">
      <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" width="45" height="45" className="d-inline-block align-top mr-2 " />
      <Navbar.Brand>Atoms</Navbar.Brand>
</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <div>        
        <Nav className="ml-auto">
        <Nav.Link as={NavLink} to="/service">
            Service
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/register">
            Register
          </Nav.Link>
        </Nav>
          </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
