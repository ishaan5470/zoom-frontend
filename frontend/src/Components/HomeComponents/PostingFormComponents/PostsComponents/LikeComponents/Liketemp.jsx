import React from 'react'
import { useFetchUserInfoMutation } from '../../../../../redux/api/sspost';

function Liketemp({ uid }) {



  // const { data } = useFetchUserInfoQuery(uid);
  return (
    <div className='flex justify-between items-center mt-3 pb-3 border-b-2'>
      <div className='flex items-center'>
        <div className='w-[50px] h-[50px] bg-black rounded-[50px]'><img src='/Images/profilePic.png' className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>

        <h1 className='ml-3 mt-1 text-lg'>name</h1>
      </div>
      <button className='border-2 rounded-xl h-[40px] px-3 pt-0'>+ Follow</button>
    </div>
  )
}

export default Liketemp