import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center bg-[#f1f1f1] h-[100vh]">
           <h1 className="text-5xl font-bold text-[#003d4d] my-10">Post an Oppurtunity</h1>
           <div className="mt-5 w-50vw flex flex-col justify-center mb-4 shadow-[0_0_4px_rgba(0,0,0.25,0.25)] p-10 rounded-2xl bg-white">
              <div className="flex gap-6 mb-5">
                <div className="flex flex-col justify-center">
                    <label className="text-base font-semibold text-[#003d4d]" for="InternshipProfile">First Name</label>
                    <input className="w-[100%] py-2 rounded-md border px-5" placeholder="Enter First Name" name="InternshipProfile" />
                </div>
                <div className="flex flex-col justify-center">
                    <label className="text-base font-semibold text-[#003d4d]" for="InternshipProfile">Last Name</label>
                    <input className="w-[100%] py-2 rounded-md border px-5" placeholder="Enter Last Name" name="InternshipProfile" />
                </div>
              </div>
              <div className="flex flex-col justify-center mb-5">
                    <label className="text-base font-semibold text-[#003d4d]" for="InternshipProfile">E-mail</label>
                    <input type="email" className="w-[100%] py-2 rounded-md border px-5" placeholder="Enter Your Email" name="InternshipProfile" />
              </div>
              <label className="text-base font-semibold text-[#003d4d]" for="InternshipProfile">Phone number</label>
              <div className="flex gap-6">
                    <input type="number" className="w-[20%] py-2 rounded-md border px-5" placeholder="+91" name="InternshipProfile" />
                    <input type="number" className="w-[100%] py-2 rounded-md border px-5" placeholder="Enter Your Number" name="InternshipProfile" />
              </div>
              <button className="w-[30%] bg-[#003d4d] text-white px-10 py-1 rounded-2xl mt-5">Next</button>
           </div>
        </div>
    </div>
  )
}

export default Contact;