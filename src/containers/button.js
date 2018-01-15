import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.getInput = this.getInput.bind(this);
  }

  getInput() {
    const input = prompt('Please Enter A Task');
    if (!input.trim()) {
      alert('Cannot create card without a description.');
      return;
    }
    this.props.addCard(input);
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
