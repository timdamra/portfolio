import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
    this.displayHiddenMenu = this.displayHiddenMenu.bind(this);
  }
  displayHiddenMenu() {
    let bool = !this.state.isOpen;
    this.setState(prevState => {
      return {
        isOpen: bool
      };
    });
  }
  render() {
    let hiddenMenu = () => {
      if (this.state.isOpen === false) {
        return false;
      } else {
        return (
          <div className="open-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
            </ul>
          </div>
        );
      }
      console.log(this.state.isOpen);
    };
    return (
      <div className="hd-nav">
        <div className="row menu-line">
          <div className="col menu-item-big">
            <Link to="/">HOME</Link>
          </div>
          <div className="col menu-item-big">
            <Link to="/portfolio">PORTFOLIO</Link>
          </div>
          <div className="col menu-item-big">
            <Link to="/skills">SKILLS</Link>
          </div>
          <div className="col-6" />
          <div className="icon col">
            <button onClick={this.displayHiddenMenu}>&#9776;</button>
          </div>
        </div>
        {hiddenMenu()}
      </div>
    );
  }
}
