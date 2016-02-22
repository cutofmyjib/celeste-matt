import React, { Component } from 'react';
import {render} from 'react-dom';

export default class Ceremony extends Component {

  render() {
    return (
      <div className='main'>
        <h1 className='main-title'>RSVP</h1>
        <div className='rsvp'>
          <iframe src="https://celesteandmatt.app.rsvpify.com/" frameBorder="0" scrolling="yes"></iframe>
        </div>
      </div>
    );
  }
}