import React from "react";
import Home from "./components/Pages/Skills&Sharing/Home";
import Navbar from "./components/Common/Navbar and Footer/Navbar";
import Header from "./components/Common/Navbar and Footer/Header"
import { Route,Routes } from "react-router-dom";
import Login from "./components/Common/Login and SignUp/Login/Login";
import UsersSignup from "./components/Common/Login and SignUp/SignUp/UsersSignup";
import SetPassword from "./components/Common/Login and SignUp/SignUp/SetPassword";
import Forget from "./components/Common/Login and SignUp/Login/Forget";
import ForgotPasswordPhoneNumber from "./components/Common/Login and SignUp/Login/ForgotPasswordPhoneNumber";

import VisitUserProfile from "./components/Pages/ProfilePage/UserProfilePage"
import VerifyOTP from "./components/Common/Login and SignUp/SignUp/VerifyOTP";
function App() {
  return (
    <>
      <Header />
     <Routes>
      <Route path="/posts" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registeration/phoneNumber" element={<UsersSignup />} />
      <Route path="/registeration/phoneNumber/verify" element={<VerifyOTP />} />
      <Route path="/setCredentials" element={<SetPassword />} />
      <Route path="/forgotPassword" element={<Forget />} />
      <Route path="/forgotPassword/phoneNumber" element={<ForgotPasswordPhoneNumber />} />
      </Routes>
      {/* <Home /> */}
      {/* <VisitUserProfile /> */}
    </>
  );
}

export default App;
