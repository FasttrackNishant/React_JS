import React from 'react';
import userlogo from '../images/Google_Contacts_icon.svg.png'
import deletelogo from '../images/delete.png'
import call from '../images/call.png'
const ContactSingle = (props) => {

  const {id, name, mobile} = props.contact;
  return (
    <div className='contact-single'>
      <div className='logos'>
     <a href={`tel:${mobile}`}> <img src={call} alt='call' style={{width:45}}></img></a>
      <img src={userlogo} alt="user" style={{width:45}}></img>
      </div>
      <div className='contact-main'>
    <h3 className='header'>{name}</h3>
    <p className='header'>{mobile}</p>
    </div>
    <img src={deletelogo} className='deletelogo' onClick={() => props.clickHandler(id)}></img>
    
    </div>
  )
};

export default ContactSingle;
