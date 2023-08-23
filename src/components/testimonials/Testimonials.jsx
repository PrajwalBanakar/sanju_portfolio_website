import React, {useEffect} from 'react'
import './Testimonials.css'
import A_R_Rahman from '../../assets/A_R_Rahman.jpg'
import Arjun_Janya from '../../assets/Arjun_Janya.jpg'
import Harris_Jayaraj from '../../assets/Harris_Jayaraj.jpg'
import Ilaiyaraaja from '../../assets/Ilaiyaraaja.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination} from 'swiper/modules';
import 'swiper/css/pagination';



const testimonialData = [
  {
    avatar: A_R_Rahman,
    name: 'A R Rahman',
    review: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    avatar: Arjun_Janya,
    name: 'Arjun Janya',
    review:  'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    avatar: Harris_Jayaraj,
    name: 'Harris Jayaraj',
    review: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    avatar: Ilaiyaraaja,
    name: 'Ilaiyaraaja',
    review: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]
 
const Testimonials = () => {
  useEffect(()=> {
    AOS.init({duration:2000})
  }, []);
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              grabCursor={true}
              loop={true}
              centeredSlides={true}
              pagination={{ clickable: true }}
              className="container testimonials__container" data-aos="zoom-in">
        {
          testimonialData.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='testimonial_img'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials