import React, { Component } from 'react';
import Column from './column';

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: ['Max', 'Jake', 'Samantha', 'Alice']
    }
  }

  renderCols(people) {
    const lastIdx = people.length - 1;
    const columns = people.map((name, idx) => {
      const useGutter = (idx < lastIdx);
      return (
          <Column
            useGutter={useGutter}
            key={name}
            colName={name}
          />
      );
    });
    return columns;
  }

  render() {
    const { people } = this.state;
    const columns = this.renderCols(people);
    return (
      <section className="board">
        {columns}
      </section>
    );
  }
}

export default Dash;
