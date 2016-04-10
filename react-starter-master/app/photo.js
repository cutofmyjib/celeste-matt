import React, { Component } from 'react';
import Modal from 'react-modal';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <div>
          <li onClick={ this.openModal.bind(this) } ><img src={this.props.url} /></li>
        </div>
        <Modal isOpen={ this.state.modalIsOpen } onRequestClose={ this.closeModal.bind(this) }>
          <div><img className='img-large' src={this.props.url} /></div>
        </Modal>
      </div>
    );
  }
}