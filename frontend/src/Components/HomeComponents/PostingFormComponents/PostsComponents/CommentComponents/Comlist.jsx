
import React, { useState } from 'react'

import { useFetchUserInfoMutation } from '../../../../../redux/api/sspost';

function Comlist({ com }) {

  const [time, setTime] = useState(null);

  console.log(com)
  const { data, isLoading, isError } = useFetchUserInfoMutation(com.commentUserId);
  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  function calculateTimeDifference() {

    const createdDate = new Date(com.date);
    const currentDate = new Date();
    const timeDifferenceMinutes = Math.floor((currentDate - createdDate) / (1000 * 60));

    const timeDifferenceHours = Math.floor(timeDifferenceMinutes / 60);
    const timeDifferenceDays = Math.floor(timeDifferenceHours / 24);
    const timeDifferenceWeeks = Math.floor(timeDifferenceDays / 7);
    const timeDifferenceMonths = Math.floor(timeDifferenceDays / 30);
    const timeDifferenceYears = Math.floor(timeDifferenceDays / 365);

    let timeDifferenceFormatted;
    if (timeDifferenceYears >= 1) {
      timeDifferenceFormatted = timeDifferenceYears + " year(s)";
    } else if (timeDifferenceMonths >= 4) {
      timeDifferenceFormatted = "More than 3 months";
    } else if (timeDifferenceWeeks >= 7) {
      timeDifferenceFormatted = "More than 6 weeks";
    } else if (timeDifferenceDays >= 24) {
      const weeks = Math.floor(timeDifferenceDays / 7);
      timeDifferenceFormatted = weeks + " week(s)";
    } else if (timeDifferenceHours >= 24) {
      timeDifferenceFormatted = timeDifferenceDays + " day(s)";
    } else if (timeDifferenceMinutes >= 60) {
      timeDifferenceFormatted = timeDifferenceHours + " hour(s)";
    } else {
      timeDifferenceFormatted = timeDifferenceMinutes + " minute(s)";
    }

    setTime(timeDifferenceFormatted)
    // console.log("Time Difference:", timeDifferenceFormatted);
  }

  setInterval(calculateTimeDifference, 1000);


  return (
    <div className='flex  pb-4 pt-2 border-b-2 mx-2'>
      <div className='flex '>

        <div className=' mt-3 min-w-[60px] h-[60px] mx-1 object-cover bg-transparent rounded-[100px]'><img src={""} className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>
        <div className="ml-3 mt-1">
          <h1 className=' text-lg font-normal'>{data.data.firstName + " " + data.data.lastName}</h1>
          <p className='font-thin'>
            {com.description}
          </p>
          <div className="flex font-thin text-sm">
            <p className=' italic'>
              {time}
            </p>

            {/* <button className='ml-2 italic'>
              {/* <ThumbUpIcon className='h-[10px]'/> */}
            {/* Apreciation */}
            {/* </button> */}

            {/* <button className='ml-2 italic'> */}
            {/* <ThumbUpIcon className='h-[10px]'/> */}
            {/* Reply */}
            {/* </button>  */}
          </div>


        </div>
      </div>
    </div>
  )
}

export default Comlist