import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegPage from './Pages/RegPage';
import Header from './UI/Header';
import Footer from './UI/Footer';
import MainPage from './Pages/MainPage';
import AuthPage from './Pages/AuthPage';
import BasketPage from './Pages/BasketPage';
import FavoritePage from './Pages/FavoritePage';
import AccountPage from './Pages/AccountPage';



export default function App()

{
return (  <>
    <Header  user={user,point} />
  <div className="container">
      <Routes>
      <Route path="/" element={<MainPage point={point} />} />
      <Route path="/reg" element={<RegPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
  </div>
</>)
}