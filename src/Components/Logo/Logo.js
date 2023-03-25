import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
  return (
    <div  className="flex ml3">
      <Tilt tiltMaxAngleX={55} tiltMaxAngleY={55} className="Tilt br4 shadow-5">
        <div className="w4 h4">
          <img className="br4" src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;