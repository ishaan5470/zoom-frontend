import React from 'react';
import Posts from './Posts';
import Combar from '../Modal/Comments/Combar';
import { useFetchUserInfoQuery } from '../../../../redux/slices/sspost';

export default function Post() {

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
    <div className='h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden'>

      <div className='bg-[#ffffff] mx-3 my-6 rounded-xl p-5  m-w-[700px] border-none shadow shadow-gray-500  '>
        <h1 className='text-xl'>Good Morning ,  {user.data.firstName} </h1>
        <p className='text-sm'>Time to Share What U Have Got </p>


      </div>
      <hr className='separator my-4 mx-auto w-[600px] h-0 border-none border-b border-black' />
      <div className='bg-[#fff] mx-3 my-3 rounded-xl pt-2 pb-2 px-5 z-50 max-w-[700px] border-none shadow shadow-gray-500'>
        <Posts />

        <Combar />
        <Posts />
        <Combar />
        <Posts />
        <Combar />
        <Posts />
        <Combar />
        <Posts />
      </div>


    </div>
  )
}
