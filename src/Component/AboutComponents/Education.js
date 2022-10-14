import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  return (
    <div className='education'>
      <h1>My Education</h1>
      <hr className='hr-line' color='red' />
      <div className='education-container'>
          <div className='education-box'>
          <span className='set-cap'><FaGraduationCap className='set-icon' /></span>
          <div className='edu-description'>
          <h6 className='year'>2010</h6>
          <h4 className='course'>Secondary School Certificate</h4>
          <p className='course-description'>I have completed SSC in 2010 with 85.20% from maharashtra state board and my SSC school name is Haji Syed Akber Urdu High School, Patur</p>
          </div>
          </div>
          <div className='education-box'>
          <span className='set-cap'><FaGraduationCap className='set-icon' /></span>
          <div className='edu-description'>
          <h6 className='year'>2012</h6>
          <h4 className='course'>Higher Secondary School Certificate</h4>
          <p className='course-description'>I have completed HSC in 2012 with 62.00% from maharashtra state board and my HSC college name is Shahbabu Junior College, Patur</p>
          </div>
          </div>
          <div className='education-box'>
          <span className='set-cap'><FaGraduationCap className='set-icon' /></span>
          <div className='edu-description'>
          <h6 className='year'>2017</h6>
          <h4 className='course'>Diploma in Engineering</h4>
          <p className='course-description'>I have completed diploma in 2017 with 65.59% from maharashtra state board of technical education(MSBTE) and my diploma college name is Government Polytechnic, Murtizapur</p>
          </div>
          </div>
          <div className='education-box'>
          <span className='set-cap'><FaGraduationCap className='set-icon' /></span>
          <div className='edu-description'>
          <h6 className='year'>2020</h6>
          <h4 className='course'>Bachelor's in Engineering</h4>
          <p className='course-description'>I have completed engineering in 2020 with 76.95% from Sant Gadge Baba Amravati University and my engineering college name is Manav School of Engineering & Technology, Akola</p>
          </div>
              </div>
      </div>
      <div className='education-footer'>Hello Boss</div>
    </div>
  )
}

export default Education