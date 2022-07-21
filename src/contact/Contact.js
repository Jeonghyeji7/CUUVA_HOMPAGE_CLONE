import React from 'react'
import './Contact.css'
import icon1 from '../images/contact/icon/add_icon.png'
import icon2 from '../images/contact/icon/mail_icon.png'
import icon3 from '../images/contact/icon/phone_icon.png'
import mapImg from '../images/contact/Address_map.png'
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <div className='container contact__container'>
      <div className='title contact__title'>Contact</div>
      <div className='contact__scroll'>
        <div className='contact__box'>
          <div className='contact__map'>
            <img src={mapImg} alt='Address map image.' />
          </div>

          <div className='contact__items'>

            <div className='contact__item first'>
              <div className='item__image'>
                <img src={icon1} alt='1'/>
              </div>
              <p className='item__big'>Address</p>
              <p className='item__small'>
                대전광역시 유성구 테크노2로 187<br />
                미건테크노월드(2차) 516-1호
              </p>
            </div>

            <div className='contact__item'>
              <div className='item__image'>
                <img src={icon2} alt='1'/>
              </div>
              <p className='item__big'>E-mail</p>
              <p className='item__small'>shlee@cuuva.com</p>
            </div>

            <div className='contact__item'>
              <div className='item__image'>
                <img src={icon3} alt='1'/>
              </div>
              <p className='item__big'>Tel</p>
              <p className='item__small'>042.931.9766</p>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
