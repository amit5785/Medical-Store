import React from 'react'
import {Carousel} from 'react-bootstrap'
import img1 from './img-1.jpg'
import img2 from './img-2.jpg'
import './Contentslider.css'
import doctor1 from './Doctors/dr.pks1.png'
import doctor2 from './Doctors/dr.pks2.png'
import doctor3 from './Doctors/sks1.png'
const Contentslider=()=>{
  return (
    <>

<Carousel className="slider-body" variant="dark">
  <Carousel.Item className="slider-content-block">
    <img
      className="slider-image"
      src={doctor1}
      alt="First slide"
    />
    <Carousel.Caption className='slider-caption' >
      <h3>Dr. Prashant Kumar Shukla</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider-content-block">
    <img
      className="slider-image"
      src={doctor3}
      alt="Second slide"
    />

    <Carousel.Caption  className='slider-caption' >
      <h3>Sushant Kumar Shukla</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider-content-block">
    <img
      className="slider-image"
      src={doctor2}
      alt="Third slide"
    />

    <Carousel.Caption  className='slider-caption' >
      <h3>Dr. Prashant kumar shukla</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</>
);
}

export default Contentslider