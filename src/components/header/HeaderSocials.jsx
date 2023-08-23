import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaImdb} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.facebook.com/sanjaykeyboardplayer?mibextid=9R9pXO' target='_blank'><FaFacebookF /></a>
        <a href='https://instagram.com/sanjayr119?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank'><FiInstagram /></a>
        <a href='https://www.imdb.com/name/nm13279182/?ref_=nv_sr_srsg_3_tt_0_nm_8_q_SANJAY%2520R.A' target='_blank'><FaImdb /></a>

    </div>
  )
}

export default HeaderSocials