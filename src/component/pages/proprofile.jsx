import React, { useState } from 'react';
import MyNav2 from '../pronavbar'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import Avater from './svg/avater.png'
import { FaCamera } from 'react-icons/fa';
import axios from 'axios';

const Cont1 = () => {
  const storedVar = JSON.parse(localStorage.getItem('ProUserDetails'))
  const [Bname, setName] = useState(storedVar.Bname);
  const [Bcat, setCat] = useState(storedVar.Bcat);
  const [email, setEmail] = useState(storedVar.eml);
  const [area, setArea] = useState(storedVar.area);
  const [address, setAddress] = useState(storedVar.address);
  const [Pnumber, setNumber] = useState(storedVar.num);
  const [profileImage, setProfileImage] = useState(localStorage.getItem(email) || Avater); // Initial image set to Rick
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
    // You can add logic here to save the updated profile information to your backend or state.
    const url = 'http://localhost/handypro/proprofile.php'
    let fData = new FormData()
    fData.append('Bname', Bname)
    fData.append('Bcat', Bcat)
    fData.append('email', email)
    fData.append('num', Pnumber)
    fData.append('area', area)
    fData.append('address', address)
    fData.append('profileImage', profileImage);
    axios.post(url, fData)
    .then(res =>{
      if(res.data){
        alert('successful')
      }
    }    
   )
  .catch(error=>alert(error))
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem(email, reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <Image
              src={profileImage}
              style={{ width: '13rem', height: '13rem', border: '1px solid #1eee3a' }}
              roundedCircle
              fluid
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              id="profileImageInput"
            />
            <label htmlFor="profileImageInput">
              <FaCamera
                style={{
                  position: 'absolute',
                  bottom: '5px',
                  right: '15px',
                  fontSize: '1.9rem',
                  color: 'white',
                  cursor: 'pointer',
                  backgroundColor: 'black',
                  padding: '5px',
                  borderRadius: '50%',
                }}
                size={30}
              />
            </label>
          </div>
        </Col>
        <Col xs={12} md={8}>
c          <h2 className="text-center text-white text-md-left">Profile Information</h2>
          <Form>
            <Form.Group controlId="Bname">
              <Form.Label className='text-white'>Business Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Business Name"
                value={Bname}
                onChange={(e) => setName(e.target.value)}
                readOnly={!editable}
                style={{ backgroundColor: '#050a03', color: 'white', border: '1px solid #1eee3a' }}
              />
            </Form.Group>

            <Form.Group contr olId="Bname">
              <Form.Label className='text-white'>Business Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Business Name"
                value= {Bcat}
                onChange={(e) => setCat(e.target.value)}
                readOnly={true}
                style={{ backgroundColor: '#050a03', color: 'white', border: '1px solid #1eee3a' }}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className='text-white'>Email</Form.Label>
              <Form.Control 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!editable}
                style={{ backgroundColor: '#050a03', color: 'white', border: '1px solid #1eee3a' }}
              />
            </Form.Group>

            <Form.Group controlId="Phone">
              <Form.Label className='text-white'>Phone</Form.Label>
              <Form.Control 
                type="number"
                placeholder="Enter your phone number"
                value={Pnumber}
                onChange={(e) => setNumber(e.target.value)}
                readOnly={!editable}
                style={{ backgroundColor: '#050a03', color: 'white', border: '1px solid #1eee3a' }}
              />
            </Form.Group>

            <Form.Group controlId="formArea">
              <Form.Label className='text-white'>Area</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter your area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                readOnly={!editable}
                style={{ backgroundColor: '#050a03', color: 'white', border: '1px solid #1eee3a' }}
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label className='text-white'>Address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                readOnly={!editable}
                style={{ backgroundColor: '#050a03', color: 'white', border: '1px solid #1eee3a' }}
              />
            </Form.Group>

            {!editable ? (
              <Button style={{backgroundColor: '#1eee3a', color: '#050a03'}} className="my-1" block onClick={handleEdit}>
                Edit Profile
              </Button>
            ) : (
              <>
                <Button variant="success" block onClick={handleSave} className="my-1 mx-2">
                  Save
                </Button>
                <Button variant="secondary" className='my-1 mx-2' block onClick={() => setEditable(false)}>
                  Cancel
                </Button>
              </>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const Cont = () =>{
  const style = {
      backgroundColor: '#212515',
      overflow: 'auto',
      height: '100vh'
  }
  return(
      <>
        <div className='container-fluid' style={style}>
          <Cont1 />
        </div>
      </>
  )
}

const Proprofile = () => {
  return (
    <>
      <MyNav2 />
      <Cont />
    </>
  )
}

export default Proprofile;