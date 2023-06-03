import React from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { RxCross1 } from "react-icons/rx"



// post the phone number to backend
const SetPassword = () => {
  const [Password, setpassword] = useState([])
  const [ReEnterPassword, setReEnterPassword] = useState([])



  const numberref = useRef();
  const setPassword = async (e) => {
    if (Password === ReEnterPassword) {
      setpassword(numberref);
    } if (Password !== ReEnterPassword) {
      alert("Write correct password")
      return
    }
    e.preventDefault()
    try {
      let url = `http://localhost:8080/register/checkOtp`
      var option = {
        method: 'post',
        url: url,
        data: { number: numberref.current.value }
      }
      let response = await axios(option);
      let record = response.data
      if (record.statusText === 'Success') {
        toast.success();

      } else {
        toast.error(record.message);
      }
    } catch (error) {

    }
    let response = await axios(option);
    let record = response.data;
    try {
      if (record.statusText === 'Success') {
        toast.success();

      } else {
        toast.error(record.message);
      }
    }
    catch (error) {

    }

  }

  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <img
          className="absolute left-0 top-0 w-full h-full  object-fill -z-50 "
          src="./images/backgroundImg.png"
          alt="/"
        />

        <img
          className="w-[180px]"
          src="./images/LOGO.png"
          alt="/"
        />
        {/* Actual form */}
        <div className=" flex flex-col justify-center h-[500px] w-[900px] bg-gradient-to-t from-white to-[#dae3e6] rounded-xl shadow shadow-gray-500">
          <div className="mb-4 font-bold text-center  py-4 rounded-xl tracking-wider text-xl"><p>New Beginnings brings New Opportunities!!!</p></div>
          {/* Right side */}
          <div className="flex justify-center items-center">
            <ToastContainer />
            <div className="p-4 flex flex-col justify-around rounded-l-2xl text-center w-1/2">
              <form className="" onSubmit="/">

                <div className="flex flex-col py-2 text-center">
                  <label> Enter Password </label>
                  <input
                    className=" p-1 my-2  mx-4 text-center rounded-md outline-none"
                    type="Password"
                    ref={setpassword}
                    placeholder="************"

                  />
                </div>
                <div className="flex flex-col py-1 text-center">
                  <label>Re Enter Password</label>
                  <input
                    className=" p-1 my-2  mx-4 text-center rounded-md outline-none"
                    type="Password"
                    ref={setReEnterPassword}
                    placeholder="************"
                  />
                </div>
                {/* for captcha */}

                <div className="flex justify-center">
                  <Link to="/">
                    <button onClick={setPassword} className="border  my-5 py-2 px-5 rounded-2xl bg-[#003d4d] hover:bg-[#003d4dcc] text-white cursor-pointer">
                      Submit
                    </button>
                  </Link>
                </div>
              </form>
              {/* already have a  account  */}
              <div className="flex justify-between items-center  gap-16">
                <p className="">Already have an Account?</p>
                <Link to="/login">
                  <button className="border w-auto my-5 py-2 px-3 rounded-2xl bg-[#57a7b3] hover:bg-[#57a7b3cc] text-white cursor-pointer">
                    Login
                  </button>
                </Link>
              </div>
            </div>
            {/* Left side */}
            <div className="relative hidden lg:flex w-1/2">
              <img
                className="flex rounded-2xl h-[360px]"
                src="../images/loginImg.png"
                alt="/"
              />
              <Link to="../">
                <RxCross1 className="absolute top-5 right-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetPassword