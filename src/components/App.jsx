import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import BasketPage from './Pages/BasketPage';
import FavoritePage from './Pages/FavoritePage';
import MainPage from './Pages/MainPage';
import RegPage from './Pages/RegPage';
import Footer from './UI/Footer';
import Header from './UI/Header';

export default function App({ card, example, user, basket }){

  // const [busket, setBasket] = useState([])
  
  // добавить товар в корзину  
  // const submitAddBasketHandler = async (e) =>  {
  //   e.preventDefault()
  //   const response = await fetch(`/api/v1/basket/${card.id}`, {
  //     method: "POST", 
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })}
    // if (response.ok) {
      // setBasket((prev) => [...prev, response.json(data)]); // отв от ручки 
      // }

  
  
  // удаление товара из корзины
  // const submitDelBasketHandler = async (e) =>  {
  //   e.preventDefault()
  //     const response = await fetch(`/change/${e.target.id}/delete`, {
  //       method: 'DELETE',
  //     });
      
  //     if (response.ok)    {
  //       setBasket((prev) => prev.filter((el) => el.id !== id));
  //     }
    
    
  return (
    <>
    <Header   />
  <div className="container"/>

      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/reg" element={<RegPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/basket" element={<BasketPage user={user} basket={basket} />} />
      <Route path="/favorite" element={<FavoritePage example={example} />} />
      </Routes>

  <Footer/>
    </>
  )
}
