import JobCard from "./JobCard";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Slider from "./Slider";

export default function Filter() {
  const [applyFiltersFlag, setapplyFiltersFlag] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = () => {
    setapplyFiltersFlag(!applyFiltersFlag);
  };

  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="h-[100vh] w-full bg-[#f9f9f9] flex justify-center items-center overflow-clip flex-col lg:flex-row">
      <div
        className={`lg:w-[30%] w-[80%] ${
          applyFiltersFlag ? `h-[90%]` : `h-[20%]`
        } lg:h-full flex justify-center items-center`}
      >
        <div
          className={`w-full lg:w-[80%] ${
            applyFiltersFlag
              ? `h-full transition-all ease-in-out duration-500`
              : `h-0 ease-in-out duration-500`
          } lg:h-[80%] box-border flex justify-center items-center flex-col shadow-md shadow-gray-400 rounded-xl pt-5 text-[#003d4d] relative bg-[#f9f9f9] pb-5`}
        >
          <div className="flex justify-between items-center pb-10 pt-10 w-[80%]">
            <h1 className="text-xl font-bold">Apply Filters</h1>
            <div onClick={handleClick} className="cursor-pointer">
              <MenuIcon onClick={handleClick} />
            </div>
          </div>
          <div
            className={`${
              applyFiltersFlag
                ? `h-full transition-all ease-in-out duration-500`
                : `h-0 transition-all ease-in-out duration-500`
            } lg:h-full flex flex-col justify-around items-center overflow-clip`}
          >
            <div className="flex flex-col w-[98%]">
              <label className="mb-1 ml-1 font-semibold">Category</label>
              <input
                type="text"
                placeholder="eg. Marketing"
                className="shadow shadow-gray-400 py-3 px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col w-[98%]">
              <label className="mb-1 ml-1 font-semibold">Location</label>
              <input
                type="text"
                placeholder="eg. Mumbai"
                className="shadow shadow-gray-400 py-3 px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col w-[98%]">
              <label className="mb-1 ml-1 font-semibold">Pincode</label>
              <input
                type="text"
                placeholder="eg. 560078"
                className="shadow shadow-gray-400 py-3 px-2 rounded-lg"
              />
            </div>
            <form className="grid grid-cols-2 gap-x-10 ml-4">
              <div>
                <label className="font-medium">
                  <input
                    type="checkbox"
                    className="cursor-pointer mr-2"
                    value="Work from Home"
                    checked={selectedOption === "Work from Home"}
                    onChange={handleCheckboxChange}
                  />
                  Work from Home
                </label>
              </div>
              <div>
                <label className="font-medium">
                  <input
                    type="checkbox"
                    className="cursor-pointer mr-2"
                    value="Work from Office"
                    checked={selectedOption === "Work from Office"}
                    onChange={handleCheckboxChange}
                  />
                  Work from Office
                </label>
              </div>
            </form>

            <div className="flex flex-col w-[98%]">
              <label className="mb-1 ml-1 font-semibold">Salary Type</label>
              <select className="shadow shadow-gray-400 py-3 px-2 rounded-lg bg-white">
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
            <div className="w-[98%]">
              <h1 className="mb-1 font-semibold">Minimum Stipend (Rs.)</h1>
              <Slider />
            </div>
            <div className="flex flex-col w-[98%]">
              <lable className="mb-1 ml-1 font-semibold">Starting Date</lable>
              <input
                type="date"
                placeholder="Start Date"
                className="shadow shadow-gray-400 py-3 px-2 rounded-lg"
              />
            </div>
            {/* <div className="flex flex-col w-[98%]">
                            <lable className="mb-1 ml-1 font-semibold">Company</lable>
                            <input type="text" placeholder="Company" className="shadow shadow-gray-400 py-3 px-2 rounded-lg" />
                        </div> */}
          </div>
        </div>
      </div>
      <div
        className={`lg:w-[70%] ${
          applyFiltersFlag ? `h-0 overflow-clip` : `h-full`
        } lg:h-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:p-10 overflow-y-scroll`}
      >
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}
