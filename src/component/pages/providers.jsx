import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import MyNav2 from '../pronavbar';
import Rick from './svg/rick.jpg';

const PlumberList = () => {
  // Placeholder data for plumbers
  const plumbers = [
    {
      id: 1,
      profilePicture: Rick,
      companyName: 'ABC Plumbing',
      businessDescription: 'Experienced plumber providing quality services',
      starRating: 4.5,
    },
    {
        id: 2,
        profilePicture: Rick,
        companyName: 'ABC Plumbing',
        businessDescription: 'Experienced plumber providing quality services',
        starRating: 4.5,
      },
    // Add more plumbers as needed
  ];

  return (
    <>
      <Container fluid className="mt-4">
        {plumbers.map((plumber) => (
          <Row key={plumber.id} className="mb-3 p-3" style={{backgroundColor: '#050a03'}}>
            <Col md={3}>
              <img src={plumber.profilePicture} alt={`Profile for ${plumber.companyName}`} className="img-fluid" style={{width: '10rem', height: '10rem'}} />
            </Col>
            <Col md={9} className="d-flex flex-column justify-content-between" style={{backgrounColor: 'red'}}>
              <Card style={{backgrounColor: 'red'}}>
                <Card.Body style={{backgrounColor: '#050a03'}}>
                  <Card.Title className=''>{plumber.companyName}</Card.Title>
                  <Card.Text>
                   <div>
                      <FaStar className="star" color="#ffc107" size={18} />
                      {plumber.starRating.toFixed(1)}
                   </div>
                   <Button variant='primary'>View Profile</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};


const Providers = () => {
  return (
    <div style={{ backgroundColor: '#212515'}}>
      <MyNav2 />
      <PlumberList />
    </div>
  )
}
export default Providers