import React from 'react';

const Skills = props => {
  return (
    <div className="hd-container">
      <h3 style={{ marginTop: '80px' }} className="title hd-font">
        SKILLS
      </h3>
      <a
        style={{ margin: '10px 0 10px 0' }}
        href="https://drive.google.com/open?id=1JNUYjb1ub83pVfC-KA-wOC_d8uDYA4JX"
      >
        <h4 style={{ color: 'darkgray' }}>My Resume</h4>
      </a>
      <p>
        Well, lets start with the obvious I LOVE to code, code and code. I've
        especially come to love working with JavaScript both on the client side
        and Server.
      </p>
      <div>
        <h4 className="subtitle-left">Back End Skills</h4>
        <ul>
          <li>
            <h5>Node JS</h5>
          </li>
          <li>
            <h5>Express JS</h5>
          </li>
          <li>
            <h5>MongoDB & Mongoose</h5>
          </li>
          <li>
            <h5>Server Side Authentication with Passport JS & OAuth</h5>
          </li>
          <li>
            <h5>Real Time chat/messaging/streaming with SocketIO JS</h5>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="subtitle-left">Front End</h4>
        <ul>
          <li>
            <h5>React JS & React Router</h5>
          </li>
          <li>
            <h5>Redux State Management</h5>
          </li>
          <li>
            <h5>Build Tooling with Webpack & Create-React-App</h5>
          </li>
          <li>
            <h5>HTML & HTML5</h5>
          </li>
          <li>
            <h5>CSS & CSS3</h5>
          </li>
          <li>
            <h5>Bootstrap 4</h5>
          </li>
          <li>
            <h5>Materialize CSS</h5>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="subtitle-left">I'm currently learning or will learn:</h4>
        <ul>
          <li>
            <h5>Python</h5>
          </li>
          <li>
            <h5>Machine learning</h5>
          </li>
          <li>
            <h5>Mastering React Native</h5>
          </li>
          <li>
            <h5>Continuous Integration</h5>
          </li>
          <li>
            <h5>Docker</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
