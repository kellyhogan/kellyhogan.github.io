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
  </div>
);
