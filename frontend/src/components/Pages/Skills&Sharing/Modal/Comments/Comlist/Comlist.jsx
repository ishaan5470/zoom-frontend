
import React from 'react'

function Comlist() {
  return (
    <div className='flex  pb-4 pt-2 border-b-2 mx-2'>
    <div className='flex '>    
  
    <div className=' mt-3 min-w-[60px] h-[60px] mx-1 object-cover bg-transparent rounded-[100px]'><img src='/Images/profilePic.png' className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>
   <div className="ml-3 mt-1"> 
    <h1 className=' text-lg font-normal'>Shivangi</h1>
    <p className='font-thin'>
        Lorem ipsum something 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dictum ex, vel placerat justo. Orci varius natoque penatibus et magnis dis parturient mont.
    </p>
    <div className="flex font-thin text-sm">
    <p className=' italic'>20 Min ago</p>
      
    <button className='ml-2 italic'>
        {/* <ThumbUpIcon className='h-[10px]'/> */}
        Apreciation
    </button>
    
    <button className='ml-2 italic'>
        {/* <ThumbUpIcon className='h-[10px]'/> */}
        Reply
    </button>
   </div> 


   </div>
    </div>
    </div>
  )
}

export default Comlist