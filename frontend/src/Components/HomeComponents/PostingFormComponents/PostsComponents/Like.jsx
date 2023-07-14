import React, { useState } from 'react';
import { Dialog, DialogContent, DialogContentText, List } from '@mui/material';
import Liketemp from './LikeComponents/Liketemp';
import CloseIcon from '@mui/icons-material/Close';
// import { useFetchUserInfoQuery } from '../../../../../redux/slices/sspost';


export default function Like({ like, usid }) {
  const [open, setOpen] = useState(false);

  console.log(usid)

  // const { data } = useFetchUserInfoQuery(usid);
  // console.log(data)

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
        <div className="flex flex-col ">
          <p className=' sm:flex hidden ml-1 font-normal'> Appreciation</p>
          <div className='font-thin text-[14px] leading-3 ml-1 mr-auto'>{like.length}</div>
        </div>
      </button>
      <Dialog open={open} fullWidth maxWidth="sm" className='backdrop-blur-sm'>
        <div className='flex align-middle justify-between px-6 mt-3'>
          <h1 className='text-[2.5rem]'>Sauravs`s Posts</h1>
          <button onClick={handleClose} color="primary" className='rounded-xl mr-6'>
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center mt-1 px-6">
          <img src='Images/yo.svg' className='h-[25px] w-[25px]' alt='yo' />
          <h1 className='text-[1.3rem] ml-2'> <span className='text-[18px] font-light italic mr-1'>{like.length}</span> Appreciation</h1>
        </div>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <List sx={{ overflowY: 'scroll', maxHeight: '50vh' }}>
            {like.map((user) => {
              <Liketemp uid={user} />
            })}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
}

