import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavMenu from './NavMenu';
import Main from './Main';
import Portfolio from './Portfolio';
import Skills from './Skills';
import GOL from './gol/Main';
import Crypto from './crypto/Crypto';
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
      <NavMenu />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Route path="/gol" component={GOL} />
        <Route path="/crypto" component={Crypto} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
