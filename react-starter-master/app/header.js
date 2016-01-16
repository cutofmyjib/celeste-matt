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
          <ul className={"nav-menu-ul " + (this.state.open ? "show" : "") } >
            <Link to="/">Our Wedding</Link>
            <Link to="/details">Details</Link>
            <Link to="/registry">Accomodations</Link>
            <Link to="/registry">Registry</Link>
            <Link to="/photos">Photos</Link>
          </ul>
        </nav>
      </header>
      )
  }
}