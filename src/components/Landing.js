import React from 'react';

import Intro from './Intro';
import Grid from './Grid';

const Header = props => {
  return (
    <header>
      <div id="parallax" />
    </header>
  );
};

const Landing = props => {
  return (
    <div>
      <Header />
      <div className="hd-container">
        <Intro />
        <Grid />
      </div>
    </div>
  );
};

export default Landing;
