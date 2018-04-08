import React, { Component } from "react";
import "./Gallery.css";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="tile three-by-two">
          <h4>Test 123</h4>
          <div className="overlay" />
        </div>
        <div className="tile three-by-two">
          <h4>Test 123</h4>
          <div className="overlay" />
        </div>
        <div className="tile two-by-two">
          <h4>Test 123</h4>
          <div className="overlay" />
        </div>
        <div className="tile four-by-two">
          <h4>Test 123</h4>
          <div className="overlay" />
        </div>
        <div className="tile two-by-two">
          <h4>Test 123</h4>
          <div className="overlay" />
        </div>
        <div className="tile two-by-two">
          <h4>Test 123</h4>
          <div className="overlay" />
        </div>
        <div className="tile two-by-two">
          <h4>Test 123</h4>
          <div className="overlay" />
        </div>
        <div className="tile four-by-two">
          <h4>Test 123</h4>
          <div className="overlay" />
        </div>
        <div className="tile two-by-two">
          <h4>Test 123</h4>
          <div className="overlay" />
        </div>
      </div>
    );
  }
}

export default Gallery;
