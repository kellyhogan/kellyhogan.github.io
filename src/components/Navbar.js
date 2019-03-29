import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Hamburger from "./Hamburger"

import "./Navbar.css"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  handleScroll = () => {
    const {scrollHeight} = this.state;
    const newScrollHeight = window.scrollY;
    const isNavVisable = newScrollHeight <= scrollHeight;
    this.setState({
      scrollHeight: newScrollHeight,
      isNavVisable: isNavVisable
    });
  };

  handleClassName = () => {
    if(!this.state.isNavVisable) {
       return "hidden-nav";
    }else{
       return "";
    }
  };

  componentDidMount() {
    this.setState({scrollHeight: window.scrollY, isNavVisable: true});
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
 
  render() {
    return (
      <nav id="navbar" className={this.handleClassName()}>
        <ul className="nav-ul">
            <li className="nav-li">
              <a href="/">Home</a>
            </li>
            <li className="nav-li">
              <a href="/">About</a>
            </li>
            <li className="nav-li">
              <a href="/">Projects</a>
            </li>
            <li className="nav-li">
              <a href="/">Contact</a>
            </li>
            <li className="hidden-icon">
              <Hamburger />
            </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
