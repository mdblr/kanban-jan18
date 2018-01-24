import React, { Component } from 'react';
import CardHolder from './card-holder';
import Button from './button';

class Column extends Component {
  constructor(props) {
    super(props);
    // this.onDragEnd=this.onDragEnd.bind(this);
    // this.onDragEnter=this.onDragEnter.bind(this);
    // this.onDragExit=this.onDragExit.bind(this);
    // this.onDragLeave=this.onDragLeave.bind(this);
    // this.onDragOver=this.onDragOver.bind(this);
    // this.onDragStart=this.onDragStart.bind(this);
    // this.onDrop=this.onDrop.bind(this);
    this.liftNewUserTask = this.liftNewUserTask.bind(this);
  }

  liftNewUserTask(userId, task) {
    this.props.addUserTask(userId, task);
  }

  onDrag() {
    console.log('onDrag');
    // console.log(this.state.firstName);
  }
  onDragEnd() {
    console.log('onDragEnd');
    // console.log(this.state.firstName);
  }

  onDragEnter(e) {
    e.preventDefault();
    console.log('onDragEnter');
    // console.log(this.state.firstName);
  }

  onDragExit(e) {
    e.preventDefault();
    console.log('onDragExit');
    // console.log(this.state.firstName);
  }

  onDragLeave(e) {
    e.preventDefault();
    console.log('onDragLeave');
    // console.log(this.state.firstName);
  }

  onDragOver(e) {
    e.preventDefault();
    console.log('onDragOver');
    // console.log(this.state.firstName);
  }
  onDragStart(e) {
    console.log('onDragStart', e);
    // console.log(this.state.firstName);
  }

  onDrop(e) {
    console.log('onDrop');
    // console.log(this.state.firstName);
  }

  render() {
    const { firstName, tasks, userId, switchUsers } = this.props;
    const cardHolderProps = { tasks, userId, switchUsers };

    return (
      <section key={userId} className='column'>
        <header className={`${firstName} col-header`}>
          <h2>{firstName}</h2>
        </header>
        <CardHolder { ...cardHolderProps } />
        <Button userId={userId} liftNewUserTask={this.liftNewUserTask} />
      </section>
    );
  }
}

export default Column;
