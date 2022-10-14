import React from 'react'
import { useState } from 'react';
import Aboutme from '../Component/AboutComponents/Aboutme';
import Education from '../Component/AboutComponents/Education';
import Libraries from '../Component/AboutComponents/Libraries';
import Skills from '../Component/AboutComponents/Skills';
import "./About.css";

const About = () => {

  const [active, setActive] = useState('skillScreen');

  return (
    <div className='abouts' id='about'>
      <div className='sidebar'>
        <div className='profile'>
            <div className='p-photo'></div>
            <div className='p-title'>Razique Shah</div>
            <p className='p-status'>Front End Developer</p>
        </div>
      <div className='p-btn'>
      <button className='btn-set' onClick={()=> setActive('aboutScreen') }>About Me</button>
      <button className='btn-set' onClick={()=> setActive('educationScreen') }>Education</button>
      <button className='btn-set' onClick={()=> setActive('skillScreen') }>Skills</button>
      <button className='btn-set' onClick={()=> setActive('librariesScreen') }>Libraries</button>
      </div>
      </div>
      <div>
      { active === 'aboutScreen' && <Aboutme /> }
      { active === 'educationScreen' && <Education /> }
      { active === 'skillScreen' && <Skills /> }
      { active === 'librariesScreen' && <Libraries /> }
      </div>
    </div>
  )
}

export default About