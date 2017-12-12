import React from 'react';

const Intro = props => {
  return (
    <div id="hd-intro" className="text-center">
      <div>
        <h1 className="hd-text-shadow">HATIM DAMRA</h1>
        <h4>
          <u>Full Stack Web Developer</u>
        </h4>
      </div>
      <div id="hd-para" className="row">
        <div className="col">
          <p>
            Welcome to my site! I'm Hatim Damra, a web developer from Chicago,
            IL. Please have look at the projects and apps I've worked on in the
            "Portfolio" section. Email me at hdamra@gmail.com for any inquiries,
            thanks again!
          </p>
        </div>
        <div id="hd-intro-img" className="col">
          <img src="/assets/mypic.png" alt="My Pic" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
