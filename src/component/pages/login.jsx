import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LogForm = () =>{
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
    return(
        <Container fluid style={cont} className="vh-100 d-flex align-items-center justify-content-center rounded">
        <Row>
          <Col xs={12} md={10} lg={12}>
            <div className="p-4" style={{backgroundColor: '#050a03'}}>
              <h2 className="text-center text-white">Login</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className='text-white'>Email address</Form.Label>
                  <Form.Control
                    type="email"
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
    
                <div className="d-grid gap-2" style={{marginTop: '2rem'}}>
                    <Button style={button} size="lg">
                        Login
                    </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    )
}

/*const Cont = () =>{
    const style = {
        backgroundColor: '#212515',
        height: '100vh'
    }
    return(
        <>
          <div className='container-fluid p-5 ' style={style}>
              <LogForm />
          </div>
        </>
    )
}*/



function Login() {
  return (
    <LogForm />
  );
}

export default Login;