import React from 'react'
import './Footer.css'
import logo from '../images/ft_logo.png'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__container_inner'>
        <div className='footer__logo'>
          <img src={logo} alt='?' />
        </div>
        <div className='ft__contents'>
          <div className='ft__info'>
            (34025) 대전광역시 유성구 테크노2로 187 미건테크노월드(2차) 516-1호 (주)쿠바
          </div>
          <div className='ft__info'>
            <p>Tel: 042.931.9766</p>
            <p>Fax: 042.931.9767</p>
            <p>Email: shlee@cuuva.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
