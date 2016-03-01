import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div className='story profile'>
        <h2>{this.props.name}</h2>
        <h2><i>{this.props.title}</i></h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}