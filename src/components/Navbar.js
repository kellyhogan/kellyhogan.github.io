import { Link, animateScroll as scroll } from "react-scroll"
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
    const {scrollHeight} = this.state;
    const newScrollHeight = window.scrollY;
    const isNavVisable = newScrollHeight <= scrollHeight;
    this.setState({
      scrollHeight: newScrollHeight,
      isNavVisable: isNavVisable,
      isHamburgerToggled: false
    });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
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
          <div className={this.handleMenuClassName()} onClick={this.scrollToTop}>
             Home
          </div>
          <Link
            className={this.handleMenuClassName()}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About
          </Link>
          <Link
            className={this.handleMenuClassName()}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className={this.handleMenuClassName()}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
          <div className={this.handleHamburgerClassName()}>
            {this.renderHamburger()}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
