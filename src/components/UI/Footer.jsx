import React from 'react'
import { YMaps , Map} from '@pbe/react-yandex-maps';
import DustTwo from './Map';


export default function Footer({ point }) {
  console.log(point, 'FOOOO');
  return (
    
    <div className="footer_left" > 
      <h4>Контактная информация:</h4>
        <div className="footer_letf_item">
            <div className="footer_name">Enjoy socks</div>
            <div className="footer_value">OkoloRAZRABOTKI</div>
        </div>
        <div className="footer_letf_item">
            <div className="footer_name">Email</div>
            <div className="footer_value"> info@enjoysocks.ru</div>
        </div>
        <div className="footer_letf_item">
            <div className="footer_name">Адрес</div>
            <div className="footer_value">г. Москва, Шоссе Энтузиастов 12 ст2</div>
        </div>
        <div className="footer_letf_item">
            <div className="footer_name">Номер телефона:</div>
            <div className="footer_value">+7-999-666-36-36</div>
        </div>
        <div>  <DustTwo point={point}/>
        </div>
    </div>
  
  )
}
