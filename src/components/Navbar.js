import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Hamburger from "./Hamburger"

import "./Navbar.css"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHamburgerToggled: false
    };
  }
 
  handleScroll = () => {
    if(!this.state.isHamburgerToggled){
      const {scrollHeight} = this.state;
      const newScrollHeight = window.scrollY;
      const isNavVisable = newScrollHeight <= scrollHeight;
      this.setState({
        scrollHeight: newScrollHeight,
        isNavVisable: isNavVisable
      });
    }
  };

  handleNavClassName = () => {
    return !this.state.isNavVisable ? "hidden-nav" : ""
  };

  handleMenuClassName = () => {
    return this.state.isHamburgerToggled ? "nav-li responsive-nav" : "nav-li"
  };

  handleHamburgerClassName = () => {
    return this.state.isHamburgerToggled ? "hidden-icon responsive-hamburger" : "hidden-icon"
  };

  handleClick = () => {
    this.setState({isHamburgerToggled: !this.state.isHamburgerToggled});
  };

  renderHamburger = () => {
    return (
      <Hamburger
        onClick={() => this.handleClick()}
        isToggled={this.state.isHamburgerToggled}
      />
    );
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
      <nav id="navbar" className={this.handleNavClassName()}>
        <div>
          <a href="/" className={this.handleMenuClassName()}>Home</a>
          <a href="/" className={this.handleMenuClassName()}>About</a>
          <a href="/" className={this.handleMenuClassName()}>Projects</a>
          <a href="/" className={this.handleMenuClassName()}>Contact</a>
          <div className={this.handleHamburgerClassName()}>
            {this.renderHamburger()}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
