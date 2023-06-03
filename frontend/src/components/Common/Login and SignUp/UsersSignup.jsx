import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";


const UsersSignup = () => {
  const numberref = useRef();
  const sendotp = async (e) => {
    e.preventDefault()
    try {
      let url = `http://localhost:8080/register/sendOtp`
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
      console.log(error);
    }

  }

  return (
    <div className="w-screen h-screen relative flex justify-center">
      {/* Background Image */}
      <img
        className="absolute left-0 top-0 w-full h-full object-cover -z-50 "
        src="../images/backgroundImg.png"
        alt="background"
      />
      <div className="flex flex-col items-center justify-center w-[900px] h-screen">
        <div>
        <img
          className=""
          src="../images/LOGO.png"
          alt="/"
          width={180}
        />
        </div>
        {/* Actual form */}
        <div className=" flex flex-col items-center justify-center rounded-xl bg-gradient-to-t from-white to-[#dae3e6] w-[900px] p-10 relative">
          <div className="mb-4 font-bold text-center  py-4 rounded-xl tracking-wider text-xl"><p>We are Excited to have You Mate!!!</p></div>
          {/* Right side */}
          <div className="flex justify-center w-full">
            <ToastContainer />
            <div className="p-4 flex flex-col justify-around rounded-l-2xl text-center w-1/2">
              <form className="">
                <div className="flex flex-col py-2 text-center pt-8 ">
                  <label className="p-4">Enter Phone Number</label>
                  <input
                    className="border p-1 mx-4 text-center rounded-md"
                    type="tel"
                    ref={numberref}
                  />
                </div>
                {/* for captcha */}

                <div className="flex justify-center">
                  <Link to='/signup/UserSignUp/verifyOTP'>
                    <button type="submit" onClick={sendotp} className="border px-2  my-1 py-2 rounded-3xl bg-gradient-to-br from-[#003d4d] to-[#57a7b3] text-white cursor-pointer hover:opacity-90">
                      Send OTP
                    </button>
                  </Link>

                </div>
              </form>
              <div className="flex justify-between items-center gap-5 w-full">
                <p className="">Already have an Account?</p>
                <Link to="/login">
                  <button className="border w-auto my-5 py-2 px-5 rounded-2xl bg-gradient-to-br from-[#003d4d] to-[#57a7b3] text-white hover:opacity-90 ">
                    Login
                  </button>
                </Link>
              </div>
            </div>

            {/* Left side */}
            <div className="w-1/2 flex items-center justify-center rounded-2xl object-contain">
              <img
                className="flex rounded-2xl h-[360px]"
                src="../images/loginImg.png"
                alt="/"
              />
              <Link to="../">
                <img src="../images/close.png" alt="close" className="absolute right-5 top-5 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersSignup;
