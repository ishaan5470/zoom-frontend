import React from 'react';

function About({ popUp, handleCancel }) {
    return (
        <div className={`${popUp === "About" ? `text-[#003d4d] absolute top-0  bottom-0 left-0 right-0 lg:w-[900px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl` : `hidden`}`}>
            <div className='flex justify-between space-x-10 '>
                <h1 className='text-3xl text-[#003d4d] font-bold mx-auto p-10 text-center'>About</h1>
                <img src="Images\cancel.png"
                    alt=""
                    onClick={handleCancel}
                    className='cursor-pointer w-10 h-10' />
            </div>



            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                    <h1>Industry</h1>

                </label>
                <input type='text'

                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
            </div>

            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                    <h1>Website</h1>

                </label>
                <input type='text'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
            </div>

            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                    <h1>Main Location </h1>

                </label>
                <input type='text'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
            </div>

            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                    <h1>Type of Business</h1>

                </label>
                <input type='text'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
            </div>

            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                    <h1>Business Size</h1>

                </label>
                <input type='text'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
            </div>

            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                    <h1>Launched</h1>

                </label>
                <input type='text'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40' />
            </div>





            <button className='text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full'>Save</button>
        </div>

    )
}

export default About