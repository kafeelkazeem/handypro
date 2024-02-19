import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const Log1 = () =>{
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
          localStorage.setItem('userDetails', JSON.stringify(res.data))
          navigate('/home')
        }else{
          alert(res.data.message)
        }
    })  
    .catch(error=>alert(error))
  }   
  return(
    <div className="p-4" style={{backgroundColor: '#050a03', margin: '3rem'}}>
      <h2 className="text-center text-white">Login as customer</h2>
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
  )
}

const Log2 = () =>{
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
    const url = 'http://localhost/handypro/prologin.php'
    let fData = new FormData()
    fData.append('eml', email)
    fData.append('pswd', password)
    axios.post(url, fData)
    .then(res =>{
        if(res.data.link == 'true'){
          localStorage.setItem('ProUserDetails', JSON.stringify(res.data))
          navigate('/prohome')
        }else{
          alert(res.data.message)
        }
    })  
    .catch(error=>alert(error))
  }   
  return(
    <div className="p-4" style={{backgroundColor: '#050a03', margin: '3rem'}}>
      <h2 className="text-center text-white">Login as Professional</h2>
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
  )
}

const LogForm = () =>{
  const cont = {
    backgroundColor: '#212515',
  }
    return(
        <Container fluid style={cont} className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
           <Log1 />
           <Log2 />
       </Container>
    )
}

function Login() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#212515',
    height: '100vh'
  }
  return (
    <div className='container-fluid p-5' style={style}>
       <LogForm />
    </div>
  );
}

export default Login;