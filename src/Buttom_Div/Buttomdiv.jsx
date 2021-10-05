import React from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import medicalstoresign from './image.png'
import {IoLogoTwitter} from 'react-icons/io'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaLandmark} from 'react-icons/fa'
import './Buttomdiv.css'
const Buttomdiv=()=>{
  return (
   <>
  <div id='my-button-div'>
  <Card className="bg-dark text-primary  mt-2 " style={{width:'100%'}}>
  <Card.Img src={medicalstoresign} alt="Card image"   style={{height:'30vh' ,width:'30vw',margin:'25vh 25vw',opacity:'0.2'}} className='rounded-circle '/>
  <Card.ImgOverlay >
    <Row>
      <Col lg={4} md={4} sm={4} xs={12} className='text-center mt-4'>
        <h1 style={{fontFamily:'yellowtail',color:'wheat'}}>Contact Our Expert Chemist</h1>
        <p>
         Name: Shusant kumar shukla<br/>
          Contact No : 8084080548,
          7209951080<br />
          Email : shuklamedical@gmail.com<br />
          Website : shuklamedical.web.app
        </p>
      </Col>
      <Col lg={4} md={4} sm={4} xs={12} className='text-center mt-4'>
      <h1 style={{fontFamily:'yellowtail',color:'wheat'}}>Why People Choose Us</h1>
        <p>
          24x7 medicalsupport staff Available<br/>
          Healthy Environment at Clinik <br />
          Availability Of Phytology <br />
          Door to Door Vaccination <br />
          Best Suggestions
        </p>
      </Col>
      <Col lg={4} md={4} sm={4} xs={12} className='text-center mt-4 '>
      <h1 style={{fontFamily:'yellowtail',color:'wheat'}}>We are also Available At </h1>
        <p>
          <FaFacebookSquare /> Shukla Medical Store <br />
          <IoLogoTwitter /> Tweet <br/>

        </p>
      </Col>
    </Row>
    <Row className='justify-content-center text-center mt-5 ' >
      <h1 >OUR COMPLETE ADRESS 👍</h1>
      <p>
        <span className='shopname'>Shukla Health Chikitsalay,Bhorey<br/></span>
        Vijaypur Road,Wireless More,Bhorey,Gopalganj-841426<br />
        LandMark <FaLandmark /> JRM GAS AGENCY OFFICE BHOREY
        
      </p>
    </Row>
  </Card.ImgOverlay>
</Card>
</div>
    </>
  );
}

export default Buttomdiv