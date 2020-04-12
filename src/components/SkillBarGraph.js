import React from "react"

import "./SkillBarGraph.css"

export default () => (
    <div>
    <h1 className="tech-skills who-is-she about-me">Technical Skills</h1>

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
