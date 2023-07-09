import React from 'react'

function Training({ popUp, handleCancel }) {
    return (
        <div className={`${popUp === "Training" ? `absolute top-0 left-0 right-0 lg:w-[500px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl` : `hidden`}`}>
            <div className='flex justify-between space-x-10 '>
                <h1 className='text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center'>Training and Course Details</h1>
                <img src="Images\cancel.png"
                    alt=""
                    onClick={handleCancel}
                    className='w-10 h-10' />
            </div>


            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                    <h1>Training Name</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
                <input type='text'
                    placeholder='Enter Your Training Name'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
            </div>


            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                    <h1>Organization</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
                <input type='text'
                    placeholder='Enter Your Organization Name'
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
                        <h1>Currently Study Here</h1>

                    </div>
                </div>

            </div>

            <div className='flex flex-col space-y-1 w-full'>
                <label className='flex text-left'>
                    <h1>Stream</h1>
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
                        <h1>College Name</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='text'
                        placeholder='Enter Your College Name '
                        required
                        className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
                </div>
            </div>
            <button className='text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full'>Save</button>
        </div>
    )
}

export default Training