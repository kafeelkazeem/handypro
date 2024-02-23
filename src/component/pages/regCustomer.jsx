import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const cont = {
    backgroundColor: '#212515',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const button = {
    backgroundColor: '#1eee3a',
    color: '#212515',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    border: '1px solid #03580e',
  };

  const Navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true); // Set loading to true when submitting

    const url = 'http://localhost/handypro/signup.php';
    let fData = new FormData();
    fData.append('name', fullName);
    fData.append('email', email);
    fData.append('num', num);
    fData.append('area', area);
    fData.append('address', address);
    fData.append('password', password);
    axios
      .post(url, fData)
      .then((res) => {
        setLoading(false); // Set loading to false after receiving response
        if (res.data) {
          Navigate('/login');
        } else {
          alert(res.data);
          alert('A problem occurred');
        }
      })
      .catch((error) => {
        setLoading(false); // Set loading to false on error
        alert(error);
      });
  };

  return (
    <Container fluid style={cont}>
      <Row className="justify-content-center" style={{ width: '100%' }}>
        <Col md={6}>
          <div className="p-4 m-2" style={{ backgroundColor: '#050a03' }}>
            <h2 className="text-center text-white">Sign Up</h2>
            <Form>
              <Form.Group controlId="formFname">
                <Form.Label className="text-white">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="Phone Number">
                <Form.Label className="text-white">Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="area">
                <Form.Label className="text-white">Local Area</Form.Label>
                <Form.Control
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label className="text-white">Address</Form.Label>
                <Form.Control
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label className="text-white">Confirm Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>

              <div className="d-grid gap-2" style={{ marginTop: '2rem' }}>
                <Button onClick={onSubmit} disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                      <span className="visually-hidden">Loading...</span>
                    </>
                  ) : (
                    'Sign up'
                  )}
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const RegCustomer = () => {
  return <SignUpForm />;
};

export default RegCustomer;
