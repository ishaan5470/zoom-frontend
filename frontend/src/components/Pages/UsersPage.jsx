import React from 'react'
import { useLocation } from 'react-router-dom';
import { useGetFakePostsQuery } from '../../redux/slices/login';

const UsersPage = () => {

  const data = useLocation();
  console.log(data?.state);
  const {UserQuery,isLoading,isError} =useGetFakePostsQuery();
  console.log(UserQuery);

  return (
    <div>
      this is {data?.state?.data}
      this is {UserQuery}
    </div>
  )
}

export default UsersPage
