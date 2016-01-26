import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom';
import Photo from './photo';

var Rebase = require('re-base');
var base = Rebase.createClass('https://celeste-matt.firebaseio.com/gallery');

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    base.bindToState('photos', {
      context: this,
      state: 'photos',
      asArray: true
    });
  }

  render() {
    if (this.state.photos) {
      var photosArray = this.state.photos.map(function(data){
        console.log(data);
        return <Photo {...data} />
      })
    }
    return (
      <div>
        <div className='main'>
          <ul className='gallery'>
            {photosArray}
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