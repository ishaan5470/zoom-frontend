import React, { useEffect } from "react";
// import Posts from './Posts';
// import Combar from './Comments/Combar';
import Posts from "./PostingFormComponents/Posts";
import {
  useFetchUserInfoMutation,
  useFetchHomeInfoMutation,
} from "../../redux/api/sspost";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Post({ id }) {
  const { userId, userName } = useSelector((state) => state.user);

  // const [ userInfo , {data,isLoading,isSuccess,isError,error} ] = useFetchUserInfoMutation();

  // const [homeInfo, { data, isLoading, isError, isSuccess, error }] =
  //   useFetchHomeInfoMutation();

  // useEffect(() => {
  //   const getHomePosts = async () => {
  //     await homeInfo({ id: userId });
  //     console.log("data : ", data);
  //   };

  //   getHomePosts();
  // }, []);
  let postData = [];

  useEffect(async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/users/getMyPosts/",
        { id }
      );

      postData = response.data.data.data;
      console.log(postData);
    } catch (error) {
      console.error(error);
    }
  });

  // if (isLoading) {
  //   return (
  //     <div className="h-[calc(100vh-80px)] overflow-y-scroll overflow-x-clip pt-10 w-[700px]">
  //       Loading...
  //     </div>
  //   );
  // }
  // if (isError) {
  //   return (
  //     <div className="h-[calc(100vh-80px)] overflow-y-scroll overflow-x-clip pt-10 w-[700px]">
  //       Error: {error.message}
  //     </div>
  //   );
  // }
  // if (isSuccess) {
    return (
      <div className="h-[calc(100vh-80px)] overflow-y-scroll overflow-x-clip w-[700px]">
        <div className="bg-[#ffffff] mx-3 my-6 rounded-xl p-5  m-w-[1000px] border-none shadow shadow-gray-500  ">
          {/* <h1 className='text-xl'>Good Morning ,  {user.data.firstName} </h1> */}
          <p className="text-sm">Time to Share What U Have Got </p>
        </div>
        <div className="bg-[#fff] mx-3 my-3 rounded-xl pt-2 pb-2 px-5 z-50 max-w-[700px] border-none shadow shadow-gray-500">
          {/* {?.map((post) => (
            <React.Fragment key={post._id}>
              <Posts post={post} pid={post._id} id={post._id} uid={userId} />
              <Combar pid={post._id} uid={userId} />
            </React.Fragment>
          ))} */}
          {postData.map((post) => (
            <Post post={post} />
          ))}
        </div>
      </div>
    );
  }
// }
