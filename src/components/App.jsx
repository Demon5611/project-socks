import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegPage from './Pages/RegPage';
import Header from './UI/Header';
import Footer from './UI/Footer';
import MainPage from './Pages/MainPage';
import AuthPage from './Pages/AuthPage';
import BasketPage from './Pages/BasketPage';
import FavoritePage from './Pages/FavoritePage';



export default function App()

{
return (  <>
    <Header   />
  <div className="container">
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/reg" element={<RegPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
  </div>
  <Footer/>
</>)
}