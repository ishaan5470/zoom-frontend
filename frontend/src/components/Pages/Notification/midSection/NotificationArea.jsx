import { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";

import EmptyNotification from "./EmptyNotification";
import GeneralNotification from "./GeneralNotification";

function NotificationArea() {
  const [changeDivFlag, SetchangeDivFlag] = useState({
    General: true,
    JobApplications: false,
  });

  function GeneralHandler() {
    SetchangeDivFlag({
      General: true,
      JobApplications: false,
    });
  }

  function JobApplicationsHandler() {
    SetchangeDivFlag({
      General: false,
      JobApplications: true,
    });
  }
  return (
    <div className="w-[580px] h-[560px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.25)] rounded-xl">
      <div className="flex">
        <div className=" bg-white w-full text-gray-500 text-xl font-semibold flex items-center justify-evenly p-3">
          <div
            className={` cursor-pointer p-3 text-lg ${
              changeDivFlag.General
                ? "text-[#003d4d] border-b-4 border-b-[#003d4d]"
                : null
            }`}
            onClick={GeneralHandler}
          >
            <span id="General">
              General{" "}
              <span className="m-2 p-1 px-2 text-sm text-white bg-slate-800 rounded-[50%]">
                5
              </span>
            </span>
          </div>
          <div
            className={`cursor-pointer p-3 text-lg ${
              changeDivFlag.JobApplications
                ? "text-[#003d4d] border-b-4 border-b-[#003d4d]"
                : null
            }`}
            onClick={JobApplicationsHandler}
          >
            <span id="Job Applications">
              Job Applications{" "}
              <span className="m-2 py-1 px-2 text-sm text-white bg-slate-800 rounded-[50%]">
                5
              </span>
            </span>
          </div>
        </div>
      </div>
      <p className="text-[#57A7B3] text-sm text-end pr-7 cursor-pointer font-medium">
        Mark as all Read <MarkChatReadIcon />
      </p>

      {/*=============================================================================
 If there are notifications, GeneralNotification component will be rendered 
 =================================================================================*/}
      {/* <div
        className={`flex flex-col ${
          changeDivFlag.General
            ? "visible scale-100 static z-50"
            : "invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
        }`}
      >
        <GeneralNotification />
      </div> */}

      {/*=============================================================================
 If there are no notifications, EmptyNotification component will be rendered 
 =================================================================================*/}
      <div
        className={`flex flex-col items-center justify-center gap-5  mt-16 ${
          changeDivFlag.General
            ? "visible scale-100 static z-50"
            : "invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
        }`}
      >
        <EmptyNotification />
      </div>

      <div
        className={`flex flex-col ${
          changeDivFlag.JobApplications
            ? "visible scale-100 static z-50"
            : "invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
        }`}
      >
        <div className="flex gap-4 p-5 justify-center items-center">
          <div className="h-10 w-12 bg-[#d1d1d1] rounded-[5px] flex items-center justify-center"></div>
          <div className="flex flex-col">
            <h2 className="w-[300px] text-sm">Customer Care Executive</h2>
            <p className="text-xs  text-gray-500">Netflix Bengaluru, India</p>
            <p className="text-xs  text-gray-500">🕛 Expires in 11 Days</p>
          </div>
          <p className="w-[130px] text-center text-xs px-3 py-1 bg-yellow-300 rounded-[20px]">
            Profile Sent
          </p>
          <KeyboardArrowRightIcon />
        </div>

        <div className="flex gap-4 p-5 justify-center items-center">
          <div className="h-10 w-12 bg-[#d1d1d1] rounded-[5px] flex items-center justify-center"></div>
          <div className="flex flex-col">
            <h2 className="w-[300px] text-sm">
              Consultant Service Chain Security
            </h2>
            <p className="text-xs  text-gray-500">Dell Tamil Nadu, India</p>
            <p className="text-xs  text-gray-500">🕛 Expires in 7 Days</p>
          </div>
          <p className="w-[130px] text-center text-xs px-3 py-1 bg-green-300 rounded-[20px]">
            Profile Accepted
          </p>
          <KeyboardArrowRightIcon />
        </div>

        <div className="flex gap-4 p-5 justify-center items-center">
          <div className="h-10 w-12 bg-[#d1d1d1] rounded-[5px] flex items-center justify-center"></div>
          <div className="flex flex-col">
            <h2 className="w-[300px] text-sm">
              Consultant Service Chain Security
            </h2>
            <p className="text-xs  text-gray-500">ZealYug Delhi, India</p>
            <p className="text-xs  text-gray-500">🕛 Expires in 4 Days</p>
          </div>
          <p className="w-[130px] text-center text-xs px-3 py-1 bg-red-300 rounded-[20px]">
            Profile Rejected
          </p>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default NotificationArea;
