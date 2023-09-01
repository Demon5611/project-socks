import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import BasketPage from './Pages/BasketPage';
import FavoritePage from './Pages/FavoritePage';
import AccountPage from './Pages/AccountPage';
import MainPage from './Pages/MainPage';
import RegPage from './Pages/RegPage';
import Header from './UI/Header';
import Footer from './UI/Footer';

export default function App({ card, example, user, basket, point }){

return (  <>
    <Header  user={user} />
  <div className="container">
      <Routes>
      <Route path="/" element={<MainPage user={user} />} />
      <Route path="/reg" element={<RegPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/basket" element={<BasketPage user={user} basket={basket}/>} />
      <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
      <Footer point={point}/>
  </div>
</>)
}
