import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='project-header'>
          <h1 className='heading'>Projects that I have worked on</h1>
      </div>

      <div className='project-body'>
          <div className='card-container'>
          <div className='card'>
            <div className='card-body'>
              <h1 className='title'>Fullstack Shopping List</h1>
              <p className='description'>A shopping list app built with React which connects to a MongoDB database.
                The website is running on a Nodejs server using Express.</p>
            </div>
            <div className='card-footer'>
              <div className='btn'>
                <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='link btn1'><div className=''>View on Github</div></a>
                <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='link btn2'><div className=''>View Live</div></a>
              </div>
                <p className='tech'>Mongo Express React Node ReactStrap</p>
              </div>
            </div>
            <div className='card'>
            <div className='card-body'>
              <h1 className='title'>Hangman Game</h1>
              <p className='description'>Hangman game where you need to guess the programming language to win. Made using React.</p>
            </div>
            <div className='card-footer'>
            <div className='btn'>
                <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='link btn1'><div className=''>View on Github</div></a>
                <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='link btn2'><div className=''>View Live</div></a>
              </div>
                <p className='tech'>JavaScript React</p>
              </div>
            </div>
            <div className='card'>
            <div className='card-body'>
              <h1 className='title'>ISS tracker</h1>
              <p className='description'>This tool fetches data from the open-notify API to get the co-ordinates of the international space station in realtime.
                 Those co-ordinates are sent to the locationiq API to perform reverse geocoding and the result is visualised on a static map.</p>
            </div>
            <div className='card-footer'>
            <div className='btn'>
                <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='link btn1'><div className=''>View on Github</div></a>
                <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='link btn2'><div className=''>View Live</div></a>
              </div>
                <p className='tech'>HTML CSS JavaScript FetchAPI</p>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Projects