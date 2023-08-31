import React from 'react'
import Footer from '../UI/Footer'

export default function MainPage({ point }) {
  console.log(point, 'POINT FROM FRONT');
  return (
    <Footer point={point}/>
  )
}
