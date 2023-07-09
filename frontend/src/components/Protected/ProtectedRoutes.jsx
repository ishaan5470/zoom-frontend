import { Navigate, Outlet } from "react-router-dom"
import {  useProtectedQuery } from "../../redux/api/login"



const ProtectedRoutes = ()=>{
    const {data,isSuccess,isLoading,error} = useProtectedQuery();
    if(isSuccess){
      console.log(data);
      localStorage.setItem("token",`${data.token}`)
    }
    else{
      console.log(error);
    }

  return (
    isLoading?<p>Loading</p>:isSuccess?<Outlet />:<Navigate to="/login" />
  )
}

export default ProtectedRoutes
