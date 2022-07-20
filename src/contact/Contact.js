import React from 'react'
import './Contact.css'
import icon1 from '../images/contactIcon/add_icon.png'
import icon2 from '../images/contactIcon/mail_icon.png'
import icon3 from '../images/contactIcon/phone_icon.png'

const Contact = () => {
  return (
    <div className='contact__container'>
<div className='contact__title'>
    Contact
</div>
<div className='contact__box'></div>
<div className='contact__items'>
    <div className='contact__item'>
        <img src={icon1} alt='1'></img>
        <div className='item__big'>Address</div>
        <div className='item__small'>대전광역시 유성구 테크노2로 187
        미건테크노월드(2차) 516-1호</div>
    </div>
    <div className='contact__item'>
        <img src={icon2} alt='1'></img>
        <div className='item__big'>E-mail</div>
        <div className='item__small'>shlee@cuuva.com</div>
    </div>
    <div className='contact__item'>
        <img src={icon3} alt='1'></img>
        <div className='item__big'>Tel</div>
        <div className='item__small'>042.931.9766</div>
    </div>
</div>
    </div>
  )
}

export default Contact