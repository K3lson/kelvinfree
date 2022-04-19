import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/shoe.png'
import IMG2 from '../../assets/realestate.png'
import IMG3 from '../../assets/pepsi.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title:'A simple Sneakers gallery displaying shoe prices and their where to go get them',
    github: 'https://github.com/K3lson/Sneakers-store',
    demo: 'https://k3lson.github.io/Sneakers-store/'
  },
  {
    id: 2,
    image: IMG2,
    title:'A Modern Real Estate App built with React, Rapid Api and NextJs',
    github: 'https://github.com/K3lson/Kelvin_RealEstate',
    demo: 'https://kelvin-real-estate.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title:'A fully Responsive Pepsi Landing page built with HTML/CSS/JAVASCRIPT',
    github: 'https://github.com/K3lson/Pepsi',
    demo: 'https://k3lson.github.io/Pepsi/'
  },
  {
    id: 4,
    image: IMG4, 
    title:'A Restaurant App landing page built with Mordern UI/UX in React.js ',
    github: 'https://github.com/K3lson/restaurantApp',
    demo: 'https://k3lson.github.io/restaurantApp/'
  },
  {
    id: 5,
    image: IMG5,
    title:'An NFT Collection Website Landing page with React JS',
    github: 'https://github.com/K3lson/NFT-Wierdos',
    demo: 'https://the-weirdos.netlify.app/'
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title:'This is a portfolio item title',
  //   github: 'https://github.com',
  //   demo: 'https//github.io'
  // }
]



const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title,github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio
