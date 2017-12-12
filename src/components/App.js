import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Main from './Main';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Footer from './Footer';

const NotFound = () => {
  return (
    <div>
      <h2>404: Page Not Found</h2>
    </div>
  );
};

const App = props => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
