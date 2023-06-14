import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDeleteIncompleteSignupMutation, useSetCredentialsMutation } from "../../../../redux/api/signup";



// post the phone number to backend
const SetCredentials = () => {
  const [password, setPassword] = useState([])
  const [reEnterPassword, setReEnterPassword] = useState([])
  const [passwordVisibilityFlag, setpasswordVisibilityFlag] = useState(false);
  const [userName,setUserName] = useState([]);
  const [name,setName] = useState([]);
  const [setCredentialshook,{data,isLoading,isError,error,isSuccess}]= useSetCredentialsMutation();
  const navigate = useNavigate();
  const [handleIncompleteSignup] = useDeleteIncompleteSignupMutation();
  const {state} = useLocation();


  function handlePasswordVisibility(e) {
    e.preventDefault();
    setpasswordVisibilityFlag(!passwordVisibilityFlag);
  }

  const setCredentials = (e)=>{
    e.preventDefault();
    setCredentialshook({userName,password,name,phoneNumber:state.phoneNumber});
  }

  useEffect(()=>{
    if(state?.phoneNumber){
    if(isSuccess){
      console.log(data);
      localStorage.setItem("token",data.accessToken)
      navigate("/skillsPosting");
      console.log("registeration success")
    }
    else if(isError){
      console.log(error);
      handleIncompleteSignup({phoneNumber:state?.phoneNumber})
    }
    }
    else{
      alert("Verify Your Phone Number First")
      navigate("/registeration/phoneNumber");
    }

  },[error,isError,isSuccess,navigate,handleIncompleteSignup,state?.phoneNumber])

  return (
    <div>
      <div className="w-screen h-[calc(98vh-80px)] flex flex-col items-center justify-center overflow-x-clip overflow-y-clip">
        <img
          className="absolute left-0 top-0 w-full h-full -z-50 "
          src="./images/backgroundImg.png"
          alt="/"
        />

        {/* <img
          className="w-[180px]"
          src="./images/LOGO.png"
          alt="/"
        /> */}
        {/* Actual form */}
        <div className=" flex flex-col justify-center h-[550px] w-[900px] bg-gradient-to-t from-white to-[#dae3e6] rounded-xl shadow shadow-gray-500">
          <div className="mb-4 font-bold text-center  py-4 rounded-xl tracking-wider text-xl"><p>New Beginnings brings New Opportunities!!!</p></div>
          {/* Right side */}
          <div className="flex justify-center items-center">
            <ToastContainer />
            <div className="p-4 flex flex-col justify-around rounded-l-2xl text-center w-1/2">
              <form className="">

              <div className="flex flex-col text-left relative">
                  <label htmlFor="Name" className="ml-5"> Name</label>
                  <input
                    className=" p-1 my-2  mx-4 text-center rounded-md outline-none"
                    id="Name"
                    type="text"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    placeholder="Enter Your Name"
                    required={true}
                  />
                </div>


              <div className="flex flex-col text-left relative">
                  <label htmlFor="userName" className="ml-5"> UserName </label>
                  <input
                    className=" p-1 my-2  mx-4 text-center rounded-md outline-none"
                    id="userName"
                    type="text"
                    value={userName}
                    onChange={(e)=>{setUserName(e.target.value)}}
                    placeholder="Enter Your UserName"
                    required={true}
                  />
                </div>

                <div className="flex flex-col text-left relative">
                  <label htmlFor="password" className="ml-5"> Password </label>
                  <input
                    className=" p-1 my-2  mx-4 text-center rounded-md outline-none"
                    id="password"
                    type="Password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder="************"
                    required={true}
                  />
                </div>
                <div className="flex flex-col text-left relative">
                  <label htmlFor="reEnterPassword" className="ml-5">Re Enter Password</label>
                  <input
                    className={` p-1 my-2  mx-4 text-center rounded-md outline-none border-b-2 ${password===reEnterPassword?`border-b-black`:`border-b-red-600`}`}
                    id="reEnterPassword"
                    type={passwordVisibilityFlag ? "text" : "password"}
                    value={reEnterPassword}
                    onChange={(e)=>{setReEnterPassword(e.target.value)}}
                    placeholder="************"
                    required={true}
                  />
                  <button className="cursor-pointer absolute right-[30px] top-8 bg-white border-none active:border-none focus:border-none h-4" onClick={handlePasswordVisibility}><VisibilityIcon className="" /></button>
                </div>
                {/* for captcha */}

                <div className="flex justify-center">
                    <button onClick={setCredentials} className="border  my-5 py-2 px-5 rounded-2xl bg-[#003d4d] hover:bg-[#003d4dcc] text-white cursor-pointer">
                      Submit
                    </button>
                </div>
              </form>
              {isLoading?<p>Loading...</p>:null}
              {isError && <span>Oops something went wrong</span>}
              {/* already have a  account  */}
              <div className="flex justify-center items-center">
                <p className=" mr-4">Already have an Account?</p>
                <Link to="/login">
                  <button className="border w-auto my-5 py-2 px-3 rounded-2xl bg-[#57a7b3] hover:bg-[#57a7b3cc] text-white cursor-pointer">
                    Login
                  </button>
                </Link>
              </div>
            </div>
            {/* Left side */}
            <div className="lg:flex w-1/2">
              <img
                className="rounded-2xl w-[400px]"
                src="../images/loginImg.png"
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetCredentials