import React, {Component} from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'
import {render} from 'react-dom';
import Ceremony from './ceremony.js';
import Home from './home.js';
import Wrapper from './wrapper.js'
import Registry from './registry.js'
import Accomodations from './accomodations.js'
import Photos from './photos.js'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Wrapper}>
          <Route path="/" component={Home} />
          <Route path="/details" component={Ceremony} />
          <Route path="/accomodations" component={Accomodations} />
          <Route path="/registry" component={Registry} />
          <Route path="/photos" component={Photos} />
        </Route>
      </Router>
    )
  }
}


render(<App />, document.getElementById('wrapper'));