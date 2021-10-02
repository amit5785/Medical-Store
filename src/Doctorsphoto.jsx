import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap';
import doctor1 from './Doctors/dr.pks1.png'
import doctor2 from './Doctors/dr.pks2.png'
import doctor3 from './Doctors/sks1.png'
import {Link} from 'react-router-dom'

const DoctorsPhoto=()=>{
  return(
    <>
    
      <Row className='mt-3' thumbnail style={{overflowX:'hidden'}}>
        <Col lg={3} md={3} sm={3} xs={12} style={{display:'flex',justifyContent:'center'}} className='mt-2'>
        <Link to='/prashant-kumar-shukla'>
          <Image src={doctor1} rounded height='170vh' width='150vw'></Image>
        </Link>
        </Col>
        <Col lg={3} md={3} sm={3} xs={12} style={{display:'flex',justifyContent:'center'}} className='mt-2 ' >
        <Link to='/prashant-kumar-shukla'>
        <Image src={doctor2} rounded height='170vh' width='150vw'></Image>
        </Link>
        </Col>
        <Col lg={3} md={3} sm={3} xs={12} style={{display:'flex',justifyContent:'center'}} className='mt-2'>
        <Link to='/sushant-kumar-shukla'>
        <Image src={doctor3} rounded height='170vh' width='150vw'></Image>
        </Link>
        </Col>
        <Col lg={3} md={3} sm={3} xs={12} style={{display:'flex',justifyContent:'center'}} className='mt-2'>
        <Link to='/prashant-kumar-shukla'>
        <Image src={doctor1} rounded height='170vh' width='150vw'></Image>
        </Link>
        </Col>
      </Row>
      
    </>
  );
}

export default DoctorsPhoto