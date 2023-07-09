import React, { useState, useEffect } from "react";
import InternshipDetails from "./InternshipDetails";
import JobDetails from "./JobDetails";
import InstantJobDetails from "./InstantJobDetails";
import ShadowingDetails from "./ShadowingDetails";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useSelector } from "react-redux";

function JobPosting() {
  const formData = useSelector((state) => state.form.formData);

  const [jobType, setjobtype] = useState("Internship");

  function handleClick(e) {
    setjobtype(e.target.name);
  }

  useEffect(() => {
    if (formData && formData.jobType) {
      setjobtype(formData.jobType);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 justify-center items-center bg-[#f1f1f1]">
        {/* Post an Oppurtunity */}
        <header className="w-full flex flex-col text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#003d4d] my-10">
            Post an Opportunity
          </h1>
          <div className="flex justify-center items-center ">
            <div className="flex flex-col gap-5 items-end">
              <img
                className=""
                src="images/ProfileIcon.png"
                alt="profile-icon"
              />
              <p className="-mr-8 text-sm sm:text-xl font-semibold">
                Contact Details
              </p>
            </div>

            <div className="bg-[#003d4d] w-[50%] h-1 -mt-10 "></div>
            <div className="flex flex-col gap-5 items-start">
              <MdOutlineWorkOutline className="text-7xl text-[#003d4d] p-2.5 border-4 border-[#003d4d] rounded-full" />

              <p className="-ml-10 text-sm sm:text-xl font-semibold">
                Post Job/Internship
              </p>
            </div>
          </div>
        </header>

        {/* select opportunity type */}
        <div className="w-[90%] md:w-[80%] lg:w-[75%]  xl:w-[60%]">
          <span className="ml-3 font-semibold text-lg text-[#003d4d]">
            Opportunity Type
          </span>
          <div className="bg-white p-5 md:p-8 rounded-xl w-full shadow-md shadow-gray-300 mt-2">
            <span className="self-start ml-3 mt-4 mb-4 font-semibold text-[#003d4d] text-md">
              Select any one of these.
            </span>
            <div className="grid grid-cols-2 md:flex flex-row justify-between gap-4 md:gap-8 items-center mt-4">
              <button
                className={`flex justify-between text-sm sm:text-lg border w-full md:w-1/4 border-[#003d4d] px-3 py-2 rounded-xl hover:bg-[#57a7b320] ${
                  jobType === "Internship" ? "bg-[#57a7b320]" : "bg-none"
                }`}
                name="Internship"
                onClick={handleClick}
              >
                Internship
                <input
                  type="checkbox"
                  className="w-5 h-5 m-0 text-[#003d4d] border-4 rounded-full focus:outline-none focus:ring-0"
                  checked={jobType === "Internship"}
                />
              </button>
              <button
                className={`flex justify-between text-sm sm:text-lg border w-full md:w-1/4 border-[#003d4d] px-3 py-2 rounded-xl hover:bg-[#57a7b320] ${
                  jobType === "Job" ? "bg-[#57a7b320]" : "bg-none"
                }`}
                name="Job"
                onClick={handleClick}
              >
                Job
                <input
                  type="checkbox"
                  className="w-5 h-5 m-0 text-[#003d4d] border-4 rounded-full focus:outline-none focus:ring-0"
                  checked={jobType === "Job"}
                />
              </button>
              <button
                className={`flex justify-between text-sm sm:text-lg border w-full md:w-1/4 border-[#003d4d] px-3 py-2 rounded-xl hover:bg-[#57a7b320] ${
                  jobType === "Shadowing" ? "bg-[#57a7b320]" : "bg-none"
                }`}
                name="Shadowing"
                onClick={handleClick}
              >
                Shadowing
                <input
                  type="checkbox"
                  className="w-5 h-5 m-0 text-[#003d4d] border-4 rounded-full focus:outline-none focus:ring-0"
                  checked={jobType === "Shadowing"}
                />
              </button>
              <button
                className={`flex justify-between text-sm sm:text-lg border w-full md:w-1/4 border-[#003d4d] px-3 py-2 rounded-xl hover:bg-[#57a7b320] ${
                  jobType === "InstantJob" ? "bg-[#57a7b320]" : "bg-none"
                }`}
                name="InstantJob"
                onClick={handleClick}
              >
                Instant Job
                <input
                  type="checkbox"
                  className="w-5 h-5 m-0 text-[#003d4d] border-4 rounded-full focus:outline-none focus:ring-0"
                  checked={jobType === "InstantJob"}
                />
              </button>
            </div>
          </div>
        </div>
        {/* selected job type */}
        {jobType === "Internship" && <InternshipDetails jobType={jobType} />}
        {jobType === "Job" && <JobDetails jobType={jobType} />}
        {jobType === "Shadowing" && <ShadowingDetails jobType={jobType} />}
        {jobType === "InstantJob" && <InstantJobDetails jobType={jobType} />}
      </div>
    </div>
  );
}

export default JobPosting;
