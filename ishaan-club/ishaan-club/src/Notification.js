import React from 'react';
import {Link} from "react-router-dom";
import "./Notification.css";

function Notification() {
  return (
    <div className='allow-notification'>
        <h1> Last important step!</h1>
        <h1> Enable notification to know when people start talking</h1>
        <div className='notification-container'>
        <h2>clubhouse! Would like to send you notification</h2>
        <h3> Notification may include alerts , sounds and icon badges</h3>
<div className='A1'>
        <Link exact to="/home" className='A11'>
            Don't Allow
        </Link>
        <Link exact to="/home" className='A12'>
            Allow
        </Link>
        </div>
        <img src='hand.jpg' alt='hand' className='hand'/>
</div>

    </div>
  )
}

export default Notification;