import React from "react";
import Home from "./components/Pages/Skills&Sharing/Home";
import Navbar from "./components/Common/Navbar and Footer/Navbar";
import Header from "./components/Common/Navbar and Footer/Header"
import { Route,Routes } from "react-router-dom";
import Login from "./components/Common/Login and SignUp/Login";
import UsersPage from "./components/Pages/UsersPage";

function App() {
  return (
    <>
      <Header />
     <Routes>
      <Route path="/posts" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<UsersPage />} />
      </Routes>
    </>
  );
}

export default App;
