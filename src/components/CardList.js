import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardComponent = robots.map(robot => <Card id={robot.id} key={robot.key} name={robot.name} email={robot.email} />)
  return (
    <div>
      {cardComponent}
    </div>
  );
}

export default CardList;