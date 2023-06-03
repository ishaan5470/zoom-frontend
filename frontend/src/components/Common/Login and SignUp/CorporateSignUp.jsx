import React from 'react'
import { Link } from "react-router-dom";

export default function CorporateSignUp() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            {/* Background Image */}
            <img
                className="absolute left-0 top-0 w-full h-full object-cover -z-50 "
                src="../images/backgroundImg.png"
                alt="background"
            />
            <img
                className="mx-auto"
                src="../images/LOGO.png"
                alt="/"
                width={180}
            />
            {/* Actual form */}
            <div className=" flex flex-col items-center justify-center w-[900px] h-[500px] bg-gradient-to-t from-white to-[#dae3e6] relative rounded-xl shadow shadow-gray-500">
                <div className="mb-4 font-bold text-center py-4 rounded-xl tracking-wider text-xl"><p>Trust Us! Hiring will be Funtastic With ZealYug</p></div>
                {/* Right side */}
                <div className="flex justify-center">
                    <div className="p-4 flex flex-col justify-around text-center">
                        <form>
                            <div className="flex flex-col py-2 text-center pt-8 ">
                                <label className="p-4">Enter Your Email</label>
                                <input
                                    className="border p-1 mx-4 text-center rounded-md"
                                    type="email"
                                    placeholder="name@company.com"
                                />
                            </div>
                            <p className="flex justify-center items-center gap-2 font-light mt-2 mb-4"><input type="checkbox" className="cursor-pointer" /><label>I don't have a work email</label></p>
                            {/* for captcha */}

                            <div className="flex justify-center">
                                <Link to='/signup/CorporateSignUp/verifyOTP'>
                                    <button type="submit" className="border px-2  my-1 py-2 rounded-3xl bg-gradient-to-br from-[#003d4d] to-[#57a7b3] hover:opacity-90 text-white cursor-pointer">
                                        Send OTP
                                    </button>
                                </Link>

                            </div>

                        </form>
                        <div className="flex justify-between items-center gap-14">
                            <p className="">Already have an Account?</p>
                            <Link to="/login">
                                <button className="border w-auto my-5 py-2 px-5 rounded-2xl bg-gradient-to-br from-[#003d4d] to-[#57a7b3]  hover:opacity-90 text-white ">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Left side */}
                    <div className="hidden m-auto lg:flex  ">
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
    )
}
