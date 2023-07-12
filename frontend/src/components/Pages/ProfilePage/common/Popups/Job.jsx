import React, { useRef, useState } from "react";
import { useUpdateUserProfileMutation } from "../../../../../redux/api/sspost";

function Job({ id, popUp, handleCancel }) {
  const [updateUserProfile, isLoading, isError, isSuccess] =
    useUpdateUserProfileMutation();
  const jobDescriptionRef = useRef(null);
  const jobOrganizationRef = useRef(null);
  const jobLocationRef = useRef(null);
  const jobStartDateRef = useRef(null);
  const jobEndDateRef = useRef(null);
  const jobProfileRef = useRef(null);

  function submitHandler(e) {
    e.preventDefault();
    const jobDescription = jobDescriptionRef.current.value;
    const jobOrganization = jobOrganizationRef.current.value;
    const jobLocation = jobLocationRef.current.value;
    const jobStartDate = jobStartDateRef.current.value;
    const jobEndDate = jobEndDateRef.current.value;
    const jobProfile  = jobProfileRef.current.value;
    const formData = {
      userid: id,
      jobProfile,
      jobDescription,
      jobOrganization,
      jobLocation,
      jobStartDate,
      jobEndDate,
    };
    updateUserProfile(formData)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error");
      });
    handleCancel();
  }

  return (
    <form
      onSubmit={submitHandler}
      className={`${
        popUp === "Job"
          ? `absolute top-0 left-0 right-0 lg:w-[500px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl`
          : `hidden`
      }`}
    >
      <div className="flex justify-between space-x-10 ">
        <h1 className="text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center">
          Job Details
        </h1>
        <img
          src="Images\cancel.png"
          alt=""
          onClick={handleCancel}
          className="w-10 h-10"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-left flex">
          <h1>Job Profile</h1>
          <h1 className="text-red-700">*</h1>
        </label>
        <input
          type="text"
          placeholder="Enter Job Profile "
          className=" border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          ref={jobProfileRef}
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-left flex">
          <h1>Organization</h1>
          <h1 className="text-red-700">*</h1>
        </label>
        <input
          type="text"
          placeholder="Enter Your Organization Name "
          className=" border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          ref={jobOrganizationRef}
        />
      </div>

      <div className="flex space-x-2">
        <div className="flex flex-col space-y-1 w-full">
          <label className="text-left flex">
            <h1>Start Date</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <input
            type="date"
            placeholder="Choose "
            className=" border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
            ref={jobStartDateRef}
          />
        </div>
        <div className="flex flex-col space-y-1 w-full">
          <div className="flex flex-col space-y-1 w-full">
            <label className="text-left flex">
              <h1>End Date</h1>
              <h1 className="text-red-700">*</h1>
            </label>
            <input
              type="date"
              placeholder="Choose "
              className=" border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
              ref={jobEndDateRef}
            />
          </div>
          <div className="flex space-x-2 text-sm text-gray-700">
            <input type="checkbox" />
            <h1>Currently Working Here</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-left flex">
          <h1>Location</h1>
          <h1 className="text-red-700">*</h1>
        </label>
        <input
          type="text"
          placeholder="Enter Your Location "
          className=" border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          ref={jobLocationRef}
        />
      </div>

      <div className="flex space-x-2">
        <div className="flex flex-col space-y-1 w-full">
          <label className="text-left flex">
            <h1>Description</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <input
            type="text"
            placeholder="Short Description of your role and Responsibilities "
            className=" border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
            ref={jobDescriptionRef}
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full"
      >
        Save
      </button>
    </form>
  );
}
export default Job;
