import React, { Component } from "react";
import "./SectionTitle.css";

class SectionTitle extends Component {
  render() {
    return (
      <div className="section-title">
        <h2 className="break">{this.props.title}</h2>
        {/* <div className="linebreak" /> */}
      </div>
    );
  }
}

export default SectionTitle;
