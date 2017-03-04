import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import Routes from './routes'

// Base stylesheet
require('bootstrap/dist/css/bootstrap.css')
require('./styles/main.css')

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
