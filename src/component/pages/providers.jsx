import React, { useEffect, useState } from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import MyNav from '../navbar';
import Avater from './svg/avater.png';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const SearchResult = () => {
  const [providersData, setProvidersData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('ProvidersDetails'));
    if (storedData) {
      console.log(storedData);
      setProvidersData(storedData);
    }
  }, []);

  return (
    <Container fluid style={{ marginTop: '0rem' }} className='p-3'>
      {Array.isArray(providersData) && providersData.length > 0 ? (
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
                      <Card.Text style={{ color: '#f9f9f9' }}>We provide our customers with the best services</Card.Text>
                      <Card.Text><FaMapMarkerAlt color='white' size={15} />{provider.local_area}, {provider.local_address}</Card.Text>
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
                      <Button style={{ backgroundColor: '#1eee3a', color: '#212515', fontWeight: 'bold' }}>Preview</Button>
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