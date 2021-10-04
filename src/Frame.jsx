import React from 'react'
import './Frame.css'
import {Link} from 'react-router-dom'
const Frame=(props)=>{
  const m="mailto :"+props.email;
  return(
    <>
      <div className="doctors-info" >
        <div className='info-image'>
        <img src={props.image} />
        </div>
        <div className='info-data'>
        <h1>{props.name}</h1>
        <h3>{props.degree}</h3>
        <h4>{props.specialisation}</h4>
        </div>
        <div className='info-exp'>
        <h4><span>Exprience from : </span>{props.exprience}</h4>
        <h5><span>Practise at : </span>{props.practise}</h5>
        </div>
        <h4 style={{}}>Contacts : </h4>
        <div className='info-contact'>
        <h4><a href={m}>{props.email}</a></h4>
        <h4><a href="tel: {props.phone}"> {props.phone} </a></h4>
        </div>
      </div>
    </>
  );
}

export default Frame;