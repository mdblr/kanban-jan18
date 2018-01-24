import React, { Component } from 'react';
import CardOptions from '../components/card-options';

const Card = (props) => {

  const attributes = {
    key: props.taskId,
    className: 'card'
  }

  return (
    <div { ...attributes }>
      <CardOptions { ...props }/>
      <p>{props.task}</p>
    </div>
  );
}

export default Card;
