import React from "react";
import './doctorpic.css';
import {Link} from 'react-router-dom'
const Doctorpic=(props)=>{
  return(
  <>
    <div  id='doctorpic-container' >
      <div style={{zIndex:'-1',position:'absolute'}}>
        <img src={props.image} id='doctorpic-img'  />
      </div>
      <div id='doctorpic-caption' >
      <Link to={props.url} className='doctor-photo-link'>
        {props.name}<br/>
        {props.degree}
      </Link>
      </div>
    </div>
  </>
  );
}

export default Doctorpic;