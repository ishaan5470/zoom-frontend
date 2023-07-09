import React, { useState, useEffect } from 'react';
import InfoCard from './common/Sidebar/InfoCard/InfoCard.jsx';
// import PostCard from './PostCard/PostCard.jsx';
import Sidebar from './common/Sidebar/Sidebar.jsx';
import PostInProfile from './common/Sidebar/PostInProfile/PostInProfile.jsx'
import Profile from './common/Popups/Profile.jsx';
import About from './common/Popups/About.jsx';
import Job from './common/Popups/Job.jsx';
import Education from './common/Popups/Education.jsx';
import Internship from './common/Popups/Internship.jsx';
import Training from './common/Popups/Training.jsx';
import { useFetchMyPostsQuery, useFetchUserInfoQuery } from '../../../redux/slices/sspost.js';

import { BusinessCenterOutlined, FileDownloadOutlined, LocationOnOutlined } from '@mui/icons-material';

export default function Profilepage({ id }) {
    const [popUp, setPopUp] = useState("")
    const [menu, setMenu] = useState(false)
    const [like, setLike] = useState(0)
    const handleSettings = (e) => {
        console.log(e.target.value)
        setPopUp(e.target.value)

    }
    const handleCancel = () => {
        setPopUp("")
    }
    const handleMenu = () => {
        setMenu(!menu)
    }
    const { data: data1, isLoading: load, isError: err, isSuccess: succ } = useFetchUserInfoQuery(id);
    const { data, isLoading, isError, isSuccess } = useFetchMyPostsQuery(id);

    useEffect(() => {
        if (isSuccess && succ) {
            let totalLikes = 0;
            Object.values(data.data.data).forEach(item => {
                if (item.likes) {
                    totalLikes += item.likes.length;
                }
            });
            setLike(totalLikes)

        }
    }, [data])

    // const [rmFlag, SetrmFlag] = useState(false);

    // function handleClick() {
    //     SetrmFlag(!rmFlag);
    // }

    const [changeDivFlag, SetchangeDivFlag] = useState({
        Posts: true,
        WorkExperience: false,
        Education: false,
        Skills: false,
        Certification: false,
    });

    function CertificationHandler() {
        SetchangeDivFlag({
            Posts: false,
            WorkExperience: false,
            Education: false,
            Skills: false,
            Certification: true,
        })
    }

    function EducationHandler() {
        SetchangeDivFlag({
            Posts: false,
            WorkExperience: false,
            Education: true,
            Skills: false,
            Certification: false,
        })
    }

    function SkillsHandler() {
        SetchangeDivFlag({
            Posts: false,
            WorkExperience: false,
            Education: false,
            Skills: true,
            Certification: false,
        })
    }

    function WorkExperienceHandler() {
        SetchangeDivFlag({
            Posts: false,
            WorkExperience: true,
            Education: false,
            Skills: false,
            Certification: false,
        })
    }

    function PostsHandler() {
        SetchangeDivFlag({
            Posts: true,
            WorkExperience: false,
            Education: false,
            Skills: false,
            Certification: false,
        })
    }

    const [editFlag, setEditFlag] = useState(false);

    function handleEdit(event) {
        setEditFlag(!editFlag);
        event.preventDefault();
    }

    let profileInfo = {
        personalInfo: {
            Name: "Pandit Ji",
            tagline: "Hi there",
            aboutText: "Cras id sapien auctor, dignissim ante nec, rhoncus libero. Fusce ut urna quis massa consectetur mollis. Integer cursus neque vel lorem auctor tincidunt. Pellentesque sit amet lobortis metus. Praesent urna mauris, bibendum sodales urna nec, malesuada tincidunt turpis. Nulla vitae fringilla quam. Maecenas pretium nulla tellus, non elementum erat iaculis vel. Quisque fermentum congue nulla, vitae aliquet risus molestie vel. Curabitur lobortis laoreet cursus",
            Email: "pandit@email.com",
            Phone: "+91 1234567890",
            Gender: "Male",
            DOB: "dd/mm/yyyy",
            githubLink: "#",
            facebookLink: "#",
            linkedinLink: "#"
        },

        skills: [
            {
                skillName: "HTML",
                skillDescription: "It is a very advanced next level out of the world language",
            },
            {
                skillName: "CSS",
                skillDescription: "It is a very advanced next level out of the world language",
            }
        ],

        Education: [
            {
                instituteName: "ABC School",
                instituteDescription: "It was a very bad school"
            },
            {
                instituteName: "DEF Comlej",
                instituteDescription: "It was a very bad Comlej"
            }],

        Certification: [
            {
                CertificationName: "ABC School",
                Description: "It was a very bad school"
            },
            {
                CertificationName: "DEF Comlej",
                Description: "It was a very bad Comlej"
            }],

        WorkExp: [
            {
                jobDesignation: "Bodyguard",
                jobExperience: "Very Easy Job, just have to sleep in this job"
            },
            {
                jobDesignation: "Night Guard",
                jobExperience: "Very Easy Job, just have to sleep in this job"
            }],
        Internship: [
            {
                internshipDesignation: "Night Guard",
                InternshipExperience: "Very Easy Job, just have to sleep in this job"
            }
        ]
    }


    if (isLoading || load) {
        return (<><div className="">Loading...</div></>)
    }

    if (isError || err) {
        return <div>Error: {isError.message}</div>;
    }

    if (isSuccess && succ) {

        return (
            <div className='relative'>
                <img
                    className='absolute  top-0 left-0 w-[1600px] xl:w-[100vw] h-full z-0'
                    src="Images/backgroundImg.png"
                    alt="background" />

                {/* intro Div */}
                <div className={`${popUp === "" ? `opacity-100` : `opacity-20`}`}>
                    <div className={`relative flex justify-center gap-20 h-[calc(100vh-80px)] overflow-hidden z-10`}>
                        <div className="hideScrollbar w-[1000px] overflow-y-scroll space-y-10 p-10 box-border">
                            <div className=" justify-center  p-10   bg-white space-x-10 shadow-md shadow-gray-500 rounded-xl">
                                <div className='flex  justify-between'>
                                    <div className="md:flex-row flex-col flex">
                                        <div className="relative  h-[200px] flex items-center justify-center rounded-full">
                                            <img src='' className="h-[120px] w-[120px]  md:h-[180px] md:w-[180px]  flex items-center justify-center rounded-full border-2 border-gray-400   shadow-md shadow-black">
                                            </img>

                                            {/* <div className="absolute flex items-center justify-center  object-contain overflow-hidden h-[70px] w-[70px] rounded-full top-[60%] left-[90%] -translate-x-1/2">
                                        <img className="" src="Images\videoIcon.png" alt="profileImg" />
                                    </div> */}
                                        </div>


                                        <div className="flex items-center justify-items-start gap-5 p-5 rounded-xl w-full h-[180px] overflow-hidden">
                                            <div className="w-full text-gray-700 space-y-1 ">
                                                <div className='flex space-x-5'>
                                                    <h1 className="  text-3xl ">{profileInfo.personalInfo.Name}</h1>
                                                    {/* <img src="Images\Profile_badge.png" alt="" className='w-12 h-12' /> */}
                                                </div>

                                                <h1 className="opacity-80  "> User ID</h1>

                                                <div className="flex ">
                                                    <BusinessCenterOutlined className='text-[#003d4d]' />
                                                    <h1 className='text-gray-700 opacity-80'>Expertise</h1>
                                                </div>

                                                <div className="flex ">
                                                    <LocationOnOutlined className='text-[#003d4d]' />
                                                    <h1 className='text-gray-700 opacity-80'>Kolkata,India</h1>
                                                </div>
                                                <div className='flex space-x-2'>
                                                    <h1 className='flex opacity-60 font-semibold text-sm overflow-hidden  hover:text-clip '>


                                                    </h1>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='md:relative absolute p-5'>


                                        <div className='absolute right-0'>
                                            <img
                                                src="Images\pen.png"
                                                alt=""
                                                className='  right-0 w-5 h-5 text-[#003d4d] cursor-pointer  pointer-event-none '
                                                fill="currentColor"
                                            />
                                            <button
                                                name="Profile"
                                                value="Profile"
                                                onClick={handleSettings}
                                                className='absolute top-0 left-0 p-3   '
                                            >

                                            </button>
                                        </div>
                                    </div>

                                    <div className="md:hidden flex justify-around my-auto">
                                        <div className=" p-5 rounded-xl justify-center items-center text-center font-semibold">
                                            <h1 className=' font-normal '>12k </h1>
                                            <h1 className='text-[#003d4d]'> Supporters</h1>
                                        </div>

                                        <div className=" p-5 rounded-xl justify-center items-center text-center font-semibold">
                                            <h1 className=' font-normal '>12k </h1>
                                            <h1 className='text-[#003d4d]'> Appreciations</h1>
                                        </div>
                                    </div>

                                    <div className='md:flex hidden flex-col  text-center  '>
                                        <h1 className='text-sm text-[#003d4d] font-semibold'>Scan For Resume</h1>
                                        <div className="h-[150px] w-[150px] rounded-xl "><img src="./Images/QrCode.png" alt="qrCode" /></div>
                                    </div>
                                </div>



                                <div className=" relative flex justify-between  items-center space-x-10  my-10 ">
                                    <div className='flex flex-col space-y-2 w-[200px] '>
                                        <h1 className='text-sm text-gray-700 opacity-90 '>Complete the Profile</h1>
                                        <div class="w-full  bg-[#C0DADE] rounded-full">
                                            <div class="w-[45%] bg-[#003d4d] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 45%</div>
                                        </div>
                                    </div>

                                    <div className=" p-5 rounded-xl justify-center items-center text-center font-semibold">
                                        <h1 className=' font-normal '>12k </h1>
                                        <h1 className='text-[#003d4d]'> Supporters</h1>
                                    </div>

                                    <div className=" p-5 rounded-xl justify-center items-center text-center font-semibold">
                                        <h1 className=' font-normal '>12k </h1>
                                        <h1 className='text-[#003d4d]'> Appreciations</h1>
                                    </div>
                                    <button
                                        name="Menu"
                                        value="Menu"
                                        onClick={handleMenu}
                                        className="px-5 py-1 rounded-xl font-semibold bg-gray-700/70 shadow-gray-800 hover:bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white shadow-md hover:shadow-[#57a7b3]">MORE</button>



                                    {/* Menu Option  */}

                                    <div className={`${menu ? `text-[#003d4d] font-semibold absolute  top-20 -right-5 w-[250px] h-[150px] z-10 rounded-tr-2xl rounded-bl-2xl  bg-[#d7e1e3] p-5 space-y-2 items-center justify-center text-sm mx-auto shadow-black  shadow-2xl ` : `hidden`}`}>
                                        <div className='flex space-x-2'>
                                            <img src="Images\send.png" alt=""
                                                className='h-5 w-5 ' />
                                            <h1>Send profile in a message</h1>
                                        </div>

                                        <div className='flex space-x-2'>
                                            <FileDownloadOutlined className='text-[#003d4d]' />
                                            <h1>Save a pdf</h1>
                                        </div>

                                        <div className='flex space-x-2'>
                                            <img src="Images\cv.png" alt=""
                                                className='h-5 w-5 ' />
                                            <h1>Build a resume </h1>
                                        </div>

                                        <div className='flex space-x-2'>
                                            <img src="Images\info.png" alt=""
                                                className='h-5 w-5 ' />
                                            <h1>About this profile</h1>
                                        </div>
                                    </div>
                                </div>





                            </div>
                            {/* Followers and Likes Div */}



                            {/* About */}



                            {/* Last Div */}

                            <div className="shadow-md shadow-gray-500 rounded-xl">
                                <div>
                                    <div className="relative overflow-hidden bg-white rounded-xl">
                                        <div>
                                            <div className="flex items-center justify-start bg-white rounded-xl">
                                                <div className=" bg-[#003d4d]/20 w-full text-gray-500 text-xl font-semibold flex items-center justify-evenly">
                                                    <div className={` cursor-pointer p-5 ${changeDivFlag.Posts ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={PostsHandler}><span className="mr-1" id="Work Experience">Posts</span></div>
                                                    <div className={`cursor-pointer p-5 ${changeDivFlag.WorkExperience ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={WorkExperienceHandler}><span className="mr-1" id="Work Experience">Experience</span></div>

                                                    <div className={` cursor-pointer p-5  ${changeDivFlag.Skills ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={SkillsHandler}><span className="mr-1" id="Skills">Skills</span></div>
                                                    <div className={`cursor-pointer p-5  ${changeDivFlag.Education ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={EducationHandler}><span className="mr-1" id="Education">Education</span></div>
                                                    <div className={`cursor-pointer p-5 ${changeDivFlag.Certification ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={CertificationHandler}><span className="mr-1" id="Certification">Certification</span></div>

                                                </div>
                                            </div>
                                        </div>

                                        {/* PersonalInfo Div */}

                                        <div className="flex items-center">
                                            <div className={`w-full px-10 py-12 min-h-[50vh] h-fit ${changeDivFlag.PersonalInfo ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`} id="InfoDiv">
                                                <ul className="list-none text-[#555555]">
                                                    <form>
                                                        <li className="flex items-center justify-between mb-[10px] p-5 text-base rounded-xl bg-[#f1f1f1]">
                                                            <span>Name :</span>
                                                            <span className="w-[200px] h-[30px] flex items-center justify-center overflow-hidden relative"><input type="text" placeholder={profileInfo.personalInfo.Name} className={`p-5 rounded-xl border-none scale-0 transition-all ease-out absolute text-center ${editFlag ? `scale-100` : null}`} />{profileInfo.personalInfo.Name}
                                                            </span>
                                                        </li>
                                                        <li className="flex items-center justify-between mb-[10px] p-5 text-base rounded-xl bg-[#f1f1f1]">
                                                            <span>Email :</span>
                                                            <span className="w-[200px] h-[30px] flex items-center justify-center overflow-hidden relative"><input type="email" placeholder={profileInfo.personalInfo.Email} className={`p-5 rounded-xl border-none scale-0 transition-all ease-out absolute text-center ${editFlag ? `scale-100` : null}`} />{profileInfo.personalInfo.Email}
                                                            </span>
                                                        </li>
                                                        <li className="flex items-center justify-between mb-[10px] p-5 text-base rounded-xl bg-[#f1f1f1]">
                                                            <span>Phone :</span>
                                                            <span className="w-[200px] h-[30px] flex items-center justify-center overflow-hidden relative"><input type="tel" placeholder={profileInfo.personalInfo.Phone} className={`p-5 rounded-xl border-none scale-0 transition-all ease-out absolute text-center ${editFlag ? `scale-100` : null}`} />{profileInfo.personalInfo.Phone}
                                                            </span>
                                                        </li>
                                                        <li className="flex items-center justify-between mb-[10px] p-5 text-base rounded-xl bg-[#f1f1f1]">
                                                            <span>Gender :</span>
                                                            <span className="w-[200px] h-[30px] flex items-center justify-center overflow-hidden relative"><input type="text" placeholder={profileInfo.personalInfo.Gender} className={`p-5 rounded-xl border-none scale-0 transition-all ease-out absolute text-center ${editFlag ? `scale-100` : null}`} /> {profileInfo.personalInfo.Gender}
                                                            </span>
                                                        </li>
                                                        <li className="flex items-center justify-between mb-[10px] p-5 text-base rounded-xl bg-[#f1f1f1]">
                                                            <span>Date of Birth :</span>
                                                            <span className="w-[200px] h-[30px] flex items-center justify-center overflow-hidden relative"><input type="date" placeholder={profileInfo.personalInfo.DOB} className={`p-5 rounded-xl border-none scale-0 transition-all ease-out absolute text-center ${editFlag ? `scale-100` : null}`} />{profileInfo.personalInfo.DOB}
                                                            </span>
                                                        </li>
                                                        <button type={editFlag ? "submit" : "button"} className="py-2 px-4 border-none rounded-xl cursor-pointer font-semibold float-right hover:bg-[#d1d1d1]" onClick={handleEdit}>{editFlag ? "Done" : "Edit"}
                                                        </button>
                                                    </form>                                    </ul>
                                                <span className="text-[#555555] text-2xl font-semibold mt-[30px]">Social Profiles</span><div className="flex items-center justify-start"><div className="mt-[20px]">
                                                    <button className="p-5 mr-[10px] cursor-pointer rounded-xl bg-[#222222] text-white border-none shadow shadow-[#f1f1f1] hover:bg-[#444444]" href={profileInfo.personalInfo.githubLink}>Github</button><button className="p-5 mr-[10px] cursor-pointer rounded-xl bg-[#222222] text-white border-none shadow shadow-[#f1f1f1] hover:bg-[#444444" href={profileInfo.personalInfo.linkedinLink}>LinkedIn</button><button className="p-5 mr-[10px] cursor-pointer rounded-xl bg-[#222222] text-white border-none shadow shadow-[#f1f1f1] hover:bg-[#444444" href={profileInfo.personalInfo.facebookLink}>Facebook</button></div><button className="p-5 mt-[20px] ml-[10px] rounded-[50%] border-none cursor-pointer bg-[#f1f1f1] text-base font-bold flex items-center justify-center hover:bg-[#d1d1d1]">+</button></div>
                                            </div>

                                            {/* Skills Div */}


                                            <div className={` flex flex-col space-y-5 w-full px-10 py-12  h-fit  ${changeDivFlag.Skills ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                                                <h1 className='text-[#003d4d] text-3xl font-bold'>Skills</h1>
                                                <div className='flex space-x-10 rounded-full overflow-x-hidden '>
                                                    {profileInfo.skills.map((skill) => {
                                                        return <InfoCard
                                                            heading={skill.skillName}
                                                        />
                                                    })}
                                                </div>

                                            </div>

                                            {/* Education Div */}


                                            <div className={`space-y-5 w-full px-10 py-12  h-fit  ${changeDivFlag.Education ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                                                <h1 className='text-3xl font-bold text-[#003d4d]'>Education</h1>
                                                <button className='flex space-x-5 items-center'
                                                    name="Education"
                                                    value="Education"
                                                    onClick={handleSettings}>
                                                </button>
                                                {profileInfo.Education.map((Education) => {
                                                    return <InfoCard
                                                        heading={Education.instituteName}
                                                        description={Education.instituteDescription} />
                                                })}


                                            </div>

                                            {/* WorkExperience Div */}


                                            <div className={`space-y-5 w-full px-10 py-12  h-fit  ${changeDivFlag.WorkExperience ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>

                                                <h1 className='text-3xl font-bold text-[#003d4d]'>Experience</h1>
                                                <h1>Job Details</h1>
                                                {profileInfo.WorkExp.map((Work) => {
                                                    return <InfoCard
                                                        heading={Work.jobDesignation}
                                                        description={Work.jobExperience} />
                                                })}
                                                <h1>Internship Details</h1>
                                                {profileInfo.Internship.map((Work) => {
                                                    return <InfoCard
                                                        heading={Work.internshipDesignation}
                                                        description={Work.internshipExperience} />
                                                })}

                                            </div>

                                            {/* Certification  */}
                                            <div className={`space-y-5 w-full px-10 py-12  h-fit  ${changeDivFlag.Certification ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                                                <h1 className='text-3xl font-bold text-[#003d4d]'>Certification</h1>


                                                {profileInfo.Certification.map((Certification) => {
                                                    return <InfoCard
                                                        heading={Certification.CertificationName}
                                                        description={Certification.Description} />
                                                })}


                                            </div>

                                            {/* Skills Post Div */}

                                            <div className={`w-full px-10 py-12 h-fit grid grid-cols-2 ${changeDivFlag.Posts ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                                                {[...data.data.data].reverse().map((post) => (
                                                    <PostInProfile post={post} />
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">

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
                {/* Job Pop Up  */}


            </div>
        )
    }
}