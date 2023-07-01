import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';



function Navbar({user}) {
    console.log("Navbar user : ", user);
    const logout = () => {
        window.open("http://localhost:8000/auth/logout", "_self");
      };

    return (
        <div className="flex items-center justify-between  sticky h-[80px] top-0 left-0 z-50 shadow shadow-gray-500 bg-[#f9f9f9]">
            <div className="flex items-center gap-5 justify-center ml-10">
                <img src="./Images/LOGO.png" alt="LOGO" className="w-[200px]" />
            </div>

            {/* <div className="">
        <form className="flex justify-center items-center">
        <input className="w-full h-10 rounded-[40px] px-10 box-border inline" placeholder="Search for post,friends or video" />
        <button className="Searchbtn rounded-3xl h-10 w-10 cursor-pointer border-none bg-[#57a7b350]" type="submit"><SearchIcon /></button> 
        </form>
        </div>  */}

            <div className="flex justify-end items-center gap-10 mr-20">
                <div className="relative rounded-[40px]"><HomeIcon /></div>
                {/* <div className="relative rounded-[40px]"><People /> <span className="text-white text-[10px] bg-red-600 absolute -right-1 -top-3 rounded-[40px] h-4 w-4 flex justify-center items-center">2</span></div> */}
                {/* <div className="relative rounded-[40px]"><Notification /> <span className="text-white text-[10px] bg-red-600 absolute -right-1 -top-3 rounded-[40px] h-4 w-4 flex justify-center items-center">1</span></div> */}
                {/* <div className="relative rounded-[40px]"><ChatIcon /> <span className="text-white text-[10px] bg-red-600 absolute -right-1 -top-3 rounded-[40px] h-4 w-4 flex justify-center items-center">2</span></div> */}
                {/* <div className="relative rounded-[40px]"><BusinessCenterIcon /></div> */}
                <div className="relative rounded-[40px]"><BusinessCenterIcon /></div>
                <div className="h-10 w-10 bg-[#d1d1d1] rounded-[40px] flex items-center justify-center"><img src={user? user.profilePic: "./Images/personImg.png"} alt="ProfileImg" className="h-5 w-5"></img></div>{user?.name}
            <div onClick={logout}style={{cursor:"pointer"}}>Logout</div>
            </div>
        </div>
    );
}

export default Navbar