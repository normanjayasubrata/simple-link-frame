import React, { Component } from "react";

class Header extends Component {
  render() {
    const myStyle = {
      marginLeft: "30%"
    };
    return (
      <div style={myStyle}>
        <h1>Norman's DB</h1>
      </div>
    );
  }
}

export default Header;
