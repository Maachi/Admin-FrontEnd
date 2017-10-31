import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateProcess from './pages/CreateProcess';
import './static/sass/main.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/:firm/dashboard" component={Dashboard}/>
    <Route path="/:firm/create/process" component={CreateProcess}/>
  </Router>
), document.getElementById('gestion-app'));
