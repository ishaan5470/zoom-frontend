import React from "react";

export default function List() {
  return (
    <div className="flex flex-col justify-center content-stretch pt-[5px]">
      <button className="mx-auto w-[90px] h-[90px]  bg-white border-2 rounded-[150px] flex items-center justify-center">
        <img
          src="/Images/side1.png"
          className="rounded-[150px] w-full h-full object-cover"
          alt="Pfimg"
          style={{ height: "80px", width: "80px" }}
        />
      </button>
      <div className="mx-auto text-[16px]">Show your Skills / Talent</div>
      {/* <ul className='list-none cursor-pointer pl-1 font-medium'>
        <li className="flex items-center justify-start gap-3 mt-5"><div className='w-9 h-9 rounded-[50%] bg-red-500'><img src='#' alt="profile"></img></div>Contact</li>
        <hr className="contactSeparator w-[60%] m-auto h-0 border-none border-b border-black"/>
      </ul> */}
    </div> 
  );
}
