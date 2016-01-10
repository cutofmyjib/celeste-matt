import React, { Component } from 'react';
import {render} from 'react-dom';

export default class Ceremony extends Component {
  render() {
    return (
      <div className='main'>
        <h1 className='main-title'>DETAILS</h1>
        <h2>Bride <span className='h2-span'>And</span> Groom</h2>
        <p>Maria Celeste May Lozano & Matthew Steven Brunell</p>
        <div className='break-fig8'></div>
        <h2>Date</h2>
        <p>Saturday, October 29, 2016</p>
        <p>1:30 pm </p>
        <div className='break-fig8'></div>
        <h2>Ceremony</h2>
        <p>Wisconsin Conservatory of Music</p>
        <p>1584 N Prospect Ave, Milwaukee, WI 53202</p>
        <div className='break-fig8'></div>
        <h2>Reception</h2>
        <p>5:30 pm</p>
        <p>Best Place at the Historic Pabst Brewery</p>
        <p>901 W Juneau Ave, Milwaukee, WI 53233</p>
        <h2>Dinner</h2>
        <p>6:30 pm</p>
        <div className='break-heart'></div>
      </div>
    );
  }
}