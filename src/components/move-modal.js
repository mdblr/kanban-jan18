import React, { Component } from 'react';

class MoveModal extends Component {
  constructor(props) {
    super(props);
    this.state = { nextOwnerId: this.props.curOwnerId }; // set to current column
    this.close = this.close.bind(this);
    this.submit = this.submit.bind(this);
    this.getNextOwnerId = this.getNextOwnerId.bind(this);
  }

  close() {
    this.props.toggleReOrgModal(null, null);
  }

  formatNextOwnerOptions({ users }) {
    return Object.keys(users).map(userId => {
      const attributes = {key: userId, value: userId};
      const {[userId]: {firstName}} = users;
      return (
        <option {...attributes}>{firstName}</option>
      );
    });
  }

  submit(e) {
    e.preventDefault();

    const { curOwnerId, taskId, reOrgTask } = this.props;
    const { nextOwnerId } = this.state;
    const setStatePromise = Promise.resolve(
      reOrgTask(curOwnerId, nextOwnerId, taskId));
    setStatePromise.then(() => this.close());
  }

  getNextOwnerId(e) {
    e.persist();
    this.setState(prevState => ({ nextOwnerId: e.target.value }));
  }

  render() {
    return (
      <div>
        <section onClick={this.close} className='blackout'></section>
        <section className='reOrgForm'>
          <form>
            <div>
              <label htmlFor='users'></label>
              <select id='users-list' onChange={this.getNextOwnerId} value={this.state.nextOwnerId}>
                {this.formatNextOwnerOptions(this.props)}
              </select>
            </div>
            <div>
              <button onClick={this.submit}>Submit</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default MoveModal;
