import React from "react"
import Image from "./Image"

import "./Home.css"

export default ({id}) => (
  <div id={id}>
    <div className="header-container">
      <div className="centered">
        <h1 className="intro">
          Hello, I'm <span style={{color:"#ff5b4d"}}>Kelly Hogan</span>.
          <br></br>
          I'm a Software Developer.
        </h1>        
      </div>
      <Image />
    </div>
  </div>
);
