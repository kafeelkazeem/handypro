import React from 'react'
import MyNav from '../navbar'

const Cont = () =>{
  const style = {
     backgroundColor: 'rgba(0,0,0,0)'
  }
  return(
      <div style={style} className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
        <h1 className='text-white text-center' style={{fontSize:'4rem'}}>You have 0 appointment!</h1>  
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
          <Cont />
        </div>
      </>
  )
}

const Appointment = () => {
  return (
    <>
      <MyNav />
      <Container />
    </>
  )
}

export default Appointment