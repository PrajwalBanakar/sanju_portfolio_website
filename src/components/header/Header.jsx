import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import HeaderSocials from './HeaderSocials.jsx'
import sanju_img from '../../assets/sanju_img.jpg'

const Header = () => {
  return (
    <header>
      {/* Class name declared using BEM naming convention */}
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Sanjay R A</h1>
        <h5 className='text-light'>Music Composer | Music Producer | Music Arranger | Orchestrator</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={sanju_img} alt='MainImg'  />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header