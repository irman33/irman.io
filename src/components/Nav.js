import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu() {
    console.log("clicking");
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    return (
      <div className={`nav ${this.state.isMenuOpen ? "nav--open" : ""}`}>
        <div className="nav__title">
          <h1>IRMAN.io</h1>
          <h2>Developer portfolio</h2>
        </div>
        <div className="nav__right">
          <div className="nav__hamburger" onClick={this.toggleMenu}>
            <div className="nav__ham1" />
            <div className="nav__ham2" />
            <div className="nav__ham3" />
          </div>
        </div>
        <div className="nav__menu">
          <div className="nav__close" onClick={this.toggleMenu}>
            <div className="nav__x1" />
            <div className="nav__x2" />
          </div>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
