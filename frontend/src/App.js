import React from 'react';
import Home from './components/Pages/Skills&Sharing/Home';
import Header from './components/Common/Navbar and Footer/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Common/Login and SignUp/Login';
import UsersSignup from './components/Common/Login and SignUp/UsersSignup';

import ChatPage from './pages/ChatPage/ChatPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/posts' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registeration' element={<UsersSignup />} />
        <Route path='/messaging' element={<ChatPage />} />
      </Routes>
      {/* <Home /> */}
      {/* <VisitUserProfile /> */}
    </>
  );
}

export default App;
