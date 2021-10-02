import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contentslider from './Contentslider';
import Header from './Header';
import DoctorsPhoto from './Doctorsphoto';
const Home =() =>{
  return (
    <>
      <Header />
      <Contentslider />
      <DoctorsPhoto />
    </>
  );

}  

export default Home;