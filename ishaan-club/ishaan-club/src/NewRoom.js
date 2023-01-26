import React, { useState } from 'react'
import "./NewRoom.css";
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {Avatar} from '@mui/material';
import Data from "./Member.json"; 
import { useHistory } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import PanToolIcon from '@mui/icons-material/PanTool';


function NewRoom(props) {
    const[micMute,setMicMute]=useState(true)
    const[itemVisible,setItemVisible]=useState(true)
    const history=useHistory();
    function handleClick(){
        setMicMute(!micMute);
    }
  return (
    <div className='newroom'>
  
        <KeyboardArrowDownIcon className="arrow-down"/> 
        <span> Hallway</span>
        <InsertDriveFileIcon className='file'/>
        
        <Avatar src="IshaanSaraswat2.jpg" className='profile'/>
        <div className='speaker-panel'>
            {Data.members.map((item)=>(
                <div className='speaker-speak'>
                    {micMute ? (
                        <MicOffIcon className='mic-off'/>
                    ): (
                        " "
                    )}
                    <div className="members1234">
                    <p> <span>
                        <img src={item.url} className="speakers"/>
                        
                        {item.star}  
                        {item.first_name}
                        {item.last_name}
                        </span>
                    </p>
                    </div>
                    
                    
                    
                    </div>
                    
            ))}
            
        </div>
        <div className='footer-elements'>
        <button onClick={()=>{
            props.setSheetVisible(false);
            props.setItemvisible(false);
        }} className="leave">
            ✌️ <span>Leave Quietly </span>
        </button>
        <button>
        <AddIcon className='add'/></button>
        <button>

       
        <PanToolIcon className='pan'/></button>
        <button onClick={handleClick}>
            <MicIcon className="mic-on"/>
        </button>
       
</div>

         

 

    
        
       
        






    </div>
  )
}

export default NewRoom