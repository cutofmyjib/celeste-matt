import React, { Component } from 'react';
import Story from './story';

import Rebase from 're-base'
var base = Rebase.createClass('https://celeste-matt.firebaseio.com');

export default class Ourstory extends Component {
  constructor(props) {
    super(props);
    this.state = { stories: [] };
  }

  componentDidMount(){
    this.storyRef = base.bindToState('ourstory', {
      context: this,
      state: 'stories',
      asArray: true
    });

  }

  componentWillUnmount(){
    base.removeBinding(this.storyRef);
  }

  render() {
    var stories = this.state.stories.map(function(details) {
        return <Story {...details} />
    })

    return (
      <div className='main'>
        <h1 className='main-title'>OUR STORY</h1>
            {stories}
        <div className='break-heartknot'></div>
      </div>
    );
  }
}
