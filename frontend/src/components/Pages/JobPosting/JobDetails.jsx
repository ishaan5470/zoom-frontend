import React from 'react'

export default function JobDetails() {
  return (
    <>
      {/* Job Details */}
      <div className="mt-5 w-full flex flex-col justify-center items-center mb-4">
          <div className="w-1/2">
            <span className="self-start ml-3 font-semibold text-lg text-[#003d4d]">Job Details</span>
            <div className="bg-white p-5 rounded-xl shadow-md shadow-gray-300 mt-3 w-full px-10">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col justify-center">
                  <label className="text-base font-semibold text-[#003d4d]" for="InternshipProfile">Job Profile</label>
                  <input className="w-full py-2 rounded-md border border-[#003d4d] px-5" placeholder="eg. UI/UX designer" id="InternshipProfile" />
                </div>
                <div className="flex flex-col justify-center">
                  <label className="text-base font-semibold text-[#003d4d]" for="skillsRequired">Skills Required</label>
                  <input className="w-full py-2 rounded-md border border-[#003d4d] px-5" placeholder="eg. Figma" id="skillsRequired" />
                </div>
                <div>
                  <span className="text-base font-semibold text-[#003d4d]">Work Type</span>
                  <div className="flex justify-start">
                    <div className="w-1/3 flex justify-start">
                      <input className="hidden" type="checkbox" id="InOfficeCheckbox" value="InOffice" />
                      <label className="CheckboxLabel flex justify-center items-center" for="InOfficeCheckbox" id="InOfficeLabel">In Office</label>
                    </div>
                    <div className="w-1/3 flex justify-start">
                      <input className="hidden" type="checkbox" id="RemoteCheckbox" value="Remote" />
                      <label className="CheckboxLabel flex justify-center items-center" for="RemoteCheckbox" id="RemoteLabel">Remote</label>
                    </div>
                    <div className="w-1/3 flex justify-start">
                      <input className="hidden" type="checkbox" id="HybridCheckbox" value="Hybrid" />
                      <label className="CheckboxLabel flex justify-center items-center" for="HybridCheckbox" id="HybridLabel">Hybrid</label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start">
                  <div className="flex flex-col justify-center w-1/2">
                    <label className="text-base font-semibold text-[#003d4d]">Country</label>
                    <input className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5" type="text" placeholder="eg. India" />
                  </div>
                  <div className="flex flex-col justify-center w-1/2">
                    <label className="text-base font-semibold text-[#003d4d]">State</label>
                    <input className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5" type="text" placeholder="eg. Delhi" />
                  </div>
                </div>


                <div className="flex items-center justify-start">
                  <div className="flex flex-col justify-center w-1/2">
                    <label className="text-base font-semibold text-[#003d4d]">Number Of Openings</label>
                    <input className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5" type="number" placeholder="eg. 2" />
                  </div>
                  <div className="flex flex-col justify-center w-1/2">
                    <label className="text-base font-semibold text-[#003d4d]">Start Date</label>
                    <input className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5" type="date" />
                  </div>
                </div>


                <div className="flex items-center justify-start">
                  <div className="flex flex-col justify-center w-1/2">
                    <label className="text-base font-semibold text-[#003d4d]">Notice Period</label>
                    <input className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5" type="number" placeholder="eg. 2" />
                  </div>
                  <div className="flex flex-col justify-center w-1/2">
                    <label className="text-base font-semibold text-[#003d4d] invisible">Days/Months</label>
                    <select className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5" id="ExperienceLevel">
                    <option value="Days">Days</option>
                    <option value="Months">Months</option>
                  </select>
                  </div>
                </div>


                <div className="flex flex-col justify-center">
                  <label for="ExperienceLevel" className="text-base font-semibold text-[#003d4d]">Experience Level</label>
                  <select className="w-full py-2 rounded-md border border-[#003d4d] px-5" id="ExperienceLevel">
                    <option value="Fresher">Fresher</option>
                    <option value="1 year">1 year</option>
                    <option value="2+ year">2+ year</option>
                    <option value="5+ years (highly Experienced)">5+ years (highly Experienced)</option>
                  </select>
                </div>
                <div className="flex flex-col justify-center">
                  <label className="text-base font-semibold text-[#003d4d]">Expected Salary</label>
                  <input className="w-full py-2 rounded-md border border-[#003d4d] px-5" placeholder="Rs 50,000" />
                </div>

                <div className="flex flex-col justify-center">
                  <label className="text-base font-semibold text-[#003d4d]">Responsibilities</label>
                  <textarea className="w-full py-2 rounded-md border border-[#003d4d] px-5" rows="5" placeholder="Write Responsibilities for selected Candidates" />
                </div>

              </form>
            </div>
          </div>
        </div>
    </>
  )
}
