import React, {  useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import { useDeleteIncompleteSignupMutation, useResendOtpMutation} from "../../../../redux/api/signup";
import { useForgotPasswordVerifyOtpMutation } from "../../../../redux/api/login";




// post the phone number to backend
const VerifyOTP = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const [OTP,setOTP] = useState(0);
  const [resendOTP,{data:resendData,isSuccess:resendSuccess,isError:resendError}]= useResendOtpMutation();
  const [verifyOtp , {isSuccess,isError,error,isLoading}] = useForgotPasswordVerifyOtpMutation();
  console.log(state);
  
  useEffect(()=>{
    if(isSuccess){
      if(state.phoneNumber){
          navigate("/forgotPassword/setPassword",{state:{phoneNumber:state.phoneNumber}});
        }
        else if(state.email){
          navigate("/forgotPassword/setPassword",{state:{email:state.email}});
        }
    }
    if(!state){
      navigate(-1);
      alert("Provide Your Info")
      console.log("back");
    }
    if(error?.data?.error==="jwt expired"){
      alert("OTP expired");
      navigate(-1);
    }
  },[isSuccess,navigate,state?.phoneNumber,state?.email,isError,error])

  function handleOTPChange(e){
    setOTP(e.target.value);
  }

  function handleVerifyOTP(e){
    e.preventDefault();
    if(state.phoneNumber){
    verifyOtp({phoneNumber:state.phoneNumber,otp:OTP});
    }
    else if(state.email){
      verifyOtp({email:state.email,otp:OTP});
    }
    setOTP(0);
  }

  function handleResendOtp(){
    resendOTP({phoneNumber:state.phoneNumber});
    if(resendError){
      console.log(resendError);
    }
    else{
      console.log(resendData);
    }
  }

  return (
    <>
      <div className="w-screen h-[calc(98vh-80px)] flex flex-col justify-center items-center overflow-clip box-border">
        <img
          className="absolute left-0 top-0 w-full h-full object-cover -z-50 "
          src="../../images/backgroundImg.png"
          alt="/"
        />
        {/* <div>
          <img
            className="mx-auto w-[200px]"
            src="../../images/LOGO.png"
            alt="/"
          />
        </div> */}
        {/* Actual form */}
        <div className=" flex flex-col justify-center items-center md:h-[500px] md:w-[800px] object-contain overflow-x-clip overflow-y-scroll md:overflow-y-clip bg-gradient-to-t from-white to-[#dae3e6] rounded-xl shadow shadow-gray-500 box-border pt-20 md:pt-0">
        
        <div className="mb-4 font-bold text-center px-4 md:px-0 py-4 rounded-xl tracking-wider text-xl"><p>Your QR resume is waiting for you Mate!!!</p></div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          {/* Right side */}
          <ToastContainer />
          <div className="p-4 flex flex-col justify-around rounded-2xl w-[70%] md:w-1/2">

            <form className="">
              <div className="flex flex-col py-2 text-center">
                <p className="text-sm mb-5">OTP has been sent to this {state?.phoneNumber}</p>
                <label>ENTER OTP</label>
                <input
                  className=" p-1 my-2  mx-4 text-center rounded-md outline-none"
                  type="password"
                  placeholder='Enter Your Six Digit OTP'
                  value={OTP}
                  onChange={handleOTPChange}
                />
              </div>
              {/* for captcha */}

              <div className="flex justify-center">
                  <button autoSave="true" onClick={handleVerifyOTP} className="border  my-2 py-2 px-5 rounded-2xl bg-[#57a7b3] hover:bg-[#57a7b3cc] text-white cursor-pointer">
                    VERIFY OTP
                  </button>
              </div>
            </form>
            {isLoading?<p>Loading...</p>:null}
            <span className="self-end mt-4 text-[#003d4d] hover:text-red-700 cursor-pointer" onClick={handleResendOtp}>Resend OTP</span>
            {resendSuccess && <span className="text-red-600 font-semibold">Otp has been resended</span>}
            {isError && <span className="text-red-600 font-semibold">{error?.data?.message}</span> }
            {/* already have a  account  */}
            <div className="flex justify-between items-center">
              <p className="mr-4">Already have an Account?</p>
              <Link to="/login">
                <button className="border w-auto my-5 py-2 px-5 rounded-2xl bg-[#003d4d] hover:bg-[#003d4dcc] text-white cursor-pointer">
                  Login
                </button>
              </Link>
            </div>
          </div>
          {/* Left side */}
          <div className="relative object-contain w-[70%] md:w-1/2 lg:flex">
          <img
                className="flex rounded-2xl w-[400px]"
                src="../../images/loginImg.png"
                alt="/"
              />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default VerifyOTP;