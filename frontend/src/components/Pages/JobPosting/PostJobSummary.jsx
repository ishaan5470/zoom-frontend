import { GrLocation } from "react-icons/gr";
import { GiTakeMyMoney, GiSandsOfTime } from "react-icons/gi";
import { MdEdit } from "react-icons/md";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BsPlayCircle, BsPersonVcardFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link, Element } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../../redux/slices/jobPostSlice";

const summary = [
  "Job Description",
  "Required Skills",
  "Perks & Benefits",
  "About Company",
  "Job Summary",
];

export default function PostJobSummary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  console.log(formData);

  const [selectedSection, setSelectedSection] = useState(null);

  const handleJobPost = () => {
    console.log(formData);
    console.log("job posted");
  };

  const handleNavigation = (item) => {
    setSelectedSection(item);
  };

  const handleEdit = () => {
    dispatch(setFormData(formData));
    navigate("/jobposting");
  };

  return (
    <div>
      {/* Heading */}
      <header className="flex flex-col text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#003d4d] my-10">
          Post an Oppurtunity
        </h1>
        <div className="flex justify-center items-center ">
          <div className="flex flex-col gap-5 items-end">
            <img className="" src="images/ProfileIcon.png" alt="profile-icon" />
            <p className="-mr-8 md:text-xl font-semibold">Contact Details</p>
          </div>

          <div className="bg-[#003d4d] w-[50%] h-1  max-sm:-mt-[4rem]"></div>

          <div className="flex flex-col gap-5 items-start">
            <img className="" src="images/bag.png" alt="bg-icon"></img>
            <p className="-ml-10 md:text-xl font-semibold">
              Post Job/Internship
            </p>
          </div>
        </div>
        <h1 className="text-[#000000C9] text-3xl md:text-5xl font-bold mt-5 md:mt-10 mb-5 md:mb-10">
          Job Summary
        </h1>
      </header>

      {/* Summary */}
      <section className="w-full flex items-center flex-col bg-[#f1f1f1]">
        {/* first div */}

        <div className="border-box w-[90%] md:w-[80%] lg:w-[75%]  xl:w-[60%]   p-3 md:p-6 bg-[#FFFFFF] mt-5 md:mt-10 rounded-xl shadow-md shadow-gray-300">
          <div className="w-full flex justify-between  gap-3 md:gap-8">
            <div className="w-1/3 flex flex-col gap-4">
              <img src="images/amazon.png" alt="company logo"></img>
              <span className="w-full text-center bg-[#E7F0F1] text-[#003D4D] px-3.5 py-1 text-sm sm:text-lg font-semibold rounded-full">
                {formData && formData.WorkType}
              </span>
              <span className=" max-md:hidden w-full text-center text-[#003D4D] px-3.5 py-1 text-sm md:text-lg font-semibold rounded-full shadow-md shadow-gray-300">
                {formData && formData.ExperienceLevel}
              </span>
            </div>

            <div className="flex flex-col md:w-full ">
              <div>
                <span className="text-xl md:text-4xl text-[#003D4D] mb-1">
                  {formData && formData.JobProfile}
                </span>
                <p className=" text-sm sm:text-xl  font-medium mb-5">
                  Company Name
                </p>
                <div className="w-full flex justify-between gap-4 sm:gap-10">
                  <span className="flex justify-center items-center">
                    <GrLocation className="text-[#003D4D] text-xl sm:text-4xl" />
                    <p className="font-semibold ml-1 md:ml-3 text-sm sm:text-2xl">
                      Location
                    </p>
                  </span>

                  <span className="flex justify-center items-center font-semibold">
                    <GiTakeMyMoney className="text-[#003D4D] text-2xl sm:text-4xl" />
                    <p className="font-semibold ml-1 md:ml-3 text-sm sm:text-2xl">
                      {formData &&
                        (formData.SalaryType.Price.fixed ||
                          formData.SalaryType.Price.range ||
                          formData.SalaryType.Price.negotiable)}
                    </p>
                  </span>

                  <span className="max-md:hidden flex justify-center items-center font-semibold gap-2">
                    <BsPersonVcardFill className="text-3xl" />
                    {formData && formData.jobType}
                  </span>
                </div>
              </div>

              <div className="flex justify-between gap-3 items-start">
                <div className="max-md:hidden flex gap-1 md:gap-3 justify-start md:mt-10">
                  <BsPlayCircle className="text-[#003D4D] text-2xl md:text-4xl" />
                  <span className="flex flex-col md:gap-3 text-[#003D4D] text-sm md:text-xl font-md">
                    START DATE
                    <span className="text-[#4B4949] ">Immediately</span>
                  </span>
                </div>

                <div className=" max-md:hidden flex gap-1 md:gap-3 justify-start md:mt-10">
                  <GiSandsOfTime className="text-[#003D4D] text-2xl md:text-4xl" />
                  <span className="flex flex-col md:gap-3 text-[#003D4D] text-sm md:text-xl font-md">
                    APPLY BY
                    <span className="text-[#4B4949]">
                      {/* {formData && formData.StartDate.toDateString()} */}
                      {formData &&
                        formData.StartDate}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleEdit}
              type="button"
              className="flex items-start max-sm:-ml-5  text-[#003D4D] gap-1 text-sm sm:text-xl font-medium"
            >
              Edit <MdEdit />
            </button>
          </div>
        </div>

        {/* second div */}
        <div className="border-box w-[90%] md:w-[80%] lg:w-[75%]  xl:w-[60%]    flex flex-col bg-[#FFFFFF] mt-10 rounded-xl shadow-md shadow-gray-300">
          {/* naviagation bar */}
          <div className="bg-[#003d4d]/20 p-2 w-full md:text-gray-500 md:text-xl rounded-t-lg font-semibold flex items-center justify-evenly max-md:hidden">
            {summary.map((item) => (
              <Link
                key={item}
                activeClass="border-b-4 border-[#003d4d]"
                to={item}
                smooth={true}
                offset={-70} // Adjust the offset if needed
                duration={500} // Adjust the scroll duration if needed
              >
                <p
                  className={`w-full flex justify-between cursor-pointer ${
                    selectedSection === item
                      ? "border-b-4 border-[#003d4d]"
                      : ""
                  }`}
                  onClick={() => {
                    handleNavigation(item);
                  }}
                >
                  <span className="mr-1">{item}</span>
                </p>
              </Link>
            ))}
          </div>

          {/* job description */}
          <div className=" border-box p-5 md:p-6">
            <Element name="Job Description">
              <div>
                <span className="text-xl sm:text-3xl text-[#003D4D] font-semibold">
                  Job Description:
                </span>
                <p className="w-full text-justify list-disc list-outside md:text-2xl mt-3  mb-7">
                  {formData && formData.Responsibilities}
                </p>
              </div>
            </Element>

            {/* Required skills */}
            <Element name="Required Skills">
              <div>
                <span className="text-xl sm:text-3xl text-[#003D4D] font-semibold ">
                  Required Skills:
                </span>
                <div className="flex gap-3 flex-wrap mt-3 mb-7">
                  {formData &&
                    formData.Skills.map((item, index) => {
                      return (
                        <span
                          key={index}
                          className=" bg-[#E7F0F1] text-[#003D4D] px-3.5 py-1 text-sm sm:text-lg font-semibold rounded-full"
                        >
                          {item.skill}
                        </span>
                      );
                    })}
                </div>
              </div>
            </Element>

            {/* perks and benefits */}
            <Element name="Perks & Benefits">
              <div>
                <span className="text-xl md:text-3xl text-[#003D4D] font-semibold">
                  Perks & Benefits:
                </span>
                <div className="w-full grid grid-cols-2  md:grid-cols-3 gap-2 md:gap-4  mt-3  mb-7">
                  {formData &&
                    formData.Benefits.map((benefit) => {
                      return (
                        <span
                          key={benefit}
                          className="flex max-sm:text-sm items-center gap-2  "
                        >
                          <CheckCircleIcon className="bg-[#57A7B380]  text-[#003D4D] rounded-full" />
                          {benefit}
                        </span>
                      );
                    })}
                </div>
              </div>
            </Element>

            {/* about company */}
            <Element>
              <div name="About Company">
                <span className="text-xl md:text-3xl text-[#003D4D] font-semibold">
                  About Company:
                </span>
                <p className="text-lg mt-3 mb-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est lab
                </p>
              </div>
            </Element>

            {/* jobsummary */}
            <Element>
              <div name="Job Summary">
                <span className="text-xl md:text-3xl text-[#003D4D] font-semibold">
                  Job Summary:
                </span>
                <div className="flex flex-wrap gap-5 mt-3 justify-between">
                  <span className="text-lg md:text-xl">
                    <span className="font-semibold">Job Category:- </span>
                    IT Services
                  </span>
                  <span className=" text-lg md:text-xl">
                    <span className="font-semibold">No. of Openings:- </span>
                    {formData && formData.NoOfOpenings}
                  </span>
                  <span className="text-lg md:text-xl">
                    <span className="font-semibold">Notice Period:- </span>
                    {formData && formData.NoticePeriod.No}{" "}
                    {formData && formData.NoticePeriod.duration}
                  </span>
                  <span className="text-lg md:text-xl">
                    <span className="font-semibold">Website:- </span>
                    www.industryweb.com
                  </span>
                </div>
              </div>
            </Element>

            {/* next  button */}
            <div className="flex items-center justify-between mt-10">
              <button
                type="submit"
                onClick={handleJobPost}
                className="text-3xl px-9 py-3 bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white rounded-full"
              >
                <span>Post Job</span>
              </button>
              <input
                className=" text-[#003D4D]  text-xl font-semibold "
                type="submit"
                value="Discard"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
