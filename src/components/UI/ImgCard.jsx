import React from 'react';

export default function ImgCard({ img, imgOntouch}) {
  return (
    <div>
      <div className="card" style={{ width: '10rem' }}>
        <img className="card-img-top" src={`/img/customImg/${img}`} alt="Card" style={{ width: '100%' }} />
        <button onClick={()=>imgOntouch(img)} type="button">Click</button>
      </div>
    </div>
  );
}