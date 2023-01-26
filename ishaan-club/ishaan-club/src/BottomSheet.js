import React from 'react'
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import "./BottomSheet.css";
import NewRoom from './NewRoom';
import StartRoom from './StartRoom';

function BottomSheet(props) {
  return (
    <div className='bottom-sheet'>
    
    <SwipeableBottomSheet 
    open={props.sheetVisible}
    onChange={()=>{
        props.setSheetVisible(!props.sheetVisible)  
        props.setItemsVisible(true)
    }}
fullScreen={props.sheetTitle == "room details"? true : false}
 className='sheet' >
  {props.sheetTitle=="new-room" ? (
    <NewRoom setSheetVisible={(item)=>{
      props.setSheetVisible(item);
      props.setItemsVisible(true);
    }} />
  ) : 
    props.sheetTitle=="start-room"? (
      <StartRoom setSheetCreateRoom={props.setSheetCreateRoom } setSheetVisible={(item)=>{
        props.setSheetVisible(item);
        props.setItemsVisible(true);
      }}/>

  ): (
    " "
  )
  
  
  
  
  
    
  }


    
    <div className='container'>
        
    </div>
    </SwipeableBottomSheet>
</div>



    
  )
}

export default BottomSheet;