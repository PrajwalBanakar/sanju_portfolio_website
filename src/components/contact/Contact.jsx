import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  const notify = () => toast("Message sent successfully! Thank you.", {
    theme: "dark"
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_crhzzi5', 'template_w7I3u7j', form.current, 'X8bwzg4iDJQkd0LLr')
      .then((result) => {
          console.log(result.text);
          notify()
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(()=> {
    AOS.init({duration:2000})
  }, []);
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container ">
        <div className="contact__options">
        <article className='contact__option' data-aos="zoom-in">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>sanjayra867@gmail.com</h5>
          <a href='mailto:sanjayra867@gmail.com' target='_blank'>Send a message</a>
        </article>

        <article className='contact__option' data-aos="zoom-in">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <a href='https://api.whatsapp.com/send?phone=919740110382' target='_blank'>Send a message</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows={7} placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
         </form>
         <ToastContainer theme='dark' />
      </div>
    </section>
  )
}

export default Contact