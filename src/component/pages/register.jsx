import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Person from './svg/mechanic.svg'
import Person2 from './svg/ratecus.svg'
import {Link} from 'react-router-dom'

function BasicExample(props) {
    return (
      <Card style={{ width: '18rem', margin: '1.5rem', backgroundColor: '#050a03' }}>
        <Card.Img variant="top" src={props.img} style={{width: '10rem', height: '10rem'}}/>
        <Card.Body>
          <Card.Title className='text-white'>Register: </Card.Title>
          <Card.Text className='text-white'>
            {props.des}
          </Card.Text>
          <Link to={props.link} style={{textDecoration: 'none'}}><Button style={{backgroundColor: '#1eee3a', color: '#212515', fontWeight: 'bold', fontSize: '1.3rem', border: '1px solid #03580e'}}>{props.user}</Button></Link>
        </Card.Body>
      </Card>
    );
  }

  const CardCont = () =>{
    const style = {
       backgroundColor: 'rgba(0,0,0,0)'
    }
    return(
        <div style={style} className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
          <BasicExample img={Person} user='Professional' des='lorem ipsum doler sit amet lorem ipsum' link='/regPro' />
          <BasicExample img={Person2} user='Customer' des='lorem ipsum doler sit amet lorem ipsum' link='/regCustomer' />
        </div>
    )
  }
  
  const Container = () =>{
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#212515',
        height: '100vh'
    }
    return(
        <>
          <div className='container-fluid p-5 ' style={style}>
            <CardCont/>
          </div>
        </>
    )
}


const Register = () => {
  return (
    <Container />
)
}

export default Register