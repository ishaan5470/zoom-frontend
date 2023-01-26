import React from 'react'; 
import {useState} from 'react';
import PublicIcon from '@mui/icons-material/Public';
import './StartRoom.css';

function StartRoom(props) {
    const[room,setRoom]=useState("social");
  return (
    <div className='startroom'>
      <div className='switch-line'> </div>
        <button className='topic-btn' >
           + Add a topic
        </button>
        <div className='buttons'>
        <button className='open' 
        onClick={()=>{
          setRoom('open')
        }}>
          <PublicIcon className='open-1'/>
           <span>open</span>

        </button>
        <button className='social' onClick={()=>{
          setRoom("social")
        }}>
           <PublicIcon className='social-1'/> 
          <span> social </span> 

        </button>
        <button className='closed' onClick={()=>{
          setRoom('closed')
        }}>
          <PublicIcon className='closed-1'/> <span>closed</span>
        </button>
        </div>
        <div className='switch-line2'></div>
        <p className='para'>Start a room {" "} <span> {room=='closed' ? " for the people i choose " : room=='social' ? " for the people i follow "  : "open to everyone"}</span></p>
<div className='letgo'>
  <button className='letgobtn' onClick={()=>{
    props.setSheetCreateRoom(true);
    props.setSheetVisible(true)
  }}>
    🎉Let's go 
    
  </button>
</div>



        
    </div>
  )
}

export default StartRoom;