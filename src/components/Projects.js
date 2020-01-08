import React from "react"

import "./Projects.css"

export default ({id}) => (
  <div id={id}>
  <h1 className="project-title">Projects</h1>
  <ul>
    <h1>Portfolio Website (JavaScript and React.js)</h1>
    <li>
      Built my personal website from scratch using JavaScript, React.js, and Gatsby. It is hosted on GitHub Pages.
    </li>
    <h1>Edge Detection (Python)</h1>
    <li>
      Coded an application with Python to detect the edges in an image. Gray scale images and 4 different Morlet Wavelets were used along with applications of Linear Algebra.
    </li>
  </ul>
  </div>
);
