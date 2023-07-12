import React, { useRef, useState } from "react";
import { useUpdateUserProfileMutation } from "../../../../../redux/api/sspost";

function Internship({ id, popUp, handleCancel }) {
  const [updateUserProfile, isLoading, isError, isSuccess] =
    useUpdateUserProfileMutation();
  const internshipDescriptionRef = useRef(null);
  const internshipOrganizationRef = useRef(null);
  const internshipLocationRef = useRef(null);
  const internshipStartDateRef = useRef(null);
  const internshipEndDateRef = useRef(null);
  const internshipProfileRef = useRef(null);

  function submitHandler(e) {
    e.preventDefault();
    const internshipDescription = internshipDescriptionRef.current.value;
    const internshipOrganization = internshipOrganizationRef.current.value;
    const internshipLocation = internshipLocationRef.current.value;
    const internshipStartDate = internshipStartDateRef.current.value;
    const internshipEndDate = internshipEndDateRef.current.value;
    const internshipProfile = internshipProfileRef.current.value;
    const formData = {
      userid: id,
      internshipProfile,
      internshipDescription,
      internshipOrganization,
      internshipLocation,
      internshipStartDate,
      internshipEndDate,
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
        popUp === "Internship"
          ? `absolute top-0 left-0 right-0 lg:w-[500px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl`
          : `hidden`
      }`}
    >
      <div className="flex justify-between space-x-10 ">
        <h1 className="text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center">
          Internship Details
        </h1>
        <img
          src="Images\cancel.png"
          alt=""
          onClick={handleCancel}
          className="w-10 h-10"
        />
      </div>

      {/* <div className="flex space-x-2">
        <div className="flex flex-col space-y-1 w-full">
          <label className="flex text-left">
            <h1>Internship Profile</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <select
            name="Degree"
            className=" border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
            defaultValue={"Choose"}
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
        <div className="flex flex-col space-y-1 w-full">
          <label className="flex text-left">
            <h1>Type</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <select
            name="Degree"
            className=" border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
            defaultValue={"Choose"}
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
      </div> */}
      <div className="flex flex-col space-y-1">
        <label className="text-left flex">
          <h1>Internship profile</h1>
          <h1 className="text-red-700">*</h1>
        </label>
        <input
          type="text"
          placeholder="Enter Your Internship profile "
          className=" border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          ref={internshipProfileRef}
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
          ref={internshipOrganizationRef}
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
            ref={internshipStartDateRef}
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
              ref={internshipEndDateRef}
            />
          </div>
          <div className="flex space-x-2 text-sm text-gray-700">
            <input type="checkbox" />
            <h1>Currently Working Here</h1>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col space-y-1 w-full">
        <label className="flex text-left">
          <h1>Location</h1>
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
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology ">
            Information Technology{" "}
          </option>
          <option value="Mechanical ">Mechanical</option>
          <option value="ECE">ECE</option>
          <option value="other">other</option>
        </select>
      </div> */}
      <div className="flex flex-col space-y-1">
        <label className="text-left flex">
          <h1>Location</h1>
          <h1 className="text-red-700">*</h1>
        </label>
        <input
          type="text"
          placeholder="Enter Your Location "
          className=" border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          ref={internshipLocationRef}
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
            ref={internshipDescriptionRef}
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

export default Internship;
