import React from 'react'

function Job({ popUp, handleCancel }) {
    return (
        <div className={`${popUp === "Job" ? `absolute top-0 left-0 right-0 lg:w-[500px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl` : `hidden`}`}>
            <div className='flex justify-between space-x-10 '>
                <h1 className='text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center'>Job Details</h1>
                <img src="Images\cancel.png"
                    alt=""
                    onClick={handleCancel}
                    className='w-10 h-10' />
            </div>


            <div className='flex flex-col space-y-1 w-full'>
                <label className='flex text-left'>
                    <h1>Job Profile</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
                <select
                    name="Degree"
                    className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                    required
                    defaultValue={"Choose"}
                >
                    <option value="Choose" disabled>Choose</option>
                    <option value="B.Tech">B.tech</option>
                    <option value="B.Sce">B.Sce</option>
                    <option value="B.A">B.A</option>
                    <option value="MCA">MCA</option>
                    <option value="other">other</option>

                </select>
            </div>
            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                    <h1>Organization</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
                <input type='text'
                    placeholder='Enter Your Organization Name '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
            </div>


            <div className='flex space-x-2'>
                <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-left flex'>
                        <h1>Start Date</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='date'
                        placeholder='Choose '
                        required
                        className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
                </div>
                <div className='flex flex-col space-y-1 w-full'>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label className='text-left flex'>
                            <h1>End Date</h1>
                            <h1 className='text-red-700'>*</h1>
                        </label>
                        <input type='date'
                            placeholder='Choose '
                            required
                            className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
                    </div>
                    <div className='flex space-x-2 text-sm text-gray-700'>
                        <input type="checkbox" />
                        <h1>Currently Working Here</h1>

                    </div>
                </div>

            </div>

            <div className='flex flex-col space-y-1 w-full'>
                <label className='flex text-left'>
                    <h1>Location</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
                <select
                    name="Stream"
                    className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                    required
                    placeholder='Choose your Stream'
                    defaultValue={"Choose"}
                >
                    <option value="Choose" disabled>Choose</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology ">Information Technology </option>
                    <option value="Mechanical ">Mechanical</option>
                    <option value="ECE">ECE</option>
                    <option value="other">other</option>

                </select>
            </div>



            <div className='flex space-x-2'>

                <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-left flex'>
                        <h1>Description</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='text'
                        placeholder='Short Description of your role and Responsibilities '
                        required
                        className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
                </div>
            </div>
            <button className='text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full'>Save</button>
        </div>


    )
}

export default Job