import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/">
        <App />
  </BrowserRouter>,
  document.getElementById('root')
);