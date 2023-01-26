import React from 'react'
import "./Welcome.css"; 
/*npm install @mui/material @emotion/react @emotion/styled*/
import { Icon, IconButton } from "@mui/material"; 
import {Link} from "react-router-dom";





function Welcome() {
  return (
    <div className='welcome'>
        <h2 > Welcome!</h2> 
       <div className='welcome_info'>
        <p>
        We are getting ready the clubhouse for you after some following steps needed.
        please adding some blabla
        blablab
        blablabla
        blabla </p>
<p>
        Regards 
        Ishaan Saraswat
        </p>
        

       </div>
       <div className='welcome_username'>
        <Link to="/phoneconfirm" className='username'>
        
            Get your username 

            .
        

        </Link>


        <Link to="/sign-in" className='invite_link'>
        Have an invite text? Sign in 
        </Link>
      
       </div>
        </div>
  )
}

export default Welcome