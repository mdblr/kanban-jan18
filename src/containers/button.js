import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.getInput = this.getInput.bind(this);
  }

  getInput() {
    const { userId } = this.props;
    const taskText = prompt('Please Enter A Task');

    if (!taskText.trim()) {
      alert('Cannot create card without a description.');
      return;
    }

    this.props.liftNewUserTask(this.props.userId, taskText);
  }

  render() {
    return (
      <div className='new-card'>
        <button onClick={this.getInput}>Click Me!</button>
      </div>
    );
  }
}

export default Button;
