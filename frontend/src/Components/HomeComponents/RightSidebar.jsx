import React from 'react'
import ShareSkills from "./RightSidebarComponents/ShareSkills";
import ShareExperience from './RightSidebarComponents/ShareExperience';
import BlogsUpdate from './RightSidebarComponents/BlogsUpdate';

const RightSidebar = ()=>{
  return (
    <div className='max-h-[calc(100vh-80px)] overflow-y-scroll p-1 flex-4'>
    <div className='bg-[#fff] w-[300px] h-[70vh]  rounded-xl mt-6 p-5 shadow shadow-gray-500 xl:flex xl:flex-col justify-center items-center hidden'>
      <ShareSkills />
      <ShareExperience />
    </div>
    <div className="shadow shadow-gray-500 bg-[#fff] w-[300px] h-fit py-4 px-4 mt-4 rounded-xl">
      <BlogsUpdate />
    </div>
    </div>
  )
}

export default RightSidebar;
