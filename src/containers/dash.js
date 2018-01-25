import React, { Component } from 'react';
import Column from '../components/column';
import ReOrgModal from '../components/move-modal';

class Dash extends Component {
  constructor(props) {
    super(props);
    const users = {
      '0': {
        firstName: 'Ladybird',
        userId: '0',
        tasks: [], // see addUserTask for task structure
        taskCounter: 0
      },
      '1': {
        firstName: 'Jake',
        userId: '1',
        tasks: [],
        taskCounter: 0
      },
      '2': {
        firstName: 'Maude',
        userId: '2',
        tasks: [],
        taskCounter: 0
      },
      '3': {
        firstName: 'Harold',
        userId: '3',
        tasks: [],
        taskCounter: 0
      }
    }

    this.state = {
      ...users,
      isReOrgTask: false,
      reOrgModalProps: { curOwnerId: null, taskId: null } // values lifted from card children and sent to modal component
    };

    this.addUserTask = this.addUserTask.bind(this);
    this.reOrgTask = this.reOrgTask.bind(this);
    this.toggleReOrgModal = this.toggleReOrgModal.bind(this);
  }

  renderCols(users) {
    const columnComponents = [];
    for (let userId in users) {
      let props = {
        ...users[userId],
        addUserTask: this.addUserTask,
        reOrgTask: this.reOrgTask,
        toggleReOrgModal: this.toggleReOrgModal
      };
      columnComponents.push(<Column key={userId} { ...props } />);
    }
    return columnComponents;
  }

  addUserTask(userId, task) {
    this.setState((prevState) => {
      const user = prevState[userId.toString()];
      const { tasks, taskCounter, ...unchanged } = user;
      const newTask = { task, taskId: taskCounter };
      return {
        [userId.toString()]: {
          tasks: [ ...tasks, newTask ],
          taskCounter: taskCounter + 1, // increment for future call
          ...unchanged
        }
      }
    });
  }


  reOrgTask(curOwnerId, nextOwnerId, taskId) {
    if (curOwnerId === nextOwnerId) return;

    this.setState((prevState) => {
        const curOwner =  { ...prevState[curOwnerId] };
        const nextOwner = { ...prevState[nextOwnerId] };
        const taskItem = curOwner.tasks.find(coTask => coTask.taskId === taskId);

        curOwner.tasks = curOwner.tasks.filter(coTask => coTask.taskId !== taskId);
        taskItem.taskId = nextOwner.taskCounter;
        nextOwner.tasks.push(taskItem);
        nextOwner.taskCounter += 1;

        return { [curOwnerId]: curOwner, [nextOwnerId]: nextOwner };
    });
  }

  toggleReOrgModal(curOwnerId, taskId) {
    this.setState(prevState => ({
      isReOrgTask: !prevState.isReOrgTask,
      reOrgModalProps: { curOwnerId, taskId }
    }));
  }

  render() {
    const { isReOrgTask, reOrgModalProps, ...users } = this.state;
    const columns = this.renderCols(users);
    return (
      <div className='board'>
        <section className='columns'>{columns}</section>
        { isReOrgTask && <ReOrgModal
          {...reOrgModalProps }
          users={users}
          reOrgTask={this.reOrgTask}
          toggleReOrgModal={this.toggleReOrgModal} />
        }
      </div>
    );
  }
}

export default Dash;
