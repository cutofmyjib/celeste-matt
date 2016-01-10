import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom';

export default class Photos extends Component {
  render() {
    return (
      <div>
        <div className='main'>
          <ul className='gallery'>
            <li><img src='temp/1.jpeg' /></li>
            <li><img src='temp/2.jpeg' /></li>
            <li><img src='temp/3.jpeg' /></li>
            <li><img src='temp/4.jpeg' /></li>
            <li><img src='temp/5.jpeg' /></li>
            <li><img src='temp/6.jpeg' /></li>
          </ul>
        </div>
        <nav className='gallery-nav'>
          <Link to="#" className='gallery-backward'></Link>
          <Link to="#" className='gallery-forward'></Link>
        </nav>
      </div>
    );
  }
}