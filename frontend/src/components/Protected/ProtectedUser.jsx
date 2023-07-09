import React, { useEffect } from 'react'
import { useProtectedUserQuery } from '../../redux/api/login'

const ProtectedUser = () => {
    const {data,error,isSuccess}= useProtectedUserQuery();
    useEffect(()=>{
        if(isSuccess){
            console.log(data);
        }
        else{
            console.log(error);
        }
    },[])
  return (
    <div>
      <h1>Hello User</h1>
    </div>
  )
}

export default ProtectedUser
