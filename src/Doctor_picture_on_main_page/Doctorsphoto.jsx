import React from 'react'
import {Row,Col} from 'react-bootstrap';
import doctor1 from '../Doctors/dr.pks1.png'
import doctor2 from '../Doctors/dr.pks2.png'
import Doctorpic from './Doctorpic';
import './doctorphoto.css'
const DoctorsPhoto=()=>{
  return(
    <>
      <div className='doctor-title'>
        <h2 >Doctors</h2>
      </div>
      <Row className='mt-1 doctor-row'>
        <Col lg={8} md={8} sm={8} xs={12}  className='mt-2 center'>
        <Doctorpic image={doctor2} name="Dr. Prashant Kumar Shukla" degree="B.M.A.S" url="/prashant-kumar-shukla"/>
        </Col>
      </Row>
      <Row className='mb-1 doctor-row'>
      <Col lg={4} md={4} sm={4} xs={12}   className='mt-2'>
      <Doctorpic image={doctor1} name="Dr. Prashant Kumar Shukla" degree="B.M.A.S" url="/prashant-kumar-shukla"/>
      </Col>
      <Col lg={4} md={4} sm={4} xs={12}   className='mt-2'>
      <Doctorpic image={doctor2} name="Dr. Prashant Kumar Shukla" degree="B.M.A.S" url="/prashant-kumar-shukla"/>
      </Col>
      <Col lg={4} md={4} sm={4} xs={12}   className='mt-2'>
      <Doctorpic image={doctor1} name="Dr. Prashant Kumar Shukla" degree="B.M.A.S" url="/prashant-kumar-shukla"/>
      </Col>
      </Row> 
    </>
  );
}

export default DoctorsPhoto