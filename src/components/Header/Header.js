import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';


const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><h3>jagoShop</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/shop"}> Shop </Nav.Link>
            <Nav.Link as={Link} to={"/review"}>Order Review</Nav.Link>
            <Nav.Link as={Link} to={"/inventory"}>Manage Inventory</Nav.Link>
            <Nav.Link as={Link} to={"/profile"}>Profile</Nav.Link>
            
            <button onClick={() => setLoggedInUser({})} className="btn btn-primary">SignOut</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;