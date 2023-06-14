import React from 'react'

const Guidelines = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center bg-[#f1f1f1] px-6 gap-6 h-[80vh] w-[80vw] rounded-2xl">
            <div>
                <h1 className="text-2xl font-semibold mb-4">Guidelines for Employers when posting job opportunities on ZealYug:</h1>
            </div>
            <div>
                <div className="flex gap-2 items-center mb-8">
                    <p className="p-2 w-3 h-3 bg-[#003D4D] rounded-full mx-7"></p>
                    <p className='font-semibold'>Job postings should not be discriminatory on the basis of race, gender, caste, religion, disability, or any other protected characteristic.</p>
                </div>
                <div className="flex gap-2 items-center mb-8">
                    <p className="p-2 w-3 h-3 bg-[#003D4D] rounded-full mx-7"></p>
                    <p className='font-semibold'>Job descriptions should be accurate and reflect the duties and responsibilities of the position</p>
                </div>
                <div className="flex gap-2 items-center mb-8">
                    <p className="p-2 w-3 h-3 bg-[#003D4D] rounded-full mx-7"></p>
                    <p className='font-semibold'>The hiring process be inclusive and free for Candidates</p>
                </div>
                <div className="flex gap-2 items-center mb-8">
                    <p className="p-2 w-3 h-3 bg-[#003D4D] rounded-full mx-7"></p>
                    <p className='font-semibold'>Candidates should be evaluated on their Skills, Experience, Talent and Qualifications rather than irrelevant factors such as age, appearance or personal beliefs</p>
                </div>
            </div>
            <button className="bg-[#003D4D] text-white px-7 py-1 rounded-[30px]">Agree</button>
        </div>
    </div>
  )
}

export default Guidelines;