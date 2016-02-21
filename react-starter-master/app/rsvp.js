import React, { Component } from 'react';
import {render} from 'react-dom';

export default class Ceremony extends Component {

  render() {
    return (
      <div className='main'>
        <h1 className='main-title'>RSVP</h1>
        <small>Code: loveatfirstonsight</small>
        <div className='rsvp'>
          <iframe src="http://CelesteandMatt.rsvpify.com/" scrolling="yes" frameBorder="0"></iframe>
        </div>
      </div>
    );
  }
}