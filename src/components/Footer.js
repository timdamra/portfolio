import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <footer className="grid-wrapper-footer">
          <div>
            <i
              className="footer-item fa fa-facebook fa-3x"
              aria-hidden="true"
            />
            <i
              className="footer-item fa fa-linkedin-square fa-3x"
              aria-hidden="true"
            />
            <i className="footer-item fa fa-github fa-3x" aria-hidden="true" />
            <i
              className="footer-item fa fa-free-code-camp fa-3x"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 className="hd-font">BRINGING IDEAS TO LIFE</h3>
          </div>
        </footer>
      </div>
    );
  }
}
