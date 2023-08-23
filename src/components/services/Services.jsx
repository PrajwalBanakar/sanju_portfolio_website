import React, {useEffect} from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  },[]);
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>


      <div className="container services__container">
        <article className='service' data-aos="zoom-in">
          <div className="service__head">
            <h3>Music Composition</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Background score for Films, Web series and Games.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Songs & Jingles for Films, Web series, Ads and Indie projects.</p>
            </li>
          </ul>
        </article>

        <article className='service' data-aos="zoom-in">
          <div className="service__head">
            <h3>Music Production</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Orchestral / Strings arrangement for songs, scores and concerts.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Music Programming for Films and Indie projects.</p>
            </li>
          </ul>
        </article>

        <article className='service' data-aos="zoom-in">
          <div className="service__head">
            <h3>Orchestation & Score Prep</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Live Orchestra Recording Bookings ( Budapest Scoring Orchestra, Budapest Art Orchestra, Prague Filmharmonic Orchestra)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sheet music preparation for Orchestral recordings.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Booking and recording of Orchestras & Musicians across the world.</p>
            </li>
          </ul>
        </article>

        <article className='service' data-aos="zoom-in">
          <div className="service__head">
            <h3>Sound Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sound design for Games, Documentaries.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services