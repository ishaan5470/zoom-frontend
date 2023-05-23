import React, { useState } from 'react';
import { Dialog, DialogContent} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export default function Postype() {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') { // Only close if reason is not backdropClick
      setOpen(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <button onClick={handleOpen} className=''>
        
            <span className='flex justify-center items-center gap-2 text-base relative font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26">
  <path stroke="#003D4D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.167 3.25h6.5A4.333 4.333 0 0 1 13 7.583V22.75a3.25 3.25 0 0 0-3.25-3.25H2.167V3.25Zm21.666 0h-6.5A4.333 4.333 0 0 0 13 7.583V22.75a3.25 3.25 0 0 1 3.25-3.25h7.583V3.25Z"/>
</svg> 
              {/* <p className=' sm:flex hidden'> Learn</p> */}
    
            {/* <div className='absolute bg-[#57a7b3] h-4 w-4 text-xs rounded-[50px] object-contain flex items-center justify-center -right-3 top-0 text-white'>2</div> */}
            
              
              <div className="flex flex-col items-center">
              <p className=' sm:flex hidden ml-1 font-normal'> Post</p>
              <div className='font-thin text-[14px] leading-3'>125k</div>
              </div>
            </span>
      </button>
      
      <Dialog open={open} fullWidth maxWidth="lg" className='backdrop-blur-sm '>
        <div className='flex align-middle justify-between'>
          <div className="text-[2.5rem] mx-auto mt-3">Select Post Type
          
          
          </div>
          
          <button onClick={handleClose} color="primary" className=' absolute right-8 top-5 ght-10 text-lg rounded-xl'>
          <CloseIcon/>
          </button>
        </div>
        <DialogContent>
        <div className=" flex justify-center mb-28 mt-12 gap-8 flex-wrap  ">

            <button className="py-8 w-[250px] h-[250px] border-2 rounded-lg flex flex-col items-center justify-between">
              <img src='Images/gallery.png' className='h-[120px] w-[120px]' alt='Photos'/>
              <h1 className='text-4xl text-slate-400'>Photos</h1>
            </button>
            <button className="py-8 w-[250px] h-[250px] border-2 rounded-lg flex flex-col items-center justify-between">
              <img src='Images/video.png' className='h-[120px] w-[120px]' alt='Video'/>
              <h1 className='text-4xl text-slate-400'>Videos</h1>
            </button>

            <button className="py-8 w-[250px] h-[250px] border-2 rounded-lg flex flex-col items-center justify-between">
              <img src='Images/project.png' className='h-[120px] w-[120px]' alt='project'/>
              <h1 className='text-4xl text-slate-400'>Projects</h1>
            </button>

        </div>
        <div className="flex justify-center mb-5 ">
            <button className='text-white border-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#003D4D] to-[#57A7B3]'>Next</button>
        </div>

        </DialogContent>
      </Dialog>
    </>
  );
}
