import React, {useEffect} from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  },[]);
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience" data-aos="zoom-in">
          <h3>Experience</h3>
          <div className="experience__content">
            <article className='experience__details' >
              <BsPatchCheckFill className='expererience__details-icon'/>
              <div>
                <h4>Orchestation</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon'/>
              <div>
                <h4>Film Scoring</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon'/>
              <div>
                <h4>Music Production</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon'/>
              <div>
                <h4>Ad Films & Jingles</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon'/>
              <div>
                <h4>Documentaries</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
          </div>
        </div>
        {/* End of Experience */}
        <div className='skills' data-aos="zoom-in">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon' />
              <div>
                <h4>Logic Pro X</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon' />
              <div>
                <h4>Pro Tools</h4>

              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon'/>
              <div>
                <h4>Cubase</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon'/>
              <div>
                <h4>Sibelius</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon' />
              <div>
                <h4>Vienna Ensemble Pro</h4>
              </div>
            </article>
          </div>
        </div>
        <div className='education' data-aos="zoom-in">
          <h3>Education</h3>
          <div className='education__content'>
          <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon' />
              <div>
                <h4>Undergraduate Degree - Music Composition for Film, TV and Orchestration</h4>
                <h5 className='text-light'>Berklee College of Music, Boston, Massacheusetts, USA</h5>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expererience__details-icon' />
              <div>
                <h4>Diploma - Audio Engineering</h4>
                <h5 className='text-light'>KM College of Music and Technology, Chennai, India</h5>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience