
import React from "react"

import InternshipDetails from "./InternshipDetails"
import JobDetails from "./JobDetails";
import InstantJobDetails from "./InstantJobDetails";
import ShadowingDetails from "./ShadowingDetails";
import { useState } from "react";


function JobPosting() {

  const initialTypeOfDetails={
    Internship:false,
    Job:false,
    Shadowing:false,
    InstantJob:false,
  }

  const[TypeOfDetails,SetTypeOfDetails]=useState({
    Internship:true,
    Job:false,
    Shadowing:false,
    InstantJob:false,
  });

  function handleClick(e){
      SetTypeOfDetails({
        ...initialTypeOfDetails,
        [e.target.name]:true
      })
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#f1f1f1]">
        <h1 className="text-5xl font-bold text-[#003d4d] my-10">Post an Oppurtunity</h1>
        <div className="w-1/2">
          <span className="ml-3 font-semibold text-lg text-[#003d4d]">Oppurtunity Type</span>
          <div className="bg-white p-5 rounded-xl w-full shadow-md shadow-gray-300 mt-2">
            <span>Select any one of these.</span>
            <div className="flex justify-around items-center mt-3">
              <button className={`border border-[#003d4d] px-5 py-2 rounded-xl hover:bg-[#57a7b320] ${TypeOfDetails.Internship?"bg-[#57a7b320]":"bg-none"}`} name="Internship" onClick={handleClick}>Internship</button>
              <button className={`border border-[#003d4d] px-5 py-2 rounded-xl hover:bg-[#57a7b320] ${TypeOfDetails.Job?"bg-[#57a7b320]":"bg-none"}`} name="Job" onClick={handleClick}>Job</button>
              <button className={`border border-[#003d4d] px-5 py-2 rounded-xl hover:bg-[#57a7b320] ${TypeOfDetails.Shadowing?"bg-[#57a7b320]":"bg-none"}`} name="Shadowing" onClick={handleClick}>Shadowing</button>
              <button className={`border border-[#003d4d] px-5 py-2 rounded-xl hover:bg-[#57a7b320] ${TypeOfDetails.InstantJob?"bg-[#57a7b320]":"bg-none"}`} name="InstantJob" onClick={handleClick}>Instant Job</button>
            </div>
          </div>
        </div>
          {TypeOfDetails.Internship && <InternshipDetails />}
          {TypeOfDetails.Job && <JobDetails />}
          {TypeOfDetails.Shadowing && <ShadowingDetails />}
          {TypeOfDetails.InstantJob && <InstantJobDetails />}






      </div>
    </div>
  )
}

export default JobPosting
