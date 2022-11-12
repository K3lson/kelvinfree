import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FaPeopleArrows} from 'react-icons/fa'
import {MdOutlineLibraryAddCheck} from 'react-icons/md'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
        
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Freelancing</small>
            </article>
            <article className='about__card'>
            <FaPeopleArrows className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className='about__card'>
            <MdOutlineLibraryAddCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>40+ completed</small>
            </article>
          </div>
          <p>I am a web designer and developer. I like to build creative designs from scratch and I experiment alot. I am quietly confident, naturally curious, and perpetually working on improving my skills one design problem at a time</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
