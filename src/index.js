import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import './bootstrap.min.css';
import './mobile.css';

import App from './components/App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
