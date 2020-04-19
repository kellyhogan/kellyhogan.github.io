import React from "react"
import {Link} from "react-scroll"
import HomeImage from "./HomeImage"

import "./Home.css"

export default ({id}) => (
  <div id={id}>
    <div className="header-container">
      <div className="centered">
        <h1 className="intro">
          Hello, I'm <span style={{color:"#ff5b4d"}}>Kelly Hogan</span>.
          <br></br>
          I'm a Software Engineer.
        </h1>        
        <Link 
          className="click-here-box"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
           Click Here!
        </Link>
      </div>
      <HomeImage />
    </div>
  </div>
);
