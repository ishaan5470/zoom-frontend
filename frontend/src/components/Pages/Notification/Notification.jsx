import React, { useState } from 'react';

const Notification = () => {
    const [changeDivFlag, SetchangeDivFlag] = useState({
        General: true,
        JobApplications: false,
    });

    function GeneralHandler(){
        SetchangeDivFlag({
            General: true,
            JobApplications: false,
        })
    }

    function JobApplicationsHandler(){
        SetchangeDivFlag({
            General: false,
            JobApplications: true,
        })
    }

  return (
    <div className="p-7 mt-5">
        <img className="absolute left-0 top-0 w-full h-full -z-50" src="images/backgroundImg.png" alt="background" />
        <div className='flex justify-center gap-2'>
            <div className="w-[230px] h-[460px] bg-white p-5 space-y-4 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <div className="flex gap-10">
                  <div className="h-16 w-16 bg-[#d1d1d1] rounded-[40px] flex items-center justify-center"></div>
                  <div className="h-16 w-16"><img src="Images/qr.png" alt="scanner" /></div>
                </div>
                <h3>User Name</h3>
                <p className='text-[#787878]'>Impact You Create</p>
            </div>

            <div className="w-[580px] h-[460px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <div className="flex">
                    <div className=" bg-white w-full text-gray-500 text-xl font-semibold flex items-center justify-evenly p-3">
                        <div className={` cursor-pointer p-3 text-lg ${changeDivFlag.General ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={GeneralHandler}><span id="General">General <span className="m-2 p-1 px-2 text-sm text-white bg-slate-800 rounded-[50%]">5</span></span></div>
                        <div className={`cursor-pointer p-3 text-lg ${changeDivFlag.JobApplications ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={JobApplicationsHandler}><span id="Job Applications">Job Applications <span className='m-2 py-1 px-2 text-sm text-white bg-slate-800 rounded-[50%]'>5</span></span></div> 
                    </div>
                </div>
                <p className='text-[#4c919b] text-sm text-end pr-7 cursor-pointer'>Mark as all Read</p>
                <div className={`flex flex-col ${changeDivFlag.General ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                    <div className="flex gap-4 p-5 justify-center items-center">
                        <div className="h-10 w-10 bg-[#d1d1d1] rounded-[40px] flex items-center justify-center"></div>
                        <h2 className="w-[300px] text-sm">Surveer started supporting you. Check it Out!</h2>
                        <p className="text-xs w-[150px] text-center">2 minutes Ago</p>
                    </div>
                    <div className="flex gap-4 p-5 justify-center items-center">
                        <div className="h-10 w-10 bg-[#d1d1d1] rounded-[40px] flex items-center justify-center"></div>
                        <h2 className="w-[300px] text-sm">To access the newest features and enjoy a smooth user experience , update ZealYug right away</h2>
                        <p className="text-xs w-[150px] text-center">12 March , 2023</p>
                    </div>

                    <div className="flex gap-4 p-5 justify-center items-center">
                        <div className="h-10 w-10 bg-[#d1d1d1] rounded-[40px] flex items-center justify-center"></div>
                        <h2 className="w-[300px] text-sm">Virat Shared his Skills . Check it Out !</h2>
                        <p className="text-xs w-[150px] text-center">12 March , 2023</p>
                    </div>
                </div>

                <div className={`flex flex-col ${changeDivFlag.JobApplications ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                    <div className="flex gap-4 p-5 justify-center items-center">
                        <div className="h-10 w-12 bg-[#d1d1d1] rounded-[5px] flex items-center justify-center"></div>
                        <div className="flex flex-col">
                          <h2 className="w-[300px] text-sm">Customer Care Executive</h2>
                          <p className="text-xs  text-gray-500">Netflix Bengaluru, India</p>
                          <p className="text-xs  text-gray-500">🕛 Expires in 11 Days</p>
                        </div>
                        <p className="w-[130px] text-center text-xs px-3 py-1 bg-yellow-300 rounded-[20px]">Profile Sent</p>
                    </div>

                    <div className="flex gap-4 p-5 justify-center items-center">
                        <div className="h-10 w-12 bg-[#d1d1d1] rounded-[5px] flex items-center justify-center"></div>
                        <div className="flex flex-col">
                          <h2 className="w-[300px] text-sm">Consultant Service Chain Security</h2>
                          <p className="text-xs  text-gray-500">Dell Tamil Nadu, India</p>
                          <p className="text-xs  text-gray-500">🕛 Expires in 7 Days</p>
                        </div>
                        <p className="w-[130px] text-center text-xs px-3 py-1 bg-green-300 rounded-[20px]">Profile Accepted</p>
                    </div>

                    <div className="flex gap-4 p-5 justify-center items-center">
                        <div className="h-10 w-12 bg-[#d1d1d1] rounded-[5px] flex items-center justify-center"></div>
                        <div className="flex flex-col">
                          <h2 className="w-[300px] text-sm">Consultant Service Chain Security</h2>
                          <p className="text-xs  text-gray-500">ZealYug Delhi, India</p>
                          <p className="text-xs  text-gray-500">🕛 Expires in 4 Days</p>
                        </div>
                        <p className="w-[130px] text-center text-xs px-3 py-1 bg-red-300 rounded-[20px]">Profile Rejected</p>
                    </div>
                </div>
            </div>

            <div className="w-[250px]">
               <input type="text" className="p-2 pl-4 rounded-3xl shadow-[0_4px_4px_rgba(0,0,0,0.25)]" placeholder="🔍 Search" />
            </div>
        </div>
    </div>
  )
}

export default Notification;