import React from 'react'
import './Footer.css'
import logo from '../images/ft_logo.png'

const Footer = () => {
  return (
    <div className='footer__container'>
        <div className='footer__logo'>
            <img src={logo} alt='?'></img>
        </div>
        <div className='ft__content'>
            <div className='ft__info'>
            (34025) 대전광역시 유성구 테크노2로 187 미건테크노월드(2차) 516-1호    (주)쿠바
            </div>
            <div className='ft__info'>
            Tel: 042.931.9766    Fax: 042.931.9767    Email: shlee@cuuva.com
            </div>
        </div>
    </div>
  )
}

export default Footer