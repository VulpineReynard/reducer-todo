import React from 'react';

const Todo = ({ todo, dispatch }) => {
  console.log(todo.completed);
  
  return (
    <div 
    onClick={() => dispatch({ type: "SET_COMPLETED", payload: todo })}
    className={`todo${todo.completed ? ' completed' : ''}`}
    >
      <p>{todo.item}</p>
    </div>
  );
}

export default Todo;