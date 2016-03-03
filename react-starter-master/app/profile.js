import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div className='story profile'>
        <div className='profile-pic'><img src='http://thecatapi.com/api/images/get?format=src&type=jpg' /></div>
        <div className='profile-content'>
          <h2>{this.props.name}</h2>
          <h2><i>{this.props.title}</i></h2>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}