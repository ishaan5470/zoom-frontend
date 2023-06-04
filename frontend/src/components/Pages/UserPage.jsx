import React from 'react'
import { useLocation } from 'react-router-dom'



const UserPage = () => {

    const data = useLocation();
    console.log(data);
  return (
    <div>
      this is
    </div>
  )
}

export default UserPage
