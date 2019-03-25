import React from "react"
import { Motion, spring, presets } from "react-motion"

import "./Hamburger.css"

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
  }

  handleClick = () => {
  	this.setState({isToggled: !this.state.isToggled});
  };

  componentDidMount() {
    window.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }

  render() {
    return (
      <svg 
        viewBox="0 0 96 96"
        className="hamburger-icon"
      >
        <Motion
		  style={{
            x: spring(this.state.isToggled ? 1 : 0, presets.gentle),
            y: spring(this.state.isToggled ? 0: 1, presets.gentle)
          }}
        >
          {({ x, y }) =>
            <g
              fill="none" 
              stroke="white" 
              strokeWidth="10" 
              strokeLinecap="round"
            >
              <line 
                transform={`rotate(${x * 45}, 7, 20)`}
                x1="7" x2="89" y1="20" y2="20"
              />
              <line 
                transform={`translate(${x * -85})`} 
                opacity={y} 
                x1="7" x2="89" y1="45" y2="45"
              />
              <line 
                transform={`translate(0, ${x * 7}) rotate(${x * -45}, 7, 70)`}
                x1="7" x2="89" y1="70" y2="70"
              />
            </g>
           }
        </Motion>
      </svg>
    );
  }
}

export default Hamburger;