import React, { Component } from 'react';

class Swatch extends Component{
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    }
  }
  
  render() {
    return (
      <div 
      className="swatch" 
      style={{backgroundColor: this.state.color}}
    ></div>
    )
  }
}

export default Swatch;
