import React, { useEffect, useState } from 'react'
import Dropdown from "./PostsComponents/Dropdown"
import Like from "./PostsComponents/Like"
// import Postype from '../RecentContacts/List/Postype';
import Comment from "./PostsComponents/Comment"
import { useAddLikeToPostMutation } from '../../../redux/api/sspost';


export default function Posts({ post, pid, uid }) {

  console.log(post)

  const [time, setTime] = useState(null);

  const [like, setlike] = useState(false);

  const [handleLike, data] = useAddLikeToPostMutation()



  const updateLike = () => {
    handleLike({ postid: post._id, userid: uid })
  }

  const checkLike = () => {
    const initLike = post.likes.includes(uid)
    setlike(initLike)
  }

  useEffect(() => {

    checkLike();

  }, [post.likes, uid])


  function calculateTimeDifference() {

    const createdDate = new Date(post.createdAt);
    const currentDate = new Date();
    const timeDifferenceMinutes = Math.floor((currentDate - createdDate) / (1000 * 60)); // Calculating the time difference in minutes

    const timeDifferenceHours = Math.floor(timeDifferenceMinutes / 60); // Calculating the time difference in hours
    const timeDifferenceDays = Math.floor(timeDifferenceHours / 24); // Calculating the time difference in days
    const timeDifferenceWeeks = Math.floor(timeDifferenceDays / 7); // Calculating the time difference in weeks
    const timeDifferenceMonths = Math.floor(timeDifferenceDays / 30); // Calculating the time difference in months
    const timeDifferenceYears = Math.floor(timeDifferenceDays / 365); // Calculating the time difference in years

    let timeDifferenceFormatted;
    if (timeDifferenceYears >= 1) {
      timeDifferenceFormatted = timeDifferenceYears + " year(s)";
    } else if (timeDifferenceMonths >= 4) {
      timeDifferenceFormatted = "More than 3 months";
    } else if (timeDifferenceWeeks >= 7) {
      timeDifferenceFormatted = "More than 6 weeks";
    } else if (timeDifferenceDays >= 24) {
      const weeks = Math.floor(timeDifferenceDays / 7);
      timeDifferenceFormatted = weeks + " week(s)";
    } else if (timeDifferenceHours >= 24) {
      timeDifferenceFormatted = timeDifferenceDays + " day(s)";
    } else if (timeDifferenceMinutes >= 60) {
      timeDifferenceFormatted = timeDifferenceHours + " hour(s)";
    } else {
      timeDifferenceFormatted = timeDifferenceMinutes + " minute(s)";
    }

    setTime(timeDifferenceFormatted)
  }
  //Update the time difference every second (1000 milliseconds)
  setInterval(calculateTimeDifference, 1000);

  return (
    <div >
      <div className='bg-[#f1f1f1] rounded-xl  m-w-[700px] py-4 m-auto my-6 shadow shadow-gray-700'>
        <div className='flex justify-start items-center mb-2 mx-4 '>
          <div className=' w-[50px] h-[50px] mx-1 object-cover bg-transparent rounded-[100px]'><img src='/Images/profilePic.png' className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>
          <div className='ml-[1rem]'>
            <h1 className='font-semibold'> {post?.postDescription} </h1>
            <p className=''> {time}</p>
          </div>
          <button class="border-2 rounded-full px-3 py-1 ml-2">+ support</button>
          <Dropdown />
        </div>
        {/* Post Description  */}
        <div className='mx-4'>
          <p className='text-black font-light w-full text-[1rem]   '>
            {post?.description}
          </p>
        </div>
        {/* Post Image  */}
        <div className='  h-[350px] sm:h-[500px] m-w-[700px] bg-gray-600 mt-4 mb-4'>
          <img src={post.image} className='w-full h-full object-cover' alt='PostImg' />
        </div>
        <div className='flex items-center justify-between mx-[20px]'>
          <span className='flex justify-center items-center relative gap-2 font-bold text-base'>
            {like ? <div onClick={updateLike} className="">Liked</div> : <img onClick={updateLike} src='Images/yo.svg' alt='yo' />}
            <Like like={post?.likes} usid={post?.userid} />
          </span>
          <Comment com={post?.comment} pid={pid} uid={uid} />
          {/* <Postype /> */}
          <span className=' flex items-center justify-center text-base gap-2  font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <g clip-path="url(#a)">
                <path fill="#003D4D" d="M23.781.218a.75.75 0 0 1 .165.81l-8.728 21.82a1.126 1.126 0 0 1-1.994.186l-4.767-7.492-7.492-4.767A1.126 1.126 0 0 1 1.15 8.78L22.97.054a.75.75 0 0 1 .81.165V.218ZM9.954 15.104l4.142 6.507 7.1-17.748-11.242 11.24Zm10.18-12.302-17.747 7.1 6.508 4.14 11.24-11.24Z" />
              </g>
              <defs>
                {/* <clipPath id="a">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath> */}
              </defs>
            </svg>
            <div className="flex flex-col items-center">
              <p className=' sm:flex hidden ml-1 font-normal'> Send</p>
              <div className='font-thin text-[14px] leading-3'>125k</div>
            </div>
          </span>

        </div>

      </div>
    </div>
  )
}
