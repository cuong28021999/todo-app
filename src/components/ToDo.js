import React from 'react';

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleToggle(event.target.id);
  };

  return (
    <div
      id={todo.id}
      key={todo.id}
      name='todo'
      onClick={handleClick}
      className={todo.complete ? 'todo strike' : 'todo'}
    >
      {todo.task}
    </div>

  );
};

export default ToDo;
