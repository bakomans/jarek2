
import React from 'react';
import { Navbar, Nav as BootstrapNav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/jarek.jpg'; 
import './nav.css'; 

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Image src={logo} alt="Logo" className="logo" />
      <Navbar.Brand as={Link} to="/" className="nav-brand">Jarosław Zywczak Geodezja</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <BootstrapNav className="ml-auto animated-links text-center">
          <BootstrapNav.Link as={Link} to="/">Home</BootstrapNav.Link>
          <BootstrapNav.Link as={Link} to="/oferta">Oferta</BootstrapNav.Link>
          <BootstrapNav.Link as={Link} to="/contact">Kontakt</BootstrapNav.Link>
        </BootstrapNav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
