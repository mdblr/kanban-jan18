import React, { Component } from 'react';
import CardOptions from '../components/card-options';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      text: this.props.task
    };
  }

  render() {
    return (
      <div
        draggable="true"
        onDragStart={this.props.onDragStart}
        className="card">
        <CardOptions />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Card;
