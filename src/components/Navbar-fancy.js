import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./Navbar.css"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scrollHeight: window.scrollY};
  }
 
  handleScroll = () => {
    const {scrollHeight} = this.state;
    const newScrollHeight = window.scrollY;
    const isScrollUp = newScrollHeight < scrollHeight;
     
    this.setState({
      scrollHeight: newScrollHeight,
      isScrollUp: isScrollUp
    });
  };

  handleClassName = () => {
    if(!this.state.isScrollUp && (this.state.scrollHeight > this.state.top + this.state.height)) {
       return "hidden-nav";
    }else if(this.state.isScrollUp && (this.state.scrollHeight > this.state.top)){
       return "fixed-nav";    
    }else{
       return "";
    }
  };

  componentDidMount() {
    const navBar = document.getElementById("navbar");
    this.setState({top: navBar.offsetTop, height: navBar.offsetHeight});
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    (this.state.isScrollUp && (this.state.scrollHeight > this.state.top)) ? 
    document.body.style.paddingTop = `${this.state.height}px` :
    document.body.style.paddingTop = 0;
  }
 
  render() {
    return (
      <nav id="navbar" className={this.handleClassName()}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
