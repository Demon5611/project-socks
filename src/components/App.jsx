import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import BasketPage from './Pages/BasketPage';
import FavoritePage from './Pages/FavoritePage';



export default function App()

{
return (  <>
    <Header   />
  <div className="container">
      <Routes>
      <Route path="/" element={<MainPage point={point} />} />
      <Route path="/reg" element={<RegPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/basket" element={<BasketPage user={user} basket={basket} />} />
      <Route path="/favorite" element={<FavoritePage example={example} />} />
      </Routes>
  </div>
</>)
}
