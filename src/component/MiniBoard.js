import React from "react";
import Sidebar from "react-sidebar";
import PeoplesBoard from "./PeoplesBoard";
import { Button, Glyphicon } from "react-bootstrap";

class MiniBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    // this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  render() {
    const sideBarContent = (
      <div>
        <button onClick={() => this.onSetSidebarOpen(false)}>
          Close sidebar
        </button>
        <h3>Sidebar Content</h3>
      </div>
    );

    const cobaContent = (
      <PeoplesBoard
        selectedPeople={this.props.selectedPeople}
        actordb={this.props.actordb}
        politiciandb={this.props.politiciandb}
      />
    );

    const myStyle = {
      background: "black",
      color: "white",
      border: "solid white 1px",
      borderRadius: "10px",
      width: "50px",
      height: "50px",
      fontSize: "25px",
      marginTop: "10px",
      marginLeft: "10%"
    };

    return (
      <div>
        <Sidebar
          sidebar={cobaContent}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{
            sidebar: { background: "white", width: "200px", position: "fixed" }
          }}
        >
          <Button onClick={() => this.onSetSidebarOpen(true)} style={myStyle}>
            <Glyphicon glyph="th-list" />
          </Button>
        </Sidebar>
      </div>
    );
  }
}

export default MiniBoard;
