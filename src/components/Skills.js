import React from 'react';

const Skills = props => {
  return (
    <div className="hd-container">
      <div className="text-center">
        <h2>SKILLS</h2>
        <a href="https://drive.google.com/open?id=1wvQ6G-KCreStjbI7_EUL3UEExtQnOph1">
          <h4>My Resume</h4>
        </a>
        <p>
          Well, lets start with the obvious I LOVE to code, code and code. I've
          especially come to love working with JavaScript both on the client
          side and Server.
        </p>
      </div>
      <div id="skills">
        <div>
          <h4>Back End Skills</h4>
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
          <h4>Front End</h4>
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
          <h4>I'm currently learning or will learn:</h4>
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
    </div>
  );
};

export default Skills;
