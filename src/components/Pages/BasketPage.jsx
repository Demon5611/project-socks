import React from 'react'
import SocksCards from '../UI/SocksCards'

export default function BasketPage({ socks }) {
  


    console.log('-------------',socks);
  return (
    <div className="row mt-3">
      {card?.map((el) => (
        <div
          key={el.id}
          className="col-md-4 "
          style={{
            marginLeft: '5%',
            flex: '0',
            width: '15%',
          }}
        >
          
          <FavoriteCards card={el} />
        </div>
      ))}
    </div>
  )
}


