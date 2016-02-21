import React, { Component } from 'react';
import {render} from 'react-dom';

export default class Ceremony extends Component {

  render() {
    return (
      <div className='main'>
        <h1 className='main-title'>RSVP</h1>
        <small>Please enter code: loveatfirstonsight</small>
        <div className='rsvp'>
          <iframe src="http://CelesteandMatt.rsvpify.com/" scrolling="yes"></iframe>
        </div>
      </div>
    );
  }
}