import React from 'react';

const Grid = props => {
  return (
    <div id="grid">
      <div className="row align-self-start">
        <div className="col">
          <div className="img-box">
            <img
              src="/assets/Javascript_badge.svg.png"
              className="grid-img"
              alt="Javascript"
            />
          </div>
        </div>
        <div className="col">
          <div className="img-box">
            <img
              src="/assets/react-logo-300x289.png"
              alt="React JS"
              className="grid-img"
            />
          </div>
        </div>
        <div className="col">
          <div className="img-box">
            <img src="/assets/redux.png" alt="Redux" className="grid-img" />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <div className="img-box">
            <img src="/assets/CSS3.png" alt="CSS3" className="grid-img" />
          </div>
        </div>
        <div className="col">
          <div className="img-box">
            <img src="/assets/node.png" alt="Node JS" className="grid-img" />
          </div>
        </div>
        <div className="col">
          <div className="img-box">
            <img src="/assets/mongodb.png" alt="MongoDB" className="grid-img" />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <div className="img-box">
            <img
              src="/assets/mocha-1.svg"
              alt="Mocha JS"
              className="grid-img"
            />
          </div>
        </div>
        <div className="col">
          <div className="img-box">
            <img src="/assets/git.png" alt="Git" className="grid-img" />
          </div>
        </div>
        <div className="col">
          <div className="img-box">
            <img src="/assets/express.svg" alt="Express" className="grid-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
