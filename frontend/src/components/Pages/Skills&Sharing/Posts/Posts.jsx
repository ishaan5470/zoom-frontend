import React from 'react'
import Dropdown from './Dropdown/Dropdown';
import Like from '../Modal/Followers/Like';
import Postype from '../Modal/NewPost/Postype';
import Comment from '../Modal/Comments/Comment';

export default function Posts() {
  return (
    <div >
      <div className='bg-[#f1f1f1] rounded-xl  m-w-[650px] py-4 m-auto my-6 shadow shadow-gray-700'>

        <div className='flex justify-start items-center mb-2 mx-4 '>



          <div className=' w-[50px] h-[50px] mx-1 object-cover bg-transparent rounded-[100px]'><img src='/Images/profilePic.png' className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>
          <div className='ml-[1rem]'>
            <h1 className='font-semibold'> Name </h1>
            <p className=''> SomeThing</p>
          </div>

          < button class="border-2 rounded-full px-3 py-1 ml-2">
            + follow
          </button>
          <Dropdown />

        </div>
        <div className='mx-4'>

          <p className='text-black font-light w-full text-[1rem]   '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dictum ex, pllacerat lacerat lacerat lacerat acerat justo. Orci varius natoque penatibus et magnis dis parturient mont.</p>
        </div>


        <div className='  h-[350px] sm:h-[500px] m-w-[650px] bg-gray-600 mt-4 mb-4'><img src='/Images/post.png' className='w-full h-full object-cover' alt='Pfimg' /></div>
        <div className='flex items-center justify-between mx-[20px]'>
          <span className='flex justify-center items-center relative gap-2 font-bold text-base'>

            <img src='Images/yo.svg' alt='yo' />
            {/* <div className='absolute bg-[#57a7b3] h-4 w-4 text-xs rounded-[50px] object-contain flex items-center justify-center -right-3 -top-1 text-white'>3</div> */}
            <Like />
          </span>
          <Comment />
          <Postype />
          <span className=' flex items-center justify-center text-base gap-2  font-bold'>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <g clip-path="url(#a)">
                <path fill="#003D4D" d="M23.781.218a.75.75 0 0 1 .165.81l-8.728 21.82a1.126 1.126 0 0 1-1.994.186l-4.767-7.492-7.492-4.767A1.126 1.126 0 0 1 1.15 8.78L22.97.054a.75.75 0 0 1 .81.165V.218ZM9.954 15.104l4.142 6.507 7.1-17.748-11.242 11.24Zm10.18-12.302-17.747 7.1 6.508 4.14 11.24-11.24Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
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
