import React from 'react';
import Card from './card';

function renderCard(task, moreProps) {
  const cardProps = { ...task, ...moreProps };
  return <Card key={task.taskId} { ...cardProps }/>;
}

const CardHolder = (props) => {
  const { tasks, ...rest } = props;
  const cardComponents = tasks.map(task => renderCard(task, rest));
  return (
    <article className="card-holder">{cardComponents}</article>
  );
}

export default CardHolder;
