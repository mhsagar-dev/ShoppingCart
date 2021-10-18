import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">jagoShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/shop"}>Shop</Nav.Link>
            <Nav.Link as={Link} to={"/review"}>Order Review</Nav.Link>
            <Nav.Link as={Link} to={"/inventory"}>Manage Inventory</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;