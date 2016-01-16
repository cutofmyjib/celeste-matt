import React, { Component } from 'react';
import {render} from 'react-dom';

export default class Accomodations extends Component {
  render() {
    return (
      <div className='main'>
        <h1 className='main-title'>HOTEL ACCOMODATIONS</h1>
        <p className='p-blurb'>Make an online reservation by clicking on the hotel name below.</p>
        <h2><a className='main-a' href="https://www.starwoodmeeting.com/Book/lozanobrunellwedding" target="_blank">Aloft Milwaukee Downtown</a></h2>
        <p>1230 N Old World 3rd St,</p>
        <p>Milwaukee, Wisconsin 53212</p>
        <p><a className='main-a-tel' href="tel:+1-414-290-0347">(414) 290-0347</a></p>
        <div className='break-fig8'></div>
        <h2><a className='main-a' href=" https://reservations.brewhousesuites.com/IRMNet/(S(thhrluzicjtczhsnl4barohn))/login.aspx" target="_blank">THE BREWHOUSE INN &amp; SUITES</a></h2>
        <p className='p-blurb'>Group id: LOZBRU </p>
        <p className='p-blurb'><small>You will be able to add on discounted valet parking of $23 at the time of booking instead of $26 at the time of check in.</small></p>
        <p>1215 N. 10th Street,</p>
        <p>Milwaukee, WI 53205</p>
        <div className='break-heart'></div>
      </div>
    );
  }
}