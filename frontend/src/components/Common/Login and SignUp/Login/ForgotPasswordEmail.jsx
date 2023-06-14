import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useForgotPasswordEmailMutation } from "../../../../redux/api/login";


const UsersSignup = () => {
  const [Email,setEmail] = useState("");
  const [forgotPasswordEmail,{isLoading,isSuccess,isError,error}] = useForgotPasswordEmailMutation();
  
  const navigate = useNavigate();

  useEffect(()=>{
    if(isSuccess){
      navigate("/forgotPassword/verify",{state:{email:Email}});
    }
    else if(isError){
      console.log(error);
      console.log("re-enter PhoneNumber");
      setEmail("");
    }
  },[isSuccess,isError,error,Email,navigate])

  function handleMailChange(e){
      setEmail(e.target.value);
  }

  function handleSendOtp(e){
    e.preventDefault();
    console.log(Email);
    forgotPasswordEmail({email:Email});
  }

  

  return (
    <div className="w-screen h-[calc(98vh-80px)] relative flex justify-center items-center overflow-clip box-border pt-7 md:pt-0">
      {/* Background Image */}
      <img
        className="absolute left-0 top-0 w-full h-[calc(100vh-80px)] object-cover -z-50 "
        src="../images/backgroundImg.png"
        alt="background"
      />
        {/* Actual form */}
        <div className=" flex flex-col items-center justify-center rounded-xl bg-gradient-to-t from-white to-[#dae3e6] w-[800px] p-10 relative md:h-[500px] box-border">
          <div className="mb-4 font-bold text-center  py-4 rounded-xl tracking-wider text-xl"><p>We are Excited to have You Mate!!!</p></div>
          
          <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full h-[90%]">
            <ToastContainer />
            {/* Right side */}
            <div className="p-4 flex flex-col justify-around rounded-l-2xl text-center md:w-1/2">
              <form className="">
                <div className="flex flex-col md:py-2 text-center pt-8 ">
                  <label className="p-4">Enter Your Email</label>
                  <input
                    className="border p-1 mx-4 text-center rounded-md"
                    type="tel"
                    value={Email}
                    onChange={handleMailChange}
                  />
                </div>
                {/* for captcha */}

                <div className="flex justify-center">
                    <button type="submit" onClick={handleSendOtp} className="border px-2  my-1 py-2 rounded-3xl bg-gradient-to-br from-[#003d4d] to-[#57a7b3] text-white cursor-pointer hover:opacity-90">
                      Send OTP
                    </button>
                </div>
              </form>  
              {isLoading?<p>Loading....</p>:null}
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
                className="flex rounded-2xl w-[400px]"
                src="../images/loginImg.png"
                alt="/"
              />
              <Link to="/forgotPassword">
                <img src="../images/close.png" alt="close" className="absolute right-5 top-5 h-3" />
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default UsersSignup;
