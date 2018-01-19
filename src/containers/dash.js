import React, { Component } from 'react';
import Column from './column';
import MoveModal from '../components/move-modal';

class Dash extends Component {
  constructor(props) {
    super(props);
    const users = {
      '0': {
        firstName: 'Ladybird',
        id: 0,
        tasks: [],
        taskCounter: 0
      },
      '1': {
        firstName: 'Jake',
        id: 1,
        tasks: [],
        taskCounter: 0
      },
      '2': {
        firstName: 'Maude',
        id: 2,
        tasks: [],
        taskCounter: 0
      },
      '3': {
        firstName: 'Harold',
        id: 3,
        tasks: [],
        taskCounter: 0
      }
    }
    this.state = { ...users };
    this.addUserTask = this.addUserTask.bind(this);
  }

  renderCols(users) {
    const columnComponents = [];
    for (let userId in users) {
      let props = { ...users[userId], addUserTask: this.addUserTask };
      columnComponents.push(<Column key={userId} { ...props } />);
    }
    return columnComponents;
  }

  addUserTask(userId, task) {
    this.setState((prevState) => {
      const user = prevState[userId.toString()];
      const { tasks, taskCounter, ...unchanged } = user;
      const newTask = { task, id: taskCounter };
      return {
        [userId.toString()]: {
          tasks: [ ...tasks, newTask ],
          taskCounter: taskCounter + 1,
          ...unchanged
        }
      }
    });
  }

  render() {
    const columns = this.renderCols(this.state);
    return (
      <div className='board'>
        <section className='columns'>{columns}</section>
        <MoveModal />
      </div>
    );
  }
}

export default Dash;
