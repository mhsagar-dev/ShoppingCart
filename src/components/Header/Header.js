import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Jagoron Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/home"}>Shop</Nav.Link>
            <Nav.Link as={Link} to={"/dashboard"}>Order Review</Nav.Link>
            <Nav.Link as={Link} to={"/login"}>Manage Inventory</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;