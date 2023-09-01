import React, { useEffect, useState } from 'react';
import ImgCard from '../UI/ImgCard';
import DesignCard from '../UI/DesignCard';
// import PaleteColor from '../UI/PaleteColor';

export default function MainPage() {

  const [img, setImg] = useState([])
  const [design, setDesign] = useState([])

  const imgHandler = async () => {
    try {
      const response = await fetch('/api/img', {
        method: 'GET'
      });
      const images = await response.json();
      setImg(images);
    } catch (error) {
      console.error(error);
    }
  };

  const designHandler = async () => {
    try {
      const response = await fetch('/api/design', {
        method: 'GET'
      });
      const files = await response.json();
      setDesign(files);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <h1>Главная страница</h1>
      <div className='test3'>
        <div className='test'>
          <div className='test2' />
        </div>
      </div>
      <button onClick={imgHandler} type='button'>Click</button>
      {Array.isArray(img) && img.map((el) => <ImgCard key={el.id} img={el} />)}
      <button onClick={designHandler} type='button'>design</button>
      {Array.isArray(design) && design.map((el) => <DesignCard key={el.id} img={el} />)}
      {/* <PaleteColor/> */}
    </>
  );
}

