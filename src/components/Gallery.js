import React, { Component } from "react";
import "./Gallery.css";
import Tile from "./Tile";

class Gallery extends Component {
  render() {
    return (
      <section className="section-gallery">
        <div className="gallery">
          <Tile
            bg="https://source.unsplash.com/RLw-UC03Gwc/800x450"
            size="three-by-two"
          />
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
      </section>
    );
  }
}

export default Gallery;
