import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import JobSidebar from "./JobSidebar";
import RecentContacts from "./RecentContacts/RecentContacts";
import { useState } from "react";

function Sidebar() {
  const [search, setSearch] = useState("");

  const Jobs = [
    // {
    // Id:1,
    // Role:"Java Developer",
    // Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dignissim justo. Nam maximus pulvinar consequat. Aenean lobortis, tellus ac fermentum scelerisque. adipiscing elit. Cras et dignissim justo. Nam maximus pulvinar consequat. Aenean lobortis, tellus ac fermentum scelerisque"
    // },
    // {
    //   Id:2,
    //   Role:"BodyGuard",
    //   Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dignissim justo. Nam maximus pulvinar consequat. Aenean lobortis, tellus ac fermentum scelerisque. adipiscing elit. Cras et dignissim justo. Nam maximus pulvinar consequat. Aenean lobortis, tellus ac fermentum scelerisque"
    // }
  ];

  return (
    <div className="sticky top-0 overflow-y-hidden">
      <div>
        <input
          onChange={(e) => e.target.value}
          className="h-10 text-base pl-3 mt-2 ml-3 rounded-lg w-[95%] shadow shadow-black focus:outline-none"
          placeholder="Search"
        />
        <button className="absolute right-5 top-4">
          <SearchIcon />
        </button>
      </div>

      <RecentContacts />
      <div className="mt-5 bg-white rounded-xl ml-3 mr-1 max-h-[350px] shadow shadow-black hideScrollbar">
        <div className="flex flex-col items-center">
          <div>
            <p className="tracking-[1px] text-[black] text-[18px] font-[700] py-[8px]">
              Your Next Referral
            </p>
          </div>
          <div className="border-[0.5px] border-black w-[90%] mb-[10px]"></div>
          <div className=" flex justify-around w-[302px] h-[150px] pt-[10px] relative">
            <div className="text-lg">Points</div>
            <button className=" bg-lime-300 h-5 px-2 rounded-2xl">
              <div className=" text-black text-[13px] font-[500]">
                Completed
              </div>
            </button>
          </div>

          <div className=" flex justify-around  w-[302px] h-[150px] pt-[10px] relative">
            <div className="text-lg">Points</div>
            <button className=" bg-lime-300 h-5 px-2 rounded-2xl">
              <div className=" text-black text-[13px] font-[500]">
                Completed
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="mt-5 bg-white rounded-xl p-5 max-h-[500px] shadow shadow-black">
        <h2 className="text-center font-bold text-xl">Referrals</h2>
      </div> */}
    </div>
  );
}

export default Sidebar;
