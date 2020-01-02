import React from "react"

import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

import "./Footer.css"

export default () => (
  <footer>
  	<ul className="footer-ul">
      <li className="footer-li creation">
        © {new Date().getFullYear()}, Built with &nbsp;
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
      </li>
  	  <li className="footer-li">
 	      <a title="github" href="https://github.com/kellyhogan" target="_blank">
 	        <img 
 	          src={github} 
 	          alt="GitHub" 
 	          style={{ width: '2em', height: '2em'}}
 	        />
 	      </a>
  	  </li>
  	  <li className="footer-li">
 	      <a title="linkedin" href="https://www.linkedin.com/in/kelly-hogan-184ba5105/" target="_blank">
 	        <img 
 	          src={linkedin} 
 	          alt="Linkedin" 
 	          style={{ width: '2em', height: '2em'}}
 	        />
 	      </a>
  	  </li>
  	</ul>
  </footer>
);
