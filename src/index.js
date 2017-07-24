import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './static/sass/main.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Router>
), document.getElementById('gestion-app'));
