import React from 'react';
import Posts from './Posts';
import Combar from '../Modal/Comments/Combar';

export default function Post() {

  const user = useSelector((state) => state.posts.userInfo);
  const loading = useSelector((state) => state.posts.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user info when the component mounts
    dispatch(fetchUserInfo());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userInfo) {
    return <p>No user data available.</p>;
  }


  return (
    <div className='h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden'>

      <div className='bg-[#ffffff] mx-3 my-6 rounded-xl p-5  m-w-[700px] border-none shadow shadow-gray-500  '>
        <h1 className='text-xl'>Good Morning , {user.firstName} </h1>
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
