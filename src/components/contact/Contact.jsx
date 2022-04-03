import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>n3lsonfree@gmail.com</h5>
            <a href="mailto:n3lsonfree@gmail.com" target= "_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>instagram.com/kevin_freeborn  </h5>
            <a href="https://www.instagram.com/direct/inbox/" target= "_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            {/* <h5>n3lsonfree@gmail.com</h5> */}
            <a href="https://api.whatsapp.com/send?phone=+2348165711575" target= "_blank">Send a Message</a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form action="">
          <input type="text" placeholder='Your Full Name' name="name" required />
          <input type="email" placeholder='Your Email' name="email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
