import React from 'react'
import { useFetchUserInfoQuery } from '../../../../redux/api/sspost';
export default function Profilepre() {

  const { data, isLoading, isError } = useFetchUserInfoQuery("64356264fb99aceedccc28d2");


  console.log(data)

  const user = data
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }







  return (

    <div className='bg-[#fff] rounded-xl mt-6 p-5 w-[350px] h-[700px] shadow top-[120px]  shadow-gray-500 xl:flex xl:flex-col hidden '>

      <div className='flex justify-between content-center mt-1'>
        <div className=''>

          <div className=' w-[110px] h-[110px] mx-1 object-cover bg-transparent rounded-[100px]'><img src='/Images/profilePic.png' className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>
          <h1 className='mt-2 text-lg '>{user.data?.firstName + " " + user.data?.lastName}</h1>

        </div>
        <div className='w-[90px] h-[90px] bg-white mr-4 mt-1'>
          <img src='/Images/qr.png' className='w-full h-full object-cover' alt='Pfimg' />
        </div>
      </div>

      <div className='mt-2 font-light'>
        {user.data.profile}
      </div>


    </div>


  )
}
