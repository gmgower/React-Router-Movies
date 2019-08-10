import React from 'react';
import ReactDOM from 'react-dom';
// * S1 import Router from 
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
