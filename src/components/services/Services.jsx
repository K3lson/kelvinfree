import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li><BsCheck className='service__list-icon'/>
            <p>Designing desirable digital products for our clients</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p> Crafting a beautiful, functional and easy to use design system</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Craft seamless and attractive user experiences and interfaces in close collaboration with mobile, web and hardware </p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Ensure a consistent design language across applications, users and platforms to provide a discernible Kisi experience</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li><BsCheck className='service__list-icon'/>
            <p>Designing user interfaces and navigation menus</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Writing and reviewing code for sites, typically HTML, XML, or JavaScript</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Integrating multimedia content onto a site</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Testing web applications</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Troubleshooting problems with performance or user experience</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Dev */}


        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li><BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
          </ul>
        </article> */}
        {/* END OF Content creation */}
      </div>
    </section>
  )
}

export default services
