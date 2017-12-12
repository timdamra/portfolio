import React from 'react';

const Footer = props => {
  return (
    <div id="footer">
      <div id="footer-layout" className="row text-center">
        <div className="col">
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
        </div>
        <div id="ideas" className="col">
          <div>
            <h3 id="hd-font-footer">BRINGING IDEAS TO LIFE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
