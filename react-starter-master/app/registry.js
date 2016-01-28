import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='main'>
        <h1 className='main-title'>REGISTRY</h1>
        <p className='p-blurb'>
          To our family and friends, we are so happy to announce our wedding and would love for you to attend!
          Picking a wedding gift can be a challenge, we have registered items we would love to have in our home
          to make it hassle-free. Just click on any of the store logos below and it’ll take you to our
          registry page.
        </p>
        <ul className='registry'>
          <li><a href="https://www.amazon.com/registry/wedding/27E2LNVWRO8W1" target="_blank"><img src='../style/rgstry-amazon.png' /></a></li>
          <li><a href="http://www.rei.com/GiftRegistryDetails/GR128358809" target="_blank"><img src='../style/rgstry-rei.png' /></a></li>
          <li><a href="http://www.crateandbarrel.com/gift-registry" target="_blank"><img src='../style/rgstry-crate.png' /></a></li>
          <li><a href="http://www.target.com/gift-registry/wedding-registry" target="_blank"><img src='../style/rgstry-target.png' /></a></li>
        </ul>
        <div className='break-heart'></div>
      </div>
    )
  }
}