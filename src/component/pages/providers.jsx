import React, { useEffect, useState } from 'react';
import { FaStar, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import MyNav from '../navbar';
import Avater from './svg/avater.png';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const Popup = ({ show, handleClose, data }) => {
  if (!data) return null; // Check if data is available

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header style={{backgroundColor: '#1eee3a'}} closeButton>
        <Modal.Title style={{color: '#212515', fontWeight: 'bold'}}>{data.business_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor: '#212515'}}>
        <img src={Avater} alt="Thumbnail" style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }} />
        <p style={{color: '#fff'}}>{data.description}</p>
        <p style={{color: '#fff'}}>
          <FaMapMarkerAlt color='white' size={15} /> {data.local_area}, {data.local_address}
        </p>
        <p>
          {[...Array(5)].map((star, index) => (
            <FaStar
              key={index}
              className="star"
              color={index < 3 ? '#ffc107' : '#e4e5e9'}
              readOnly
              size={15}
            />
          ))}
        </p>
        <Button variant="primary" onClick={() => window.location.href = `tel:${data.phone}`}><FaPhone /> Call</Button>
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

  return (
    <Container fluid style={{ marginTop: '0rem' }} className='p-3'>
      {Array.isArray(providersData) && providersData.length > 1 ? (
        providersData.map(provider => (
          <Row key={provider.id} className='pt-3'>
            <Col>
              <Card style={{ width: '100%', backgroundColor: '#050a03' }}>
                <Row noGutters className="align-items-start">
                  <Col md={4} className="p-4 d-flex justify-content-start">
                    <Card.Img src={Avater} style={{ width: '10rem', height: '10rem' }} alt="Thumbnail" />
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
                          color={index < 3 ? '#ffc107' : '#e4e5e9'}
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
        <div>No data available</div>
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