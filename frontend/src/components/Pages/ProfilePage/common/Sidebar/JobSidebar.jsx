import React from 'react'

function JobSidebar(props) {
  return (
    <div className="h-[100px] p-3 my-5 shadow shadow-gray-500 overflow-hidden rounded-lg bg-[#ffb937]">
      <h1 className="text-xl font-semibold text-[purple] mb-1">{props.Role}</h1>
      <h3 className="text-base font-light">{props.Description}</h3>
    </div>
  )
}

export default JobSidebar
