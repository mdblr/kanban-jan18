import React, { Component } from 'react';

class CardOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.liftTaskToDiffUser = this.liftTaskToDiffUser.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({hidden: !prevState.hidden}));
  }

  toggleClass() {
    return this.state.hidden ? 'hide' : 'show';
  }

  liftTaskToDiffUser() {
    const { userId, taskId, toggleReOrgModal } = this.props;
    toggleReOrgModal(userId, taskId);
  }

  render() {
    return (
      <section>
        <header className="card-header">
          <div>Title</div>
          <button onClick={this.toggleMenu}>Options</button>
        </header>
        <ul className={this.toggleClass()}>
          <li onClick={this.liftTaskToDiffUser}>Move</li>
        </ul>
      </section>
    );
  }
}

export default CardOptions;
