import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import MyNav2 from '../pronavbar';
import Img1 from './svg/image1.jpg'
import Img2 from './svg/image3.jpg'
import Img3 from './svg/bg.jpg'
import Avater from './svg/avater.png'

const DescriptionComponent = ({ description, onDescriptionChange, rating }) => {
    return (
      <Card style={{backgroundColor: '#050a03', borderColor: 'grey'}}>
        <Card.Body>
          <Card.Title className='text-white'>Description</Card.Title>
          <Form.Group controlId="descriptionForm">
            <Form.Control style={{backgroundColor: '#151a13', color: '#848a82'}} className='text-white'  as="textarea" rows={4} value={description} onChange={onDescriptionChange} />
          </Form.Group>
          <Card.Title className='text-white'>Average Customer Rating</Card.Title>
          <Card.Text>
            {[...Array(5)].map((star, index) => (
              <FaStar
                key={index}
                className="star"
                color={index < rating ? '#ffc107' : '#e4e5e9'}
                size={25}
              />
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  
  const ImagesComponent = ({ images, handleDeleteImage, handleAddImage }) => {
    return (
      <Card style={{backgroundColor: '#050a03', borderColor: 'grey'}}>
        <Card.Body>
          <Card.Title className='text-white'>Images</Card.Title>
          <Row>
            {images.map((image, index) => (
              <Col key={index} md={4} className="mb-3">
                <Image src={image} alt={`Image ${index + 1}`} fluid />
                <Button variant="danger" className='mt-2' onClick={() => handleDeleteImage(index)}>
                  Delete
                </Button>
              </Col>
            ))}
            <Col md={4} className="mb-3">
              <Button variant="success" onClick={handleAddImage}>
                Add Image
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };
  
  const ReviewsComponent = ({ reviews }) => {
    return (
      <Card style={{backgroundColor: '#050a03', borderColor: 'grey'}}>
        <Card.Body>
          <Card.Title className='text-white'>Customer Reviews</Card.Title>
          {reviews.map((review) => (
            <div key={review.id} className="mb-3">
              <Card style={{backgroundColor: '#151a13'}}>
                <Card.Body>
                  <div className="d-flex align-items-center mb-2">
                    <Image src={review.avatar} alt={`Avatar for ${review.userName}`} style={{width: '3rem', height: '3rem'}} roundedCircle className="mr-2" />
                    <span className='mx-3'style={{color: '#fff', fontWeight: 'bold'}}>{review.userName}</span>
                  </div>
                  <Card.Text className='text-white'>{review.text}</Card.Text>
                  <Card.Text>
                    {[...Array(5)].map((star, index) => (
                      <FaStar
                        key={index}
                        className="star"
                        color={index < review.rating ? '#ffc107' : '#e4e5e9'}
                        readOnly
                        size={25}
                      />
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Card.Body>
      </Card>
    );
  };
  
  const Content = () => {
    const [description, setDescription] = useState("Experienced professional offering quality services");
    const [rating, setRating] = useState(4); // Set the default rating to 4
    const [reviews, setReviews] = useState([
        { id: 1, text: 'Great service!', rating: 5, userName: 'John Doe', avatar: Avater },
        { id: 2, text: 'Timely and efficient.', rating: 4, userName: 'Jane Smith', avatar: Avater },
        { id: 3, text: 'Your service is horiible.', rating: 1, userName: 'Morty Smith', avatar: Avater },
        { id: 4, text: 'It is very affordable.', rating: 3, userName: 'Jerry Smith', avatar: Avater }
        // Add more reviews as needed
    ]);
  
    const [images, setImages] = useState([
      Img1,
      Img2,
      Img3,
      // Add more images as needed
    ]);
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleAddImage = () => {
      // Replace 'https://placekitten.com/203/203' with your actual image URL
      setImages([...images, Img1]);
    };
  
    const handleDeleteImage = (index) => {
      const updatedImages = [...images];
      updatedImages.splice(index, 1);
      setImages(updatedImages);
    };
  
    return (
      <Container className="mt-2">
        <Row className='mb-2'>
          <Col md={12}>
            <h1 className='text-white text-center' style={{fontSize: '3rem'}}>Rick Sanshez Tailoring Services</h1>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col md={12}>
            <DescriptionComponent
              description={description}
              onDescriptionChange={handleDescriptionChange}
              rating={rating}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col md={12}>
            <ImagesComponent
              images={images}
              handleDeleteImage={handleDeleteImage}
              handleAddImage={handleAddImage}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col md={12}>
            <ReviewsComponent reviews={reviews} />
          </Col>
        </Row>
      </Container>
    );
  };

const ServicePage = () => {
  return(
    <div style={{ backgroundColor: '#212515', color: '#ffffff' }}>
      <MyNav2 />
      <Content />
  </div>
  )
};

export default ServicePage; 
//'#212515' '#050a03' '#1eee3a'