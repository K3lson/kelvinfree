import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
            <FaPeopleArrows className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>
            <article className='about__card'>
            <MdOutlineLibraryAddCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint temporibus aperiam consequuntur debitis impedit nobis quis tempore labore laboriosam ipsa magni, optio deleniti delectus deserunt ipsam culpa, cum error corrupti!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
