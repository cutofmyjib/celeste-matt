import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom';

export default class Home extends Component {
  render() {
    return (
      <header>
        <div className='header-rose'></div>
        <nav className='nav-menu'>
          <Link to="/">Our Wedding</Link>
          <Link to="/details">Details</Link>
          <Link to="/registry">Registry</Link>
          <Link to="/photos">Photos</Link>
        </nav>
      </header>
      )
  }
}