import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom';

export default class Photos extends Component {
  render() {
    return (
      <div>
        <li><img src={this.props.url} /></li>
      </div>
    );
  }
}