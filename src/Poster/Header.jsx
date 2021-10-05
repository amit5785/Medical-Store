import React from 'react'
import {Image} from 'react-bootstrap'
import headerlogo from './header3.png'
import './Header.css'
const Header=()=>{
  return (
    <>
        <Image src={headerlogo}  className='img-responsive' ></Image>
    </>
  );
}

export default Header