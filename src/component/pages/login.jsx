import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onSubmit =  () =>{
      const url = 'http://localhost/handypro/login.php'
      let fData = new FormData()
      fData.append('eml', email)
      fData.append('pswd', password)
      axios.post(url, fData)
      .then(res =>{
          if(res.data.link == 'true'){
            navigate('/home')
          }
      })  
      .catch(error=>alert(error))
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
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className='text-white'>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
    
                <div className="d-grid gap-2" style={{marginTop: '2rem'}}>
                   <Button onClick = {onSubmit} style={button} size="lg">
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