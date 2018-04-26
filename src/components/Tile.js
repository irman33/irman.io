import React, { Component } from "react";
import "./Tile.css";

class Tile extends Component {
  render() {
    const style = {
      background: `url("${this.props.bg}"`,
      backgroundPosition: "right bottom"
    };

    return (
      <div style={style} className={`tile ${this.props.size}`}>
        <div className="info-box">
          <h4>Test 123</h4>
        </div>
      </div>
    );
  }
}

export default Tile;
