import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contentslider from './Slider/Contentslider';
import Header from './Poster/Header';
import DoctorsPhoto from './Doctor_picture_on_main_page/Doctorsphoto';
import Chemistphotos from './Chemist/Chemistphotos';
const Home =() =>{
  return (
    <>
      <Header />
      <Contentslider />
      <DoctorsPhoto />
      <Chemistphotos />
    </>
  );

}  

export default Home;