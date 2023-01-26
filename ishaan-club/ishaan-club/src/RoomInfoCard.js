import React from 'react';
import './RoomInfoCard.css';
import data from "./RoomCard.json";
import SmsIcon from '@mui/icons-material/Sms';
import PersonIcon from '@mui/icons-material/Person';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function RoomInfoCard() {
   return (
    <div>
        {/* you can use data.map((info)=>JSON.stringify(item))
         to flash all the json file on the screen*/}
        {data.map((info)=>{
            return( 
                <div className='infocard'>
                <h5>{info.title}</h5>
                <h2> {info.Subtitle}</h2>
                <div className='member'>
                    <img src='Taylor.jpg' className='taylor'/> 
                    <img src='dakota.jpg' className='dakota'/>
                    </div>
                    <div className='member-name'>
                        {info.members.map((person)=>(
                            <p className='firstname'> {person.firstname} 
                            {person.secondname} 
                            <SmsIcon/>
                            
                            </p>
                        
                        ))}
                        <p className='person-count'> 1.8 {" "}
                        <PersonIcon/> {"    "} / 6 <PhoneInTalkIcon/>
                        </p>
                        
                        </div>

              
        
        </div>
            )
        })}


    </div>
  )
}

export default RoomInfoCard