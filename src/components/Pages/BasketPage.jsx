import React from 'react';
import { Button, Card } from 'react-bootstrap';
import FavoriteCards from './FavoriteCards';



export default function BasketItem({ card })
{



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
  );
}



// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import React, { useState } from 'react';
// import BasketItem from './BasketItem';

// export default function BasketCard({ basket }) {
//   const [card, setMedCard] = useState(basket);
//   const submitHandler = async (e, id) => {
//     e.preventDefault();
//     const response = await fetch(`/api/v1/basket/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       setMedCard((prev) => prev.filter((el) => el.id !== id));
//     }
//   };
//   return (
//     <div className="row mt-3">
//       {exemple?.map((el) => (
//         <div key={el.id} className="col-md-4 mb-4">
//           <BasketItem key2={el} submitHandler={submitHandler} />
//         </div>
//       ))}
//     </div>
//   );
// }


// function BasketPage() {
//   return (
//     <div className="no-bullets no-margin no-padding right" style={{ marginLeft: '20%', margingight: '20%', margintop: '20%' }}>
//         <div className="row mt-2">
//       <div className="col-10">
// <h1 style={{ marginLeft: '20%', margingight: '20%', margintop: '20%' }}>Товары в корзине</h1>
    
//     <Card style={{ marginLeft: '20%', margingight: '20%', margintop: '20%', width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Товар</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Купить</Button>
//       </Card.Body>
//       </Card>
//         </div>
//         </div>
//         </div>
      
    
//   );
// }

// export default BasketPage;
