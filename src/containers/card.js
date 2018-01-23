import React, { Component } from 'react';
import CardOptions from '../components/card-options';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cocProps = { // coc -> card options componenet
      taskId: this.props.taskId,
      userId: this.props.userId,
      switchUsers: this.props.switchUsers
    };

    return (
      <div
        draggable="true"
        onDragStart={this.props.onDragStart}
        className="card">
        <CardOptions { ...cocProps }/>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Card;
