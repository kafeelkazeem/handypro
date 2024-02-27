import React, { useEffect, useState } from 'react';
import { FaStar, FaPhone, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import MyNav from '../navbar';
import Avater from './svg/avater.png';
import Placeholder from './svg/placeholder.png';
import Image1 from './svg/image1.jpg'
import { Container, Row, Col, Card, Button, Modal, Carousel } from 'react-bootstrap';

const Popup = ({ show, handleClose, data }) => {
  const [rating, setRating] = useState(0);

  if (!data) return null; // Check if data is available

  const handleStarClick = (index) => {
    setRating(index + 1);
    let r = index + 1;
    const url = 'http://localhost/handypro/rating.php'
      let fData = new FormData()
      fData.append('rating', r)
      fData.append('email', data.email)
      axios.post(url, fData)
      .then(res =>{
          
       }    
       )
      .catch(error=>alert(error))
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: '#1eee3a' }}>
        <Modal.Title style={{ color: '#212515', fontWeight: 'bold' }}>{data.business_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#212515', color: '#fff' }}>
        <Carousel style={{height: '280px'}}>
          <Carousel.Item>
            <img src={Placeholder} style={{height: '280px'}} className="d-block w-100 h-40" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Image1} style={{height: '280px'}} className="d-block w-100 h-40" alt="Second slide" />
          </Carousel.Item>
        </Carousel>
        <div className="mt-3">
          <label style={{ fontWeight: 'bold' }}>Rate: </label>
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className="star"
              color={index < rating ? '#ffc107' : '#e4e5e9'}
              size={25}
              onClick={() => handleStarClick(index)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
        <div className="mt-3">
          <Button variant="primary" className="me-3" onClick={() => window.location.href = `tel:${data.phone}`}>Call <FaPhone /></Button>
          <Button variant="success" className="me-3" onClick={() => window.location.href = `https://wa.me/${data.whatsapp}`}><FaWhatsapp /> WhatsApp</Button>
          <Button variant="info" className="me-3" href={`mailto:${data.email}`}><FaEnvelope /> Email</Button>
          <Button variant="danger" className="me-3" href={data.instagram}><FaInstagram /> Instagram</Button>
          <Button variant="primary" className="me-3 mt-3" href={data.facebook}><FaFacebook /> Facebook</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const SearchResult = () => {
  const [providersData, setProvidersData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('ProvidersDetails'));
    if (storedData) {
      setProvidersData(storedData);
    }
  }, []);

  const handlePreview = (provider) => {
    setSelectedProvider(provider);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleImageChange = (e) => {
     return localStorage.getItem(e) || Avater 
  };

  return (
    <Container fluid style={{ marginTop: '0rem' }} className='p-3'>
      {Array.isArray(providersData) && providersData.length > 0 ? (
        providersData.map(provider => (
          <Row key={provider.id} className='pt-3'>
            <Col>
              <Card style={{ width: '100%', backgroundColor: '#050a03' }}>
                <Row noGutters className="align-items-start">
                  <Col md={4} className="p-4 d-flex justify-content-start">
                    <Card.Img src={handleImageChange(provider.email)} style={{ width: '10rem', height: '10rem' }} alt="Thumbnail" />
                  </Col>
                  <Col md={8} className='p-2'>
                    <Card.Body style={{ marginLeft: '-3rem' }}>
                      <Card.Title style={{ color: '#fff', fontWeight: 'bold' }}>{provider.business_name}</Card.Title>
                      <Card.Text style={{ color: '#f9f9f9' }}>{provider.description}</Card.Text>
                      <Card.Text><FaMapMarkerAlt color='white' size={15} /> {provider.local_area}, {provider.local_address}</Card.Text>
                      <Card.Text>
                      {[...Array(5)].map((star, index) => (
                        <FaStar
                          key={index}
                          className="star"
                          color={index < provider.rating ? '#ffc107' : '#e4e5e9'}
                          readOnly
                          size={25}
                        />
                      ))}
                    </Card.Text>
                      <Button style={{ backgroundColor: '#1eee3a', color: '#212515', fontWeight: 'bold' }} onClick={() => handlePreview(provider)}>Preview</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        ))
      ) : (
        <div style={{color: 'white', fontSize: '1.5rem'}}>Sorry the service provider you request are not in your area</div>
      )}
      <Popup show={showPopup} handleClose={handleClosePopup} data={selectedProvider} />
    </Container>
  );
};

const Providers = () => {
  return (
    <div style={{ backgroundColor: '#212515'}}>
      <MyNav />
      <SearchResult />
    </div>
  );
};

export default Providers;