//212515: black  c8f560: green  4e515c: grey  7862f8: purple
import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const Log = () =>{
    const style = {
        fontSize: '1.6rem',
        color: 'white',
        textAlign: 'center',
        marginTop: '1rem'
    }
    return(
        <>
        <p style={style}>Already have an account? <Link style={{textDecoration: 'none', color: '#1eee3a', fontWeight: 'bold'}} to='/login'>Login</Link></p>
        </>
    )
}

const Btn = () =>{
    const style = {
        display: 'block',
        margin: '0 auto',
        backgroundColor: '#1eee3a',
        color: '#212515',
        marginTop: '4.6rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        border: '1px solid #03580e'
    }
    return(
        <>
          <Link to='/register' style={{textDecoration: 'none'}}><Button style={style} size="lg">Get Started</Button>{' '}</Link>
        </>
    )
}

const Text = () =>{
    const style={
        color: 'white',
        textAlign: 'center',
        fontSize: '1.4rem',
        marginTop: '3.3rem'
    }
    return(
        <p style={style}>Find reliable professionals for your needs or showcase your services to a broader audience.</p>
    )
}

const Heading = () =>{
    const style = {
        color: 'white',
        fontSize: '3rem',
        textAlign: 'center'
    }
    return(
        <>
          <h1 style={style}>Welcome to <span style={{color: '#1eee3a'}}>H</span>andy<span style={{color: '#1eee3a'}}>P</span>ro connecting service providers and customers</h1>
        </>
    )
}

const Container = () =>{
    const style = {
        backgroundColor: '#212515',
        height: '100vh'
    }
    return(
        <>
          <div className='container-fluid p-5 ' style={style}>
              <Heading />
              <Text />
              <Btn />
              <Log />
          </div>
        </>
    )
}

const GetStarted = () =>{
    return(
        <>
          <Container />
        </>
    )
}
export default GetStarted;