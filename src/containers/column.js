import React, { Component } from 'react';
import Card from './card';
import Button from './button';


class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      person: this.props.colName,
      uniqueIdCount: 0
    }

    this.addCard = this.addCard.bind(this);
  }

  renderCard(card) {
    const { id , text } = card;
    return (
      <div key={id}>
        <Card text={text} />
      </div>
    );
  }

  addCard(input) {
    this.setState((prevState) => {
      const { cards, uniqueIdCount } = prevState;
      const newCard = {
        text: input,
        id: uniqueIdCount
      }
      return {
        cards: [ ...cards, newCard ],
        uniqueIdCount: uniqueIdCount + 1
      }
    });
  }

  render() {
    const { colName, useGutter } = this.props;
    const colHeader = <h2>{colName}</h2>;
    const cardElems = this.state.cards.map(card => this.renderCard(card));
    return (
      <section
        key={colName}
        className={(useGutter ? 'col-gutter ' : '') + 'column'}
      >
        <header className={`${colName} col-header`}>
          {colHeader}
        </header>
        <article className="card-holder">
          {cardElems}
        </article>
        <Button
          columnName={colName}
          addCard={this.addCard} />
      </section>
    );
  }
}

export default Column;
