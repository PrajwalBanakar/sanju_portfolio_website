import React, { useState, useEffect } from 'react'
import './About.css'
import MainImg from '../../assets/MainImg.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  const [counterOn, setCounterOn] = useState(false)

  useEffect(() => {
    AOS.init({duration: 2000})
  },[]);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MainImg} alt='MainImg' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' data-aos="zoom-in">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>
                {counterOn && <CountUp start={0} end={5} duration={2} delay={0.5} />}
                + Years Working
              </small>

            </article>
            <article className='about__card' data-aos="zoom-in">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>
                {counterOn && <CountUp start={0} end={30} duration={2} delay={0.5} />}
                + Worldwide
              </small>

            </article>
            <article className='about__card' data-aos="zoom-in">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>
                {counterOn && <CountUp start={0} end={50} duration={2} delay={0.5} />}
                + Completed
              </small>
            </article>
          </div>

          <p>
          Sanjay R.A is a prolific Music Composer, Producer and Orchestrator, has an extensive experience of working on projects : short and feature films, songs and jingles. He has collaborated with reputed artists like A R Rahman, Arjun Janya, Sanchit Balhara, etc. on various projects.

His academic experience includes a diploma in Audio Engineering from KM Music Conservatory (Chennai), and a Undergraduate Degree in Orchestration and Music Composition for Film and TV from Berklee College of Music, Boston, Massachussetts, USA.

He has worked with multiple orchestras like the Budapest Art Orchestra, Budapest Scoring Orchestra, Prague Filmharmonic Orchestra, Cochin Strings, Chennai Strings,London Chamber Orchestra.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    </ScrollTrigger>

  )
}

export default About