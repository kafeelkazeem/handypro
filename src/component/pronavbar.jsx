import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav2() {
  return (
    <Navbar  expand="lg"  bg='dark' variant='dark' style={{position: 'relative', top: '0px'}}>
      <Container fluid>
        <Navbar.Brand href="/proHome" className="text-white" style={{fontSize: '1.5rem'}}>HandyPro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{fontSize: '1.3rem'}}>
            <Nav.Link href="/ProService">Service</Nav.Link>
            <Nav.Link href="/Appointment">Appointment</Nav.Link>
            <Nav.Link href="/ProProfile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNav2