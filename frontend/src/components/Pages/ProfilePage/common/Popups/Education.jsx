import React, { useRef, useState } from "react";
import { useUpdateUserProfileMutation } from "../../../../../redux/api/sspost";
function Education({ id, popUp, handleCancel }) {
  const [updateUserProfile, isLoading, isError, isSuccess] =
    useUpdateUserProfileMutation();
  const degreeRef = useRef(null);
  const collegeRef = useRef(null);
  const streamRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  function submitHandler(e) {
    e.preventDefault();
    const degree = degreeRef.current.value;
    const college = collegeRef.current.value;
    const stream = streamRef.current.value;
    const educationStartDate = startDateRef.current.value;
    const educationEndDate = endDateRef.current.value;
    const formData = { userid: id, degree, college, stream,educationStartDate,educationEndDate };
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
        popUp === "Education"
          ? `text-[#003d4d] absolute top-0  bottom-0 left-0 right-0 lg:w-[500px] z-20 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl`
          : `hidden`
      }`}
    >
      <div className="flex justify-between space-x-10 ">
        <h1 className="text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center">
          Educational Details
        </h1>
        <img
          src="Images\cancel.png"
          alt=""
          onClick={handleCancel}
          className="w-10 h-10"
        />
      </div>

      <div className="flex flex-col space-y-1 w-full">
        <label className="flex text-left">
          <h1>Degree</h1>
          <h1 className="text-red-700">*</h1>
        </label>
        <select
          name="Degree"
          className=" border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
          defaultValue={"Choose"}
          ref={degreeRef}
        >
          <option value="Choose" disabled>
            Choose
          </option>
          <option value="B.Tech">B.tech</option>
          <option value="B.Sce">B.Sce</option>
          <option value="B.A">B.A</option>
          <option value="MCA">MCA</option>
          <option value="other">other</option>
        </select>
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-left flex">
          <h1>College Name</h1>
          <h1 className="text-red-700">*</h1>
        </label>
        <input
          type="text"
          placeholder="Enter Your College Name "
          className=" border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          ref={collegeRef}
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
            ref={startDateRef}
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
              ref={endDateRef}
            />
          </div>
          <div className="flex space-x-2 text-sm text-gray-700">
            <input type="checkbox" />
            <h1>Currently Study Here</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-1 w-full">
        <label className="flex text-left">
          <h1>Stream</h1>
          <h1 className="text-red-700">*</h1>
        </label>
        <select
          name="Stream"
          className=" border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
          placeholder="Choose your Stream"
          defaultValue={"Choose"}
        >
          <option value="Choose" disabled>
            Choose
          </option>
          <option value="Computer Science" ref={streamRef}>
            Computer Science
          </option>
          <option value="Information Technology ">
            Information Technology
          </option>
          <option value="Mechanical" ref={streamRef}>
            Mechanical
          </option>
          <option value="ECE" ref={streamRef}>
            ECE
          </option>
          <option value="other" ref={streamRef}>
            other
          </option>
        </select>
      </div>

      <div className="flex space-x-2">
        <div className="flex flex-col space-y-1 w-full">
          <label className="flex text-left">
            <h1>Performance Scale</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <select
            name="Performance_Scale"
            className=" border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
            defaultValue={"Choose"}
          >
            <option value="Choose" disabled>
              Choose
            </option>
            <option value="0-25">0-25</option>
            <option value="25-50 ">25-50 </option>
            <option value="50-75 ">50-75</option>
            <option value="75-100">75-100</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1 w-full">
          <label className="text-left flex">
            <h1>Performance</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <input
            type="number"
            placeholder="0.0 "
            className=" border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
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

export default Education;
