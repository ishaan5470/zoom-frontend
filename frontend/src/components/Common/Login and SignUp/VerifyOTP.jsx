import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { RxCross1 } from "react-icons/rx"



// post the phone number to backend
const VerifyOTP = () => {
  const numberref = useRef();
  const verifyOTP = async (e) => {
    e.preventDefault()
    try {
      let url = `http://localhost:8080/register/checkOtp`
      let option = {
        method: 'post',
        url: url,
        data: { number: numberref.current.value }
      }
      let response = await axios(option);
      let record = response.data
      if (record.statusText === 'Success') {
        toast.success("Succesfull");

      } else {
        toast.error(record.message);
      }
    } catch (error) {

    }

  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <img
          className="absolute left-0 top-0 w-full h-full object-cover -z-50 "
          src="../../images/backgroundImg.png"
          alt="/"
        />
        <div>
          <img
            className="mx-auto w-[200px]"
            src="../../images/LOGO.png"
            alt="/"
          />
        </div>
        {/* Actual form */}
        <div className=" flex flex-col justify-center items-center h-[500px] w-[900px] object-contain overflow-clip bg-gradient-to-t from-white to-[#dae3e6] rounded-xl shadow shadow-gray-500">
        
        <div className="mb-4 font-bold text-center  py-4 rounded-xl tracking-wider text-xl"><p>Your QR resume is waiting for you Mate!!!</p></div>
        <div className="flex justify-center items-center">
          {/* Right side */}
          <ToastContainer />
          <div className="p-4 flex flex-col justify-around rounded-2xl w-1/2">

            <form className="">
              <div className="flex flex-col py-2 text-center">
                <p className="text-sm mb-5">OTP has been sent to this XXXXXXXXXX <Link to="../" className="font-bold ml-8 text-[#003d4d]">Edit</Link></p>
                <label>ENTER OTP</label>
                <input
                  className=" p-1 my-2  mx-4 text-center rounded-md outline-none"
                  type="password"
                  ref={numberref}
                  placeholder='Enter Your Six Digit OTP'
                />
              </div>
              {/* for captcha */}

              <div className="flex justify-center">
                <Link to="/setPassword">
                  <button autoSave="true" onClick={verifyOTP} className="border  my-2 py-2 px-5 rounded-2xl bg-[#57a7b3] hover:bg-[#57a7b3cc] text-white cursor-pointer">
                    VERIFY OTP
                  </button>
                </Link>
              </div>
            </form>
            {/* already have a  account  */}
            <div className="flex justify-between items-center  gap-16">
              <p className="">Already have an Account?</p>
              <Link to="/login">
                <button className="border w-auto my-5 py-2 px-5 rounded-2xl bg-[#003d4d] hover:bg-[#003d4dcc] text-white cursor-pointer">
                  Login
                </button>
              </Link>
            </div>
          </div>
          {/* Left side */}
          <div className="relative object-contain w-1/2 lg:flex">
          <img
                className="flex rounded-2xl h-[360px]"
                src="../../images/loginImg.png"
                alt="/"
              />
            <Link to="../">
              <RxCross1 className="absolute top-5 right-5 z-20" />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default VerifyOTP;