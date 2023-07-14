
import { useEffect, useState } from 'react';
import { useFetchUserInfoMutation} from '../../redux/api/sspost';
import { useSelector } from 'react-redux';
const Profilepre = ()=>{
  const [userInfo ,{ data, isLoading, isError, error }] = useFetchUserInfoMutation();
  const {id,userName} = useSelector((state=>state.user))
  useEffect(()=>{
    const userData = async ()=>{
      userInfo({id})
    }
    userData();
  },[])
  const [moreFlag,setMoreFlag] = useState(false);
  // console.log(data)
  // const user = data
  // if (isLoading) {
  //   return <div className='h-[calc(100vh-80px)] overflow-y-scroll overflow-x-clip rounded-xl pt-10 w-[310px]'>Loading...</div>;
  // }
  // if (isError) {
  //   return <div className='h-[calc(100vh-80px)] overflow-y-scroll overflow-x-clip rounded-xl pt-10 w-[310px]'>Error: {error.message}</div>;
  // }
  let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non ipsum velit. Donec imperdiet ex vitae mauris rhoncus semper sit amet sed sapien. Nulla justo ipsum, tempor ac eleifend et, dignissim vel nibh.`
  return (
    <div className='h-[calc(100vh-80px)] overflow-y-scroll overflow-x-clip rounded-xl px-2 pb-1 w-[310px]'>
    <div className='bg-[#fff] rounded-xl mt-6 px-8 py-8 w-[300px] min-h-[80vh] max-h-fit shadow top-[120px]  shadow-gray-500 xl:flex xl:flex-col items-center hidden gap-2 text-[#003d4d]'>
          <div className=' w-[110px] h-[110px] mx-1 object-cover bg-transparent rounded-[100px]'><img src='/Images/profilePic.png' className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>
          <h1 className='mt-2 text-xl font-semibold'>Name</h1>
          <span>Your Expertise</span>
          <span>{moreFlag?text:text.slice(0,60)} <span className='cursor-pointer font-semibold transition-all ease-in-out' onClick={()=>{setMoreFlag(!moreFlag)}}>{moreFlag?`less..`:`More ...`} </span> </span>
          <hr className='border-black border-b-[1px] w-full opacity-20' />
          <div className='w-full'>
            <div className="flex justify-between mb-1"><span className='font-semibold'>Supporters</span><span className='font-semibold'>30</span></div>
            <div className="flex justify-between"><span className='font-semibold text-[#57a7b3]'>Supporting</span><span className='font-semibold text-[#57a7b3]'>20</span></div>
          </div>
          <hr className='border-black border-b-[1px] w-full opacity-20' />
          <button className='border-2 border-black py-2 w-full rounded-3xl hover:bg-[#003d4d] hover:text-white transition-all ease-linear'>Saved Posts</button>
          <button className='border-2 border-black py-2 w-full rounded-3xl hover:bg-[#003d4d] hover:text-white transition-all ease-linear'>My Posts</button>
    </div>
    </div>
  )
}

export default Profilepre;
