import React from 'react';

export default function DesignCard({ img }) {
  return (
    <div>
      <div className="card" style={{ width: '10rem' }}>
        <img className="card-img-top" src={`/img/design/${img}`} alt="Card" style={{ width: '100%' }} />
      </div>
    </div>
  );
}