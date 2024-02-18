import React, { useState, useEffect } from 'react';
import MyNav from '../navbar'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import Rick from './svg/rick.jpg'
import axios from 'axios';

const Cont1 = () => {
  const storedVar = JSON.parse(localStorage.getItem('userDetails'))
  const [name, setName] = useState(storedVar.name);
  const [email, setEmail] = useState(storedVar.email);
  const [area, setArea] = useState(storedVar.area);
  const [address, setAddress] = useState(storedVar.address);
  const [Pnumber, setNumber] = useState(storedVar.number);
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
    // You can add logic here to save the updated profile information to your backend or state.
  };
  
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
          <Image src={Rick} style={{ width: '13rem', height: '13rem' }} roundedCircle fluid />
        </Col>
        <Col xs={12} md={8}>
          <h2 className="text-center text-white text-md-left">Profile Information</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label className='text-white'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly={!editable}
                style={{ border: '1px solid #000' }}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className='text-white'>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!editable}
                style={{ border: '1px solid #000' }}
              />
            </Form.Group>

            <Form.Group controlId="Phone">
              <Form.Label className='text-white'>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your phone number"
                value={Pnumber}
                onChange={(e) => setNumber(e.target.value)}
                readOnly={!editable}
                style={{ border: '1px solid #000' }}
              />
            </Form.Group>

            <Form.Group controlId="formArea">
              <Form.Label className='text-white'>Local Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your local area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                readOnly={!editable}
                style={{ border: '1px solid #000' }}
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label className='text-white'>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                readOnly={!editable}
                style={{ border: '1px solid #000' }}
              />
            </Form.Group>

            {!editable ? (
              <Button variant="primary" className="my-1" block onClick={handleEdit}>
                Edit Profile
              </Button>
            ) : (
              <>
                <Button variant="success" block onClick={handleSave} className="my-1 mx-2">
                  Save
                </Button>
                <Button variant="secondary" className='my-1 mx-2' block onClick={() => setEditable(false)}>
                  Cancel
                </Button>
              </>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const Cont = () => {
  const style = {
    backgroundColor: '#212515',
    overflow: 'auto',
    height: '100vh'
  }
  return (
    <>
      <div className='container-fluid' style={style}>
        <Cont1 />
      </div>
    </>
  )
}

const Profile = () => {
  return (
    <>
      <MyNav />
      <Cont />
    </>
  )
}

export default Profile;