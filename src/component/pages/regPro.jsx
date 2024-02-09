import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    const cont = {
        backgroundColor: '#212515',
    }
    const button = {
        backgroundColor: '#1eee3a',
        color: '#212515',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        border: '1px solid #03580e'
    }
    return (
        <Container fluid style={cont} className="h-auto h-md-100 p-4 d-flex align-items-center justify-content-center rounded">
            <Row>
                <Col xs={12} md={10} lg={12}>
                    <div className="p-4" style={{ backgroundColor: '#050a03' }}>
                        <h2 className="text-center text-white">Sign Up</h2>
                        <Form>
                           <Form.Group controlId="formBname">
                                <Form.Label className='text-white'>Business Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formCategory">
                                <Form.Label className='text-white'>Business Category</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label className='text-white'>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="Phone Number">
                                <Form.Label className='text-white'>Phone Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="area">
                                <Form.Label className='text-white'>Local Area</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="address">
                                <Form.Label className='text-white'>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='text-white'>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label className='text-white'>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    required
                                />
                            </Form.Group>

                            <div className="d-grid gap-2" style={{ marginTop: '2rem' }}>
                                <Link to='/Prohome' style={{textDecoration: 'none', width: '100%'}}><Button style={button} size="lg">
                                    Sign Up
                                </Button></Link>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


const RegPro = () => {
  return (
    <SignUpForm />
  )
}

export default RegPro