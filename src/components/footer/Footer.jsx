import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaImdb} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Sanjay R A</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>


      <div className='footer__socials'>
        <a href='https://www.facebook.com/sanjaykeyboardplayer?mibextid=9R9pXO' target='_blank'><FaFacebookF /></a>
        <a href='https://instagram.com/sanjayr119?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank'><FiInstagram /></a>
        <a href='https://www.imdb.com/name/nm13279182/?ref_=nv_sr_srsg_3_tt_0_nm_8_q_SANJAY%2520R.A' target='_blank'><FaImdb /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sanjay R A. All rights reserved.</small>
      </div>
      {/* <small><a href="https://www.freepik.com/free-photo/blue-wooden-textured-flooring-background_18835399.htm#query=dark%20blue%20texture&position=16&from_view=keyword&track=ais">Image by rawpixel.com</a> on Freepik</small> */}
    </footer>
  )
}

export default Footer