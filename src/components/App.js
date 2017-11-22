import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavTabs from './NavTabs';
import Landing from './Landing';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Footer from './Footer';

const NotFound = props => {
  return <h3 className="hd-font">404: Sorry Page Not Found</h3>;
};

const App = props => {
  return (
    <div>
      <NavTabs />
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/" component={Landing} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
