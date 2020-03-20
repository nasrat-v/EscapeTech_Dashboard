import React, { Component } from 'react';

export default class armBoardLed extends Component {
  render() {
    return (
      <div className="armboardled">
        { this.props.children }
      </div>
    )
  }
}
