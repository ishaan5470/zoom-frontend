import React, { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Upload from './shareExperienceComponents/Upload';

const ShareExperience=({id})=>{
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [typeOfPost,setTypeOfPost] = useState({photos:true,videos:false,projects:false});

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') { // Only close if reason is not backdropClick
      setOpen(false);
      setOpen1(false)
      setOpen2(false)
    }
  };


  const handleClose1 = (event, reason) => {
    if (reason !== 'backdropClick') { // Only close if reason is not backdropClick
      setOpen1(false);
    }
  };


  return (
    <>
      {/* <div onClick={handleOpen} className='mt-5 flex flex-col justify-center content-stretch'> */}

      <div onClick={()=>{setOpen(true)}} className='flex flex-col justify-center items-center w-[300px] cursor-pointer px-8'>
      <div className='bg-white border-2 rounded-full flex justify-center items-center w-3/4'><img src='/Images/side2.png' className="w-full" alt='Pfimg' /></div>
     <div className='mx-auto mt-3 text-xl text-center'>Share Experience/Story</div> 
     </div>
      <Dialog open={open} fullWidth maxWidth="lg" className='backdrop-blur-sm '>
        <div className='flex align-middle justify-between'>
          <div className="text-[2.5rem] mx-auto mt-3">Select Post Type</div>
          <button onClick={handleClose} color="primary" className=' absolute right-8 top-5 ght-10 text-lg rounded-xl'>
            <CloseIcon />
          </button>
        </div>
        <DialogContent>
          <div className=" flex justify-center mb-28 mt-12 gap-8 flex-wrap  ">
            <button onClick={()=>{setTypeOfPost({photos:true,videos:false,projects:false})}} className={`py-8 w-[250px] h-[250px] border-2 rounded-lg flex flex-col items-center justify-between ${typeOfPost.photos?`bg-[#57a7b320]`:`bg-none`}`}>
              <img src='Images/gallery.png' className='h-[120px] w-[120px]' alt='Photos' />
              <h1 className='text-4xl text-slate-400'>Photos</h1>
            </button>
            <button onClick={()=>{setTypeOfPost({photos:false,videos:true,projects:false})}} className={`py-8 w-[250px] h-[250px] border-2 rounded-lg flex flex-col items-center justify-between ${typeOfPost.videos?`bg-[#57a7b320]`:`bg-none`}`}>
              <img src='Images/video.png' className='h-[120px] w-[120px]' alt='Video' />
              <h1 className='text-4xl text-slate-400'>Videos</h1>
            </button>
            <button onClick={()=>{setTypeOfPost({photos:false,videos:false,projects:true})}} className={`py-8 w-[250px] h-[250px] border-2 rounded-lg flex flex-col items-center justify-between ${typeOfPost.projects?`bg-[#57a7b320]`:`bg-none`}`}>
              <img src='Images/project.png' className='h-[120px] w-[120px]' alt='project' />
              <h1 className='text-4xl text-slate-400'>Projects</h1>
            </button>
          </div>
          <div className="flex justify-center mb-5 ">
            <button onClick={()=>{setOpen1(!open1)}} className='text-white border-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#003D4D] to-[#57A7B3]'>Next</button>
          </div>
          {open1 === true && <Upload id={id} typeOfPost={typeOfPost} handleClose={handleClose1} mast={handleClose} open2={open2} setOpen2={setOpen2} open1={open1} />}
        </DialogContent>
      </Dialog>


    </>
  );
}

export default ShareExperience;
