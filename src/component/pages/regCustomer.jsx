import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        localArea: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data as JSON to the PHP script
        fetch('http://localhost/signup.php', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle response from the server
            // You can also redirect the user or show a success message here
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={10} lg={12}>
                    <div>
                        <h2>Sign Up</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name="fullName" onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="formPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" name="phoneNumber" onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="formLocalArea">
                                <Form.Label>Local Area</Form.Label>
                                <Form.Control type="text" name="localArea" onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="confirmPassword" onChange={handleChange} required />
                            </Form.Group>

                            <Button type="submit">Sign Up</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpForm;