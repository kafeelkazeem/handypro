import React, {useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

    const Navigate = useNavigate('')
    const [Bname, setBname] = useState('')
    const [Bcat, setBcat] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState('')
    const [area, setArea] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () =>{
        const url = 'http://localhost/handypro/prosignup.php'
        let fData = new FormData()
        fData.append('Bname', Bname)
        fData.append('Bcat', Bcat)
        fData.append('email', email)
        fData.append('num', num)
        fData.append('area', area)
        fData.append('address', address)
        fData.append('password', password)
        axios.post(url, fData)
        .then(res =>{
          if(res.data == 'true'){
            alert('Succesfull')
            Navigate('/login')
          }else{
            alert(res.data)
            alert('A problem occured')
          }
        }    
       )
      .catch(error=>alert(error))
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
                                    value = {Bname}
                                    onChange = {(e) => setBname(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formCategory">
                                <Form.Label className='text-white'>Business Category</Form.Label>
                                <Form.Control
                                    type="text"
                                    value = {Bcat}
                                    onChange = {(e) => setBcat(e.target.value)}
                                    required

                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label className='text-white'>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    value = {email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="Phone Number">
                                <Form.Label className='text-white'>Phone Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    value = {num}
                                    onChange = {(e) => setNum(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="area">
                                <Form.Label className='text-white'>Local Area</Form.Label>
                                <Form.Control
                                    type="text"
                                    value = {area}
                                    onChange = {(e) => setArea(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="address">
                                <Form.Label className='text-white'>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    value = {address}
                                    onChange = {(e) => setAddress(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='text-white'>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value = {password}
                                    onChange = {(e) => setPassword(e.target.value)}
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
                                <Button onClick={onSubmit}>Sign Up</Button>
                                {/* <Link to='/Prohome' style={{textDecoration: 'none', width: '100%'}}><Button style={button} size="lg">
                                    Sign Up
                                </Button></Link> */}
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