import React from "react";
import { useState } from "react";


export default function InternshipDetails() {

  // checkbox input handlers
  const [selectedOption, setSelectedOption] = useState("");
  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      {/* Internship Details */}
      <div className="mt-5 w-full flex flex-col justify-center items-center mb-4">
        <div className="w-1/2">
          <span className="self-start ml-3 font-semibold text-lg text-[#003d4d]">
            Internship Details
          </span>
          <div className="bg-white p-5 rounded-xl shadow-md shadow-gray-300 mt-3">
            <form className="flex flex-col gap-5" >
              <div className="flex flex-col justify-center">
                <label
                  className="text-base font-semibold text-[#003d4d]"
                  for="InternshipProfile"
                >
                  Internship Profile
                </label>
                <input
                  className="w-[80%] py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="eg. UI/UX designer"
                  name="InternshipProfile"
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
                  className="w-[80%] py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="eg. Figma"
                  name="skillsRequired"
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
                      for="InOffice"
                      id="InOfficeLabel"
                    >
                      <input
                        className=""
                        type="checkbox"
                        id="InOffice"
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
                      for="Remote"
                      id="RemoteLabel"
                    >
                      <input
                        type="checkbox"
                        id="Remote"
                        className=""
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
                      for="Hybrid"
                      id="HybridLabel"
                    >
                      <input
                        type="checkbox"
                        id="Hybrid"
                        className=""
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
                    Number Of Openings
                  </label>
                  <input
                    className="w-[80%] py-2 rounded-md border border-[#003d4d] px-5"
                    type="number"
                    placeholder="eg. 2"
                  />
                </div>
                <div className="flex flex-col justify-center w-1/2">
                  <label className="text-base font-semibold text-[#003d4d]">
                    Start Date
                  </label>
                  <input
                    className="w-[80%] py-2 rounded-md border border-[#003d4d] px-5"
                    type="date"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <label className="text-base font-semibold text-[#003d4d]">
                  Duration
                </label>
                <input
                  className="w-[80%] py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="5 Months"
                />
              </div>

              <div>
                <span className="text-base font-semibold text-[#003d4d]">
                  Internship Profile
                </span>
                <div className="flex justify-start">
                  <div className="w-1/3 flex justify-start relative">
                    <input
                      type="checkbox"
                      id="FixedCheckbox"
                      className="hidden"
                    />
                    <label
                      for="FixedCheckbox"
                      className="CheckboxLabel flex justify-center items-center "
                      id="FixedCheckboxLabel"
                    >
                      Fixed
                    </label>
                  </div>
                  <div className="w-1/3 flex justify-start relative">
                    <input
                      type="checkbox"
                      id="performanceCheckbox"
                      className="hidden"
                    />
                    <label
                      for="performanceCheckbox"
                      className="CheckboxLabel flex justify-center items-center"
                      id="performanceCheckboxLabel"
                    >
                      Performance Based
                    </label>
                  </div>
                  <div className="w-1/3 flex justify-start relative">
                    <input
                      type="checkbox"
                      id="UnpaidCheckbox"
                      className="hidden"
                    />
                    <label
                      for="UnpaidCheckbox"
                      className="CheckboxLabel flex justify-center items-center"
                      id="UnpaidCheckboxLabel"
                    >
                      Unpaid
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <label className="text-base font-semibold text-[#003d4d]">
                  Amount
                </label>
                <input
                  className="w-[80%] py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="Rs 50,000"
                />
              </div>

              <div className="flex flex-col justify-center">
                <label className="text-base font-semibold text-[#003d4d]">
                  Intern Responsibilities
                </label>
                <textarea
                  className="w-[80%] py-2 rounded-md border border-[#003d4d] px-5"
                  rows="5"
                  placeholder="Write Responsibilities for selected interns"
                />
              </div>
              <button type="submit">Next</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
