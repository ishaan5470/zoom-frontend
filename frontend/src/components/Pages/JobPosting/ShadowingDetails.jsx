import React from 'react'

export default function ShadowingDetails() {
    return (
        <>
            {/* Shadowing */}

            <div>
                <div className="mt-5 w-full flex flex-col justify-center items-center mb-4">
                    <span className="font-semibold text-xl text-[#003d4d]">New to ZealYug. Learn More about Shadowing</span>
                    <div className="bg-white p-5 rounded-xl shadow-md shadow-gray-300 mt-3 w-1/2 px-10">
                        <div className="m-2 mb-8">
                            <span className="font-semibold text-xl text-[#003d4d]">What is Shadowing?</span>
                            <p>Shadowing opportunity on ZealYug refers to the chance for job seekers or students to observe and learn from experienced professionals in their desired field. This can be a valuable learning experience as it allows individuals to gain insight into the day-to-day work and tasks involved in a particular job.</p>
                        </div>
                        <div className="m-2">
                            <span className="font-semibold text-xl text-[#003d4d]">What can Job Seekers provide in return of Shadowing?</span>
                            <p>Well, for starters, they can bring their unique perspective and enthusiasm to the table. They can also offer their own knowledge and skills, even if they're just starting out. And who knows, maybe they'll even teach their mentor a thing or two! With ZealYug, the possibilities are endless.</p><br />
                            <p>
                                Build up a Leadership and Mentorship Quality in You with providing Shadowing Opportunity. Get Support with your Task and daily work activites.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-full flex flex-col justify-center items-center mb-4">
                    <div className="w-1/2">
                        <span className="self-start ml-3 font-semibold text-lg text-[#003d4d]">Shadowing Details</span>
                        <div className="bg-white p-5 rounded-xl shadow-md shadow-gray-300 mt-3 w-full px-10">
                            <form className="flex flex-col gap-5">
                                <div className="flex flex-col justify-center">
                                    <label className="text-base font-semibold text-[#003d4d]" for="YourWork">Your Work</label>
                                    <input className="w-full py-2 rounded-md border border-[#003d4d] px-5" placeholder="eg.Influencer" id="YourWork" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <label className="text-base font-semibold text-[#003d4d]" for="OppurtunityRole">Oppurtunity Role</label>
                                    <input className="w-full py-2 rounded-md border border-[#003d4d] px-5" placeholder="eg. Youtube Creator" id="OppurtunityRole" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <label className="text-base font-semibold text-[#003d4d]" for="skillsRequired">Skills Required</label>
                                    <input className="w-full py-2 rounded-md border border-[#003d4d] px-5" placeholder="eg. Communication Skills" id="skillsRequired" />
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
                                        <label className="text-base font-semibold text-[#003d4d]">Expected Hours/Days</label>
                                        <input className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5" type="number" placeholder="eg. 2" />
                                    </div>
                                    <div className="flex flex-col justify-center w-1/2">
                                        <label className="text-base font-semibold text-[#003d4d] invisible">Hours/Days</label>
                                        <select className="w-[90%] py-2 rounded-md border border-[#003d4d] px-5" id="ExperienceLevel">
                                            <option value="Hours">Hours</option>
                                            <option value="Days">Days</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <label className="text-base font-semibold text-[#003d4d]">Amount</label>
                                    <input className="w-full py-2 rounded-md border border-[#003d4d] px-5" placeholder="Rs 5,000" />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <label className="text-base font-semibold text-[#003d4d]">Your Expectations</label>
                                    <textarea className="w-full py-2 rounded-md border border-[#003d4d] px-5" rows="5" placeholder="Write Responsibilities for selected Candidates" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
