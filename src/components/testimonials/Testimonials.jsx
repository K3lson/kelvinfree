import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Evelyn Ekojoka',
    review: 'Kevin did a really marvelous job for my Perfume business website. I recommend that if you\'re looking for an e-commerce website contact him'
  },
  {
    avatar: AVTR2,
    name: 'Dubby Azu',
    review: 'Really beautiful pice of art Kelvin keep up the good work'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'The attention to details that kelvin puts on his work is marvelous. definitely recommend him for a business website'
  },
  {
    avatar: AVTR4,
    name: 'Colins Obinna',
    review: 'This is really nice!'
  }
]




const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"  modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="avatar 1" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className="client__review">
                      {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials
