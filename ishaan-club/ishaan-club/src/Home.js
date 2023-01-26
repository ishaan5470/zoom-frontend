import React from 'react'
import Header from "./Header";
import DailyCardInfo from './DailyCardInfo';
import "./Home.css";

import RoomInfoCard from './RoomInfoCard';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';
import BottomSheet from './BottomSheet';
import Data from './Dailycard.json';
import LoopIcon from '@mui/icons-material/Loop';
/*import NewRoomData from "./NewRoomData.json";*/
import NewRoom from './NewRoom';


function Home() {
    const[itemVisible, setItemVisible]=useState(true);
    const[sheetVisible, setSheetVisible]=useState(false);
    const [sheetCreateRoom, setSheetCreateRoom]=useState(false);
    const[cardId,setCardId]=useState(1);
    const [loaderVisible,setLoaderVisible]=useState(false);
  return (
    <div>
         {loaderVisible ? (
            <div className='loader' style={
                {
                    position:"fixed",
                    bottom: "0",
                    right:"0",
                    top:"0",
                    left:"0",
                    display:"flex",
                    justifyContent:"center"
                }
            }>
                <LoopIcon fontSize='large'/>
                </div>
         ) : (
            " "
         )}
    <div className='home'>
        <Header/>
        <DailyCardInfo/>
        <RoomInfoCard/> 
        </div>
        
        <div className="action-btn">
            <button className='btn' onClick= {()=>
                setSheetVisible(true)}>
            
            
            
            
            <span className='span'>
                <AddIcon className='icon'/>Start a room</span>
            </button>
            <button className='grid'>
                <Grid3x3Icon className='icon2'/>
            </button>
        </div>

        <BottomSheet sheetTitle="start-room" setSheetVisible={(item)=>{
            setLoaderVisible(true);
            setTimeout(()=>{
                setSheetVisible(item);
                setLoaderVisible(false);
            },1000);
        }}
        sheetVisible={sheetVisible}

        setItemVisible={(item)=>{
            setLoaderVisible(true);
            setTimeout(()=>{
                setItemVisible(true);
                setLoaderVisible(false);
            })
        }}
        itemVisible={itemVisible}
        setSheetCreateRoom={(item)=>{
            setLoaderVisible(true);
            setTimeout(()=>{
                setSheetCreateRoom(item);
                setLoaderVisible(false)
            },1000); 
        }} 
        className="sheet-color">

        </BottomSheet>
        <BottomSheet sheetTitle="new-room" setSheetVisible={(item)=>setSheetCreateRoom(item)}
        sheetVisible={sheetCreateRoom}
        setItemVisible= {setItemVisible}

         > </BottomSheet>



</div>

  );
}

export default Home;