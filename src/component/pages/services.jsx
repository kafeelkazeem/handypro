import React from 'react'
import MyNav from '../navbar'
import { Link } from 'react-router-dom';
//import { BsSearch } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Aluminium from './svg/aluminium.svg'
import Architecture from './svg/architecture.svg'
import Barber from './svg/barber.svg'
import Capentry from './svg/capentry.svg'
import Catering from './svg/catering.svg'
import Cleaning from './svg/cleaning.svg'
import Electrician from './svg/electrician.svg'
import Food from './svg/food.svg'
import Engineer from './svg/engineer.svg'
import Hairdresser from './svg/hairdresser.svg'
import Laundry from './svg/laundry.svg'
import Makeup from './svg/makeup.svg'
import Massage from './svg/massage.svg'
import Mechanic from './svg/mechanic.svg'
import Painter from './svg/painter.svg'
import Plumbing from './svg/plumbing.svg'
import Tailor from './svg/tailor.svg'

const BasicExample = (props) => {
  const cardStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '1rem',
    backgroundColor: '#050a03',
  };

  const imgStyle = {
    width: '9rem',
    height: '7rem',
    display: 'block',
    margin: '0 auto',
    marginTop: '0.3rem',
  };

  const buttonStyle = {
    backgroundColor: '#1eee3a',
    color: '#212515',
    fontWeight: 'bold',
    fontSize: '1rem',
    border: '1px solid #03580e',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={props.img} style={imgStyle} />
      <Card.Body>
        <div className="d-grid gap-1">
          <Button size='sm' style={buttonStyle}>{props.user}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

//'#212515' '#050a03' '#1eee3a'

const category = [{
  comp : Plumbing ,
  des: 'Plumber'
},
{
   comp : Capentry,
   des  : 'Capenter'
},
{
  comp : Tailor ,
  des: 'Tailor'
},
{
   comp : Painter,
   des  : 'Painter'
},
{
  comp : Mechanic ,
  des: 'Auto Mechanic'
},
{
   comp : Makeup,
   des  : 'Makeup'
},
{
  comp : Hairdresser ,
  des: 'Hair Dresser'
},
{
   comp : Barber ,
   des  : 'Barber'
},
{
  comp : Electrician ,
  des: 'Electrician'
},
{
   comp : Catering,
   des  : 'Catering'
},
{
  comp : Cleaning ,
  des: 'Home Cleaning'
},
{
   comp : Laundry,
   des  : 'Laundry'
},
{
  comp : Massage ,
  des: 'Massage'
},
{
   comp : Food,
   des  : 'Food Delivery'
},
{
  comp : Architecture ,
  des: 'Architect'
},
{
   comp : Aluminium,
   des  : 'Aluminium'
},
{
  comp : Engineer ,
  des: 'Engineer'
},
]

const SecondCont = () => {
  const containerStyle = {
    marginTop: '1rem',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row row-cols-1 row-cols-md-3">
        {category.map((e, j) => (
          <div className="col mb-4" key={j}>
            <Link style={{textDecoration: 'none'}} to='/providers'><BasicExample img={e.comp} user={e.des} /></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const SearchBar = () => {
  const inputStyle = {
    fontSize: '1.2rem',
  };

  const buttonStyle = {
    borderRadius: '0',
    backgroundColor: '#1eee3a',
    color: '#212515',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    border: '1px solid #03580e',
  };

  return (
    <div className="input-group">
      <input
        style={inputStyle}
        type="text"
        className="form-control"
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="search-icon"
      />
      <div className="input-group-append">
        <button className='btn btn-success' style={buttonStyle}>
          Search
        </button>
      </div>
    </div>
  );
};

const FirstCont = () => {
  const containerStyle = {
    marginTop: '2rem',
  };

  const titleStyle = {
    fontSize: '2.6rem',
    fontWeight: 'bold',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-md-12">
          <p className='text-white text-center' style={titleStyle}>Explore Services</p>
        </div>
        <div className="col-md-12 d-flex justify-content-center align-items-center">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

const Container = () => {
  return (
    <div className='container-fluid' style={{ backgroundColor: '#212515', overflowY: 'auto', overflowX: 'hidden' }}>
      <FirstCont />
      <SecondCont />
    </div>
  );
}

const Services = () => {
  return (
    <>
      <MyNav />
      <Container />
    </>
  );
}

export default Services;