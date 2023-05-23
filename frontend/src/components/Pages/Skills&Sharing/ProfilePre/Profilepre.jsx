import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo } from "../../../../redux/slices/sspost"

export default function Profilepre() {

  const user = useSelector((state) => state.posts.userInfo);
  const loading = useSelector((state) => state.posts.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <p>No user data available.</p>;
  }



  return (

    <div className='bg-[#fff] rounded-xl mt-6 p-5 w-[350px] h-[800px] shadow top-[120px]  shadow-gray-500 xl:flex xl:flex-col hidden '>

      <div className='flex justify-between content-center mt-1'>
        <div className=''>

          <div className=' w-[110px] h-[110px] mx-1 object-cover bg-transparent rounded-[100px]'><img src='/Images/profilePic.png' className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>
          <h1 className='mt-2 text-lg '>{user.firstName + " " + user.lastName}</h1>

        </div>
        <div className='w-[90px] h-[90px] bg-white mr-4 mt-1'>
          <img src='/Images/qr.png' className='w-full h-full object-cover' alt='Pfimg' />
        </div>
      </div>

      <div className='mt-2 font-light'>
        {user.profile}
      </div>


    </div>


  )
}
