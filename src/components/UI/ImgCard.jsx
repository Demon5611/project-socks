import React from 'react';

export default function ImgCard({ img }) {
  return (
    <div>
      <div className="card" style={{ width: '10rem' }}>
        <img className="card-img-top" src={`/img/customImg/${img}`} alt="Card" style={{ width: '100%' }} />
      </div>
    </div>
  );
}