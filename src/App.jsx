import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col,Row } from 'react-bootstrap';
import NavbarTop from './NavbarTop'
import Contentslider from './Contentslider';
import Header from './Header';
import DoctorsPhoto from './Doctorsphoto';
import Buttomdiv from './Buttomdiv';

const App =() =>{
  return (
    <>
    <Container fluid style={{overflowX:'-moz-hidden-unscrollable'}}>
      <NavbarTop />
      <Header />
      <Contentslider />
      <DoctorsPhoto />
      </Container>
      <Buttomdiv />
    </>
  );

}  
export default App