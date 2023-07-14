import React, { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
import Comlist from './CommentComponents/Comlist';
import Combar from './CommentComponents/Combar';

export default function Comment({ com, pid, uid }) {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    // if (reason !== 'backdropClick') { // Only close if reason is not backdropClick
    //   setOpen(false);
    // }
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <button onClick={handleOpen} className=''>

        <span className='flex justify-center items-center gap-2 text-base relative font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
            <path stroke="#003D4D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10.444a9.311 9.311 0 0 1-1 4.223 9.445 9.445 0 0 1-8.444 5.222 9.311 9.311 0 0 1-4.223-1L1 21l2.111-6.333a9.311 9.311 0 0 1-1-4.223A9.444 9.444 0 0 1 7.333 2a9.311 9.311 0 0 1 4.223-1h.555A9.422 9.422 0 0 1 21 9.889v.556Z" />
          </svg>

          {/* <div className='absolute bg-[#57a7b3] h-4 w-4 text-xs rounded-[50px] object-contain flex items-center justify-center -right-3 top-0 text-white'>2</div> */}



          <div className="flex flex-col items-center">
            <p className=' sm:flex hidden ml-1 font-normal'> Comment</p>
            <div className='font-thin text-[14px] leading-3 mr-auto ml-1'>{com.length}</div>
          </div>
        </span>
      </button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg" className='backdrop-blur-sm' >
        <div className='flex align-middle justify-center mx-6 mt-6 '>
          <div className="text-[1.5rem]">Comment</div>
          {/* <button onClick={handleClose} color="primary" className='rounded-xl mr-10'>
            <CloseIcon/>
          </button> */}
        </div>
        <DialogContent>


          {com.map((com) => (
            <React.Fragment key={com.commentUserId}>
              <Comlist com={com} />
            </React.Fragment>
          ))}
        </DialogContent>
        <div className="bg-white h-[10rem] pt-6 px-8 ">

          <Combar pid={pid} uid={uid} />
        </div>
      </Dialog>
    </>
  );
}