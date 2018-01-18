import React, { Component } from 'react';

class CardOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({hidden: !prevState.hidden}));
  }

  toggleClass() {
    return this.state.hidden ? 'hide' : 'show';
  }

  render() {
    return (
      <section>
        <header className="card-header">
          <div>Title</div>
          <button onClick={this.toggleMenu}>Options</button>
        </header>
        <ul className={this.toggleClass()}>
          <li>Move</li>
        </ul>
      </section>
    );
  }
}

export default CardOptions;
