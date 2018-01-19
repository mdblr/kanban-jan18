import React, { Component } from 'react';

class CardOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true, card: this.props.card };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({hidden: !prevState.hidden}));
  }

  toggleClass() {
    return this.state.hidden ? 'hide' : 'show';
  }

  toggleModal() {
    // this.props.toggleModal(this.state.card);
  }

  render() {
    return (
      <section>
        <header className="card-header">
          <div>Title</div>
          <button onClick={this.toggleMenu}>Options</button>
        </header>
        <ul className={this.toggleClass()}>
          <li onClick={this.toggleModal}>Move</li>
        </ul>
      </section>
    );
  }
}

export default CardOptions;
