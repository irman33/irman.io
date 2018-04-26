import React, { Component } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import SectionTitle from "./components/SectionTitle";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Intro />
        <SectionTitle title="Projects" />
        <Gallery />
      </React.Fragment>
    );
  }
}

export default App;
