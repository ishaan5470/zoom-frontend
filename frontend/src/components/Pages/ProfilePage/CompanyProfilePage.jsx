import React, { useState } from 'react';
import InfoCard from './InfoCard/InfoCard.jsx';
// import PostCard from './PostCard/PostCard.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import PostInProfile from './PostInProfile/PostInProfile.jsx'

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
        About:false,
        Links:false,
        Contact:false,
    });


    function PostsHandler() {
        SetchangeDivFlag({
        Posts:true,
        About:false,
        Links:false,
        Contact:false,
        })
    }

    function AboutHandler() {
        SetchangeDivFlag({
        Posts:false,
        About:true,
        Links:false,
        Contact:false,
        })
    }
    function LinksHandler() {
        SetchangeDivFlag({
        Posts:false,
        About:false,
        Links:true,
        Contact:false,
        })
    }
    function ContactHandler() {
        SetchangeDivFlag({
        Posts:false,
        About:false,
        Links:false,
        Contact:true,
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

        About: [
            {
                AboutName: "HTML",
                AboutDescription: "It is a very advanced next level out of the world language",
            },
           
        ],

        Links: [
            {
                Heading: "ABC School",
                Links:"http://www.",
                Description: "It was a very bad school"
            },
          ],

        Contact: [
                {
                    CertificationName: "ABC School",
                    Description: "It was a very bad school"
                },
                {
                    CertificationName: "DEF Comlej",
                    Description: "It was a very bad Comlej"
                }],

      
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
                        <div className=" h-[180px] w-[180px]  flex items-center justify-center rounded-full border-2 border-black">
                            <video className=" h-[180px] w-full   rounded-full" autoPlay loop  muted >
                                <source src="./Images/video.mp4" type="video/mp4" />
                                Your Browser doesn't support video tag
                            </video>
                        </div>
                        <div className="absolute flex items-center justify-center  object-contain overflow-hidden h-[70px] w-[70px] rounded-full top-[60%] left-[85%] -translate-x-1/2">
                            <img className="h-14" src="./Images/personImg.png" alt="profileImg" />
                        </div>
                    </div>


                    <div className="flex items-center justify-items-start gap-5 p-5 rounded-xl w-full h-[180px] overflow-hidden">
                        <div className="w-full text-[#003d4d] space-y-2 ">
                            <div className='flex space-x-5'>
                            <h1 className=" font-extrabold text-3xl ">{profileInfo.personalInfo.Name}</h1>
                            <img src="Images\Profile_badge.png" alt="" className='w-12 h-12' />
                            </div>
                            <h4 className="opacity-60 font-semibold break-words text-xl">{profileInfo.personalInfo.tagline}</h4>
                            <h1 className=' opacity-60 font-semibold  break-words '>Location</h1>
                            <h1 className='flex opacity-60 font-semibold  '>Impact you Create<p className='text-lg text-gray-500'>(Max.30 words)</p></h1>
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
                            
                            <div className="h-[150px] w-[150px] rounded-xl "><img src="./Images/Postjob.png" alt="postjob" /></div>
                            <button className='text-sm bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-5 rounded-full mx-auto  '>Post Job</button>
                    </div> 
                </div>
                
                    
                        
                <div className=" relative flex justify-around items-center space-x-10  my-10 ">
                            <div class="w-[20%]  bg-gray-200 rounded-full dark:bg-gray-700">
                            <div class="w-[45%] bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 45%</div>
                            </div>
                            <div className=" p-5 rounded-xl justify-center items-center text-center font-semibold">
                            <h1>12k </h1>
                            <h1 className='text-[#003d4d]'> Supporters</h1>
                            </div>
                            <div className=" p-5 rounded-xl justify-center items-center text-center font-semibold">
                            <h1>4.2 </h1>
                            <h1 className='text-[#003d4d]'> Ratings</h1>
                            </div>
                            <div className=" p-5 rounded-xl justify-center items-center text-center font-semibold">
                            <h1>12k </h1>
                            <h1 className='text-[#003d4d]'> Appreciations</h1>
                            </div>
                          
                            
                        {/* Menu Option  */}

                       
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
                                    
                                         
                                         <div className={` cursor-pointer p-5  ${changeDivFlag.About ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={AboutHandler}><span className="mr-1" id="Skills">Business Overview</span></div>
                                        <div className={`cursor-pointer p-5  ${changeDivFlag.Links ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={LinksHandler}><span className="mr-1" id="Education">Links</span></div>
                                        <div className={`cursor-pointer p-5 ${changeDivFlag.Contact? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={ContactHandler}><span className="mr-1" id="Certification">Contact Us</span></div>
                                        
                                        </div>
                                </div>
                            </div>

                          

                            <div className="flex items-center">




                                {/* Post  */}
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
                                
                                {/* About  */}


                                <div className={` flex flex-col space-y-5 w-full  p-10  h-fit  ${changeDivFlag.About ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                                <div className='relative'>

                                <h1 className='text-[#003d4d] text-3xl font-bold'>About</h1>
                                <div className='absolute right-0'>
                                    <img 
                                    src="Images\pen.png"
                                    alt=""
                                    className='  right-0 w-5 h-5 text-[#003d4d] cursor-pointer  pointer-event-none '
                                    fill="currentColor"
                                    />
                                        <button
                                        name="About"
                                        value="About"
                                        onClick={handleSettings}
                                        className='absolute top-0 left-0 p-3   '
                                    >

                                    </button>
                                </div>
                                
                                   
                                </div>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in quasi molestias officia dolorem earum maxime modi excepturi quidem? Animi ea aperiam possimus aliquam nemo, labore vitae minima ducimus sed?</h1>
                                   
                                <div>
                                    <h1 className='text-[#003d4d] font-bold'>
                                        Industry
                                    </h1>
                                    <h1>
                                        Social Media
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='text-[#003d4d] font-bold'>
                                        Website
                                    </h1>
                                    <h1>
                                        http://
                                    </h1>
                                </div>
                                
                                <div>
                                    <h1 className='text-[#003d4d] font-bold'>
                                        Main Location 
                                    </h1>
                                    <h1>
                                       Delhi
                                    </h1>
                                </div>
                                
                                <div>
                                    <h1 className='text-[#003d4d] font-bold'>
                                        Type of Business
                                    </h1>
                                    <h1>
                                        Private
                                    </h1>
                                </div>
                                

                                <div>
                                    <h1 className='text-[#003d4d] font-bold'>
                                        Business Size
                                    </h1>
                                    <h1>
                                        11 to 50 Members
                                    </h1>
                                </div>
                                

                                <div>
                                    <h1 className='text-[#003d4d] font-bold'>
                                        Launched
                                    </h1>
                                    <h1>
                                        2023
                                    </h1>
                                </div>
                                
                                
                                   
                                </div>

                               {/* Links  */}
                               <div className={` flex flex-col space-y-5 w-full px-10 py-12  h-fit  ${changeDivFlag.Links ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                                <h1 className='text-[#003d4d] text-3xl font-bold'>Add Links</h1>
                                <img src="" alt="" />
                                <div className='absolute right-10'>
                                    <img 
                                    src="Images\pen.png"
                                    alt=""
                                    className='  right-0 w-5 h-5 text-[#003d4d] cursor-pointer  pointer-event-none '
                                    fill="currentColor"
                                    />
                                        <button
                                        name="About"
                                        value="About"
                                        onClick={handleSettings}
                                        className='absolute top-0 left-0 p-3   '
                                    >

                                    </button>
                                </div>
                                <div className='flex'>
                                    <img src="Images\links.png" alt="" className='w-20 h-20 '/>
                                    <div className='space-y-5'>
                                    <input 
                                className='p-5 text-xl bg-transparent outline-none border-2  rounded-tl-2xl rounded-br-2xl w-[60%] mx-auto shadow-lg'
                                type="text" placeholder='Copy and paste or type the URL'></input>
                                 <input 
                                className='p-5 text-xl bg-transparent outline-none border-2  rounded-tl-2xl rounded-br-2xl w-[60%] mx-auto shadow-lg'
                                type="text" placeholder='Heading'></input>
                                 < textarea
                                className='p-5 text-xl bg-transparent outline-none border-2  rounded-tl-2xl rounded-br-2xl w-[60%] mx-auto shadow-lg'
                                type="text" placeholder='Details'/>
                                    </div>
                                </div>
                                
                                
                                   
                                {profileInfo.Links.map((Links) => {
                                        return(
                                        <div className='bg-[#f1f1f1]  shadow-lg rounded-2xl space-y-2 p-5'>
                                        
                                            <div >
                                            <h1 className='text-[#003d4d] font-bold'>Heading</h1>
                                            <h1 className='text-sm'>{Links.Heading}</h1>
                                            </div>
                                            <div >
                                            <h1 className='text-[#003d4d] font-bold'>Link</h1>
                                            <h1 className='text-sm'>{Links.Links}</h1>
                                            </div><div >
                                            <h1 className='text-[#003d4d] font-bold'>Description</h1>
                                            <h1 className='text-sm'>{Links.Description}</h1>
                                            </div>
                                        </div> 
                                        )
                                    })}
                                    
                                </div>
                                
                            
                                {/* Contact Us  */}
                                <div className={` flex flex-col space-y-5 w-full px-10 py-12  h-fit  ${changeDivFlag.Contact ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>
                                <h1 className='text-[#003d4d] text-3xl font-bold'>Contact Details</h1>
                                <div className='text-xl text-gray-400 font-semibold flex space-x-5'>
                                    <img src="Images\email.png" alt="" className='w-8 h-8 ' />
                                    <h1>Business Email</h1>
                                </div>
                                
                                <div className='text-xl text-gray-400 font-semibold flex space-x-5'>
                                    <img src="Images\phone.png" alt="" className='w-8 h-8 ' />
                                    <h1>Business Phone Number</h1>
                                </div>
                                
                                <div className='text-xl text-gray-400 font-semibold flex space-x-5'>
                                    <img src="Images\profileLink.png" alt="" className='w-8 h-8 ' />
                                    <h1>Profile Link</h1>
                                </div>
                                
                                   


                                   <div className='flex space-x-5'>
                                    <h1 className='text-xl text-gray-700 font-semibold'>
                                    Display Contact Details
                                    </h1>
                                   <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer"/>
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    
                                    </label>
                                    
                                   </div>
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

            {/* About  */}
            <div className={`${popUp==="About"?`text-[#003d4d] absolute top-0  bottom-0 left-0 right-0 lg:w-[900px] z-10 bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl`:  `hidden`}`}>
            <div className='flex justify-between space-x-10 '>
                <h1 className='text-3xl text-[#003d4d] font-bold mx-auto p-10 text-center'>About</h1>
                <img src="Images\cancel.png"
                alt="" 
                onClick={handleCancel}
                className='cursor-pointer w-10 h-10'/>
             </div>


             
             <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>Industry</h1>
                        
                    </label>
                    <input type='text'
                  
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>

            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>Website</h1>
                        
                    </label>
                    <input type='text'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>

            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>Main Location </h1>
                        
                    </label>
                    <input type='text'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>

            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>Type of Business</h1>
                        
                    </label>
                    <input type='text'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>

            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>Business Size</h1>
                        
                    </label>
                    <input type='text'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
            </div>

            <div className='flex flex-col space-y-1'>
                <label className='text-left flex'>
                <h1>Launched</h1>
                        
                    </label>
                    <input type='text'
                    required
                    className=' border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
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
