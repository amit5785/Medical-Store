import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
const Test=()=>{
  return (
    <>
    <Container>
      <Row>
        <Col lg={4}><h1>Amit Kumar Singh</h1></Col>
        <Col lg={4}><h1>Amit Kumar Singh</h1></Col>
        <Col lg={4}><h1>Amit Kumar Singh</h1></Col>
      </Row>
      <br />
      <Row>
        <Col md={4} lg={4}><h1>Amit Kumar Singh</h1></Col>
        <Col md={4} lg={4}><h1>Amit Kumar Singh</h1></Col>
        <Col md={4} lg={4}><h1>Amit Kumar Singh</h1></Col>
      </Row>
      <br />
      <Row>
        <Col sm={4} lg={4} md={4} xs={4}><h1>Amit Kumar Singh</h1></Col>
        <Col sm={4} lg={4} md={4} xs={4}><h1>Amit Kumar Singh</h1></Col>
        <Col sm={4} lg={4} md={4} xs={4}><h1>Amit Kumar Singh</h1></Col>
      </Row>
    </Container>
    </>
  );
}

export default Test