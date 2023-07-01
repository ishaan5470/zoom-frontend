import Navbar from "./components/Common/Navbar and Footer/Navbar";
import SetCredentials from "./components/Common/Login and SignUp/SignUp/SetCredentials";
import Forget from "./components/Common/Login and SignUp/Login/Forget";
import ForgotPasswordPhoneNumber from "./components/Common/Login and SignUp/Login/ForgotPasswordPhoneNumber";
import ForgotPasswordEmail from "./components/Common/Login and SignUp/Login/ForgotPasswordEmail";
import ForgotPasswordVerifyOTP from "./components/Common/Login and SignUp/Login/ForgotPasswordVerifyOTP";
import ForgotPasswordSetPassword from "./components/Common/Login and SignUp/Login/SetPassword";

import Home from "./components/Pages/Skills&Sharing/Home";
import Header from "./components/Common/Navbar and Footer/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Common/Login and SignUp/Login/Login";
import UsersSignup from "./components/Common/Login and SignUp/SignUp/UsersSignup";

import ChatPage from "./components/Pages/chats/Chat";
import Contact from "./components/Pages/JobPosting/Contact";
import Guidelines from "./components/Pages/JobPosting/Guidelines";
import InstantJobDetails from "./components/Pages/JobPosting/InstantJobDetails";
import InternshipDetails from "./components/Pages/JobPosting/InternshipDetails";
import JobDetails from "./components/Pages/JobPosting/JobDetails";
import JobPosting from "./components/Pages/JobPosting/JobPosting";
import ShadowingDetails from "./components/Pages/JobPosting/ShadowingDetails";

import VisitUserProfile from "./components/Pages/ProfilePage/UserProfilePage";
import VerifyOTP from "./components/Common/Login and SignUp/SignUp/VerifyOTP";

import Notification from "./components/Pages/Notification/Notification";

import Footer from "./components/Common/Navbar and Footer/Footer";
import Shadowing from "./components/Pages/Shadowing/Shadowing";

import { useState, useEffect } from "react";
function App() {
  const [user, setUser] = useState(null);

  /*useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
    console.log("user in App.js",user);
  }, []);*/

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        //console.log("userdata: - ",userData.user);
        setUser(userData.user);
      } else {
        console.log("Failed to fetch user profile");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar user={user} />} />
        <Route path="/posts" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navbar user={user} /> : <Login user={user} />}
        />
        <Route path="/registeration/phoneNumber" element={<UsersSignup />} />
        <Route
          path="/registeration/phoneNumber/verify"
          element={<VerifyOTP />}
        />
        <Route path="/setCredentials" element={<SetCredentials />} />
        <Route path="/forgotPassword" element={<Forget />} />
        <Route
          path="/forgotPassword/phoneNumber"
          element={<ForgotPasswordPhoneNumber />}
        />
        <Route path="/forgotPassword/email" element={<ForgotPasswordEmail />} />
        <Route
          path="/forgotPassword/verify"
          element={<ForgotPasswordVerifyOTP />}
        />
        <Route
          path="/forgotPassword/setPassword"
          element={<ForgotPasswordSetPassword />}
        />
        <Route path="/messaging" element={<ChatPage />} />
      </Routes>
      {/* <Home /> */}
      {/* <VisitUserProfile /> */}
      {/* <Notification /> */}
      {/* <Contact /> */}
      {/* <Guidelines /> */}
      {/* <InstantJobDetails /> */}
      {/* <InternshipDetails /> */}
      {/* <JobDetails /> */}
      {/* <JobPosting /> */}
      {/* <ShadowingDetails /> */}
      {/* <ChatPage /> */}
      {/* <Footer/>  */}
      {/* <Shadowing /> */}
    </>
  );
}

export default App;
