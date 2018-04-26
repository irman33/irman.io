import React, { Component } from "react";
import "./Intro.css";

class Intro extends Component {
  render() {
    return (
      <section className="section-intro">
        <div className="intro__wrapper">
          <div className="intro">
            <h1>Lorem Ipsim Title</h1>
            <h4>subtitle text here and here...</h4>
            <h4 className="look-here">
              ... some more lead text continued here.
            </h4>
            <button>Call to Action</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
