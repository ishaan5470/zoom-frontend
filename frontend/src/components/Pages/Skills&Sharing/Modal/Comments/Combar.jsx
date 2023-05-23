import React from 'react'
import { InsertEmoticon } from '@mui/icons-material'
import { Collections } from '@mui/icons-material'
import { Send } from '@mui/icons-material'
function Combar() {
  return (


    <div className="flex items-center gap-2 ">

      <div className=' w-[60px] h-[60px] mx-1 object-cover bg-transparent rounded-[100px]'><img src='/Images/profilePic.png' className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>
      <div className="rounded-3xl border-2 flex items-center flex-grow py-2 gap-3 px-4">
        <input type='text' className='h-[2rem] w-full bg-transparent ' placeholder='Enter Comment' />
        <InsertEmoticon />
        <Collections />
        <Send />
      </div>
    </div>
  )
}

export default Combar