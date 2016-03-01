import React, { Component } from 'react';

export default class Photo extends Component {
  render() {
    return (
      <div>
        <li><img src={this.props.url} /></li>
      </div>
    );
  }
}