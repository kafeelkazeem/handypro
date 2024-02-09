import React from 'react'
import MyNav from '../navbar'
import Button from 'react-bootstrap/Button';
import Services from './svg/services.svg'
import Appointment from './svg/appointment2.svg'
import Profile from './svg/userProfile.svg'
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem', margin: '1.5rem', marginTop: '0rem', backgroundColor: '#050a03' }}>
      <Card.Img variant="top" src={props.img} style={{width: '11rem', height: '11rem'}}/>
      <Card.Body>
        <Card.Text className='text-white'>
          {props.des}
        </Card.Text>
        <div className="d-grid gap-2">
          <Button size='lg' style={{backgroundColor: '#1eee3a', color: '#212515', fontWeight: 'bold', fontSize: '1.3rem', border: '1px solid #03580e'}}>{props.user}</Button>
        </div>  
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
         <BasicExample img={Services} user='Explore Services' des='Discover reliable professional for your needs' link='/regCustomer' />
         <BasicExample img={Appointment} user='Your Appointment' des='View and manage your upcoming appointment' link='/regCustomer' />
         <BasicExample img={Profile} user='Profile' des='Manage your profile information and preference' link='/regCustomer' />
      </div>
  )
}

const Container = () =>{
  const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: '#212515',
      overflow: 'auto',
      height: '100vh'
  }
  return(
      <>
        <div className='container-fluid p-5 pt-5' style={style}>
          <CardCont />
        </div>
      </>
  )
}

const Home = () => {
  return (
    <>
      <MyNav />
      <Container />
    </>
  )
}
export default Home