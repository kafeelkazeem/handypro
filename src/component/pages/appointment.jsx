import React from 'react'
import MyNav from '../navbar'

const Container = () =>{
  const style = { 
      backgroundColor: '#212515',
      overflow: 'auto',
      height: '100vh'
  }
  return(
      <>
        <div className='container-fluid p-5 pt-5' style={style}>
          <h1 style={{color: '#fff', fontSize: '2rem'}}>About Us</h1>
          <p style={{color: '#fff', fontSize: '1.3rem'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eaque enim soluta officia. Sint nemo ipsam corrupti, quisquam beatae minima, dicta, expedita tenetur quis consequuntur sapiente voluptatum omnis veniam nesciunt!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eaque enim soluta officia. Sint nemo ipsam corrupti, quisquam beatae minima, dicta, expedita tenetur quis consequuntur sapiente voluptatum omnis veniam nesciunt!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eaque enim soluta officia. Sint nemo ipsam corrupti, quisquam beatae minima, dicta, expedita tenetur quis consequuntur sapiente voluptatum omnis veniam nesciunt!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eaque enim soluta officia. Sint nemo ipsam corrupti, quisquam beatae minima, dicta, expedita tenetur quis consequuntur sapiente voluptatum omnis veniam nesciunt!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eaque enim soluta officia. Sint nemo ipsam corrupti, quisquam beatae minima, dicta, expedita tenetur quis consequuntur sapiente voluptatum omnis veniam nesciunt!
          </p>
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