import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNav() {
  return (
    <Navbar  expand="lg"  bg='dark' variant='dark' style={{position: 'relative', top: '0px'}}>
      <Container fluid>
        <Navbar.Brand href="/home" className="text-white" style={{fontSize: '1.5rem'}}>HandyPro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{fontSize: '1.3rem'}}>
            <Nav.Link href="/Services">Service</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <NavDropdown title="Extras" id="basic-nav-dropdown">
              <NavDropdown.Item href="/appointment">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Report
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Send feedback</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNav