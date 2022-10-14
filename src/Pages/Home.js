import React from 'react'
import './Home.css'
import Typed from "react-typed";
import { HashLink as Link } from 'react-router-hash-link';
import { FaAngleDown } from 'react-icons/fa';

const technologies = [
  `Web`,
  `Android`,
  `iOS`,
];

const Home = () => {
  return (
    <div className='home'>
      <nav>
        <div className='logo animate__animated animate__heartBeat animate__infinite	infinite'>Razique Shah</div>
        <div className='nav-links'>
          <Link to='/' smooth className='link'><div className='header'>Home</div></Link>
          <Link to='#about' smooth className='link'><div className='about'>About</div></Link>
          <Link to='#projects' smooth className='link'><div className='project'>Projects</div></Link>
          <Link to='#contact' smooth className='link'><div className='contacts'>Contact Me</div></Link>
        </div>
      </nav>
      <div className='intro'>
        <h1 className='name animate__animated animate__pulse animate__infinite	infinite'>RAZIQUE SHAH</h1>
        <h4 className='status'>Bachelor's in Engineering @ Sant Gadge Baba Amravati University</h4>
        <h5 className='animate'>I am a <Typed className='text_animate' strings={technologies} typeSpeed={200} backSpeed={200} loop /> Developer</h5>
        <h5 className='animated'>My Skills are <span className='change_skills'></span></h5>
        <p className='technology'>Frontend Developer working in React</p>
        <h5 className='repo'>AWS | GIT | DevOps | Linux</h5>
        <p className='read-more animate__animated animate__bounce animate__infinite	infinite animate__slower'>
          <Link to='#about' smooth className='link'>Read below<br /><FaAngleDown className='icon' /></Link>
      </p>
      </div>
    </div>
  )
}

export default Home