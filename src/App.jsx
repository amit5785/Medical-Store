import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import NavbarTop from './NavbarTop'
import Buttomdiv from './Buttomdiv';
import Home from './Home';
import {Switch,Route} from 'react-router-dom'
import Drpks from './Doctors/Drpks'
import Sks from './Doctors/Sks'
const App =() =>{
  return (
    <>
    <Container fluid style={{overflowX:'-moz-hidden-unscrollable'}}>
      <NavbarTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/prashant-kumar-shukla' component={Drpks} />
        <Route  path='/sushant-kumar-shukla' component={Sks} />
      </Switch>
      </Container>
      <Buttomdiv />
    </>
  );

}  
export default App