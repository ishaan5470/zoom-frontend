import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { Link } from "react-router-dom";


const Header = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <div className="sticky top-0">
            <div className="flex justify-between items-center h-[80px] w-full text-black font-bold bg-[#f9f9f9] lg:px-20 px-5 overflow-x-clip mb-2">
                <div><img src="/images/LOGO.png" className="h-[60px]" alt="Logo" /></div>
                <div className="flex justify-center items-center ">
                    <div className="mr-5"><ul className="justify-center items-center hidden lg:flex">
                        <li className="p-4 hover:border-b-2 cursor-pointer border-black">Home</li>
                        <li className="p-4 hover:border-b-2 cursor-pointer border-black">Find Oppurtunity</li>
                        <li className="p-4 hover:border-b-2 cursor-pointer border-black">Share post</li>
                        <li className="p-4 hover:border-b-2 cursor-pointer border-black">Find Talent</li>
                        <li className="p-4 hover:border-b-2 cursor-pointer border-black">Instant job</li>
                    </ul>
                    </div>
                    <div className="flex justify-center items-center gap-3 box-border">
                        {/* <Link to="/login"><button className="bg-white px-3 py-2 rounded-full hover:bg-gradient-to-br from-[#003d4d] to-[#57a7b3] hover:text-white border border-[#003d4d] transition-all hover:ease-in-out duration-300">Login</button></Link> */}
                        {/* <Link to="/signup"><button className="bg-gradient-to-br from-[#003d4d] to-[#57a7b3] px-3 py-2 rounded-full hover:bg-none hover:text-[#003d4d] border-[1px] border-[#003d4d] font-semibold text-white transition-all hover:ease-in-out duration-300">Signup</button></Link> */}
                    </div>

                    <div onClick={handleNav} className="block ml-5 lg:hidden">
                        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>

                    <div className={`${!nav ? "absolute right-0 top-[80px] bg-[#f9f9f9] z-20 transition-all ease-in-out duration-500" : "absolute rounded-xl -right-[100%]"}`}>
                        <ul className={`${nav ? "hidden" : "flex flex-col "}`}>
                            <li className="p-4">Home</li>
                            <li className="p-4">Find Oppurtunity</li>
                            <li className="p-4">Share post</li>
                            <li className="p-4">Find Talent</li>
                            <li className="p-4">Instant job</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;