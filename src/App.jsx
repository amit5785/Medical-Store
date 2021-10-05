import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import NavbarTop from './Navbar/NavbarTop'
import Buttomdiv from './Buttom_Div/Buttomdiv';
import Home from './Home';
import {Switch,Route} from 'react-router-dom'
import Drpks from './Doctors/Drpks'
import Sks from './Chemist/Sks'
import Drraj_naray_ray from './Doctors/Drraj_naray_ray';
import Drikbal_Alafi from './Doctors/DrIkbal_Alafi';
import Director from './Director/Director';

const App =() =>{
  return (
    <>
    <Container fluid style={{overflowX:'-moz-hidden-unscrollable'}}>
      <NavbarTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/prashant-kumar-shukla' component={Drpks} />
        <Route  path='/sushant-kumar-shukla' component={Sks} />
        <Route  path='/raj-narayan-ray' component={Drraj_naray_ray} />
        <Route  path='/ikbal_alafi' component={Drikbal_Alafi} />
        <Route  path='/director' component={Director} />
      </Switch>
      </Container>
      <Buttomdiv />
    </>
  );

}  
export default App