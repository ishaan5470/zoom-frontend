import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Option() {
  
  const [optionFlag,setOptionFlag] = useState("Client");
    const handleCandidateClick = ()=>{
      setOptionFlag("Candidate");
    }

    const handleClientClick =()=>{
      setOptionFlag("Client");
    }
  
  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-screen relative overflow-clip flex justify-center items-center">
        <img className="absolute top-0 left-0 w-screen -z-50" src="images/backgroundImg-Signup.png" alt="backgroundImg" />

        <div className="w-[70%] h-[85%] bg-white rounded-xl flex items-center justify-center flex-col relative shadow-md shadow-gray-500">
          <Link to="../">
            <img src="images/close.png" alt="close" className="absolute right-5 top-5 h-3" />
          </Link>
          <h1 className="text-[#003d4d] mb-5">Join as a Client or a Candidate</h1>
          <div className="flex justify-center items-center gap-10">
            {/* left side */}
              <div className={"mx-5 px-5 py-10 rounded-xl  cursor-pointer text-center relative w-[300px] hover:bg-[#57a7b320]"} onClick={handleClientClick}>
                <div className="mb-5 ml-10 flex justify-between h-[100px]" id="ClientDiv"><img src="images/ClientImg.png" className="h-[100px] w-[100px] " alt="Client"></img></div>
                <h2 >I'm a Client,</h2>
                <p>Hiring for a Project</p>
                <input type="checkbox" checked={optionFlag==="Client"?true:false} className="absolute top-10 right-10 hidden"/><label id='candidateCheckbox' className="absolute top-10 right-10"></label>
              </div>
            {/* right side */}
              <div className={"mx-5 px-5 py-10 rounded-xl cursor-pointer text-center relative w-[300px] hover:bg-[#57a7b320]"} onClick={handleCandidateClick}>
                <div className="mb-5 ml-10 flex justify-between h-[100px]" id="CandidateDiv"><img src="images/CandidateImg.png" className="h-[100px] w-[100px]" alt="Candidate"></img></div>
                <h2>I'm a Candidate,</h2>
                <p>I'm looking for work</p>
                <input type="checkbox" checked={optionFlag==="Candidate"?true:false} className="absolute top-10 right-10 hidden"  /><label id='candidateCheckbox' className="absolute top-10 right-10"></label>
              </div>
          </div>
          <Link to={optionFlag==="Candidate"?"/signUp/userSignUp":"/signup/CorporateSignUp"}><button className='px-5 py-3 mt-3 border-none bg-gradient-to-br from-[#003d4d] to-[#57a7b3] text-white rounded-xl cursor-pointer hover:opacity-90'>Join as {optionFlag==="Candidate"?"Candidate":"Client"}</button></Link>
          <div className="flex justify-between items-center gap-14">
            <p className="">Already have an Account?</p>
            <Link to="/login">
              <button className="border-none w-auto my-5 py-2 px-5 rounded-2xl bg-[#57a7b3]  hover:bg-[#57a7b3cc] text-white ">
                Login
              </button>
            </Link>
          </div>

          <span className="text-xl font-bold bg-[#57a7b320] w-full text-center py-4">Explore Thounsands of Oppurtunities With ZealYug!!!</span>

        </div>

      </div>


    </div>
  )
}
