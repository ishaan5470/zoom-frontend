import React from 'react'
import   data from "./Dailycard.json";
import Header from "./Header";
import "./DailyCardInfo.css";

function DailyCardInfo() {
  console.log(data[0])
  return(
    <div className='dailycardinfo'>
      
      {data.map((item)=>{
        return(
        <div className='info'>
          <span className='time'> {item.time}</span>
          <span className='title'>{item.title}</span>
          <span className='description'>{item.Description}</span>

        </div>
        );

      })}
    </div>
  )

}
export default DailyCardInfo;