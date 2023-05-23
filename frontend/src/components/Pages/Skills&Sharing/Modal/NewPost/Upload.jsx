
import React, { useState } from 'react';
import { Dialog ,DialogContent} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

export default function Upload() {
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
        TestUpload
      </button>
      <Dialog open={open} fullWidth maxWidth="lg">
       <div className=""> 
        <div className='flex align-middle justify-between'>
          <div className="text-[2.5rem] mx-auto my-3">Create New Post!</div>
          <button onClick={handleClose} color="primary" className='absolute top-4 right-8'>
         <CloseIcon/> 
          </button>
        </div>
        <DialogContent>
          <div className="flex">
            <div className="h-[100px] w-full">

            </div>
            <div className="h-[100px] w-[100px]">
            
            </div>
          </div>

        
        
          
        <div className="flex justify-center mb-6 mt-10 ">
            <button className='text-white border-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#003D4D] to-[#57A7B3]'>Next</button>
        </div>
        </DialogContent>
        <div className="h-full w-[100px] "></div>
        </div>
      </Dialog>
    </>
  );
}
