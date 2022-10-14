import React from 'react';
import './Footer.css';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
        <a href="https://github.com/" target='_blank' rel='noopener noreferrer'><h2 className='f-title'>Designed & Developed by <span className='f-color'>Razique Shah</span></h2></a>
        <div className='f-icons'>
            <a href="https://github.com/" target='_blank' rel='noopener noreferrer'><BsInstagram className='f-icon' /></a>
            <a href="https://github.com/" target='_blank' rel='noopener noreferrer'><BsLinkedin className='f-icon' /></a>
            <a href="https://github.com/" target='_blank' rel='noopener noreferrer'><BsGithub className='f-icon' /></a>
        </div>
    </div>
  )
}

export default Footer;