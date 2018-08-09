import React, { Component } from "react";
import Iframe from "react-iframe";

class LinkFrame extends Component {
  render() {
    return (
      <div className="linkFrame">
        <Iframe
          url={this.props.link}
          width="100%"
          height="490px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

export default LinkFrame;
