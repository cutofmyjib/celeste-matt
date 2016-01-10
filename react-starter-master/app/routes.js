import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import App from './App';
import Ceremony from './ceremony.js';
import Wrapper from './wrapper.js';

export default((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Wrapper} />
      <Route path="/details" component={Ceremony} />
    </Route>
  </Router>
  ), document.getElementById('wrapper'));