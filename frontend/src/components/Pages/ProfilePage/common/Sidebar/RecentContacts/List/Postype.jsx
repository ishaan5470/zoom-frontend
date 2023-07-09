import React, { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Upload from "./Upload";

export default function Postype() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      // Only close if reason is not backdropClick
      setOpen(false);
      setOpen1(false);
      setOpen2(false);
    }
  };

  const handleClose1 = (event, reason) => {
    if (reason !== "backdropClick") {
      // Only close if reason is not backdropClick
      setOpen1(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpen1 = () => {
    if (open1) {
      setOpen1(false);
    } else {
      setOpen1(true);
    }
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="mt-[2px] flex flex-col justify-center content-stretch"
      >
        <button className="mx-auto w-[90px] h-[90px]  bg-white border-2 rounded-[150px]">
          <img
            src="/Images/side2.png"
            className="rounded-[150px] w-full h-full object-cover"
            alt="Pfimg"
            style={{ height: "80px", width: "80px" }}
          />
        </button>
        <div className="mx-auto text-[16px] mt-3">Share Experience/Story</div>
        {/* <ul className='list-none cursor-pointer pl-1 font-medium'>
  <li className="flex items-center justify-start gap-3 mt-5"><div className='w-9 h-9 rounded-[50%] bg-red-500'><img src='#' alt="profile"></img></div>Contact</li>
  <hr className="contactSeparator w-[60%] m-auto h-0 border-none border-b border-black"/>
</ul> */}
      </div>

      <Dialog open={open} fullWidth maxWidth="lg" className="backdrop-blur-sm ">
        <div className="flex align-middle justify-between">
          <div className="text-[2.5rem] mx-auto mt-3">Select Post Type</div>

          <button
            onClick={handleClose}
            color="primary"
            className=" absolute right-8 top-5 ght-10 text-lg rounded-xl"
          >
            <CloseIcon />
          </button>
        </div>
        <DialogContent>
          <div className=" flex justify-center mb-28 mt-12 gap-8 flex-wrap  ">
            <button className="py-8 w-[250px] h-[250px] border-2 rounded-lg flex flex-col items-center justify-between">
              <img
                src="Images/gallery.png"
                className="h-[120px] w-[120px]"
                alt="Photos"
              />
              <h1 className="text-4xl text-slate-400">Photos</h1>
            </button>
            <button className="py-8 w-[250px] h-[250px] border-2 rounded-lg flex flex-col items-center justify-between">
              <img
                src="Images/video.png"
                className="h-[120px] w-[120px]"
                alt="Video"
              />
              <h1 className="text-4xl text-slate-400">Videos</h1>
            </button>

            <button className="py-8 w-[250px] h-[250px] border-2 rounded-lg flex flex-col items-center justify-between">
              <img
                src="Images/project.png"
                className="h-[120px] w-[120px]"
                alt="project"
              />
              <h1 className="text-4xl text-slate-400">Projects</h1>
            </button>
          </div>
          <div className="flex justify-center mb-5 ">
            <button
              onClick={handleOpen1}
              className="text-white border-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#003D4D] to-[#57A7B3]"
            >
              Next
            </button>
          </div>
          {open1 === true ? (
            <Upload
              handleClose={handleClose1}
              mast={handleClose}
              open2={open2}
              setOpen2={setOpen2}
              open={open1}
            />
          ) : (
            ""
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
