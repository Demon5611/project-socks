import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegPage from './Pages/RegPage';
import Header from './UI/Header';



export default function App()

{

return (  <>
    <Header   />
  <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
    <div className="max-w-700 center">
      <Routes>
      <Route path="/" element={<RegPage />} />
      </Routes>
    </div>

  </div>
</>)
}