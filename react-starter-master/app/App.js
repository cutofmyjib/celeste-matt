import React, {Component} from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'
import {render} from 'react-dom';
import Ceremony from './ceremony.js';
import Home from './home.js';
import Wrapper from './wrapper.js'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Wrapper}>
          <Route path="/" component={Home} />
          <Route path="/details" component={Ceremony} />
        </Route>
      </Router>
    )
  }
}


render(<App />, document.getElementById('wrapper'));