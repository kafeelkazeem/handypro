import './App.css';
import React from 'react'
import GetStarted from './component/pages/getStarted';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './component/pages/login';
import Register from './component/pages/register';
import RegCustomer from './component/pages/regCustomer';
import Home from './component/pages/home';
import Services from './component/pages/services';
import Appointment from './component/pages/appointment';
import Profile from './component/pages/Profile';
import RegPro from './component/pages/regPro';
import ProHome from './component/pages/proHome';
import Proprofile from './component/pages/proprofile';
import Providers from './component/pages/providers';
import ServicePage from './component/pages/proServices';

function App() {
  return (
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<GetStarted />}></Route>
        <Route path='/login' element={<Login />}></Route> 
        <Route path='/register' element={<Register />}></Route> 
        <Route path='/regCustomer' element={<RegCustomer />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/regPro' element={<RegPro />}></Route>
        <Route path='/proHome' element={<ProHome />}></Route>  
        <Route path='/proProfile' element={<Proprofile />}></Route>
        <Route path='/proService' element={<ServicePage />}></Route>
        <Route path='/providers' element={<Providers />}></Route>  
       </Routes>
     </BrowserRouter>
  );
}

export default App;
