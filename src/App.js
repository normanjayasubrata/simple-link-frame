import React, { Component } from "react";
import actordb from "./actordb";
import politiciandb from "./db_politicion";
import "./App.css";
import { Grid, Row, Col } from "react-bootstrap";

import PeoplesBoard from "./component/PeoplesBoard";
import LinkBoard from "./component/LinkBoard";
import LinkFrame from "./component/LinkFrame";
import Header from "./component/Header";
import MiniBoard from "./component/MiniBoard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      selected: "",
      link: ""
    };
  }

  componentWillMount = () => {
    window.addEventListener("resize", this.handleSize);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleSize);
  };

  handleSize = () => {
    this.setState({ width: window.innerWidth });
  };

  selectedPeople = event => {
    this.setState({ selected: event.target.getAttribute("value") });
    // console.log(event.target.getAttribute("value"));
  };

  selectedLink = event => {
    this.setState({ link: event });
  };

  render() {
    const minibord = (
      <MiniBoard
        selectedPeople={this.selectedPeople}
        actordb={actordb}
        politiciandb={politiciandb}
        width={this.state.width}
      />
    );
    // let cadangan = {};
    const desktop = (
      <Grid className="grid">
        <Row>
          <div className="headerRow">
            <Header />
          </div>
        </Row>
        <Row>
          <Col md={3}>
            <div className="peoplesBoard">
              <PeoplesBoard
                selectedPeople={this.selectedPeople}
                actordb={actordb}
                politiciandb={politiciandb}
                width={this.state.width}
              />
            </div>
          </Col>
          <Col md={9}>
            <LinkBoard
              selected={this.state.selected}
              actordb={actordb}
              selectedLink={this.selectedLink}
            />
            <LinkFrame link={this.state.link} />
          </Col>
        </Row>
      </Grid>
    );

    const mobile = (
      <Grid className="grid">
        <Row>
          <div className="headerRow">
            {minibord}
            <Header />
          </div>
        </Row>
        <Row>
          <Col md={12}>
            <LinkBoard
              selected={this.state.selected}
              actordb={actordb}
              selectedLink={this.selectedLink}
            />
            <LinkFrame link={this.state.link} />
          </Col>
        </Row>
      </Grid>
    );

    return (
      <div className="container-fluid">
        {this.state.width >= 900 ? desktop : mobile}
      </div>
    );
  }
}

export default App;
