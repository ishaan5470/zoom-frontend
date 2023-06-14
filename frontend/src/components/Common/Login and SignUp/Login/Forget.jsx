import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { RxCross1 } from "react-icons/rx"




// post the phone number to backend
const Forget = () => {
  const numberref = useRef();
  // const verifyOTP = async (e) => {
  //   e.preventDefault()
  //   try {
  //     let url = `http://localhost:8080/register/sendOtp`
  //     let option = {
  //       method: 'post',
  //       url: url,
  //       data: { number: numberref.current.value }
  //     }
  //     let response = await axios(option);
  //     let record = response.data
  //     if (record.statusText === 'Success') {
  //       toast.success("Succesfull");

  //     } else {
  //       toast.error(record.message);
  //     }
  //   } catch (error) {

  //   }

  // }

  return (
    <>
      <div className="w-screen h-[calc(98vh-80px)] flex items-center justify-center overflow--x-clip overflow-y-clip">
        <img
          className="absolute left-0 right-0 w-full h-[calc(98vh-80px)] object-cover -z-50 "
          src="images/backgroundImg.png"
          alt="/"
        />

      <div className="flex flex-col justify-center items-center">
          {/* <img
                  className="w-[200px] mx-auto"
                  src="images/LOGO.png"
                  alt="/"
                /> */}

        {/* Actual form */}
        <div className=" flex flex-col justify-center overflow-hidden w-[900px] h-[500px] bg-gradient-to-t from-white to-[#dae3e6] relative rounded-xl shadow shadow-gray-500">
          {/* Right side */}
          <div className="mb-4 font-bold text-center py-4 rounded-xl tracking-wider text-xl"><p>People with brilliant IQ often forget small things</p></div>
          <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center rounded-xl ">
          
            <div>
              <h1 className="text-2xl font-medium text-center">Forgot Password</h1>
              <p className="font-light">How would You like to reset Your Password</p>
            </div>

            <Link to="/forgotPassword/phoneNumber">
            <div className="flex justify-start items-center gap-5 mt-5 bg-[#cccccc] p-5 pl-7 rounded-md relative hover:opacity-90 cursor-pointer w-[300px]">
              <img src="/images/Message.png" alt="message" />
              <div>
                <p>Via SMS</p>
              </div>
              <div className="absolute right-2 flex justify-center items-center w-5 h-5 rounded-full">&gt;</div>
            </div>
            </Link>
            <Link to="/forgotPassword/email">
            <div className="flex justify-start items-center gap-5 mt-5 bg-[#cccccc] p-5 rounded-md relative hover:opacity-90 cursor-pointer w-[300px]">
              <img src="/images/Mail.png" alt="Email" />
              <div>
                <p>Via Email</p>
              </div>
              <div className="absolute right-2 flex justify-center items-center w-5 h-5 rounded-full">&gt;</div>
            </div>
            </Link>

            <Link to="/login">
            <button className="border w-auto my-5 py-2 px-5 rounded-2xl bg-gradient-to-br from-[#003d4d] to-[#57a7b3] text-white hover:opacity-90 mx-auto cursor-pointer">
                Login
            </button>
            </Link>
            <ToastContainer />
          </div>
          {/* Left side */}
          <div className="hidden lg:flex">
          <img
                className="flex rounded-2xl h-[360px]"
                src="../images/loginImg.png"
                alt="/"
              />
            <Link to="../login">
              <RxCross1 className="absolute top-5 right-5" />
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default Forget;