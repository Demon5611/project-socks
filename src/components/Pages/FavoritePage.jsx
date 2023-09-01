import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FavoriteCards from './FavoriteCards';



export default function FavoritePage() {

  const example = [
    {
      color: 'blue',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/1.png'
    },
    {
      color: 'orange',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/2.png'
    },
    {
      color: 'black',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/3.png'
    },
    {
      color: 'orange',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/4.png'
    },
    {
      color: 'white',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис1.png'
    },
    {
      color: 'blue',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис2.png'
    },
    {
      color: 'black',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис3.png'
    },
    {
      color: 'red',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис4.png'
    },
    {
      color: 'blue',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/1.png'
    },
    {
      color: 'orange',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/2.png'
    },
    {
      color: 'black',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/3.png'
    },
    {
      color: 'orange',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/4.png'
    },
    {
      color: 'white',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис1.png'
    },
    {
      color: 'blue',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис2.png'
    },
    {
      color: 'black',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис3.png'
    },
    {
      color: 'red',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис4.png'
    },
    {
      color: 'blue',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/1.png'
    },
    {
      color: 'orange',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/2.png'
    },
    {
      color: 'black',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/3.png'
    },
    {
      color: 'orange',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/4.png'
    },
    {
      color: 'white',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис1.png'
    },
    {
      color: 'blue',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис2.png'
    },
    {
      color: 'black',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис3.png'
    },
    {
      color: 'red',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис4.png'
    },
    {
      color: 'blue',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/1.png'
    },
    {
      color: 'orange',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/2.png'
    },
    {
      color: 'black',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/3.png'
    },
    {
      color: 'orange',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/4.png'
    },
    {
      color: 'white',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис1.png'
    },
    {
      color: 'blue',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис2.png'
    },
    {
      color: 'black',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис3.png'
    },
    {
      color: 'red',
      img: 'https://disk.yandex.ru/i/xDgzn06RmlH5_Q',
      design: '/img/рис4.png'
    },
  ]



  // const []
  // async function addFunc(e) {
  //   e.preventDefault();
  //   const data = Object.fromEntries(new FormData(e.target));
  //   if (data.title?.trim().length && data.inputBody?.trim().length)
  //   {
  //     const response = await fetch('/api/post/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     if (response.ok)
  //     {
  //       e.target.reset();
  //       const post = await response.json();
  //       setCurrentPosts((prev) => [...prev, post]);
  //     }
  //   }
  // }

  

  return (
    // <div>Hello</div>
    <Card    className="col-md-4 "
    style={{
      marginLeft: '5%',
      flex: '0',
      width: '15%',
    }} >
        {example.map((card) => < FavoriteCards    card={card} key={card.design} />)}
    </Card>
  )
}







