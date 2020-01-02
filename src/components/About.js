import React from "react"

import "./About.css"
import ProfileImage from "./AboutImage"

export default ({id}) => (
  <div id={id}>
  <h1 
    className="title"
    data-sal="slide-right"
    data-sal-easing="ease-in-cubic"
    data-sal-delay="200"
    data-sal-duration="400"
  >
   About 
  </h1>
  <div className="crop">
    <ProfileImage />
  </div>
  <br />
  <p className="about-me">
    I am a Software Developer for&nbsp;
    <a href="https://www.jpmorganchase.com/" target="_blank" rel="noopener noreferrer">
      JPMorgan Chase & Co.
    </a>
    <br/>
    My main expertise is backend development but I also have a passion for mobile development and creating engaging user experiences.
  </p>
  </div>
);
