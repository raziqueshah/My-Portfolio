import React from 'react';
import './Libraries.css';
import { FaBootstrap } from 'react-icons/fa'
import { SiMaterialui } from 'react-icons/si'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { SiRedux } from 'react-icons/si'
import { SiReactrouter } from 'react-icons/si'
import { GrStripe } from 'react-icons/gr'


const Libraries = () => {
  return (
    <div className='libraries'>
      <h1>Libraries</h1>
      <hr className='hr-line' color='red' />
      <div className="lib-container">
        <div className="card-l-two">
          <div className="lib-cards">
          <FaBootstrap className="lib-icon" />
            <h4 className="lib-icon-name">BOOTSTRAP</h4>
            <p className="lib-icon-ff">css library for web</p>
          </div>
          <div className="lib-cards">
          <SiMaterialui className="lib-icon" />
            <h4 className="lib-icon-name">MATERIAL-UI</h4>
            <p className="lib-icon-ff">css library for web</p>
          </div>
          <div className="lib-cards">
          <AiOutlineAntDesign className="lib-icon" />
            <h4 className="lib-icon-name">ANT-DESIGN</h4>
            <p className="lib-icon-ff">css library for web</p>
          </div>
        </div>
        <div className="card-l-one">
          <div className="lib-cards">
          <SiRedux className="lib-icon" />
            <h4 className="lib-icon-name">REDUX-TOOLKIT</h4>
            <p className="lib-icon-ff">a library for state management</p>
          </div>
          <div className="lib-cards">
          <SiReactrouter className="lib-icon" />
            <h4 className="lib-icon-name">REACT ROUTER DOM</h4>
            <p className="lib-icon-ff">a library for navigation</p>
          </div>
          <div className="lib-cards">
          <GrStripe className="lib-icon" />
            <h4 className="lib-icon-name">STRIPE</h4>
            <p className="lib-icon-ff">a library for card payment</p>
          </div>
        </div>
      </div>
      <div className='lib-footer'>Bottom</div>
    </div>
  )
}

export default Libraries