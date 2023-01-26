import React from 'react';
import {useState} from "react";
import "./PhoneConfirm.css";
import {Link} from "react-router-dom";
import PhoneInput from "react-phone-number-input"; /*npm install react-phone-number-input
*/
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon, IconButton } from "@mui/material";
import {useHistory} from "react-router-dom";


function PhoneConfirm(backButton) {
    const history=useHistory();
  return (

    <div>
    
    <div className='phone-confirm'>
        
           
            
    
        <h1> Enter your phone # </h1>
        <PhoneInput  defaultCountry='US'/>
        <p> By entering your number , you are agreeing to our <b1> Terms of service and privacy policy. </b1> Thanks!</p>
        <Link to="/next" className="next">
            Next
        </Link>
    </div>
</div>
  )
}

export default PhoneConfirm