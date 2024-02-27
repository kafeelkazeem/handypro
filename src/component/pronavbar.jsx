import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNav2() {
  return (
    <Navbar  expand="lg"  bg='dark' variant='dark' style={{position: 'relative', top: '0px'}}>
      <Container fluid>
        <Navbar.Brand href="/proHome" className="text-white" style={{fontSize: '1.5rem'}}><span style={{color: '#1eee3a'}}>H</span>andy<span style={{color: '#1eee3a'}}>P</span>ro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{fontSize: '1.3rem'}}>
            <Nav.Link href="/ProService">My Service</Nav.Link>
            <Nav.Link href="/ProProfile">Profile</Nav.Link>
            <NavDropdown title="Extras" id="basic-nav-dropdown">
              <NavDropdown.Item href="/appointment2">About Us</NavDropdown.Item>
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
export default MyNav2