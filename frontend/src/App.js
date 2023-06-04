import React from "react";
import Home from "./components/Pages/Skills&Sharing/Home";
import Navbar from "./components/Common/Navbar and Footer/Navbar";
import Header from "./components/Common/Navbar and Footer/Header"
import { Route,Routes } from "react-router-dom";
import Login from "./components/Common/Login and SignUp/Login";
import UsersSignup from "./components/Common/Login and SignUp/UsersSignup";


import VisitUserProfile from "./components/Pages/ProfilePage/UserProfilePage"
function App() {
  return (
    <>
      <Header />
     <Routes>
      <Route path="/posts" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registeration" element={<UsersSignup />} />
      </Routes>
      {/* <Home /> */}
      {/* <VisitUserProfile /> */}
    </>
  );
}

export default App;
