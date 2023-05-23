import React from 'react'
import PostingForm from "./Posts/PostingForm.jsx";
import RecentContacts from "./RecentContacts/RecentContacts.jsx"
import Profilepre from './ProfilePre/Profilepre.jsx';

export default function Home() {
  return (
    < div className='w-full overflow-none h-[calc(100vh-80px)]'>
      <div className="flex justify-center items-start my-auto gap-5  bg-[#f9f9f9]">
      <Profilepre />
      <PostingForm/>
      <RecentContacts />
    </div>
    {/*put footer here or layout breaks*/}
    {/* <div className="FakeFooter h-[600px] bg-slate-500"></div> */}
    </div>
  )
}
