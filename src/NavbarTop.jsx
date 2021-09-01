import React from 'react'
import {Container, Nav, Navbar,NavDropdown,DropdownButton} from 'react-bootstrap'
import logoimg from './logon.png'
import './NavbarTop.css'

const NavbarTop =()=>{
  return (
    <>
      <Navbar variant='dark' bg='dark' expand="md" style={{height:'max-content'}}>
      <Container fluid style={{margin:'0',padding:'0'}} >
        <Navbar.Brand href='#' className='brandname'>
          <img src={logoimg} alt='S' />
          <span>hukla Health Chikitasalay</span>
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls='#nav-bar-collapse' className='togglebutton'></Navbar.Toggle>
        <Navbar.Collapse id='nav-bar-collapse' className='justify-content-lg-end justify-content-md-end justify-content-sm-end ' >
          <Nav >
           <Nav.Link href='#' >Home</Nav.Link>
            <NavDropdown drop='down' title='Doctores' className='btn-outline-secondary' >
              <NavDropdown.Item href="#1">Dr. RajNarayan Ray </NavDropdown.Item>
              <NavDropdown.Item href="#2">Dr. Prashant Kumar Shukla </NavDropdown.Item>
              <NavDropdown.Item href="#3">Dr. Ikbal Alfi </NavDropdown.Item>
            </NavDropdown>
           <Nav.Link href='#' >Home</Nav.Link>
           <Nav.Link href='#' >Home</Nav.Link>
           <Nav.Link href='#' >Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
} 

export default NavbarTop
