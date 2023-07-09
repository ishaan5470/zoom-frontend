import React from 'react'

function Profile({ popUp, handleCancel }) {
    return (
        <>
            {/* User Profile Pop up  */}
            <div className={`${popUp === "Profile" ? `text-[#003d4d] absolute top-0  bottom-0 left-0 right-0 lg:w-[900px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl` : `hidden`}`}>
                <div className='flex justify-between space-x-10 '>
                    <h1 className='text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center'>User Details</h1>
                    <img src="Images\cancel.png"
                        alt=""
                        onClick={handleCancel}
                        className='cursor-pointer w-10 h-10' />
                </div>



                <div className='flex flex-col space-y-1'>
                    <label className='text-left flex'>
                        <h1>User Name</h1>

                    </label>
                    <input type='text'
                        placeholder='Enter Your College Name '
                        required
                        className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
                </div>

                <div className='flex flex-col space-y-5 '>
                    <label className='text-left'>Profile Picture </label>
                    <div className="flex items-center justify-center lg:w-[300px]">
                        <label className="flex items-center justify-center w-full bg-[#003d4d]/20  border-2 border-[#003d4d] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:text-white   hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                            <div className="flex flex-row space-x-5 items-center justify-center p-5">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-xl text-gray-500   ">Upload Profile Picture</p>

                            </div>
                            <input type="file" className="hidden" />
                        </label>
                    </div>
                </div>




                <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-left flex'>
                        <h1>User ID</h1>

                    </label>
                    <input type='text'
                        placeholder='Enter Your Description '
                        required
                        className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
                </div>


                <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-left flex'>
                        <h1>Location</h1>

                    </label>
                    <input type='text'
                        placeholder='Enter Project Link '
                        required
                        className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
                </div>


                <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-left flex'>
                        <h1>Description</h1>

                    </label>
                    <textarea type='text'
                        placeholder='Enter your Description '
                        required
                        className=' border h-[150px] px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
                </div>

                <button className='text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full'>Save</button>
            </div>
        </>
    )
}

export default Profile