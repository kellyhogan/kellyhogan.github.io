import React from "react"

import "./About.css"
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

    <h1 className="who-is-she about-me">Technical Skills</h1>

    <div className="bar-graph-wrapper">
       <div className="bar">
          <span className="skill">Java</span>
          <div
            className="generic-bar"
            data-aos="anim-bar-one"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span className="percentage">90%</span>
          </div>
       </div>
       <div className="bar">
          <span className="skill">Python</span>
          <div
            className="generic-bar"
            data-aos="anim-bar-two"
            data-aos-duration="1200"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <span className="percentage">80%</span>
          </div>
       </div>
       <div className="bar">
          <span className="skill">JavaScript</span>
          <div
            className="generic-bar"
            data-aos="anim-bar-three"
            data-aos-duration="1200"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <span className="percentage">35%</span>
          </div>
       </div>
       <div className="bar">
          <span className="skill">React.js</span>
          <div
            className="generic-bar"
            data-aos="anim-bar-four"
            data-aos-duration="1200"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <span className="percentage">20%</span>
          </div>
       </div>
       <div className="bar">
          <span className="skill">SQL</span>
          <div
            className="generic-bar"
            data-aos="anim-bar-five"
            data-aos-duration="1200"
            data-aos-delay="160"
            data-aos-once="true"
          >
            <span className="percentage">60%</span>
          </div>
       </div>
       <div className="bar">
          <span className="skill">Git</span>
          <div
            className="generic-bar"
            data-aos="anim-bar-six"
            data-aos-duration="1200"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <span className="percentage">72%</span>
          </div>
       </div>
    </div>
  </div>
);
