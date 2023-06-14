import React from "react";
import Home from "./components/Pages/Skills&Sharing/Home";
import Navbar from "./components/Common/Navbar and Footer/Navbar";
import Header from "./components/Common/Navbar and Footer/Header"
import { Route,Routes } from "react-router-dom";
import Login from "./components/Common/Login and SignUp/Login/Login";
import UsersSignup from "./components/Common/Login and SignUp/SignUp/UsersSignup";
import SetCredentials from "./components/Common/Login and SignUp/SignUp/SetCredentials";
import Forget from "./components/Common/Login and SignUp/Login/Forget";
import ForgotPasswordPhoneNumber from "./components/Common/Login and SignUp/Login/ForgotPasswordPhoneNumber";
import ForgotPasswordEmail from "./components/Common/Login and SignUp/Login/ForgotPasswordEmail";
import ForgotPasswordVerifyOTP from "./components/Common/Login and SignUp/Login/ForgotPasswordVerifyOTP";
import ForgotPasswordSetPassword from "./components/Common/Login and SignUp/Login/SetPassword";


import React from 'react';
import Home from './components/Pages/Skills&Sharing/Home';
import Header from './components/Common/Navbar and Footer/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Common/Login and SignUp/Login';
import UsersSignup from './components/Common/Login and SignUp/UsersSignup';

import ChatPage from './pages/ChatPage/ChatPage';

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
      <Route path="/setCredentials" element={<SetCredentials />} />
      <Route path="/forgotPassword" element={<Forget />} />
      <Route path="/forgotPassword/phoneNumber" element={<ForgotPasswordPhoneNumber />} />
      <Route path="/forgotPassword/email" element={<ForgotPasswordEmail />} />
      <Route path="/forgotPassword/verify" element={<ForgotPasswordVerifyOTP />} />
      <Route path="/forgotPassword/setPassword" element={<ForgotPasswordSetPassword />} />
      <Route path='/messaging' element={<ChatPage />} />
      </Routes>
      {/* <Home /> */}
      {/* <VisitUserProfile /> */}
    </>
  );
}

export default App;
