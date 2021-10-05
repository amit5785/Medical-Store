import React from 'react'
import {Row,Col} from 'react-bootstrap';
import doctor3 from './sks1.png'
import Doctorpic from '../Doctor_picture_on_main_page/Doctorpic';
import './chemistphotos.css'
const Chemistphotos=()=>{
  return(
    <>
      <div className='chemist-title'>
        <h2 >Chemist</h2>
      </div>
      <Row className='mt-1 chemist-row'>
        <Col lg={8} md={8} sm={8} xs={12}  className='mt-2 center'>
        <Doctorpic image={doctor3} name="Sushant Kumar Shukla" degree="D-Pharma" url="/sushant-kumar-shukla"/>
        </Col>
      </Row>
    </>
  );
}

export default Chemistphotos