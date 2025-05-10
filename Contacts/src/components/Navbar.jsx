import React from 'react';
import { Link } from 'react-router-dom';
import homeicon from '../images/homeicon.png'

const Navbar = () => {
  return (
     <nav className='navbar'>
         <p className='header'>Contacts</p>
         <div className='button-div'>
          <Link to="/" ><img className='homeicon' style={{width:30,marginTop:15}} src={homeicon} /> </Link>
           <Link to="/add">
           <button className='addbtn'>Create Contact</button>
           </Link>
           <Link to="allcontacts">
           <button className='addbtn'>All Contacts</button>
           </Link>
       </div>
     </nav>
  );
};

export default Navbar;
