import React from 'react';

const Intro = props => {
  return (
    <div>
      <h3 className="title hd-font">HATIM DAMRA</h3>
      <h5 className="subtitle hd-font">Full Stack Web Developer</h5>
      <div className="grid-wrapper-info">
        <div>
          <p className="hd-font-p">
            Welcome to my site! I'm Hatim Damra, a web developer from Chicago,
            IL. Please have look at the projects and apps I've worked on in the
            "Portfolio" section. Email me at hdamra@gmail.com for any inquiries,
            thanks again!
          </p>
        </div>
        <div>
          <img src="/assets/mypic.png" alt="My Pic" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
