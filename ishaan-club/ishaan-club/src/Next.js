import React from 'react';
import './Next.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useHistory} from "react";
function Next(backbtn) {
  
  return (
    <div className='otp'>
        <h1 style={{width:'80%', maxWidth:'500px'}}>Enter the code we have sent you </h1>
        <input className="input" type="text"/>
        <p>Didnt recieve it? Tap to resend</p>
        <Link  className="notification" exact to="/notification" >
            Next <ArrowForwardIcon/>
        </Link>
        
        
        
        
    </div>
  )
}

export default Next;