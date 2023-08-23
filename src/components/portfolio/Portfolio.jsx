import React from 'react'
import './Portfolio.css'

import Bhoomige_Bhanu from '../../assets/posters/Bhoomige_Bhanu.jpeg'
import cobra from '../../assets/posters/cobra.jpg'
import dastaan_e_sirhind from '../../assets/posters/dastaan_e_sirhind.jpeg'
import decoupled from '../../assets/posters/decoupled.jpg'
import gold_2022 from '../../assets/posters/gold_2022.jpg'
import kantara from '../../assets/posters/kantara.jpg'
import love_birds from '../../assets/posters/love_birds.jpeg'
import maamannan from '../../assets/posters/maamannan.jpg'
import ninnale_ninnale from '../../assets/posters/ninnale_ninnale.jpeg'
import once_upon_a_time_in_jamaligudda from '../../assets/posters/once_upon_a_time_in_jamaligudda.jpg'
import padavi_poorva from '../../assets/posters/padavi_poorva.jpeg'
import pathaan from '../../assets/posters/pathaan.jpg'
import pathu_thala from '../../assets/posters/pathu_thala.jpeg'
import ponniyin_selvan_2 from '../../assets/posters/ponniyin_selvan_2.jpg'
import vedha from '../../assets/posters/vedha.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
        effect={'coverflow'}
        spaceBetween={100}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ disableOnInteraction: false }}
        className='portfolio__swiper' >
          <SwiperSlide>
          <a href='https://youtu.be/B7YJkyVrw78' target='_blank'>

            <img src={Bhoomige_Bhanu} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt9466814/' target='_blank'>

            <img src={cobra} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt22643094/' target='_blank'>
            <img src={dastaan_e_sirhind} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt14167338/' target='_blank'>
            <img src={decoupled} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt15340808/' target='_blank'>

            <img src={gold_2022} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt15327088/' target='_blank'>
            <img src={kantara} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt23220186/' target='_blank'>
            <img src={love_birds} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt20242416/' target='_blank'>
            <img src={maamannan} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://youtu.be/paix1aMJSr0' target='_blank'>
            <img src={ninnale_ninnale} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt16235046/' target='_blank'>
            <img src={once_upon_a_time_in_jamaligudda} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt15484698/' target='_blank'>
            <img src={padavi_poorva} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt12844910/' target='_blank'>
            <img src={pathaan} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt11732164/' target='_blank'>
            <img src={pathu_thala} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt22444570/' target='_blank'>
            <img src={ponniyin_selvan_2} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.imdb.com/title/tt15340998/' target='_blank'>
            <img src={vedha} alt='slide_image' style={{ width: "100%" }} className='portfolio__image' />
          </a>

        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Portfolio