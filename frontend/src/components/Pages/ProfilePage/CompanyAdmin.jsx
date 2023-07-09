import React, { useState, useEffect } from "react";
import InfoCard from "./common/Sidebar/InfoCard/InfoCard.jsx";
// import PostCard from './PostCard/PostCard.jsx';
import Sidebar from "./common/Sidebar/Sidebar.jsx";
import PostInProfile from "./common/Sidebar/PostInProfile/PostInProfile.jsx";
import Training from "./common/Popups/Training.jsx";
import Profile from "./common/Popups/Profile.jsx";
import About from "./common/Popups/About.jsx";
import Job from "./common/Popups/Job.jsx";
import Education from "./common/Popups/Education.jsx";
import Internship from "./common/Popups/Internship.jsx";

import {
  useFetchUserInfoQuery,
  useFetchPostsQuery,
} from "../../../redux/slices/sspost.js";

export default function Profilepage({ id }) {
  const [popUp, setPopUp] = useState("");
  const [menu, setMenu] = useState(false);

  const [like, setLike] = useState(0);
  const [follow, setfollow] = useState(0);
  const handleSettings = (e) => {
    console.log(e.target.value);
    setPopUp(e.target.value);
  };
  const handleCancel = () => {
    setPopUp("");
  };
  const handleMenu = () => {
    setMenu(!menu);
  };

  const {
    data: data1,
    isLoading: load,
    isError: err,
    isSuccess: succ,
  } = useFetchUserInfoQuery(id);
  const { data, isLoading, isError, isSuccess } = useFetchPostsQuery(id);

  useEffect(() => {
    if (isSuccess && succ) {
      let totalLikes = 0;
      Object.values(data.data.data).forEach((item) => {
        if (item.likes) {
          totalLikes += item.likes.length;
        }
      });
      setLike(totalLikes);
    }
  }, [data]);
  console.log(data1);
  console.log(data);
  const [rmFlag, SetrmFlag] = useState(false);

  function handleClick() {
    SetrmFlag(!rmFlag);
  }

  const [changeDivFlag, SetchangeDivFlag] = useState({
    Posts: true,
    About: false,
    Links: false,
    Contact: false,
    Admin: false,
  });

  function PostsHandler() {
    SetchangeDivFlag({
      Posts: true,
      About: false,
      Links: false,
      Contact: false,

      Admin: false,
    });
  }

  function AboutHandler() {
    SetchangeDivFlag({
      Posts: false,
      About: true,
      Links: false,
      Contact: false,

      Admin: false,
    });
  }
  function LinksHandler() {
    SetchangeDivFlag({
      Posts: false,
      About: false,
      Links: true,
      Contact: false,

      Admin: false,
    });
  }
  function ContactHandler() {
    SetchangeDivFlag({
      Posts: false,
      About: false,
      Links: false,
      Contact: true,

      Admin: false,
    });
  }
  function AdminHandler() {
    SetchangeDivFlag({
      Posts: false,
      About: false,
      Links: false,
      Contact: false,

      Admin: true,
    });
  }

  const [editFlag, setEditFlag] = useState(false);

  function handleEdit(event) {
    setEditFlag(!editFlag);
    event.preventDefault();
  }

  let profileInfo = {
    personalInfo: {
      Name: "",
      tagline: "Hi there",
      aboutText:
        "Cras id sapien auctor, dignissim ante nec, rhoncus libero. Fusce ut urna quis massa consectetur mollis. Integer cursus neque vel lorem auctor tincidunt. Pellentesque sit amet lobortis metus. Praesent urna mauris, bibendum sodales urna nec, malesuada tincidunt turpis. Nulla vitae fringilla quam. Maecenas pretium nulla tellus, non elementum erat iaculis vel. Quisque fermentum congue nulla, vitae aliquet risus molestie vel. Curabitur lobortis laoreet cursus",
      Email: "pandit@email.com",
      Phone: "+91 1234567890",
      Gender: "Male",
      DOB: "dd/mm/yyyy",
      githubLink: "#",
      facebookLink: "#",
      linkedinLink: "#",
    },

    About: [
      {
        AboutName: "HTML",
        AboutDescription:
          "It is a very advanced next level out of the world language",
      },
    ],

    Links: [
      {
        Heading: "ABC School",
        Links: "http://www.",
        Description: "It was a very bad school",
      },
    ],

    Contact: [
      {
        CertificationName: "ABC School",
        Description: "It was a very bad school",
      },
      {
        CertificationName: "DEF Comlej",
        Description: "It was a very bad Comlej",
      },
    ],
  };

  if (isLoading || load) {
    return (
      <>
        <div className="">Loading...</div>
      </>
    );
  }

  if (isError || err) {
    return <div>Error: {isError.message}</div>;
  }

  if (isSuccess && succ) {
    let totalLikes = 0;
    Object.values(data.data.data).forEach((item) => {
      if (item.likes) {
        totalLikes += item.likes.length;
      }
    });

    return (
      <div>
        {/* intro Div */}
        <div className={`${popUp === "" ? `opacity-100` : `opacity-20`}`}>
          <div className={`relative flex flex-wrap justify-center gap-20 z-10`}>
            <div className="hideScrollbar space-y-10 h-full p-5">
              <div className="shadow-md shadow-gray-500 rounded-xl max-w-[1000px] mx-auto space-x-10">
                <div className="flex  max-w-[1000px] mx-auto space-x-10">
                  <div className="w-full md:w-[50%] h-[200px] flex items-center justify-center rounded-full">
                    <div className=" h-[100px] w-[100px]  md:h-[100px] md:w-[100px] flex items-center justify-center rounded-full border-2 border-black">
                      {/* <video className="h-[180px] w-full rounded-full" autoPlay loop muted>
        <source src="./Images/video.mp4" type="video/mp4" />
        Your Browser doesn't support video tag
      </video> */}
                      {/* <img src={""} className="h-[180px] w-full rounded-full" alt="" /> */}
                    </div>
                    {/* <div className="absolute flex items-center justify-center object-contain overflow-hidden h-[70px] w-[70px] rounded-full top-[60%] left-[85%] -translate-x-1/2">
      <img className="h-14" src="./Images/personImg.png" alt="profileImg" />
    </div> */}
                  </div>

                  <div className="flex items-center justify-items-start gap-5 p-5 rounded-xl w-full h-[180px] overflow-hidden">
                    <div className="w-full text-[#003d4d] space-y-2">
                      <div className="flex space-x-5">
                        <h1 className="font-extrabold text-3xl">
                          {data1.data.firstName}
                        </h1>
                        <img
                          src="Images\Profile_badge.png"
                          alt=""
                          className="w-12 h-12"
                        />
                      </div>
                      <h4 className="opacity-60 font-semibold break-words text-xl">
                        {data1.data.profile}
                      </h4>
                      <h1 className="opacity-60 font-semibold break-words">
                        Location
                      </h1>
                      <h1 className="flex opacity-60 font-semibold">
                        Impact you Create
                        <p className="text-lg text-gray-500">(Max.30 words)</p>
                      </h1>
                    </div>
                  </div>

                  <div className=" absolute md:relative p-5">
                    <div className="absolute right-0">
                      <img
                        src="Images\pen.png"
                        alt=""
                        className="right-0 w-5 h-5 text-[#003d4d] cursor-pointer pointer-event-none"
                        fill="currentColor"
                      />
                      <button
                        name="Profile"
                        value="Profile"
                        onClick={handleSettings}
                        className="absolute top-0 left-0 p-3"
                      ></button>
                    </div>
                  </div>

                  <div className="md:flex md:flex-col hidden text-center">
                    <div className="h-[150px] w-[150px] rounded-xl">
                      <img src="./Images/Postjob.png" alt="postjob" />
                    </div>
                    <button className="text-sm bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-5 rounded-full mx-auto">
                      Post Job
                    </button>
                  </div>
                </div>

                <div className="relative flex justify-around items-center space-x-10 ">
                  <div className="w-[20%] bg-gray-200 justify-self-start rounded-full dark:bg-gray-700">
                    <div className="w-[45%] bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                      45%
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="p-5 rounded-xl justify-center items-center text-center font-semibold">
                      <h1>{data1.data.followers.length}</h1>
                      <h1 className="text-[#003d4d]">Supporters</h1>
                    </div>
                    <div className="p-5 rounded-xl justify-center items-center text-center font-semibold">
                      <h1>{like}</h1>
                      <h1 className="text-[#003d4d]">Appreciations</h1>
                    </div>
                  </div>
                  {/* Menu Option */}
                </div>
              </div>

              {/* Followers and Likes Div */}

              {/* About */}

              {/* Last Div */}

              <div className="shadow-md shadow-gray-500 rounded-xl">
                <div>
                  <div className="relative  bg-white rounded-xl">
                    <div className="overflow-x-auto max-w-[2000px]">
                      <div className="flex items-center justify-start max-w-[2000px] bg-white rounded-xl">
                        <div className=" bg-[#003d4d]/20 md:w-full text-gray-500 text-xl font-semibold flex items-center rounded-xl    ">
                          <div className=" flex items-center rounded-xl">
                            <div
                              className={` cursor-pointer p-5 ${
                                changeDivFlag.Posts
                                  ? "text-[#003d4d] border-b-4 border-b-[#003d4d]"
                                  : null
                              }`}
                              onClick={PostsHandler}
                            >
                              <span
                                className=" whitespace-nowrap mr-1"
                                id="Work Experience"
                              >
                                Posts
                              </span>
                            </div>

                            <div
                              className={` cursor-pointer p-5 rounded-t-xl  ${
                                changeDivFlag.About
                                  ? "text-[#003d4d] border-b-4 border-b-[#003d4d]"
                                  : null
                              }`}
                              onClick={AboutHandler}
                            >
                              <p
                                className="mr-1  whitespace-nowrap"
                                id="Skills"
                              >
                                Business Overview
                              </p>
                            </div>
                            <div
                              className={`cursor-pointer p-5  rounded-t-xl ${
                                changeDivFlag.Links
                                  ? "text-[#003d4d] border-b-4 border-b-[#003d4d]"
                                  : null
                              }`}
                              onClick={LinksHandler}
                            >
                              <span
                                className="mr-1 whitespace-nowrap"
                                id="Education"
                              >
                                Links
                              </span>
                            </div>
                            <div
                              className={`cursor-pointer p-5  rounded-t-xl ${
                                changeDivFlag.Contact
                                  ? "text-[#003d4d] border-b-4 border-b-[#003d4d]"
                                  : null
                              }`}
                              onClick={ContactHandler}
                            >
                              <span
                                className="mr-1 whitespace-nowrap"
                                id="Certification"
                              >
                                Contact Us
                              </span>
                            </div>
                            <div
                              className={`cursor-pointer p-5  rounded-t-xl ${
                                changeDivFlag.Admin
                                  ? "text-[#003d4d] border-b-4 border-b-[#003d4d]"
                                  : null
                              }`}
                              onClick={AdminHandler}
                            >
                              <span
                                className="mr-1 whitespace-nowrap"
                                id="Certification"
                              >
                                Admin
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      {/* Post  */}
                      <div
                        className={`pl-[40px] pt-[8px] w-full grid md:grid-cols-3 grid-cols-1  ${
                          changeDivFlag.Posts
                            ? "visible scale-100 static z-50 h-[305px]"
                            : "invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
                        }`}
                        style={{ overflowY: "scroll" }}
                      >
                        {[...data.data.data].reverse().map((post) => (
                          <PostInProfile post={post} />
                        ))}
                      </div>

                      {/* About  */}

                      <div
                        className={` flex flex-col space-y-5 max-w-[1000px]  p-10  h-fit  ${
                          changeDivFlag.About
                            ? "visible scale-100 static z-50"
                            : "invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
                        }`}
                      >
                        <div className="relative">
                          <h1 className="text-[#003d4d] text-3xl font-bold">
                            About
                          </h1>
                          <div className="absolute right-0">
                            <img
                              src="Images\pen.png"
                              alt=""
                              className="  right-0 w-5 h-5 text-[#003d4d] cursor-pointer  pointer-event-none "
                              fill="currentColor"
                            />
                            <button
                              name="About"
                              value="About"
                              onClick={handleSettings}
                              className="absolute top-0 left-0 p-3   "
                            ></button>
                          </div>
                        </div>
                        <h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sapiente in quasi molestias officia dolorem
                          earum maxime modi excepturi quidem? Animi ea aperiam
                          possimus aliquam nemo, labore vitae minima ducimus
                          sed?
                        </h1>

                        <div>
                          <h1 className="text-[#003d4d] font-bold">Industry</h1>
                          <h1>Social Media</h1>
                        </div>
                        <div>
                          <h1 className="text-[#003d4d] font-bold">Website</h1>
                          <h1>http://</h1>
                        </div>

                        <div>
                          <h1 className="text-[#003d4d] font-bold">
                            Main Location
                          </h1>
                          <h1>Delhi</h1>
                        </div>

                        <div>
                          <h1 className="text-[#003d4d] font-bold">
                            Type of Business
                          </h1>
                          <h1>Private</h1>
                        </div>

                        <div>
                          <h1 className="text-[#003d4d] font-bold">
                            Business Size
                          </h1>
                          <h1>11 to 50 Members</h1>
                        </div>

                        <div>
                          <h1 className="text-[#003d4d] font-bold">Launched</h1>
                          <h1>2023</h1>
                        </div>
                      </div>

                      {/* Links  */}
                      <div
                        className={` flex flex-col space-y-5 w-full px-10 py-12  h-fit  ${
                          changeDivFlag.Links
                            ? "visible scale-100 static z-50"
                            : "invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
                        }`}
                      >
                        <h1 className="text-[#003d4d] text-3xl font-bold">
                          Add Links
                        </h1>
                        <img src="" alt="" />
                        <div className="absolute right-10">
                          <img
                            src="Images\pen.png"
                            alt=""
                            className="  right-0 w-5 h-5 text-[#003d4d] cursor-pointer  pointer-event-none "
                            fill="currentColor"
                          />
                          <button
                            name="About"
                            value="About"
                            onClick={handleSettings}
                            className="absolute top-0 left-0 p-3   "
                          ></button>
                        </div>
                        <div className="flex">
                          <img
                            src="Images\links.png"
                            alt=""
                            className="w-20 h-20 "
                          />
                          <div className="space-y-5">
                            <input
                              className="p-5 text-xl bg-transparent outline-none border-2  rounded-tl-2xl rounded-br-2xl w-[60%] mx-auto shadow-lg"
                              type="text"
                              placeholder="Copy and paste or type the URL"
                            ></input>
                            <input
                              className="p-5 text-xl bg-transparent outline-none border-2  rounded-tl-2xl rounded-br-2xl w-[60%] mx-auto shadow-lg"
                              type="text"
                              placeholder="Heading"
                            ></input>
                            <textarea
                              className="p-5 text-xl bg-transparent outline-none border-2  rounded-tl-2xl rounded-br-2xl w-[60%] mx-auto shadow-lg"
                              type="text"
                              placeholder="Details"
                            />
                          </div>
                        </div>

                        {profileInfo.Links.map((Links) => {
                          return (
                            <div className="bg-[#f1f1f1]  shadow-lg rounded-2xl space-y-2 p-5">
                              <div>
                                <h1 className="text-[#003d4d] font-bold">
                                  Heading
                                </h1>
                                <h1 className="text-sm">{Links.Heading}</h1>
                              </div>
                              <div>
                                <h1 className="text-[#003d4d] font-bold">
                                  Link
                                </h1>
                                <h1 className="text-sm">{Links.Links}</h1>
                              </div>
                              <div>
                                <h1 className="text-[#003d4d] font-bold">
                                  Description
                                </h1>
                                <h1 className="text-sm">{Links.Description}</h1>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Contact Us  */}
                      <div
                        className={` flex flex-col space-y-5 w-full px-10 py-12  h-fit  ${
                          changeDivFlag.Contact
                            ? "visible scale-100 static z-50"
                            : "invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
                        }`}
                      >
                        <h1 className="text-[#003d4d] text-3xl font-bold">
                          Contact Details
                        </h1>
                        <div className="text-xl text-gray-400 font-semibold flex space-x-5">
                          <img
                            src="Images\email.png"
                            alt=""
                            className="w-8 h-8 "
                          />
                          <h1>Business Email</h1>
                        </div>

                        <div className="text-xl text-gray-400 font-semibold flex space-x-5">
                          <img
                            src="Images\phone.png"
                            alt=""
                            className="w-8 h-8 "
                          />
                          <h1>Business Phone Number</h1>
                        </div>

                        <div className="text-xl text-gray-400 font-semibold flex space-x-5">
                          <img
                            src="Images\profileLink.png"
                            alt=""
                            className="w-8 h-8 "
                          />
                          <h1>Profile Link</h1>
                        </div>

                        <div className="flex space-x-5">
                          <h1 className="text-xl text-gray-700 font-semibold">
                            Display Contact Details
                          </h1>
                          <label class="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              class="sr-only peer"
                            />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>

                      <div
                        className={` flex flex-col space-y-5 w-full  h-fit  ${
                          changeDivFlag.Admin
                            ? "visible scale-100 static z-50"
                            : "invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
                        }`}
                      >
                        {/* <div className="w-[987px] h-[707px] relative bg-white rounded-2xl shadow">
                                                    <div className="w-[248px] h-[53px] left-[690px] top-[43px] absolute bg-cyan-950 bg-opacity-80 rounded-2xl" />
                                                    <div className="p-[0px] left-[33px] top-[51px] absolute justify-start items-start gap-[10px] inline-flex">
                                                        <div className="text-cyan-950 text-[32px] font-semibold">Admin Section</div>
                                                    </div>
                                                    <div className="p-[0px] left-[33px] top-[488px] absolute" />
                                                    <div className="w-[196px] h-[35px] left-[742px] top-[56px] absolute text-white text-[23px] font-medium">Manage Admins</div>
                                                    <div className="w-[987px] h-[73px] left-[0px] top-[138px] absolute bg-white shadow" />
                                                    <div className="left-[119px] top-[159px] absolute text-cyan-950 text-[27px] font-medium">Profile</div>
                                                    <div className="left-[471px] top-[159px] absolute text-cyan-950 text-[27px] font-medium">Title</div>
                                                    <img className="w-[87px] h-[86px] left-[33px] top-[247px] absolute rounded-full" src="https://via.placeholder.com/87x86" />
                                                    <div className="w-[170px] h-[38px] left-[158px] top-[255px] absolute text-cyan-950 text-[24px] font-medium">Surveer Singh</div>
                                                    <div className="w-[135px] h-[26px] left-[471px] top-[275px] absolute text-cyan-950 text-[18px] font-semibold">Chief Admin</div>
                                                    <div className="w-[135px] h-[26px] left-[471px] top-[393px] absolute text-cyan-950 text-[18px] font-semibold">Creator Admin</div>
                                                    <div className="w-[135px] h-[26px] left-[471px] top-[541px] absolute text-cyan-950 text-[18px] font-semibold">Creator Admin</div>
                                                    <div className="w-[135px] h-[26px] left-[834px] top-[273px] absolute text-cyan-950 text-[18px] font-medium">Remove</div>
                                                    <div className="w-[135px] h-[26px] left-[834px] top-[393px] absolute text-cyan-950 text-[18px] font-medium">Remove</div>
                                                    <div className="w-[135px] h-[26px] left-[834px] top-[541px] absolute text-cyan-950 text-[18px] font-medium">Remove</div>
                                                    <div className="w-[232px] h-[49px] left-[158px] top-[294px] absolute text-cyan-950 text-[18px] font-normal leading-normal">Senior Technical Officer at ZealYug</div>
                                                    <img className="w-[23px] h-[23px] left-[543px] top-[165px] absolute" src="https://via.placeholder.com/23x23" />
                                                    <img className="w-[87px] h-[86px] left-[33px] top-[376px] absolute rounded-full" src="https://via.placeholder.com/87x86" />
                                                    <div className="w-[212px] h-[38px] left-[158px] top-[384px] absolute text-cyan-950 text-[24px] font-medium">Vikram Singhania</div>
                                                    <div className="w-[170px] h-[38px] left-[158px] top-[514px] absolute text-cyan-950 text-[24px] font-medium">Kristy Shastri</div>
                                                    <div className="w-[316px] h-[26px] left-[158px] top-[425px] absolute text-cyan-950 text-[18px] font-normal">Student at Lovely University</div>
                                                    <div className="w-[244px] h-[37px] left-[158px] top-[555px] absolute text-cyan-950 text-[18px] font-normal leading-normal">Student at Guru Gobind Singh Indraprastha University</div>
                                                    <img className="w-[86px] h-[86px] left-[34px] top-[506px] absolute rounded-full" src="https://via.placeholder.com/86x86" />
                                                </div> */}

                        <div class=" w-full overflow-x-auto">
                          <div class="w-full bg-white rounded-2xl shadow p-8">
                            <div className="flex justify-between">
                              <div class="header text-2xl font-bold text-cyan-950 mb-4">
                                Admin Section
                              </div>
                              <button class="item w-48 h-10 rounded-full bg-cyan-950 text-white text-lg font-medium flex items-center justify-center mb-4">
                                <div className="text-[1.5rem] mr-2">+</div>
                                Manage Admins
                              </button>
                            </div>

                            <div class="row flex items-center justify-between mb-4">
                              <div class="profile flex items-center gap-4">
                                <div class="name text-xl text-cyan-950">
                                  Profile
                                </div>
                              </div>
                            </div>
                            <div class="row flex items-center justify-between mb-4">
                              <div class="profile flex items-center gap-4">
                                <img
                                  class="avatar w-24 h-24 rounded-full"
                                  src="https://via.placeholder.com/87x86"
                                />
                                <div>
                                  <div class="name text-xl text-cyan-950">
                                    Surveer Singh
                                  </div>
                                  <div class="title text-base text-cyan-950">
                                    Senior Technical Officer at ZealYug
                                  </div>
                                </div>
                              </div>
                              <div class="remove btn">Remove</div>
                            </div>
                            <div class="row flex items-center justify-between mb-4">
                              <div class="profile flex items-center gap-4">
                                <img
                                  class="avatar w-24 h-24 rounded-full"
                                  src="https://via.placeholder.com/87x86"
                                />
                                <div>
                                  <div class="name text-xl text-cyan-950">
                                    Vikram Singhania
                                  </div>
                                  <div class="title text-base text-cyan-950">
                                    Student at Lovely University
                                  </div>
                                </div>
                              </div>
                              <div class="remove btn">Remove</div>
                            </div>
                            <div class="row flex items-center justify-between">
                              <div class="profile flex items-center gap-4">
                                <img
                                  class="avatar w-24 h-24 rounded-full"
                                  src="https://via.placeholder.com/87x86"
                                />
                                <div>
                                  <div class="name text-xl text-cyan-950">
                                    Kristy Shastri
                                  </div>
                                  <div class="title text-base text-cyan-950">
                                    Student at Guru Gobind Singh Indraprastha
                                    University
                                  </div>
                                </div>
                              </div>
                              <div class="remove btn">Remove</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 hidden md:flex">
              <Sidebar />
            </div>
          </div>
        </div>

        <Profile popUp={popUp} handleCancel={handleCancel} />
        {/* About  */}

        <About popUp={popUp} handleCancel={handleCancel} />

        {/* Education Pop Up   */}

        <Job popUp={popUp} handleCancel={handleCancel} />
        <Education popUp={popUp} handleCancel={handleCancel} />
        <Internship popUp={popUp} handleCancel={handleCancel} />

        {/* Internships Pop Up  */}

        {/* Training and Courses Pop Up  */}

        <Training popUp={popUp} handleCancel={handleCancel} />
      </div>
    );
  }
}
