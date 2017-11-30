import React from 'react';

import { Link } from 'react-router-dom';

const Portfolio = props => {
  return (
    <div className="hd-container">
      <h4 style={{ marginTop: '80px' }} className="hd-font title">
        PORTFOLIO
      </h4>
      <div>
        <div className="white">
          <div className="hd-container-grid">
            <div>
              <img className="grid-img" src="/assets/bar-chart.png" />
              <a href="https://murmuring-inlet-17021.herokuapp.com/">
                <h6
                  style={{ textAlign: 'left' }}
                  className="hd-font hd-link subtitle"
                >
                  Polling App
                </h6>
              </a>
            </div>
            <div>
              <ul>
                <li className="hd-font-li left">
                  Social media app for polling
                </li>
                <li className="hd-font-li left">
                  React/Redux/React-Router on client side
                </li>
                <li className="hd-font-li left">
                  Express & MongoDB on the back end
                </li>
                <li className="hd-font-li left">
                  Twitter OAuth authentication using Passport JS
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="silver">
          <div className="hd-container-grid">
            <div>
              <ul>
                <li className="hd-font-li center">
                  SocketIO App for charting stock performance
                </li>
                <li className="hd-font-li center">
                  Uses Socket.io library front & back end
                </li>
                <li className="hd-font-li center">Express API</li>
              </ul>
            </div>
            <div>
              <img className="grid-img" src="/assets/chart-icon.png" />
              <a href="https://enigmatic-savannah-49823.herokuapp.com/">
                <h6
                  style={{ textAlign: 'left' }}
                  className="hd-font hd-link subtitle"
                >
                  WebSocket Stock App
                </h6>
              </a>
            </div>
          </div>
        </div>
        <div className="white">
          <div className="hd-container-grid">
            <div>
              <img className="grid-img" src="/assets/pin.png" />
              <a href="https://desolate-depths-81919.herokuapp.com/">
                <h6
                  style={{ textAlign: 'left' }}
                  className="hd-font hd-link subtitle"
                >
                  Pinterest Clone
                </h6>
              </a>
            </div>
            <div>
              <ul>
                <li className="hd-font-li left">Poor Man's Pinterest</li>
                <li className="hd-font-li left">
                  React/Redux/React-Router & React Masonry (front end)
                </li>
                <li className="hd-font-li left">
                  Express & MongoDB (back end)
                </li>
                <li className="hd-font-li left">local JWT authentication</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="silver">
          <div className="hd-container-grid">
            <div>
              <ul>
                <li className="hd-font-li center">
                  <Link to="/gol">Game of Life - React</Link>
                </li>
              </ul>
            </div>
            <div>
              <img className="grid-img" src="/assets/Tic_Tac_Toe.png" />
              <a>
                <h6
                  style={{ textAlign: 'left' }}
                  className="hd-font hd-link subtitle"
                >
                  React JS Games
                </h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
