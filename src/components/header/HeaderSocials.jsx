import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/kelvin-ogboriauphien/" target="_blank"><BsLinkedin/></a>
      <a href="http://https://github.com/K3lson" target="_blank"><BsGithub/></a>
      <a href="https://twitter.com/kevinfreeborn" target="_blank" ><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials
