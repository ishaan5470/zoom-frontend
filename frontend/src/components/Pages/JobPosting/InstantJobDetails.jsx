import React from "react";
import { useState } from "react";

export default function InstantJobDetails() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      {/* Instant Job Details */}
      <div className="mt-5 w-full flex flex-col justify-center items-center mb-4">
        <div className="w-1/2">
          <span className="self-start ml-3 font-semibold text-lg text-[#003d4d]">
            Instant Job Details
          </span>
          <div className="bg-white p-5 rounded-xl shadow-md shadow-gray-300 mt-3 w-full px-10">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col justify-center">
                <label
                  className="text-base font-semibold text-[#003d4d]"
                  for="Business/Co-Working Space Name"
                >
                  Business/Co-Working Space Name
                </label>
                <input
                  className="w-full py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder=""
                  id="Business/Co-Working Space Name"
                />
              </div>
              <div className="flex flex-col justify-center">
                <label
                  className="text-base font-semibold text-[#003d4d]"
                  for="OppurtunityRole"
                >
                  Oppurtunity Role
                </label>
                <input
                  className="w-full py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="eg. Catering Assistance"
                  id="OppurtunityRole"
                />
              </div>
              <div className="flex flex-col justify-center">
                <label
                  className="text-base font-semibold text-[#003d4d]"
                  for="skillsRequired"
                >
                  Skills Required
                </label>
                <input
                  className="w-full py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="eg. Communication Skills"
                  id="skillsRequired"
                />
              </div>
              <div>
                <span className="text-base font-semibold text-[#003d4d]">
                  Work Type
                </span>
                <div className="flex justify-start">
                  <div className="w-1/3 flex justify-start">
                    <label
                      className="CheckboxLabel flex justify-center items-center"
                      for="InOfficeCheckbox"
                      id="InOfficeLabel"
                    >
                      <input
                        className=""
                        type="checkbox"
                        id="InOfficeCheckbox"
                        value="In Office"
                        checked={selectedOption === "In Office"}
                        onChange={handleCheckboxChange}
                      />
                      In Office
                    </label>
                  </div>
                  <div className="w-1/3 flex justify-start">
                    <label
                      className="CheckboxLabel flex justify-center items-center"
                      for="RemoteCheckbox"
                      id="RemoteLabel"
                    >
                      <input
                        className=""
                        type="checkbox"
                        id="RemoteCheckbox"
                        value="Remote"
                        checked={selectedOption === "Remote"}
                        onChange={handleCheckboxChange}
                      />
                      Remote
                    </label>
                  </div>
                  <div className="w-1/3 flex justify-start">
                    <label
                      className="CheckboxLabel flex justify-center items-center"
                      for="HybridCheckbox"
                      id="HybridLabel"
                    >
                      <input
                        className=""
                        type="checkbox"
                        id="HybridCheckbox"
                        value="Hybrid"
                        checked={selectedOption === "Hybrid"}
                        onChange={handleCheckboxChange}
                      />
                      Hybrid
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start">
                <div className="flex flex-col justify-center w-1/2">
                  <label className="text-base font-semibold text-[#003d4d]">
                    Country
                  </label>
                  <input
                    className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5"
                    type="text"
                    placeholder="eg. India"
                  />
                </div>
                <div className="flex flex-col justify-center w-1/2">
                  <label className="text-base font-semibold text-[#003d4d]">
                    State
                  </label>
                  <input
                    className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5"
                    type="text"
                    placeholder="eg. Delhi"
                  />
                </div>
              </div>

              <div className="flex items-center justify-start">
                <div className="flex flex-col justify-center w-1/2">
                  <label className="text-base font-semibold text-[#003d4d]">
                    Number Of Openings
                  </label>
                  <input
                    className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5"
                    type="number"
                    placeholder="eg. 2"
                  />
                </div>
                <div className="flex flex-col justify-center w-1/2">
                  <label className="text-base font-semibold text-[#003d4d]">
                    Start Date
                  </label>
                  <input
                    className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5"
                    type="date"
                  />
                </div>
              </div>

              <div className="flex items-center justify-start">
                <div className="flex flex-col justify-center w-1/2">
                  <label className="text-base font-semibold text-[#003d4d]">
                    Required Days/Weeks
                  </label>
                  <input
                    className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5"
                    type="number"
                    placeholder="eg. 2"
                  />
                </div>
                <div className="flex flex-col justify-center w-1/2">
                  <label className="text-base font-semibold text-[#003d4d] invisible">
                    Days/Weeks
                  </label>
                  <select
                    className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5"
                    id="ExperienceLevel"
                  >
                    <option value="Days">Days</option>
                    <option value="Weeks">Weeks</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <label className="text-base font-semibold text-[#003d4d]">
                  Expected Amount
                </label>
                <input
                  className="w-full py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="Rs 5,000"
                />
              </div>

              <div className="flex flex-col justify-center">
                <label className="text-base font-semibold text-[#003d4d]">
                  Responsibilities
                </label>
                <textarea
                  className="w-full py-2 rounded-md border border-[#003d4d] px-5"
                  rows="5"
                  placeholder="Write Responsibilities for selected Candidates"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
