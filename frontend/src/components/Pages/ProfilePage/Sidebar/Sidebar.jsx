import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import JobSidebar from './JobSidebar';

function Sidebar() {

  const Jobs =[
    {
    Id:1,
    Role:"Java Developer",
    Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dignissim justo. Nam maximus pulvinar consequat. Aenean lobortis, tellus ac fermentum scelerisque. adipiscing elit. Cras et dignissim justo. Nam maximus pulvinar consequat. Aenean lobortis, tellus ac fermentum scelerisque"
    },
    {
      Id:2,
      Role:"BodyGuard",
      Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dignissim justo. Nam maximus pulvinar consequat. Aenean lobortis, tellus ac fermentum scelerisque. adipiscing elit. Cras et dignissim justo. Nam maximus pulvinar consequat. Aenean lobortis, tellus ac fermentum scelerisque"
    }
  ]

  return (
    <div className="relative w-[300px] h-[calc(100vh-85px)] ">
      <div><input className="h-10 text-base pl-3 rounded-lg w-full shadow-md shadow-gray-500 focus:outline-none" placeholder="Search" />
        <button className="absolute right-1 top-1"><SearchIcon /></button>
      </div>
      <div className="mt-5 bg-white rounded-xl p-5 h-[500px] shadow shadow-black overflow-y-scroll hideScrollbar">
        <h2 className="text-center font-bold text-xl">Jobs Looking For You</h2>
        <div>
          {Jobs.map((Job)=>{
            return <JobSidebar Role={Job.Role} Description={Job.Description} key={Job.Id} />
          })}
        </div>
      </div>
      <div className="mt-5 bg-white rounded-xl p-5 h-[500px] shadow shadow-black">
        <h2 className="text-center font-bold text-xl">Referrals</h2>
      </div>
    </div>
  )
}

export default Sidebar;