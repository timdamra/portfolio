import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = props => {
  return (
    <div className="hd-container text-center">
      <h2>PORTFOLIO</h2>
      <div>
        <div className="white">
          <div className="row">
            <div className="col">
              <img src="/assets/bar-chart.png" />
              <a href="https://murmuring-inlet-17021.herokuapp.com/">
                <h4>Polling App</h4>
              </a>
            </div>
            <div className="col">
              <ul>
                <li>Social media app for polling</li>
                <li>Server-Side HTML Templating with Pug</li>
                <li>Express & MongoDB on the back end</li>
                <li>Twitter OAuth2 authentication using Passport JS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="silver">
          <div className="row">
            <div className="col">
              <ul>
                <li>SocketIO App for charting stock performance</li>
                <li>Uses Socket.io library front & back end</li>
                <li>Express API</li>
              </ul>
            </div>
            <div className="col">
              <img src="/assets/chart-icon.png" />
              <a href="https://enigmatic-savannah-49823.herokuapp.com/">
                <h4>WebSocket Stock App</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="white">
          <div className="row">
            <div className="col">
              <img src="/assets/pin.png" />
              <a href="https://desolate-depths-81919.herokuapp.com/">
                <h4>Pinterest Clone</h4>
              </a>
            </div>
            <div>
              <ul>
                <li>Poor Man's Pinterest</li>
                <li>React/Redux/React-Router & React Masonry (front end)</li>
                <li>Express & MongoDB (back end)</li>
                <li>local JWT authentication</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="silver">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <Link to="/gol">
                    <h5>Game of Life - React</h5>
                  </Link>
                </li>
              </ul>
            </div>
            <div id="tic-tac-toe">
              <img src="/assets/Tic_Tac_Toe.png" />
              <a>
                <h4>React JS Games</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
