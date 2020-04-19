import React from "react"

import "./About.css"
import SkillBarGraph from "./SkillBarGraph"
import profile from "../images/me.png"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

export default ({id}) => (
  <div id={id} className="about-wrapper">

    <div className="about-content-wrapper">
      <div className="about-image">
        <img src={profile} className="profile" alt="Kelly Hogan"/>
      </div>

      <div className="about-me">
        <h1 className="who-is-she">Who Is She?</h1>
        <div className="who-am-i">
          I am a Software Developer for&nbsp;
          <a href="https://www.jpmorganchase.com/" target="_blank" rel="noopener noreferrer">
            JPMorgan Chase & Co
          </a>
          . My main expertise is backend development but I also have a passion for creating engaging user experiences and an interest in mobile development.
        </div> 

        <div className="connect-wrapper">
          <div className="about-me-graphics">
            <a title="github" href="https://github.com/kellyhogan" target="_blank" rel="noopener noreferrer">
              <img 
                src={github} 
                alt="GitHub" 
                style={{ width: '3em', height: '3em'}}
              />
            </a>
            <a title="linkedin" href="https://www.linkedin.com/in/kelly-hogan-184ba5105/" target="_blank" rel="noopener noreferrer">
              <img 
                src={linkedin} 
                alt="Linkedin" 
                style={{ width: '3em', height: '3em'}}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <SkillBarGraph /> 
  </div>
);
