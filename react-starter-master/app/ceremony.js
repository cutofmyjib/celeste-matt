import React, { Component } from 'react';
import {render} from 'react-dom';

export default class Ceremony extends Component {
  render() {
    return (
      <div className='main'>
        <h1 className='main-title'>DETAILS</h1>
        <div className='story details'>
            <h2>Bride <span className='h2-span'>And</span> Groom</h2>
            <p>Maria Celeste May Lozano &amp; Matthew Steven Brunell</p>
            <div className='break-fig8'></div>
            <h2>Date</h2>
            <p>Saturday, October 29, 2016</p>
            <p>1:30 pm </p>
            <div className='break-fig8'></div>
            <h2>Ceremony</h2>
            <p>Wisconsin Conservatory of Music</p>
            <p><a href="http://maps.google.com/?q=1584 N Prospect Ave, Milwaukee, WI 53202">1584 N Prospect Ave, Milwaukee, WI 53202</a></p>
            <p className='p-note'>Parking available to first 20 cars <br/> <a href="http://maps.google.com/?q=1684 N Prospect Ave, Milwaukee, WI 53202">1684 N Prospect Ave, Milwaukee, WI 53202</a></p>
            <div className='break-fig8'></div>
            <h2>Cocktail/Reception</h2>
            <p>5:30 - 6 pm</p>
            <p>Best Place at the Historic Pabst Brewery</p>
            <p><a href="http://maps.google.com/?q=901 W Juneau Ave, Milwaukee, WI 53233">901 W Juneau Ave, Milwaukee, WI 53233</a></p>
            <p className='p-note'>Street and garage parking available <br/> <a href="http://maps.google.com/?q=1213 N 9th St, Milwaukee, WI 53233">1213 N 9th St, Milwaukee, WI 53233</a></p>
            <h2 className='h2-italic'>Dinner and Dancing to follow</h2>
            <p>6:30 pm</p>
        </div>
        <div className='break-heartknot'></div>
      </div>
    );
  }
}