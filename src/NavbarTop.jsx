import React from 'react'
import {Container, Nav, Navbar,NavDropdown} from 'react-bootstrap'
import logoimg from './logon.png'
import './NavbarTop.css'
import {Link} from 'react-router-dom'
const NavbarTop =()=>{
  return (
    <>
      <Navbar variant='dark' bg='dark' expand="md" style={{height:'max-content'}}>
      <Container fluid style={{margin:'0',padding:'0'}} >
        <Navbar.Brand >
         <Link to='/' className='brandname'>
          <img src={logoimg} alt='S' />
          <span>hukla Health Chikitasalay</span>
          </Link>
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls='#nav-bar-collapse' className='togglebutton'></Navbar.Toggle>
        <Navbar.Collapse id='nav-bar-collapse' className='justify-content-lg-end justify-content-md-end justify-content-sm-end ' >
          <Nav >
           <Link  to='/' className='nav-link'>Home</Link>
           <Link className='nav-link' to='/' >About Us</Link >
            <NavDropdown drop='down' title='Doctores' >
              <NavDropdown.Item href="#1">Dr. RajNarayan Ray </NavDropdown.Item>
              <NavDropdown.Item ><Link to='/prashant-kumar-shukla' style={{textDecoration:'none',color:'black'}}>Dr. Prashant Kumar Shukla </Link></NavDropdown.Item>
              <NavDropdown.Item href="#3">Dr. Ikbal Alfi </NavDropdown.Item>
            </NavDropdown>
           <Link className='nav-link' to='/sushant-kumar-shukla' >Chemist</Link >
           <Link className='nav-link' href='#' >Contact Us</Link >
           <Link className='nav-link' href='#' >Developer</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
} 

export default NavbarTop
