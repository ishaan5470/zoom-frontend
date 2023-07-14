import React from 'react'
import Profilepre from './HomeComponents/Profilepre'
import RightSidebar from './HomeComponents/RightSidebar'
import PostingForm from './HomeComponents/PostingForm'

export default function Home() {
  return (
    <div className='w-full h-[calc(100vh-80px)] overflow-y-clip'>
      <div className="flex justify-center items-start my-auto gap-5  bg-[#f9f9f9]">
      <Profilepre />
      <PostingForm />
      <RightSidebar />
    </div>
    {/*put footer here or layout breaks*/}
    {/* <div className="FakeFooter h-[600px] bg-slate-500"></div> */}
    </div>
  )
}
