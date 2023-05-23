import React from 'react'
import List from "./List/List.jsx";
import List2 from './List/List2.jsx';

export default function RecentContacts() {
  return (
    
    <div className='bg-[#fff] w-[300px] h-[700px] rounded-xl mt-6 p-5 shadow top-[120px] right-[300px] shadow-gray-500 xl:flex xl:flex-col hidden '>
    <List/>
    <List2/>
    </div>
  )
}
