import './App.css';
// import Login from 'C:/Users/namkyun/Desktop/workspace/today/src/components/Login.jsx';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Sidebar from 'C:/Users/namkyun/Desktop/workspace/today/src/components/Sidebar.jsx';
// import ProfileEdit from './pages/ProfileEdit';
import MyPage from './pages/MyPage';
import EditProfile from './pages/EditProfile';
import PasswordChangePage from './pages/PasswordChangePage';
import Login from './pages/Login';

import React from 'react';
import GlobalBlack from './components/GlobalBlack';

function App() {
  return (
    <div>
      <React.Fragment>
      <GlobalBlack />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<MyPage />} ></Route>

        {/* 이렇게 구간 나눠둔 이유는 마이페이지 확인해보기위하여 */}
         {/* <Route path="/" element={<Login />} ></Route> */}
         {/* <Route path="/Page/My" element={<MyPage />} ></Route> */}
         <Route path="/password-change" element={<PasswordChangePage />} ></Route>
         <Route path="/profile/edit" element={<EditProfile />} ></Route>

          {/* <Route path="/profile/edit" element={<ProfileEdit />} component={Sidebar} /> 제외해도 상관없는 코드 */}  
        </Routes>
      </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;


