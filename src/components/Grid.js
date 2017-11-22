import React, { Component } from 'react';

export default class Grid extends Component {
  render() {
    return (
      <div>
        <h3 className="title hd-font">SKILLS</h3>
        <div className="grid-wrapper">
          <div>
            <img
              src="/assets/Javascript_badge.svg.png"
              className="grid-img"
              alt="Javascript"
            />
          </div>
          <div>
            <img
              src="/assets/react-logo-300x289.png"
              alt="React JS"
              className="grid-img"
            />
          </div>
          <div>
            <img src="/assets/redux.png" alt="Redux" className="grid-img" />
          </div>
          <div>
            <img src="/assets/CSS3.png" alt="CSS3" className="grid-img" />
          </div>
          <div>
            <img src="/assets/node.png" alt="Node JS" className="grid-img" />
          </div>
          <div>
            <img src="/assets/mongodb.png" alt="MongoDB" className="grid-img" />
          </div>
          <div>
            <img
              src="/assets/mocha-1.svg"
              alt="Mocha JS"
              className="grid-img"
            />
          </div>
          <div>
            <img src="/assets/git.png" alt="Git" className="grid-img" />
          </div>
          <div>
            <img src="/assets/express.svg" alt="Express" className="grid-img" />
          </div>
        </div>
      </div>
    );
  }
}
