import React from "react"

import "./About.css"
import profile from "../images/profile.png"

export default ({id}) => (
  <div id={id} className="wrapper">
    <div className="about-wrapper">
      <h1 
        className="title"
        data-sal="slide-right"
        data-sal-easing="ease-in-cubic"
        data-sal-delay="200"
        data-sal-duration="400"
      >
       About 
      </h1>
    </div>
    <img src={profile} className="profile" alt="Kelly Hogan"/>
    <div className="about-wrapper">
      <p className="about-me">
       I am a Software Developer for&nbsp;
       <a href="https://www.jpmorganchase.com/" target="_blank" rel="noopener noreferrer">
         JPMorgan Chase & Co.
       </a>
       &nbsp;My main expertise is backend development but I also have a passion for mobile development and creating engaging user experiences.
      </p>
    </div>

    <div className="bar-graph-wrapper">
       <div className="bar">
          <span className="skill">Java</span>
          <div className="bar-one generic-bar">
          </div>
       </div>
       <div className="bar">
          <span className="skill">Python</span>
          <div className="bar-two generic-bar">
          </div>
       </div>
       <div className="bar">
          <span className="skill">JavaScript</span>
          <div className="bar-three generic-bar">
          </div>
       </div>
       <div className="bar">
          <span className="skill">React.js</span>
          <div className="bar-four generic-bar">
          </div>
       </div>
       <div className="bar">
          <span className="skill">SQL</span>
          <div className="bar-five generic-bar">
          </div>
       </div>
       <div className="bar">
          <span className="skill">Git</span>
          <div className="bar-six generic-bar">
          </div>
       </div>
    </div>



  </div>
);
