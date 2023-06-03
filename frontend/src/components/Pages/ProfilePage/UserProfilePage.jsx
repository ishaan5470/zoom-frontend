import React, { useState } from 'react';
import InfoCard from './InfoCard/InfoCard.jsx';
// import PostCard from './PostCard/PostCard.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PostInProfile from './PostInProfile/PostInProfile.jsx'

// import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BusinessCenterOutlined, FileDownloadOutlined, LocationOnOutlined } from '@mui/icons-material';

export default function Profilepage() {
    const [popUp,setPopUp]=useState("")
    const[menu,setMenu]=useState(false)
    const handleSettings=(e)=>{
        console.log(e.target.value)
        setPopUp(e.target.value)
        
    }
    const handleCancel=()=>{
        setPopUp("")
    }
    const handleMenu=()=>{
        setMenu(!menu)
    }


    // const [rmFlag, SetrmFlag] = useState(false);

    // function handleClick() {
    //     SetrmFlag(!rmFlag);
    // }

    const [changeDivFlag, SetchangeDivFlag] = useState({
        Posts:true,
        WorkExperience: false,
        Education: false,
        Skills: false,
        Certification:false,
    });

    function CertificationHandler() {
        SetchangeDivFlag({
            Posts:false,
            WorkExperience: false,
            Education: false,
            Skills: false,
            Certification:true,
        })
    }

    function EducationHandler() {
        SetchangeDivFlag({
        Posts:false,
        WorkExperience: false,
        Education: true,
        Skills: false,
        Certification:false,
        })
    }

    function SkillsHandler() {
        SetchangeDivFlag({
            Posts:false,
            WorkExperience: false,
            Education: false,
            Skills: true,
            Certification:false,
        })
    }

    function WorkExperienceHandler() {
        SetchangeDivFlag({
        Posts:false,
        WorkExperience: true,
        Education: false,
        Skills: false,
        Certification:false,
        })
    }

    function PostsHandler() {
        SetchangeDivFlag({
        Posts:true,
        WorkExperience: false,
        Education: false,
        Skills: false,
        Certification:false,
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
            }]
    }

    return (
        <div className='relative'>
              <img 
        className='absolute  top-0 left-0 w-[1600px] xl:w-[100vw] h-full z-0'
        src="Images/backgroundImg.png" 
        alt="background" />

            {/* intro Div */}
        <div className={`${popUp===""?`opacity-100`:`opacity-20`}`}>
        <div className={`relative flex justify-center gap-20 h-[calc(100vh-80px)] overflow-hidden z-10`}>
            <div className="hideScrollbar w-[1000px] overflow-y-scroll space-y-10 p-10 box-border">
                <div className=" justify-center  p-10   bg-white space-x-10 shadow-md shadow-gray-500 rounded-xl">
                <div className='flex space-x-10'>
                <div className="relative w-[50%] h-[200px] flex items-center justify-center rounded-full">
                        <div className=" h-[180px] w-[180px]  flex items-center justify-center rounded-full border-2 border-gray-400   shadow-md shadow-black">
                            <video className=" h-[180px] w-full   rounded-full" autoPlay loop  muted >
                                <source src="./Images/video.mp4" type="video/mp4" />
                                Your Browser doesn't support video tag
                            </video>
                        </div>
                        <div className="absolute flex items-center justify-center  object-contain overflow-hidden h-[70px] w-[70px] rounded-full top-[60%] left-[90%] -translate-x-1/2">
                            <img className="" src="Images\videoIcon.png" alt="profileImg" />
                        </div>
                    </div>


                    <div className="flex items-center justify-items-start gap-5 p-5 rounded-xl w-full h-[180px] overflow-hidden">
                        <div className="w-full text-gray-700 space-y-1 ">
                            <div className='flex space-x-5'>
                            <h1 className="  text-3xl ">{profileInfo.personalInfo.Name}</h1>
                            {/* <img src="Images\Profile_badge.png" alt="" className='w-12 h-12' /> */}
                            </div>
                          
                            <h1 className="opacity-80  "> User ID</h1>
                           
                            <div className="flex ">
                            <BusinessCenterOutlined className='text-[#003d4d]'/>
                            <h1 className='text-gray-700 opacity-80'>Expertise</h1>
                            </div>

                            <div className="flex ">
                            <LocationOnOutlined className='text-[#003d4d]'/>
                            <h1 className='text-gray-700 opacity-80'>Kolkata,India</h1>
                            </div>
                            <div className='flex space-x-2'>
                            <h1 className='flex opacity-60 font-semibold text-sm overflow-hidden  hover:text-clip '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Moptio, reprehenderit perferendis exp</h1>
                           
                            </div>
                            
                        </div>
                    </div>


                    <div className='relative p-5'>
                         
                        
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



                    <div className='flex flex-col  text-center  '>
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
                            <h1 className=' font-normal '>4.2 </h1>
                            <h1 className='text-[#003d4d]'> Ratings</h1>
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

                        <div className={`${menu?`text-[#003d4d] font-semibold absolute  top-20 -right-5 w-[250px] h-[150px] z-10 rounded-tr-2xl rounded-bl-2xl  bg-[#d7e1e3] p-5 space-y-2 items-center justify-center text-sm mx-auto shadow-black  shadow-2xl `:  `hidden`}`}>
                            <div className='flex space-x-2'>
                                <img src="Images\send.png" alt="" 
                                className='h-5 w-5 '/>
                            <h1>Send profile in a message</h1>
                            </div>
                          
                            <div className='flex space-x-2'>
                               <FileDownloadOutlined className='text-[#003d4d]'/>
                            <h1>Save a pdf</h1>
                            </div>

                            <div className='flex space-x-2'>
                                <img src="Images\cv.png" alt="" 
                                className='h-5 w-5 '/>
                            <h1>Build a resume </h1>
                            </div>

                            <div className='flex space-x-2'>
                                <img src="Images\info.png" alt="" 
                                className='h-5 w-5 '/>
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
                                        <div className={`cursor-pointer p-5 ${changeDivFlag.Certification? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={CertificationHandler}><span className="mr-1" id="Certification">Certification</span></div>
                                        
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
                                <input type="text" placeholder='Search Skill' className='tracking-widest p-3 border-2 border-[#003d4d]/40 rounded-lg' />
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
                                <h1 className='text-3xl font-bold text-[#003d4d]'>+</h1>
                                <h1 className='text-lg text-gray-700 font-semibold'>Add Education Details</h1> 
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
                                <div>
                                <button className='flex space-x-5 items-center'
                                name="Job"
                                value="Job"
                                onClick={handleSettings}>
                                <h1 className='text-3xl font-bold text-[#003d4d]'>+</h1>
                                <h1 className='text-lg text-gray-700 font-semibold'>Add Job Details</h1> 
                                </button>
                                <button className='flex space-x-5 items-center'
                                name="Internship"
                                value="Internship"
                                onClick={handleSettings}>
                                <h1 className='text-3xl font-bold text-[#003d4d]'>+</h1>
                                <h1 className='text-lg text-gray-700 font-semibold'>Add Internship Details</h1> 
                                </button>

                                </div>
                                    {profileInfo.WorkExp.map((Work) => {
                                        return <InfoCard
                                            heading={Work.jobDesignation}
                                            description={Work.jobExperience} />
                                    })}
                                   
                                </div>
                                
                                {/* Certification  */}
                                <div className={`space-y-5 w-full px-10 py-12  h-fit  ${changeDivFlag.Certification ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                                <h1 className='text-3xl font-bold text-[#003d4d]'>Certification</h1>
                                <button className='flex space-x-5 items-center'
                                name="Training"
                                value="Training"
                                onClick={handleSettings}>
                                <h1 className='text-3xl font-bold text-[#003d4d]'>+</h1>
                                <h1 className='text-lg text-gray-700 font-semibold'>Add Certification Details</h1> 
                                </button>
                                    {profileInfo.Certification.map((Certification) => {
                                        return <InfoCard
                                            heading={Certification.CertificationName}
                                            description={Certification.Description} />
                                    })}
                                    

                                </div>
                                
                                {/* Skills Post Div */}

                                <div className={`w-full px-10 py-12 h-fit grid grid-cols-2 ${changeDivFlag.Posts ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                                    <PostInProfile />
                                    <PostInProfile />
                                    <PostInProfile />
                                    <PostInProfile />
                                    <PostInProfile />
                                    <PostInProfile />
                                    <PostInProfile />
                                    <PostInProfile />
                                    <PostInProfile />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="pt-6 hideScrollbar overflow-y-scroll">
            <Sidebar />
            </div> 
            </div>

        </div>
           

            {/* User Profile Pop up  */}
            <div className={`${popUp==="Profile"?`text-[#003d4d] absolute top-0  bottom-0 left-0 right-0 lg:w-[900px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl`:  `hidden`}`}>
            <div className='flex justify-between space-x-10 '>
                <h1 className='text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center'>User Details</h1>
                <img src="Images\cancel.png"
                alt="" 
                onClick={handleCancel}
                className='cursor-pointer w-10 h-10'/>
             </div>


             
             <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>User Name</h1>
                        
                    </label>
                    <input type='text'
                    placeholder='Enter Your College Name '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>

            <div className='flex flex-col space-y-5 '>
                    <label className='text-left'>Profile Picture </label>
                    <div className="flex items-center justify-center lg:w-[300px]">
                            <label  className="flex items-center justify-center w-full bg-[#003d4d]/20  border-2 border-[#003d4d] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:text-white   hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                                <div className="flex flex-row space-x-5 items-center justify-center p-5">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-xl text-gray-500   ">Upload Profile Picture</p>
                        
                                </div>
                                <input type="file" className="hidden" />
                            </label>
                </div> 
                </div>

            
        
             
             <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>User ID</h1>
                     
                    </label>
                    <input type='text'
                    placeholder='Enter Your Description '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>

             
            <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>Location</h1>
                        
                    </label>
                    <input type='text'
                    placeholder='Enter Project Link '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
            
             
            <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>Description</h1>
                        
                    </label>
                    <textarea type='text'
                    placeholder='Enter your Description '
                    required
                    className=' border h-[150px] px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
                    
             <button className='text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full'>Save</button>
        </div>



          {/* Education Pop Up   */}

          <div className={`${popUp==="Education"?`text-[#003d4d] absolute top-0  bottom-0 left-0 right-0 lg:w-[500px] z-20 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl`:  `hidden`}`}>
            <div className='flex justify-between space-x-10 '>
                <h1 className='text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center'>Educational Details</h1>
                <img src="Images\cancel.png"
                alt="" 
                onClick={handleCancel}
                className='w-10 h-10'/>
             </div>


             <div className='flex flex-col space-y-1 w-full'>
                <label  className='flex text-left'>
                    <h1>Degree</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
             <select
             name="Degree"
             className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                required
                defaultValue={"Choose"}
             >
                <option value="Choose"  disabled>Choose</option>
                <option value="B.Tech">B.tech</option>
                <option value="B.Sce">B.Sce</option>
                <option value="B.A">B.A</option>
                <option value="MCA">MCA</option>
                <option value="other">other</option>

             </select>
             </div>
             <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>College Name</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='text'
                    placeholder='Enter Your College Name '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>


            <div className='flex space-x-2'>
            <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>Start Date</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='date'
                    placeholder='Choose '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
            <div className='flex flex-col space-y-1 w-full'>
            <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>End Date</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='date'
                    placeholder='Choose '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
            <div className='flex space-x-2 text-sm text-gray-700'>
            <input type="checkbox" />
            <h1>Currently Study Here</h1>

            </div>
            </div>
            
            </div>
            
            <div className='flex flex-col space-y-1 w-full'>
                <label  className='flex text-left'>
                    <h1>Stream</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
             <select
             name="Stream"
             className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                required
                placeholder='Choose your Stream'
                defaultValue={"Choose"}
             >
                <option value="Choose" disabled>Choose</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology ">Information Technology </option>
                <option value="Mechanical ">Mechanical</option>
                <option value="ECE">ECE</option>
                <option value="other">other</option>

             </select>
             </div>


             
             <div className='flex space-x-2'>
             <div className='flex flex-col space-y-1 w-full'>
                <label  className='flex text-left'>
                    <h1>Performance Scale</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
             <select
             name="Performance_Scale"
             className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                required
                defaultValue={"Choose"}
                
             >
                <option  value="Choose" disabled>Choose</option>
                <option value="0-25">0-25</option>
                <option value="25-50 ">25-50 </option>
                <option value="50-75 ">50-75</option>
                <option value="75-100">75-100</option>
             

             </select>
             </div>
             <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>Performance</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='number'
                    placeholder='0.0 '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
             </div>
             <button className='text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full'>Save</button>
        </div>

            {/* Job Pop Up  */}

            <div className={`${popUp==="Job"?`absolute top-0 left-0 right-0 lg:w-[500px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl`:  `hidden`}`}>
            <div className='flex justify-between space-x-10 '>
                <h1 className='text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center'>Job Details</h1>
                <img src="Images\cancel.png"
                alt="" 
                onClick={handleCancel}
                className='w-10 h-10'/>
             </div>


             <div className='flex flex-col space-y-1 w-full'>
                <label  className='flex text-left'>
                    <h1>Job Profile</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
             <select
             name="Degree"
             className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                required
                defaultValue={"Choose"}
             >
                <option value="Choose"  disabled>Choose</option>
                <option value="B.Tech">B.tech</option>
                <option value="B.Sce">B.Sce</option>
                <option value="B.A">B.A</option>
                <option value="MCA">MCA</option>
                <option value="other">other</option>

             </select>
             </div>
             <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>Organization</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='text'
                    placeholder='Enter Your Organization Name '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>


            <div className='flex space-x-2'>
            <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>Start Date</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='date'
                    placeholder='Choose '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
            <div className='flex flex-col space-y-1 w-full'>
            <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>End Date</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='date'
                    placeholder='Choose '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
            <div className='flex space-x-2 text-sm text-gray-700'>
            <input type="checkbox" />
            <h1>Currently Working Here</h1>

            </div>
            </div>
            
            </div>
            
            <div className='flex flex-col space-y-1 w-full'>
                <label  className='flex text-left'>
                    <h1>Location</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
             <select
             name="Stream"
             className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                required
                placeholder='Choose your Stream'
                defaultValue={"Choose"}
             >
                <option value="Choose" disabled>Choose</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology ">Information Technology </option>
                <option value="Mechanical ">Mechanical</option>
                <option value="ECE">ECE</option>
                <option value="other">other</option>

             </select>
             </div>


             
             <div className='flex space-x-2'>
           
             <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>Description</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='text'
                    placeholder='Short Description of your role and Responsibilities '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
             </div>
             <button className='text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full'>Save</button>
        </div>

            {/* Internships Pop Up  */}

            <div className={`${popUp==="Internship"?`absolute top-0 left-0 right-0 lg:w-[500px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl`:  `hidden`}`}>
            <div className='flex justify-between space-x-10 '>
                <h1 className='text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center'>Job Details</h1>
                <img src="Images\cancel.png"
                alt="" 
                onClick={handleCancel}
                className='w-10 h-10'/>
             </div>


            
             <div className='flex space-x-2'>
             <div className='flex flex-col space-y-1 w-full'>
                <label  className='flex text-left'>
                    <h1>Internship Profile</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
             <select
             name="Degree"
             className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                required
                defaultValue={"Choose"}
             >
                <option value="Choose"  disabled>Choose</option>
                <option value="B.Tech">B.tech</option>
                <option value="B.Sce">B.Sce</option>
                <option value="B.A">B.A</option>
                <option value="MCA">MCA</option>
                <option value="other">other</option>

             </select>
             </div>
             <div className='flex flex-col space-y-1 w-full'>
                <label  className='flex text-left'>
                    <h1>Type</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
             <select
             name="Degree"
             className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                required
                defaultValue={"Choose"}
             >
                <option value="Choose"  disabled>Choose</option>
                <option value="B.Tech">B.tech</option>
                <option value="B.Sce">B.Sce</option>
                <option value="B.A">B.A</option>
                <option value="MCA">MCA</option>
                <option value="other">other</option>

             </select>
             </div>
             </div>
             

             <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>Organization</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='text'
                    placeholder='Enter Your Organization Name '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>


            <div className='flex space-x-2'>
            <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>Start Date</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='date'
                    placeholder='Choose '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
            <div className='flex flex-col space-y-1 w-full'>
            <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>End Date</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='date'
                    placeholder='Choose '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
            <div className='flex space-x-2 text-sm text-gray-700'>
            <input type="checkbox" />
            <h1>Currently Working Here</h1>

            </div>
            </div>
            
            </div>
            
            <div className='flex flex-col space-y-1 w-full'>
                <label  className='flex text-left'>
                    <h1>Location</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
             <select
             name="Stream"
             className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                required
                placeholder='Choose your Stream'
                defaultValue={"Choose"}
             >
                <option value="Choose" disabled>Choose</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology ">Information Technology </option>
                <option value="Mechanical ">Mechanical</option>
                <option value="ECE">ECE</option>
                <option value="other">other</option>

             </select>
             </div>


             
             <div className='flex space-x-2'>
           
             <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>Description</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='text'
                    placeholder='Short Description of your role and Responsibilities '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
             </div>
             <button className='text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full'>Save</button>
        </div>
            {/* Training and Courses Pop Up  */}

            <div className={`${popUp==="Training"?`absolute top-0 left-0 right-0 lg:w-[500px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl`:  `hidden`}`}>
            <div className='flex justify-between space-x-10 '>
                <h1 className='text-2xl text-[#003d4d] font-bold mx-auto p-10 text-center'>Training and Course Details</h1>
                <img src="Images\cancel.png"
                alt="" 
                onClick={handleCancel}
                className='w-10 h-10'/>
             </div>


             <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>Training Name</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='text'
                    placeholder='Enter Your Training Name'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>

             
             <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>Organization</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='text'
                    placeholder='Enter Your Organization Name'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>


            <div className='flex space-x-2'>
            <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>Start Date</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='date'
                    placeholder='Choose '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
            <div className='flex flex-col space-y-1 w-full'>
            <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>End Date</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='date'
                    placeholder='Choose '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
            <div className='flex space-x-2 text-sm text-gray-700'>
            <input type="checkbox" />
            <h1>Currently Study Here</h1>

            </div>
            </div>
            
            </div>
            
            <div className='flex flex-col space-y-1 w-full'>
                <label  className='flex text-left'>
                    <h1>Stream</h1>
                    <h1 className='text-red-700'>*</h1>
                </label>
             <select
             name="Stream"
             className=' border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                required
                placeholder='Choose your Stream'
                defaultValue={"Choose"}
             >
                <option value="Choose" disabled>Choose</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology ">Information Technology </option>
                <option value="Mechanical ">Mechanical</option>
                <option value="ECE">ECE</option>
                <option value="other">other</option>

             </select>
             </div>


             
             <div className='flex space-x-2'>
             
             <div className='flex flex-col space-y-1 w-full'>
                <label className='text-left flex'>
                <h1>College Name</h1>
                        <h1 className='text-red-700'>*</h1>
                    </label>
                    <input type='text'
                    placeholder='Enter Your College Name '
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>
             </div>
             <button className='text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full'>Save</button>
        </div>
        
        </div>
    )
}
