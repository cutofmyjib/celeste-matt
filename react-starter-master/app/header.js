import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom';

export default class Header extends Component {
  handleClick() {
    this.setState({open: !this.state.open});
  }

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = { open: false }
  }

  render() {
    return (
      <header>
        <div className='header-rose'></div>
        <nav onClick={this.handleClick} className='nav-menu'>
          <span className={"nav-menu-container " + (this.state.open ? "show" : "") } >
            <span className="nesting-nav-wrapper"><Link to="/">Our Wedding</Link>
              <span className="sub-nav">
                <Link to="/ourstory">Our Story</Link>
              </span>
            </span>
            <Link to="/rsvp">RSVP</Link>
            <span className="nesting-nav-wrapper"><Link to="/details">Details</Link>
              <span className="sub-nav">
                <Link to="/accomodations">Accomodations</Link>
              </span>
            </span>
            <Link to="/registry">Registry</Link>
            <Link to="/photos">Photos</Link>

          </span>
        </nav>
      </header>
      )
    }
}