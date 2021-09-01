import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap';
import doctor1 from './Doctors/Screenshot (485).png'
import doctor2 from './Doctors/Screenshot (486).png'

const DoctorsPhoto=()=>{
  return(
    <>
    
      <Row className='mt-3' thumbnail style={{overflowX:'hidden'}}>
        <Col lg={3} md={3} sm={3} xs={12} style={{display:'flex',justifyContent:'center'}} className='mt-2'>
          <Image src={doctor1} rounded height='170vh' width='150vw'></Image>
        </Col>
        <Col lg={3} md={3} sm={3} xs={12} style={{display:'flex',justifyContent:'center'}} className='mt-2'>
        <Image src={doctor2} rounded height='170vh' width='150vw'></Image>
        </Col>
        <Col lg={3} md={3} sm={3} xs={12} style={{display:'flex',justifyContent:'center'}} className='mt-2'>
        <Image src={doctor1} rounded height='170vh' width='150vw'></Image>
        </Col>
        <Col lg={3} md={3} sm={3} xs={12} style={{display:'flex',justifyContent:'center'}} className='mt-2'>
        <Image src={doctor2} rounded height='170vh' width='150vw'></Image>
        </Col>
      </Row>
    
    </>
  );
}

export default DoctorsPhoto